
import React from 'react';
import { useNavigate } from 'react-router-dom';

const VirtualFarmView: React.FC = () => {
  const navigate = useNavigate();

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
          <h1 className="text-base font-bold font-display tracking-tight text-slate-900 dark:text-white uppercase">Nông trại ảo</h1>
          <span className="text-[9px] font-black text-primary tracking-[0.2em] uppercase">My Cultivation</span>
        </div>
        <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-50 dark:hover:bg-slate-800 active:scale-95 transition-all text-slate-400">
          <span className="material-symbols-outlined">settings</span>
        </button>
      </header>

      <main className="flex-1 overflow-y-auto pb-32 relative bg-white dark:bg-slate-950">
        {/* HERO SECTION */}
        <div className="relative w-full aspect-[4/5] bg-gradient-to-b from-emerald-50 to-white dark:from-slate-900 dark:to-slate-950 overflow-hidden rounded-b-[3rem] shadow-sm mb-6">
          <div className="absolute top-10 right-10 w-32 h-32 bg-yellow-200 dark:bg-yellow-900/20 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-emerald-100/30 dark:from-primary/5 to-transparent"></div>
          
          {/* Floating Plant Image */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] z-10 animate-float-custom">
            <img 
              alt="Tomato Plant" 
              className="w-full h-auto object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.15)]" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA977HKZRR-Dag1zgPIkxM20h8bro74MFR7XUoHGMpnKrEkbR0xxOnYfNmN2mc7_m-lOMPyb1C3wzIW9g_RDcccGPmJfkS8AxCS-UASx96O8OlIGipqD_v0DVnheVBPdsm0dL6uK6YIwbdri52a44t1hd58ghMBYMvZRGNmlVG74G4plBAfe0AQnFJbQ00L6PwQIZID29wilaQISn6deq8Fk6UBwft0xhkoIWmLIb65OtfZStF-kJbFfe6S9OlWVG_1z7kMke8ihFgy"
            />
          </div>

          {/* Glass Status Overlay */}
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
                  <h3 className="text-sm font-black text-slate-900 dark:text-white leading-tight truncate">Cà Chua Bi</h3>
                  <div className="flex items-center gap-1.5 mt-1 bg-white/50 dark:bg-slate-800/50 rounded-full px-2 py-0.5 w-fit">
                    <span className="material-symbols-outlined text-[14px] text-red-500 icon-fill">favorite</span>
                    <span className="text-[10px] font-black text-slate-700 dark:text-slate-300">92%</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-1">
                <div className="flex justify-between items-end mb-1.5">
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase tracking-wider text-slate-400 font-black">Giai đoạn</span>
                    <span className="text-xs font-black text-emerald-800 dark:text-primary uppercase">Ra quả</span>
                  </div>
                  <span className="text-sm font-black text-primary font-display">85%</span>
                </div>
                <div className="relative h-2.5 bg-gray-100 dark:bg-slate-800 rounded-full overflow-hidden shadow-inner border border-gray-100 dark:border-slate-700">
                  <div className="absolute inset-0 flex w-full z-10 pointer-events-none">
                    <div className="w-[25%] border-r border-white/40 h-full"></div>
                    <div className="w-[50%] border-r border-white/40 h-full"></div>
                  </div>
                  <div className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-green-400 via-primary to-emerald-600 w-[85%] rounded-full shadow-glow">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-full h-full animate-shimmer-custom skew-x-12"></div>
                  </div>
                </div>
                <div className="flex justify-between mt-1.5 text-[8px] text-slate-400 font-black tracking-tight px-0.5 uppercase">
                  <span>Hạt</span>
                  <span>Cây non</span>
                  <span>Thu hoạch</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 pointer-events-auto items-end">
              <div className="glass-panel px-3 py-2 rounded-2xl shadow-md flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-blue-500 icon-fill">water_drop</span>
                <div className="flex flex-col items-end leading-none">
                  <span className="text-[11px] font-black text-slate-900 dark:text-white">62%</span>
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

        {/* NUTRITION SECTION */}
        <div className="px-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-black font-display text-slate-900 dark:text-white flex items-center gap-2 uppercase tracking-tight">
              <span className="material-symbols-outlined text-primary icon-fill">nutrition</span>
              Chăm sóc dinh dưỡng
            </h2>
            <button onClick={() => navigate('/logs')} className="text-xs font-black text-primary-dark hover:bg-primary/5 px-3 py-1.5 rounded-xl transition-all uppercase tracking-widest">
              Lịch sử
            </button>
          </div>

          {/* AI ASSISTANT BANNER */}
          <div className="mb-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-100 dark:border-blue-800 rounded-[2rem] p-5 flex gap-4 items-start relative overflow-hidden group shadow-soft">
            <div className="absolute -right-4 -top-4 w-20 h-20 bg-blue-100 dark:bg-blue-400/10 rounded-full opacity-50 blur-xl group-hover:scale-150 transition-transform duration-700"></div>
            <div className="w-11 h-11 rounded-2xl bg-blue-500 flex items-center justify-center shrink-0 shadow-lg shadow-blue-200 dark:shadow-none z-10">
              <span className="material-symbols-outlined text-white text-[22px] icon-fill">psychology</span>
            </div>
            <div className="z-10 flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[11px] font-black text-blue-800 dark:text-blue-400 uppercase tracking-widest">AI Farm Assistant</span>
                <span className="bg-blue-200/50 dark:bg-blue-500/20 backdrop-blur-sm text-blue-800 dark:text-blue-400 text-[8px] font-black px-2 py-0.5 rounded-full border border-blue-100/50 dark:border-blue-500/30">AUTO-DETECT</span>
              </div>
              <p className="text-[11px] text-blue-900/80 dark:text-blue-200/60 leading-relaxed font-bold">
                Cây đang trong giai đoạn ra quả, nồng độ Kali trong đất thấp. Khuyên dùng <span className="font-black text-blue-700 dark:text-blue-400 underline decoration-blue-300 decoration-2">Phân Hữu Cơ</span> để cải thiện chất lượng quả.
              </p>
            </div>
          </div>

          {/* HORIZONTAL CARDS */}
          <div className="relative">
            <div className="overflow-x-auto hide-scrollbar pb-8 -mx-5 px-5 flex gap-5 snap-x">
              {/* AI Recommended Card */}
              <div className="snap-center shrink-0 w-[150px] relative group cursor-pointer">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-slate-900 text-[9px] font-black px-4 py-1.5 rounded-full shadow-glow z-10 whitespace-nowrap border-[3px] border-white dark:border-slate-900 uppercase tracking-widest">
                  AI Khuyên dùng
                </div>
                <div className="h-full bg-white dark:bg-slate-900 rounded-[2.2rem] p-5 border-2 border-primary shadow-deep flex flex-col gap-4 relative overflow-hidden active:scale-95 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-green-50 dark:bg-green-900/30 flex items-center justify-center self-center group-hover:bg-green-100 transition-colors shadow-inner">
                    <span className="material-symbols-outlined text-green-600 dark:text-primary icon-fill text-[26px]">compost</span>
                  </div>
                  <div className="text-center">
                    <h4 className="text-[13px] font-black text-slate-900 dark:text-white uppercase tracking-tight">Phân hữu cơ</h4>
                    <p className="text-[9px] text-slate-400 mt-1 font-bold uppercase tracking-widest">Tăng độ màu mỡ</p>
                  </div>
                  <div className="mt-1 pt-4 border-t border-dashed border-gray-100 dark:border-slate-800 flex justify-between items-center">
                    <span className="text-[11px] font-black text-primary-dark dark:text-primary bg-primary/10 px-2.5 py-1 rounded-lg">5kg</span>
                    <span className="material-symbols-outlined text-[24px] text-primary hover:scale-110 transition-transform icon-fill">add_circle</span>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="snap-center shrink-0 w-[150px] relative cursor-pointer group">
                <div className="h-full bg-gray-50 dark:bg-slate-800/50 rounded-[2.2rem] p-5 border border-gray-100 dark:border-slate-700 hover:border-orange-200 dark:hover:border-orange-500/30 hover:bg-white dark:hover:bg-slate-800 transition-all flex flex-col gap-4 active:scale-95 duration-300">
                  <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center self-center shadow-inner">
                    <span className="material-symbols-outlined text-orange-600 dark:text-orange-400 text-[26px]">science</span>
                  </div>
                  <div className="text-center">
                    <h4 className="text-[13px] font-black text-slate-900 dark:text-white uppercase tracking-tight">Phân NPK</h4>
                    <p className="text-[9px] text-slate-400 mt-1 font-bold uppercase tracking-widest">Kích thích ra quả</p>
                  </div>
                  <div className="mt-1 pt-4 border-t border-dashed border-gray-100 dark:border-slate-800 flex justify-between items-center">
                    <span className="text-[11px] font-black text-slate-400 dark:text-slate-500 bg-gray-100 dark:bg-slate-700 px-2.5 py-1 rounded-lg">12kg</span>
                    <span className="material-symbols-outlined text-[24px] text-slate-300 dark:text-slate-600 group-hover:text-orange-500 transition-colors">add_circle</span>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="snap-center shrink-0 w-[150px] relative cursor-pointer group">
                <div className="h-full bg-gray-50 dark:bg-slate-800/50 rounded-[2.2rem] p-5 border border-gray-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-500/30 hover:bg-white dark:hover:bg-slate-800 transition-all flex flex-col gap-4 active:scale-95 duration-300">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center self-center shadow-inner">
                    <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-[26px]">water_drop</span>
                  </div>
                  <div className="text-center">
                    <h4 className="text-[13px] font-black text-slate-900 dark:text-white uppercase tracking-tight">Nước vi sinh</h4>
                    <p className="text-[9px] text-slate-400 mt-1 font-bold uppercase tracking-widest">Bổ sung khoáng</p>
                  </div>
                  <div className="mt-1 pt-4 border-t border-dashed border-gray-100 dark:border-slate-800 flex justify-between items-center">
                    <span className="text-[11px] font-black text-slate-400 dark:text-slate-500 bg-gray-100 dark:bg-slate-700 px-2.5 py-1 rounded-lg">20L</span>
                    <span className="material-symbols-outlined text-[24px] text-slate-300 dark:text-slate-600 group-hover:text-blue-500 transition-colors">add_circle</span>
                  </div>
                </div>
              </div>

              <div className="snap-center shrink-0 w-24 relative cursor-pointer flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border-2 border-dashed border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-300 hover:text-primary hover:border-primary hover:bg-primary/5 transition-all active:scale-90">
                  <span className="material-symbols-outlined text-[32px]">add</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-[10px] font-black text-slate-300 dark:text-slate-600 flex items-center justify-center gap-2 animate-pulse uppercase tracking-[0.2em]">
              <span className="material-symbols-outlined text-[16px]">touch_app</span>
              Chạm và giữ để xem chi tiết
            </p>
          </div>
        </div>

        {/* BOTTOM ACTION */}
        <div className="px-5 mt-8 mb-10">
          <button className="w-full py-5 rounded-[2.2rem] bg-slate-900 dark:bg-primary text-white dark:text-slate-900 shadow-xl shadow-slate-900/10 dark:shadow-primary/20 flex items-center justify-between px-6 group active:scale-[0.98] transition-all border border-white/10">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-white/5 dark:bg-slate-900/20 flex items-center justify-center relative overflow-hidden shadow-inner">
                <span className="material-symbols-outlined text-primary dark:text-slate-900 text-3xl z-10 icon-fill">videocam</span>
                <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-red-500 rounded-full animate-ping z-10"></span>
                <div className="absolute inset-0 bg-primary/20 scale-0 group-hover:scale-100 transition-transform rounded-full"></div>
              </div>
              <div className="text-left">
                <h3 className="text-base font-black uppercase tracking-tight group-hover:text-primary dark:group-hover:text-slate-700 transition-colors">Xem chi tiết thực tế</h3>
                <p className="text-[10px] font-bold text-slate-400 dark:text-slate-700/60 uppercase tracking-widest mt-0.5">Camera AI & IoT Sensors</p>
              </div>
            </div>
            <div className="w-10 h-10 rounded-2xl bg-white/10 dark:bg-slate-900/10 flex items-center justify-center group-hover:bg-primary group-hover:text-slate-900 dark:group-hover:bg-slate-900 dark:group-hover:text-primary transition-all">
              <span className="material-symbols-outlined text-[20px] font-black">arrow_forward</span>
            </div>
          </button>
        </div>
      </main>
    </div>
  );
};

export default VirtualFarmView;
