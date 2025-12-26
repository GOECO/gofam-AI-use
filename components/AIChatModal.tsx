
import React, { useState, useEffect, useRef } from 'react';
import { getFarmAdvice } from '../services/aiService';

interface Message {
  role: 'user' | 'ai';
  text: string;
  time: string;
}

interface AIChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AIChatModal: React.FC<AIChatModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', text: 'Chào Nam! Tôi đã kiểm tra cảm biến lô A3, độ ẩm đang giảm. Bạn muốn tôi hướng dẫn lịch tưới hay chẩn đoán qua ảnh?', time: 'Vừa xong' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMsg = input;
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg, time: now }]);
    setIsLoading(true);

    const aiRes = await getFarmAdvice(userMsg);
    setMessages(prev => [...prev, { role: 'ai', text: aiRes || "", time: now }]);
    setIsLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-md flex flex-col animate-in fade-in duration-300">
      <div className="mt-auto bg-white rounded-t-[3rem] h-[90vh] flex flex-col shadow-6xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-7 border-b border-gray-100 bg-white/50 backdrop-blur-md sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="size-14 rounded-3xl bg-primary/10 flex items-center justify-center text-primary-dark shadow-inner border border-primary/20">
                <span className="material-symbols-outlined text-[32px] icon-fill">smart_toy</span>
              </div>
              <div className="absolute -bottom-1 -right-1 size-4 rounded-full bg-green-500 border-[3px] border-white shadow-sm"></div>
            </div>
            <div>
              <h3 className="font-black text-slate-900 text-lg leading-tight tracking-tight">GOFAM AI Expert</h3>
              <div className="flex items-center gap-1.5">
                <span className="size-2 bg-green-500 rounded-full animate-pulse"></span>
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Đang phản hồi trực tiếp</p>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="size-12 rounded-2xl bg-gray-50 flex items-center justify-center text-slate-400 hover:bg-gray-100 hover:text-slate-900 transition-all active:scale-90 border border-gray-100">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Chat Content */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-8 bg-gray-50/30 hide-scrollbar scroll-smooth">
          <div className="text-center py-4">
             <span className="px-4 py-1.5 bg-gray-100 rounded-full text-[10px] font-black text-slate-400 uppercase tracking-widest">Hôm nay</span>
          </div>
          
          {messages.map((m, i) => (
            <div key={i} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'} group`}>
              <div className={`flex items-end gap-2 max-w-[85%]`}>
                {m.role === 'ai' && (
                  <div className="size-8 rounded-xl bg-primary/20 shrink-0 mb-1 flex items-center justify-center text-primary-dark text-[18px]">
                    <span className="material-symbols-outlined icon-fill" style={{fontSize: '18px'}}>smart_toy</span>
                  </div>
                )}
                <div className={`p-5 rounded-[2rem] text-[14px] font-bold leading-relaxed shadow-soft border ${
                  m.role === 'user' 
                    ? 'bg-primary text-slate-900 rounded-br-none border-primary-dark/10' 
                    : 'bg-white text-slate-800 rounded-bl-none border-gray-100'
                }`}>
                  {m.text}
                </div>
              </div>
              <span className="text-[9px] font-black text-slate-300 mt-2 mx-12 uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">{m.time}</span>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex flex-col items-start animate-in fade-in duration-300">
              <div className="flex items-center gap-2">
                <div className="size-8 rounded-xl bg-primary/20 flex items-center justify-center text-primary-dark">
                  <span className="material-symbols-outlined animate-pulse" style={{fontSize: '18px'}}>cloud_sync</span>
                </div>
                <div className="bg-white p-4 rounded-[1.5rem] rounded-bl-none shadow-soft border border-gray-100 flex gap-1.5 items-center">
                  <span className="size-1.5 bg-primary rounded-full animate-bounce"></span>
                  <span className="size-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="size-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input Footer */}
        <div className="p-6 pb-12 bg-white border-t border-gray-100">
          <div className="flex gap-3 p-2.5 bg-gray-50 rounded-[2.5rem] border border-gray-200/60 shadow-inner focus-within:bg-white focus-within:border-primary/40 focus-within:shadow-glow transition-all duration-300 group">
            <button className="size-12 flex items-center justify-center text-slate-400 hover:text-primary-dark transition-colors">
              <span className="material-symbols-outlined text-[26px]">add_circle</span>
            </button>
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Hỏi AI về lô đất, cây trồng..."
              className="flex-1 bg-transparent border-none focus:ring-0 text-sm font-bold text-slate-800 placeholder:text-slate-300"
            />
            <button 
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className={`size-12 rounded-[1.5rem] flex items-center justify-center transition-all ${
                input.trim() && !isLoading 
                ? 'bg-primary text-slate-900 shadow-glow active:scale-90' 
                : 'bg-gray-200 text-gray-400 opacity-50'
              }`}
            >
              <span className="material-symbols-outlined text-[24px] icon-fill">send</span>
            </button>
          </div>
          <div className="mt-4 flex gap-2 overflow-x-auto hide-scrollbar">
            {['Chẩn đoán lá vàng', 'Dự báo mưa lô A3', 'Lịch tưới tối ưu'].map(suggest => (
              <button 
                key={suggest}
                onClick={() => setInput(suggest)}
                className="shrink-0 px-4 py-2 rounded-full border border-gray-100 text-[10px] font-black text-slate-400 uppercase tracking-widest hover:border-primary/40 hover:text-primary-dark transition-all bg-white"
              >
                {suggest}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChatModal;
