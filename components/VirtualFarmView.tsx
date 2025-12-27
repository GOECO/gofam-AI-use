
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const VirtualFarmView: React.FC = () => {
  const navigate = useNavigate();
  
  // States for virtual plant care
  const [health, setHealth] = useState(92);
  const [humidity, setHumidity] = useState(62);
  const [growth, setGrowth] = useState(85);
  const [isWatering, setIsWatering] = useState(false);
  const [isFertilizing, setIsFertilizing] = useState(false);
  const [isBugHunting, setIsBugHunting] = useState(false);
  const [actionMessage, setActionMessage] = useState<string | null>(null);

  const handleAction = (type: 'water' | 'fertilize' | 'bugs') => {
    if (type === 'water') {
      setIsWatering(true);
      setHumidity(prev => Math.min(prev + 10, 100));
      setHealth(prev => Math.min(prev + 2, 100));
      setActionMessage("Đang tưới nước cho cây... 💧");
      setTimeout(() => { setIsWatering(false); setActionMessage(null); }, 2000);
    } else if (type === 'fertilize') {
      setIsFertilizing(true);
      setHealth(prev => Math.min(prev + 5, 100));
      setGrowth(prev => Math.min(prev + 1, 100));
      setActionMessage("Đang bón phân hữu cơ... ✨");
      setTimeout(() => { setIsFertilizing(false); setActionMessage(null); }, 2000);
    } else if (type === 'bugs') {
      setIsBugHunting(true);
      setHealth(prev => Math.min(prev + 3, 100));
      setActionMessage("Đang bắt sâu bệnh cho lá... 🐛");
      setTimeout(() => { setIsBugHunting(false); setActionMessage(null); }, 2000);
    }
  };

  return (
    <div className="flex flex-col flex-1 animate-in fade-in duration-500 bg-white dark:bg-slate-950 min-h-screen font-sans overflow-x-hidden relative">
      {/* Custom Styles for Animations & Glassmorphism */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(-50%); }
          50% { transform: translateY(-15px) translateX(-50%); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-150%); }
          100% { transform: translateX(150%); }
        }
        @keyframes breathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-float-custom {
          animation: float 3s ease-in-out infinite;
        }
        .animate-shimmer-custom {
          animation: shimmer 2.5s infinite linear;
        }
        .animate-breathe-custom {
          animation: breathe 4s ease-in-out infinite;
        }
        .glass-panel {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.5);
        }
        .dark .glass-panel {
          background: rgba(15, 23, 42, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-gray-100 dark:border-slate-800 px-4 py-3 flex items-center justify-between">
        <button 
          onClick={() => navigate(-1)}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-50 dark:hover:bg-slate-800 active:scale-95 transition-all text-slate-900 dark:text-white"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <div className="flex flex-col items-center">
          <h1 className="text-base font-bold font-display tracking-tight text-slate-900 dark:text-white uppercase">Vườn ảo của tôi</h1>
          <span className="text-[9px] font-black text-primary tracking-[0.2em] uppercase"> seedling Care</span>
        </div>
        <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-50 dark:hover:bg-slate-800 active:scale-95 transition-all text-slate-400">
          <span className="material-symbols-outlined">settings</span>
        </button>
      </header>

      <main className="flex-1 overflow-y-auto pb-32 relative bg-white dark:bg-slate-950">
        {/* HERO SECTION - THE PLANT */}
        <div className="relative w-full aspect-[4/5] bg-gradient-to-b from-emerald-50 to-white dark:from-slate-900 dark:to-slate-950 overflow-hidden rounded-b-[3rem] shadow-sm mb-6">
          <div className="absolute top-10 right-10 w-32 h-32 bg-yellow-200 dark:bg-yellow-900/20 rounded-full blur-3xl opacity-30"></div>
          
          {/* Action Overlay Message */}
          {actionMessage && (
            <div className="absolute top-[45%] left-1/2 -translate-x-1/2 z-[30] animate-bounce bg-white/90 dark:bg-slate-800/90 backdrop-blur-md px-6 py-2.5 rounded-full shadow-2xl border border-primary/20">
              <p className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-widest">{actionMessage}</p>
            </div>
          )}

          {/* WATERING ANIMATION OVERLAY */}
          {isWatering && (
            <div className="absolute inset-0 z-20 pointer-events-none flex flex-col items-center pt-20 animate-in fade-in slide-in-from-top-4 duration-500">
              <span className="material-symbols-outlined text-blue-400 text-[120px] animate-pulse">water_drop</span>
            </div>
          )}

          {/* FERTILIZING ANIMATION OVERLAY */}
          {isFertilizing && (
            <div className="absolute inset-0 z-20 pointer-events-none flex flex-col items-center justify-center animate-in zoom-in duration-700">
              <div className="relative size-40">
                <span className="absolute top-0 left-0 material-symbols-outlined text-amber-400 text-3xl animate-bounce">sparkles</span>
                <span className="absolute top-10 right-0 material-symbols-outlined text-amber-400 text-3xl animate-bounce [animation-delay:0.2s]">sparkles</span>
                <span className="absolute bottom-0 left-1/3 material-symbols-outlined text-amber-400 text-3xl animate-bounce [animation-delay:0.4s]">sparkles</span>
              </div>
            </div>
          )}

          {/* BUG HUNTING ANIMATION */}
          {isBugHunting && (
            <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center">
              <div className="size-40 border-4 border-dashed border-red-500/50 rounded-full animate-[spin_4s_linear_infinite] flex items-center justify-center">
                <span className="material-symbols-outlined text-red-500 text-4xl animate-pulse">pest_control</span>
              </div>
            </div>
          )}
          
          {/* Floating Plant Image */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] z-10 animate-float-custom">
            <img 
              alt="Tomato Plant" 
              className="w-full h-auto object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.15)]" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA977HKZRR-Dag1zgPIkxM20h8bro74MFR7XUoHGMpnKrEkbR0xxOnYfNmN2mc7_m-lOMPyb1C3wzIW9g_RDcccGPmJfkS8AxCS-UASx96O8OlIGipqD_v0DVnheVBPdsm0dL6uK6YIwbdri52a44t1hd58ghMBYMvZRGNmlVG74G4plBAfe0AQnFJbQ00L6PwQIZID29wilaQISn6deq8Fk6UBwft0xhkoIWmLIb65OtfZStF-kJbFfe6S9OlWVG_1z7kMke8ihFgy"
            />
          </div>

          {/* Status HUD Panel */}
          <div className="absolute top-4 left-4 right-4 z-20 flex justify-between items-start pointer-events-none">
            <div className="glass-panel rounded-3xl p-4 shadow-xl flex flex-col gap-3 min-w-[210px] pointer-events-auto">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12">
                  <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20"></div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-100 to-emerald-300 flex items-center justify-center shrink-0 shadow-sm relative z-10 animate-breathe-custom">
                    <span className="material-symbols-outlined text-green-800 icon-fill text-[24px]">potted_plant</span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-black text-slate-900 dark:text-white leading-tight truncate uppercase">Cà Chua bi</h3>
                  <div className="flex items-center gap-1.5 mt-1 bg-white/50 dark:bg-slate-800/50 rounded-full px-2 py-0.5 w-fit">
                    <span className="material-symbols-outlined text-[14px] text-red-500 icon-fill">favorite</span>
                    <span className="text-[10px] font-black text-slate-700 dark:text-slate-300">{health}%</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-1">
                <div className="flex justify-between items-end mb-1.5">
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase tracking-wider text-slate-400 font-black">Giai đoạn</span>
                    <span className="text-xs font-black text-emerald-800 dark:text-primary uppercase">Cây con</span>
                  </div>
                  <span className="text-sm font-black text-primary font-display">{growth}%</span>
                </div>
                <div className="relative h-2.5 bg-gray-100 dark:bg-slate-800 rounded-full overflow-hidden shadow-inner border border-gray-100 dark:border-slate-700">
                  <div className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-green-400 via-primary to-emerald-600 rounded-full shadow-glow transition-all duration-1000" style={{ width: `${growth}%` }}>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-full h-full animate-shimmer-custom skew-x-12"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 pointer-events-auto items-end">
              <div className="glass-panel px-3 py-2 rounded-2xl shadow-md flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-blue-500 icon-fill">water_drop</span>
                <div className="flex flex-col items-end leading-none">
                  <span className="text-[11px] font-black text-slate-900 dark:text-white">{humidity}%</span>
                  <span className="text-[8px] text-slate-400 font-bold uppercase tracking-tighter">Độ ẩm</span>
                </div>
              </div>
              <div className="glass-panel px-3 py-2 rounded-2xl shadow-md flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-orange-500 icon-fill">wb_sunny</span>
                <div className="flex flex-col items-end leading-none">
                  <span className="text-[11px] font-black text-slate-900 dark:text-white">28°C</span>
                  <span className="text-[8px] text-slate-400 font-bold uppercase tracking-tighter">Nhiệt độ</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CARE ACTIONS SECTION */}
        <div className="px-5">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-black font-display text-slate-900 dark:text-white flex items-center gap-2 uppercase tracking-tight">
              <span className="material-symbols-outlined text-primary icon-fill">volunteer_activism</span>
              Chăm sóc cây con
            </h2>
            <div className="flex items-center gap-1.5 bg-yellow-50 dark:bg-yellow-900/20 px-3 py-1 rounded-full border border-yellow-100 dark:border-yellow-900/40">
              <span className="material-symbols-outlined text-yellow-500 text-[16px] icon-fill">monetization_on</span>
              <span className="text-[10px] font-black text-yellow-700 dark:text-yellow-500">1,250 Xu</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8">
             <button 
               onClick={() => handleAction('water')}
               disabled={isWatering || isFertilizing || isBugHunting}
               className="flex flex-col items-center gap-3 p-4 bg-white dark:bg-card-dark rounded-3xl border border-gray-100 dark:border-white/5 shadow-soft active:scale-90 transition-all group disabled:opacity-50"
             >
                <div className="size-14 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-500 shadow-inner group-hover:bg-blue-100 transition-colors">
                  <span className="material-symbols-outlined text-[32px] icon-fill">water_drop</span>
                </div>
                <span className="text-[10px] font-black uppercase text-slate-400 group-hover:text-blue-500">Tưới nước</span>
             </button>

             <button 
               onClick={() => handleAction('fertilize')}
               disabled={isWatering || isFertilizing || isBugHunting}
               className="flex flex-col items-center gap-3 p-4 bg-white dark:bg-card-dark rounded-3xl border border-gray-100 dark:border-white/5 shadow-soft active:scale-90 transition-all group disabled:opacity-50"
             >
                <div className="size-14 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center text-emerald-500 shadow-inner group-hover:bg-emerald-100 transition-colors">
                  <span className="material-symbols-outlined text-[32px] icon-fill">compost</span>
                </div>
                <span className="text-[10px] font-black uppercase text-slate-400 group-hover:text-emerald-500">Bón phân</span>
             </button>

             <button 
               onClick={() => handleAction('bugs')}
               disabled={isWatering || isFertilizing || isBugHunting}
               className="flex flex-col items-center gap-3 p-4 bg-white dark:bg-card-dark rounded-3xl border border-gray-100 dark:border-white/5 shadow-soft active:scale-90 transition-all group disabled:opacity-50"
             >
                <div className="size-14 rounded-2xl bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-red-500 shadow-inner group-hover:bg-red-100 transition-colors">
                  <span className="material-symbols-outlined text-[32px] icon-fill">pest_control</span>
                </div>
                <span className="text-[10px] font-black uppercase text-slate-400 group-hover:text-red-500">Bắt sâu</span>
             </button>
          </div>

          {/* AI ADVICE FOR VIRTUAL CARE */}
          <div className="bg-gradient-to-r from-primary/10 to-emerald-50 dark:from-primary/5 dark:to-slate-900 rounded-[2.5rem] p-6 border border-primary/20 shadow-soft relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 size-24 bg-primary/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000"></div>
            <div className="flex gap-4 relative z-10">
              <div className="size-12 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center shrink-0 shadow-soft">
                <span className="material-symbols-outlined text-primary-dark text-[28px] icon-fill">psychology</span>
              </div>
              <div>
                <p className="text-[11px] font-black text-primary-dark uppercase tracking-widest mb-1.5 flex items-center gap-2">
                  <span className="size-1.5 bg-primary rounded-full animate-pulse shadow-glow"></span>
                  Gợi ý từ AI Chăm sóc
                </p>
                <p className="text-[11px] text-slate-600 dark:text-slate-300 font-bold leading-relaxed">
                  Cây của bác đang <span className="text-primary-dark font-black underline decoration-primary/30">thiếu độ ẩm nhẹ</span>. Hãy tưới thêm 200ml nước để duy trì tốc độ sinh trưởng tối ưu nhất nhé!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* REWARD MISSIONS QUICK ACCESS */}
        <div className="px-5 mt-8 mb-10">
           <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest">Nhiệm vụ hàng ngày</h3>
              <button onClick={() => navigate('/missions')} className="text-[10px] font-black text-primary uppercase tracking-widest">Xem tất cả</button>
           </div>
           
           <div className="space-y-3">
              {[
                { title: 'Tưới nước buổi sáng', reward: '+10 Xu', done: true },
                { title: 'Chụp ảnh chẩn đoán AI', reward: '+50 Xu', done: false },
                { title: 'Chia sẻ vườn ảo cho bạn bè', reward: '+100 Xu', done: false },
              ].map((mission, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-white dark:bg-card-dark rounded-2xl border border-gray-50 dark:border-white/5 shadow-soft">
                  <div className="flex items-center gap-3">
                    <div className={`size-6 rounded-full border-2 flex items-center justify-center ${mission.done ? 'bg-primary border-primary text-slate-900' : 'border-gray-200 text-transparent'}`}>
                       <span className="material-symbols-outlined text-[14px] font-black">check</span>
                    </div>
                    <span className={`text-[11px] font-bold ${mission.done ? 'text-slate-400 line-through' : 'text-slate-700 dark:text-slate-200'}`}>{mission.title}</span>
                  </div>
                  <span className="text-[9px] font-black text-yellow-600 dark:text-yellow-500 uppercase">{mission.reward}</span>
                </div>
              ))}
           </div>
        </div>
      </main>

      {/* FLOATING ACTION OVERLAY FOR METAVERSE FEEL */}
      <div className="fixed bottom-24 right-6 z-[60] flex flex-col gap-4">
         <button className="size-14 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-2xl active:scale-90 transition-transform border-4 border-primary">
            <span className="material-symbols-outlined text-[28px] icon-fill text-primary">view_in_ar</span>
         </button>
         <button className="size-12 rounded-2xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white flex items-center justify-center shadow-lg active:scale-90 transition-transform border border-gray-100 dark:border-white/10">
            <span className="material-symbols-outlined text-2xl">photo_camera</span>
         </button>
      </div>
    </div>
  );
};

export default VirtualFarmView;
