
import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { diagnoseCropHealth } from '../services/aiService';

const AIScanView: React.FC = () => {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);

  useEffect(() => {
    async function startCamera() {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'environment', width: { ideal: 1280 }, height: { ideal: 720 } },
          audio: false
        });
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
          setStream(mediaStream);
        }
      } catch (err) {
        console.error("Error accessing camera:", err);
        alert("Không thể truy cập camera. Vui lòng cấp quyền.");
      }
    }

    startCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const handleCapture = async () => {
    if (!videoRef.current || !canvasRef.current || isAnalyzing) return;

    setIsAnalyzing(true);
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    if (context) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      
      const base64Image = canvas.toDataURL('image/jpeg', 0.8);
      const pureBase64 = base64Image.split(',')[1];

      try {
        const result = await diagnoseCropHealth(pureBase64, 'image/jpeg');
        if (result) {
          // Chuyển sang trang kết quả với dữ liệu thực tế
          navigate('/diagnosis/result', { state: { result, image: base64Image } });
        } else {
          alert("AI không thể phân tích hình ảnh này. Hãy thử lại.");
          setIsAnalyzing(false);
        }
      } catch (err) {
        console.error("Diagnosis failed:", err);
        setIsAnalyzing(false);
      }
    }
  };

  return (
    <div className="relative h-screen w-full flex flex-col bg-black font-lexend overflow-hidden select-none">
      {/* Hidden Canvas for capture */}
      <canvas ref={canvasRef} className="hidden" />

      {/* REAL CAMERA VIEWPORT */}
      <div className="absolute inset-0 z-0 bg-slate-900">
        <video 
          ref={videoRef} 
          autoPlay 
          playsInline 
          muted 
          className="w-full h-full object-cover"
        />
        
        {/* Rule of Thirds Grid */}
        <div className="absolute inset-0 z-10 pointer-events-none grid grid-cols-3 grid-rows-3 opacity-20">
          <div className="border-r border-b border-white"></div>
          <div className="border-r border-b border-white"></div>
          <div className="border-b border-white"></div>
          <div className="border-r border-b border-white"></div>
          <div className="border-r border-b border-white"></div>
          <div className="border-b border-white"></div>
          <div className="border-r border-white"></div>
          <div className="border-r border-white"></div>
          <div></div>
        </div>
      </div>

      {/* TOP OVERLAY */}
      <div className="relative z-20 flex flex-col w-full pt-12 pb-2 bg-gradient-to-b from-black/60 to-transparent">
        <div className="flex items-center justify-between px-4 mb-4">
          <button 
            onClick={() => navigate(-1)}
            className="flex size-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-colors border border-white/20 shadow-sm"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full border border-white/20 shadow-sm">
              <span className="text-white text-xs font-black tracking-widest uppercase">GOFAM LENS PRO</span>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
            </div>
          </div>
          <button className="flex size-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-colors border border-white/20 shadow-sm">
            <span className="material-symbols-outlined text-2xl">settings</span>
          </button>
        </div>
      </div>

      {/* CENTER SCANNING AREA */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center w-full px-6">
        {/* Target Frame */}
        <div className={`relative w-72 h-72 border border-white/40 rounded-[2.5rem] overflow-hidden backdrop-blur-[1px] shadow-sm transition-all duration-500 ${isAnalyzing ? 'scale-110 border-primary' : ''}`}>
          {/* Corner Decorations */}
          <div className={`absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 rounded-tl-xl shadow-sm transition-colors ${isAnalyzing ? 'border-primary animate-pulse' : 'border-white/60'}`}></div>
          <div className={`absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 rounded-tr-xl shadow-sm transition-colors ${isAnalyzing ? 'border-primary animate-pulse' : 'border-white/60'}`}></div>
          <div className={`absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 rounded-bl-xl shadow-sm transition-colors ${isAnalyzing ? 'border-primary animate-pulse' : 'border-white/60'}`}></div>
          <div className={`absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 rounded-br-xl shadow-sm transition-colors ${isAnalyzing ? 'border-primary animate-pulse' : 'border-white/60'}`}></div>
          
          {/* Animated Scanner Line */}
          <div className={`absolute w-full h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_15px_rgba(19,236,73,1)] scanner-line ${isAnalyzing ? 'animate-[scan_1s_infinite_linear]' : ''}`}></div>
          
          {/* AI Analyzing Overlay */}
          {isAnalyzing && (
            <div className="absolute inset-0 bg-primary/10 flex flex-col items-center justify-center animate-in fade-in duration-300">
               <div className="size-16 rounded-full border-4 border-primary border-t-transparent animate-spin mb-4"></div>
               <p className="text-primary font-black text-[10px] uppercase tracking-[0.2em] drop-shadow-md">AI Gemini đang chẩn đoán...</p>
            </div>
          )}
        </div>

        {/* STATUS HUD */}
        {!isAnalyzing && (
          <div className="mt-8 w-full max-w-xs bg-black/40 backdrop-blur-xl rounded-3xl p-4 border border-white/20 flex justify-between items-center shadow-xl">
            <div className="flex flex-col items-center gap-1 flex-1">
              <span className="material-symbols-outlined text-amber-500 text-xl icon-fill">light_mode</span>
              <span className="text-[8px] text-white/40 font-black uppercase tracking-widest">Ánh sáng</span>
              <span className="text-[10px] font-black text-white">Tốt</span>
            </div>
            <div className="w-[1px] h-8 bg-white/10"></div>
            <div className="flex flex-col items-center gap-1 flex-1">
              <span className="material-symbols-outlined text-primary text-xl icon-fill">fit_screen</span>
              <span className="text-[8px] text-white/40 font-black uppercase tracking-widest">Khoảng cách</span>
              <span className="text-[10px] font-black text-white">15cm</span>
            </div>
            <div className="w-[1px] h-8 bg-white/10"></div>
            <div className="flex flex-col items-center gap-1 flex-1">
              <span className="material-symbols-outlined text-blue-400 text-xl icon-fill">psychology</span>
              <span className="text-[8px] text-white/40 font-black uppercase tracking-widest">Độ tin cậy</span>
              <span className="text-[10px] font-black text-white">98%</span>
            </div>
          </div>
        )}
      </div>

      {/* BOTTOM OVERLAY */}
      <div className="relative z-20 pb-12 pt-4 bg-gradient-to-t from-black/80 to-transparent flex flex-col items-center">
        {/* Scrollable Categories */}
        <div className="flex justify-center gap-8 mb-8 overflow-hidden text-[11px] font-black uppercase tracking-[0.2em]">
          <button className="text-white/40 hover:text-white transition-colors">VẬT NUÔI</button>
          <button className="text-primary drop-shadow-sm border-b-2 border-primary pb-1">LÁ CÂY (AI)</button>
          <button className="text-white/40 hover:text-white transition-colors">ĐẤT ĐAI</button>
        </div>

        {/* SHUTTER AREA */}
        <div className="flex items-center justify-between w-full px-12">
          {/* Gallery Preview */}
          <button className="flex size-14 items-center justify-center rounded-2xl bg-white/10 border border-white/20 overflow-hidden transition-all active:scale-90 group shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1597389880944-214873954a48?q=80&w=100&auto=format&fit=crop" 
              alt="Last shot" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-60"
            />
          </button>

          {/* Shutter Button */}
          <button 
            onClick={handleCapture}
            disabled={isAnalyzing}
            className={`group relative flex items-center justify-center size-24 rounded-full border-[6px] transition-all active:scale-90 ${isAnalyzing ? 'border-slate-800' : 'border-white/30'}`}
          >
            <div className={`size-16 rounded-full border shadow-xl flex items-center justify-center transition-colors ${isAnalyzing ? 'bg-slate-700 border-slate-600' : 'bg-white border-gray-100 group-hover:bg-gray-50'}`}>
               <div className={`size-14 rounded-full border-2 transition-all ${isAnalyzing ? 'border-primary/10 bg-primary/5 animate-pulse' : 'border-primary/20 bg-primary/5'}`}></div>
            </div>
          </button>

          {/* Camera Switch */}
          <button className="flex size-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20 transition-all active:rotate-180 duration-500 shadow-lg">
            <span className="material-symbols-outlined text-[28px]">cameraswitch</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIScanView;
