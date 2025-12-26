
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AILabView: React.FC = () => {
  const navigate = useNavigate();

  const labTools = [
    { id: 'studio', title: 'Creative Studio', icon: 'image_edit_auto', color: 'text-primary', bg: 'bg-primary/10', desc: 'Gen ảnh Pro, Edit AI & Phim Veo', route: '/studio' },
    { id: 'live', title: 'Native Audio', icon: 'audio_spark', color: 'text-blue-500', bg: 'bg-blue-50', desc: 'Trò chuyện thời gian thực với Farm', route: '/live' },
    { id: 'analysis', title: 'Deep Analysis', icon: 'network_intelligence', color: 'text-purple-500', bg: 'bg-purple-50', desc: 'Thinking Mode & Grounding Search', route: '/analysis' },
    { id: 'scan', title: 'Vision Understanding', icon: 'document_scanner', color: 'text-red-500', bg: 'bg-red-50', desc: 'Phân tích video & ảnh chuyên sâu', route: '/scan' },
  ];

  return (
    <div className="flex flex-col flex-1 bg-slate-950 text-white min-h-screen font-display">
      <header className="p-6 pt-12 flex items-center justify-between">
        <button onClick={() => navigate('/')} className="size-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <div className="text-center">
          <h1 className="text-2xl font-black tracking-tighter uppercase italic">GOFAM <span className="text-primary">LAB</span></h1>
          <p className="text-[10px] text-white/40 uppercase tracking-[0.3em]">Experimental Hub</p>
        </div>
        <div className="size-12"></div>
      </header>

      <main className="p-6 space-y-6 flex-1 overflow-y-auto hide-scrollbar">
        <div className="bg-gradient-to-br from-white/10 to-transparent p-8 rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden group">
          <div className="absolute -bottom-10 -right-10 size-40 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-all duration-1000"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-black tracking-tighter leading-none mb-3">Sức mạnh tối thượng từ <span className="text-primary drop-shadow-glow">Gemini 2.5 & 3</span></h2>
            <p className="text-xs text-white/60 leading-relaxed font-medium">Khám phá các mô hình AI mạnh nhất thế giới được tinh chỉnh cho nông nghiệp hiện đại.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {labTools.map(tool => (
            <button 
              key={tool.id} 
              onClick={() => navigate(tool.route)}
              className="flex items-center gap-6 p-6 bg-white/5 rounded-[2.5rem] border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all group relative overflow-hidden active:scale-95"
            >
              <div className={`size-16 rounded-[1.5rem] ${tool.bg} ${tool.color} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                <span className="material-symbols-outlined text-[36px] icon-fill">{tool.icon}</span>
              </div>
              <div className="text-left min-w-0">
                <h3 className="text-lg font-black tracking-tight group-hover:text-primary transition-colors">{tool.title}</h3>
                <p className="text-xs text-white/40 truncate">{tool.desc}</p>
              </div>
              <span className="material-symbols-outlined ml-auto text-white/20 group-hover:text-white transition-colors">chevron_right</span>
            </button>
          ))}
        </div>
      </main>

      <div className="p-6 pb-12">
        <div className="p-6 bg-primary/10 rounded-[2rem] border border-primary/20 flex items-start gap-4">
          <span className="material-symbols-outlined text-primary icon-fill">bolt</span>
          <p className="text-[10px] text-primary font-black uppercase tracking-widest leading-relaxed">Tính năng Lab đang trong giai đoạn Beta. Một số tác vụ có thể tiêu tốn nhiều Token hơn thông thường.</p>
        </div>
      </div>
    </div>
  );
};

export default AILabView;
