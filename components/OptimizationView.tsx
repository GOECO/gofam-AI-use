
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OptimizationView: React.FC = () => {
  const navigate = useNavigate();
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditTarget, setAuditTarget] = useState<string | null>(null);

  const modules = [
    { id: 'resource', title: 'Tài nguyên', icon: 'water_drop', score: 72, color: 'text-blue-500', bg: 'bg-blue-50', desc: 'Nước, Điện, Phân bón' },
    { id: 'inventory', title: 'Vật tư', icon: 'inventory_2', score: 85, color: 'text-primary-dark', bg: 'bg-green-50', desc: 'Tồn kho, Hạn dùng' },
    { id: 'workforce', title: 'Nhân sự', icon: 'groups', score: 64, color: 'text-amber-500', bg: 'bg-amber-50', desc: 'Hiệu suất, Chấm công' },
    { id: 'finance', title: 'Tài chính', icon: 'payments', score: 92, color: 'text-info', bg: 'bg-blue-50', desc: 'ROI, Chi phí vận hành' },
  ];

  const handleAudit = (id: string) => {
    setAuditTarget(id);
    setIsAuditing(true);
    // Simulate auditing process
    setTimeout(() => {
      setIsAuditing(false);
      navigate(`/optimization-result/${id}`);
    }, 3000);
  };

  if (isAuditing) {
    return (
      <div className="flex flex-col flex-1 items-center justify-center bg-slate-900 text-white h-screen p-10 text-center animate-in fade-in duration-500">
        <div className="relative size-64 mb-12">
           <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-[ping_3s_infinite]"></div>
           <div className="absolute inset-4 rounded-full border-2 border-primary/40 animate-[ping_2s_infinite]"></div>
           <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
              <span className="material-symbols-outlined text-[80px] text-primary animate-pulse icon-fill">analytics</span>
              <div className="mt-4 flex flex-col gap-1">
                 <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Đang rà soát</span>
                 <span className="text-xl font-bold tracking-tight uppercase">{modules.find(m => m.id === auditTarget)?.title}</span>
              </div>
           </div>
           {/* Radar Line */}
           <div className="absolute inset-0 rounded-full border border-primary/10">
              <div className="absolute top-1/2 left-1/2 w-1/2 h-0.5 bg-gradient-to-r from-transparent to-primary origin-left animate-[spin_2s_linear_infinite]"></div>
           </div>
        </div>
        
        <div className="space-y-4 max-w-xs">
           <p className="text-sm font-medium text-slate-400 leading-relaxed">AI đang đối soát dữ liệu từ IoT Sensors và Nhật ký canh tác để tìm điểm lãng phí...</p>
           <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-primary animate-[shimmer_2s_infinite]" style={{ width: '60%' }}></div>
           </div>
        </div>

        <style>{`
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-1 animate-in fade-in duration-500 bg-background-light min-h-screen">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md px-5 py-6 flex items-center justify-between border-b border-gray-100 shadow-soft shrink-0">
        <div className="flex items-center gap-4">
           <button onClick={() => navigate(-1)} className="size-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
              <span className="material-symbols-outlined text-slate-900">arrow_back</span>
           </button>
           <h2 className="text-2xl font-black text-slate-900 tracking-tight font-display uppercase">Trung tâm Tối ưu</h2>
        </div>
        <button className="size-11 rounded-2xl bg-primary/10 flex items-center justify-center text-primary-dark shadow-inner border border-primary/20">
          <span className="material-symbols-outlined text-[24px] icon-fill">auto_awesome</span>
        </button>
      </header>

      <div className="flex-1 overflow-y-auto hide-scrollbar p-5 space-y-8 pb-32">
        {/* OVERALL SCORE */}
        <section className="bg-slate-900 rounded-[3rem] p-8 text-white relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 size-64 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
           <div className="flex justify-between items-center relative z-10">
              <div className="flex flex-col">
                 <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2">Điểm hệ thống</span>
                 <div className="flex items-baseline gap-2">
                    <span className="text-6xl font-black tracking-tighter">78</span>
                    <span className="text-xl font-bold text-slate-400">/100</span>
                 </div>
                 <p className="text-xs font-medium text-slate-400 mt-4 leading-relaxed max-w-[180px]">Hiệu suất Farm của bạn đang ở mức <span className="text-primary font-black uppercase">Khá</span>. Có 3 điểm cần tối ưu ngay.</p>
              </div>
              <div className="relative size-32 flex items-center justify-center">
                 <svg className="size-full rotate-[-90deg]" viewBox="0 0 100 100">
                    <circle className="stroke-white/10" cx="50" cy="50" fill="none" r="42" strokeWidth="8"></circle>
                    <circle cx="50" cy="50" fill="none" r="42" stroke="#13ec49" strokeDasharray="264" strokeDashoffset="58" strokeLinecap="round" strokeWidth="8" className="drop-shadow-glow"></circle>
                 </svg>
                 <span className="absolute text-primary material-symbols-outlined text-4xl icon-fill animate-float">rocket_launch</span>
              </div>
           </div>
        </section>

        {/* AUDIT MODULES */}
        <section className="space-y-4">
           <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest px-1">Danh mục rà soát</h3>
           <div className="grid grid-cols-1 gap-4">
              {modules.map(m => (
                 <div key={m.id} className="bg-white rounded-[2.5rem] p-6 shadow-soft border border-gray-100 group hover:shadow-deep transition-all duration-500">
                    <div className="flex items-center justify-between mb-6">
                       <div className="flex items-center gap-4">
                          <div className={`size-14 rounded-2xl ${m.bg} ${m.color} flex items-center justify-center shadow-inner border border-black/5`}>
                             <span className="material-symbols-outlined text-[32px] icon-fill">{m.icon}</span>
                          </div>
                          <div>
                             <h4 className="text-lg font-black text-slate-900 tracking-tight">{m.title}</h4>
                             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{m.desc}</p>
                          </div>
                       </div>
                       <div className="text-right">
                          <span className={`text-2xl font-black tracking-tighter ${m.score > 80 ? 'text-primary-dark' : 'text-amber-500'}`}>{m.score}%</span>
                          <p className="text-[8px] font-black text-slate-300 uppercase">Tối ưu</p>
                       </div>
                    </div>
                    
                    <button 
                      onClick={() => handleAudit(m.id)}
                      className="w-full h-14 bg-gray-50 hover:bg-primary text-slate-400 hover:text-slate-900 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-2 group-hover:bg-primary/10 group-hover:text-primary-dark group-hover:border group-hover:border-primary/20"
                    >
                       <span className="material-symbols-outlined text-[20px]">manage_search</span>
                       Bắt đầu Rà soát
                    </button>
                 </div>
              ))}
           </div>
        </section>

        {/* AI AUTO-PILOT BANNER */}
        <section className="bg-gradient-to-br from-info/20 to-blue-50 rounded-[2.5rem] p-8 border border-info/20 shadow-soft relative overflow-hidden group">
           <div className="flex items-start gap-5 relative z-10">
              <div className="size-14 rounded-2xl bg-white flex items-center justify-center text-info shadow-glow shrink-0">
                 <span className="material-symbols-outlined text-[32px] icon-fill animate-pulse">model_training</span>
              </div>
              <div>
                 <div className="flex items-center gap-2 mb-2">
                    <h4 className="text-slate-900 font-black text-lg tracking-tight leading-none">Auto-Pilot Mode</h4>
                    <span className="bg-info text-white text-[8px] px-2 py-0.5 rounded-full font-black uppercase shadow-sm">Premium</span>
                 </div>
                 <p className="text-slate-500 text-xs font-medium leading-relaxed mb-6">Cho phép AI tự động điều chỉnh hệ thống tưới và bón phân dựa trên các kịch bản tối ưu nhất.</p>
                 <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl hover:scale-105 transition-transform active:scale-95">Kích hoạt ngay</button>
              </div>
           </div>
        </section>
      </div>
    </div>
  );
};

export default OptimizationView;
