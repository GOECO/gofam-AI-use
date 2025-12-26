
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleGenAI, LiveServerMessage, Modality } from '@google/genai';

const LiveConversation: React.FC = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const [transcript, setTranscript] = useState('');
  
  const sessionRef = useRef<any>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const sourceNodesRef = useRef<Set<AudioBufferSourceNode>>(new Set());
  let nextStartTime = 0;

  // Giải mã Base64 sang Uint8Array (PCM Raw)
  const decodeBase64 = (base64: string) => {
    const binaryString = atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) bytes[i] = binaryString.charCodeAt(i);
    return bytes;
  };

  const startSession = async () => {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    
    // Khởi tạo Audio Context cho input và output
    audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
    const inputCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });

    const sessionPromise = ai.live.connect({
      model: 'gemini-2.5-flash-native-audio-preview-09-2025',
      callbacks: {
        onopen: () => {
          setIsActive(true);
          const source = inputCtx.createMediaStreamSource(stream);
          const scriptProcessor = inputCtx.createScriptProcessor(4096, 1, 1);
          
          scriptProcessor.onaudioprocess = (e) => {
            const inputData = e.inputBuffer.getChannelData(0);
            const l = inputData.length;
            const int16 = new Int16Array(l);
            for (let i = 0; i < l; i++) int16[i] = inputData[i] * 32768;
            
            // Encode sang Base64 cho Live API
            let binary = '';
            const bytes = new Uint8Array(int16.buffer);
            for (let i = 0; i < bytes.byteLength; i++) binary += String.fromCharCode(bytes[i]);
            const base64 = btoa(binary);

            sessionPromise.then(s => s.sendRealtimeInput({ 
              media: { data: base64, mimeType: 'audio/pcm;rate=16000' } 
            }));
          };
          
          source.connect(scriptProcessor);
          scriptProcessor.connect(inputCtx.destination);
        },
        onmessage: async (message: LiveServerMessage) => {
          // Xử lý âm thanh phản hồi
          const audioData = message.serverContent?.modelTurn?.parts[0]?.inlineData?.data;
          if (audioData) {
            const ctx = audioContextRef.current!;
            nextStartTime = Math.max(nextStartTime, ctx.currentTime);
            
            const rawBytes = decodeBase64(audioData);
            const dataInt16 = new Int16Array(rawBytes.buffer);
            const buffer = ctx.createBuffer(1, dataInt16.length, 24000);
            const channel = buffer.getChannelData(0);
            for (let i = 0; i < dataInt16.length; i++) channel[i] = dataInt16[i] / 32768.0;

            const source = ctx.createBufferSource();
            source.buffer = buffer;
            source.connect(ctx.destination);
            
            source.addEventListener('ended', () => sourceNodesRef.current.delete(source));
            source.start(nextStartTime);
            nextStartTime += buffer.duration;
            sourceNodesRef.current.add(source);
          }

          // Xử lý ngắt lời (Interrupted)
          if (message.serverContent?.interrupted) {
            sourceNodesRef.current.forEach(node => {
              try { node.stop(); } catch(e) {}
            });
            sourceNodesRef.current.clear();
            nextStartTime = 0;
          }

          // Cập nhật phụ đề (Transcription)
          if (message.serverContent?.outputTranscription) {
            setTranscript(prev => prev + ' ' + message.serverContent?.outputTranscription?.text);
          }
        },
        onerror: (e) => {
          console.error("Live Error", e);
          setIsActive(false);
        },
        onclose: () => setIsActive(false)
      },
      config: {
        responseModalities: [Modality.AUDIO],
        outputAudioTranscription: {},
        speechConfig: {
          voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Zephyr' } }
        },
        systemInstruction: 'Bạn là chuyên gia tư vấn nông nghiệp GOFAM trực tuyến. Trả lời nhiệt tình, ngắn gọn, súc tích qua giọng nói.'
      }
    });
    sessionRef.current = await sessionPromise;
  };

  useEffect(() => {
    return () => {
      sessionRef.current?.close();
      audioContextRef.current?.close();
    };
  }, []);

  return (
    <div className="flex flex-col flex-1 bg-slate-950 h-screen text-white font-display overflow-hidden relative">
      {/* Visualizer Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(19,236,73,0.15),transparent_70%)] opacity-50"></div>

      <header className="p-6 flex items-center justify-between z-10 sticky top-0 bg-slate-950/50 backdrop-blur-md">
        <button onClick={() => navigate('/lab')} className="size-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all">
          <span className="material-symbols-outlined">close</span>
        </button>
        <div className="flex items-center gap-2">
          <div className={`size-2 rounded-full ${isActive ? 'bg-primary animate-pulse shadow-glow' : 'bg-slate-700'}`}></div>
          <span className="text-white/60 font-black uppercase tracking-widest text-[10px]">
            {isActive ? 'Native Audio Live' : 'Kết nối Live API'}
          </span>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-10 relative z-10">
        <div className={`relative size-72 mb-12 flex items-center justify-center transition-all duration-1000 ${isActive ? 'scale-110' : 'scale-90 opacity-40'}`}>
          {/* Animated Rings */}
          <div className={`absolute inset-0 rounded-full border-2 border-primary/10 ${isActive ? 'animate-[ping_4s_infinite]' : ''}`}></div>
          <div className={`absolute inset-6 rounded-full border-2 border-primary/20 ${isActive ? 'animate-[ping_3s_infinite]' : ''}`}></div>
          
          {/* Central Orbit */}
          <div className="size-56 bg-primary/5 rounded-full flex items-center justify-center border border-primary/20 shadow-glow relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"></div>
            <span className="material-symbols-outlined text-[90px] text-primary icon-fill drop-shadow-glow">audio_spark</span>
            
            {/* Visualizer Particles */}
            {isActive && (
              <div className="absolute inset-0 flex items-center justify-center gap-2">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="w-1.5 bg-primary rounded-full animate-bounce" style={{ height: `${Math.random() * 60 + 20}%`, animationDelay: `${i * 0.15}s` }}></div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="text-center space-y-4 max-w-sm">
          <h2 className="text-3xl font-black tracking-tighter leading-tight italic uppercase">
            {isActive ? 'Đang trò chuyện' : 'Farm Assistant'}
          </h2>
          <div className="min-h-[60px] px-6">
            <p className="text-sm text-white/40 leading-relaxed font-medium overflow-hidden line-clamp-3 italic">
              {transcript || (isActive ? 'Hãy đặt câu hỏi về cây trồng của bạn...' : '"Chào Gemini, báo cáo nhanh tình hình sensor lô A3 sáng nay"')}
            </p>
          </div>
        </div>

        {!isActive && (
          <button 
            onClick={startSession}
            className="mt-12 group relative px-12 py-5 bg-primary text-slate-900 rounded-full font-black uppercase tracking-[0.2em] shadow-glow hover:scale-105 active:scale-95 transition-all overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"></div>
            <span className="relative z-10">Bắt đầu kết nối</span>
          </button>
        )}
      </main>

      {isActive && (
        <div className="p-12 pb-20 flex justify-center z-20">
          <button 
            onClick={() => { sessionRef.current?.close(); setIsActive(false); }}
            className="size-20 rounded-full bg-red-500/90 text-white flex items-center justify-center shadow-2xl active:scale-90 transition-all border-4 border-white/10 hover:bg-red-600"
          >
            <span className="material-symbols-outlined text-[36px] icon-fill">call_end</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default LiveConversation;
