
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const AdoptDetailView: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const isLivestock = id === 'a2';

  return (
    <div className="flex flex-col flex-1 animate-in fade-in duration-500 bg-background-light dark:bg-background-dark min-h-screen font-display text-slate-900 dark:text-white overflow-x-hidden">
      {/* HEADER */}
      <header className="sticky top-0 z-50 flex items-center bg-white/90 dark:bg-background-dark/90 backdrop-blur-md p-4 pb-3 justify-between border-b border-gray-100 dark:border-white/5 shadow-sm shrink-0">
        <button 
          onClick={() => navigate(-1)}
          className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 active:scale-95 transition-all text-slate-900 dark:text-white"
        >
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>
        <h2 className="text-sm font-black leading-tight tracking-tight flex-1 text-center truncate px-2 uppercase text-slate-900 dark:text-white">
          Chi tiết Gói {isLivestock ? 'Nuôi Gà Ri' : 'Cà Chua Cherry'}
        </h2>
        <button className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 active:scale-95 transition-all text-slate-900 dark:text-white">
          <span className="material-symbols-outlined text-xl">share</span>
        </button>
      </header>

      <div className="flex-1 overflow-y-auto hide-scrollbar pb-40">
        {/* HERO SECTION */}
        <div className="relative w-full aspect-[4/3] bg-slate-900 group overflow-hidden shadow-xl">
          <img 
            alt="Product" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110 opacity-90" 
            src={isLivestock 
              ? "https://lh3.googleusercontent.com/aida-public/AB6AXuAIZVfptTZdxH44ojjmJluJhbJeQHjHH1ow-0LWz16U7v6RBSCgW_UcBnuubNvFRO3BlxvuRZWY915GiaPiw2LvwO1WffUKhdFx9eUlHl8rf5V-6SzblTrrm-ur5Z86uNX-7KzD3cV1pn8FQ5JIYkh4f7lckDOgJtOK6WMhWTA8pbekvofW0tvRunXv-8qXblPdfc-KfNxMoge0Expwm6dGglvczP767DtwgJ9vdmc1R4gsrDq4dJLHJRBw9UxGZYeruCaCs9k8V5x_" 
              : "https://lh3.googleusercontent.com/aida-public/AB6AXuA-OMZkBD9ikHZTf9-UgI7idoEPXVFcu8fA7ZsiniaBh37vcRN95YDNQgTuZOSQ-Q4c5QnNI8q-9_Ywh9PF2-1y0o0aM3lGkcW4lU133bmpos6jzKpUXwBwvDq76tb4XwjNgz1QA6tdfa24LThLE-DjO8HRrkKmAD_QeH97Un3o9c4KQn3GybpTSg6rA3Evru7E0c81m6D-NNvB2ZZ4F-tA5YwrOCV9aW5bFL-ZbF8mPEDYIhOOVNaZh16yket2LlRQz4nRdCp6LgHo"} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10"></div>
          
          <div className="absolute bottom-0 left-0 w-full p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full bg-primary/30 border border-primary/40 text-primary text-[9px] font-black uppercase tracking-widest backdrop-blur-md">
                Standard Organic
              </span>
              <span className="px-3 py-1 rounded-full bg-white/20 border border-white/20 text-white text-[9px] font-black backdrop-blur-md flex items-center gap-1 uppercase tracking-widest">
                <span className="material-symbols-outlined text-[14px]">location_on</span> Đà Lạt
              </span>
            </div>
            <h1 className="text-3xl font-black text-white mb-1 tracking-tight uppercase">
              {isLivestock ? 'Gà Ri Thả Vườn' : 'Cà Chua Cherry Nhật'}
            </h1>
            <p className="text-white/80 text-xs font-bold flex items-center gap-1.5 uppercase tracking-widest">
              <span className="material-symbols-outlined text-primary text-sm icon-fill">verified</span>
              GreenFarm Dalat • Khu A2
            </p>
          </div>

          <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-16 bg-primary text-slate-900 rounded-full flex items-center justify-center shadow-glow hover:scale-110 transition-transform cursor-pointer backdrop-blur-sm active:scale-95 z-20">
            <span className="material-symbols-outlined text-4xl icon-fill">play_arrow</span>
          </button>
        </div>

        {/* DATA GRID */}
        <div className="grid grid-cols-2 gap-3 px-4 py-6">
          <div className="bg-white dark:bg-card-dark rounded-2xl p-5 border border-gray-100 dark:border-white/5 relative overflow-hidden group shadow-soft">
            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-primary text-5xl icon-fill">trending_up</span>
            </div>
            <p className="text-slate-400 dark:text-slate-500 text-[9px] font-black mb-1 uppercase tracking-widest">Lợi nhuận dự kiến</p>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-primary">18-22%</span>
              <span className="text-[10px] text-primary/80 font-black">ROI</span>
            </div>
            <p className="text-[9px] text-slate-300 dark:text-slate-600 mt-1 font-bold uppercase tracking-tighter">Chu kỳ 4 tháng</p>
          </div>
          <div className="bg-white dark:bg-card-dark rounded-2xl p-5 border border-gray-100 dark:border-white/5 relative overflow-hidden group shadow-soft">
            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-blue-400 text-5xl icon-fill">water_drop</span>
            </div>
            <p className="text-slate-400 dark:text-slate-500 text-[9px] font-black mb-1 uppercase tracking-widest">{isLivestock ? 'Sức khỏe' : 'Độ ẩm đất'}</p>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-blue-400">{isLivestock ? 'Tốt' : '68%'}</span>
              <span className="text-[10px] text-blue-300 font-black uppercase">IoT Realtime</span>
            </div>
            <p className="text-[9px] text-slate-300 dark:text-slate-600 mt-1 font-bold uppercase tracking-tighter">Trạng thái: Ổn định</p>
          </div>
        </div>

        {/* AI ANALYSIS BLOCK */}
        <div className="px-4 pb-6">
          <div className="bg-white dark:bg-card-dark rounded-3xl p-6 border border-gray-100 dark:border-white/5 relative overflow-hidden shadow-soft">
            <div className="flex justify-between items-start mb-5">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-inner">
                  <span className="material-symbols-outlined text-2xl icon-fill">smart_toy</span>
                </div>
                <div>
                  <h3 className="text-slate-900 dark:text-white font-black text-sm uppercase tracking-tight">Chẩn đoán AI GoFam</h3>
                  <p className="text-[9px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest mt-0.5">Cập nhật: 15 phút trước</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-primary/10 text-primary-dark dark:text-primary text-[9px] font-black rounded-lg border border-primary/20 uppercase tracking-widest shadow-inner">
                Sức khỏe tốt
              </span>
            </div>
            <div className="space-y-4">
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-bold italic">
                "{isLivestock 
                  ? "Tần suất vận động và tiếng kêu của vật nuôi ở mức lý tưởng. Chế độ dinh dưỡng TMR đang phát huy tác dụng tốt giúp tăng trọng ổn định." 
                  : "Phân tích hình ảnh lá cho thấy sắc tố diệp lục ổn định. Không phát hiện dấu hiệu sâu bệnh hay nấm mốc. Tốc độ sinh trưởng phù hợp với giai đoạn."}"
              </p>
              <div className="space-y-2">
                <div className="h-2 w-full bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden shadow-inner">
                  <div className="h-full bg-gradient-to-r from-primary-dark to-primary w-[92%] rounded-full shadow-glow"></div>
                </div>
                <div className="flex justify-between text-[10px] text-slate-400 dark:text-slate-500 uppercase font-black tracking-[0.1em]">
                  <span>Sức đề kháng</span>
                  <span className="text-primary">92/100 Điểm</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* GROWTH TIMELINE */}
        <div className="px-5 py-2">
          <h3 className="text-slate-900 dark:text-white text-lg font-black mb-6 flex items-center gap-3 uppercase tracking-tight">
            <span className="material-symbols-outlined text-primary icon-fill">timeline</span> Tiến độ Nuôi trồng
          </h3>
          <div className="relative pl-3">
            <div className="absolute left-[23px] top-3 bottom-8 w-0.5 bg-gray-100 dark:bg-white/10"></div>
            
            <div className="flex gap-5 mb-8 relative">
              <div className="relative z-10 size-10 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center shrink-0 shadow-glow">
                <span className="material-symbols-outlined text-primary text-base font-black">check</span>
              </div>
              <div className="pt-1">
                <h4 className="text-slate-900 dark:text-white font-black text-sm uppercase tracking-tight">Chuẩn bị & Gieo giống</h4>
                <p className="text-slate-400 dark:text-slate-500 text-[10px] font-bold mt-1 uppercase tracking-widest">15/09/2023 • Đã hoàn thành</p>
              </div>
            </div>

            <div className="flex gap-5 mb-8 relative">
              <div className="relative z-10 size-10 rounded-full bg-amber-500/20 border-2 border-amber-500 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(245,158,11,0.3)] animate-pulse">
                <span className="material-symbols-outlined text-amber-500 text-base icon-fill">wb_sunny</span>
              </div>
              <div className="pt-1 flex-1">
                <div className="flex items-center gap-2">
                  <h4 className="text-slate-900 dark:text-white font-black text-sm uppercase tracking-tight">Chăm sóc & Phát triển</h4>
                  <span className="text-[9px] bg-amber-500/20 text-amber-600 px-2 py-0.5 rounded font-black border border-amber-500/30 uppercase tracking-widest">Hiện tại</span>
                </div>
                <p className="text-slate-400 dark:text-slate-500 text-[10px] font-bold mt-1 uppercase tracking-widest">Dự kiến kết thúc: 20/11/2023</p>
                <div className="mt-3 text-[11px] text-slate-600 dark:text-slate-400 bg-gray-50 dark:bg-white/5 p-3 rounded-2xl border border-gray-100 dark:border-white/5 font-bold italic leading-relaxed">
                  "Hệ thống đang duy trì môi trường lý tưởng để tối ưu quá trình tích lũy dinh dưỡng."
                </div>
              </div>
            </div>

            <div className="flex gap-5 relative opacity-50">
              <div className="relative z-10 size-10 rounded-full bg-gray-100 dark:bg-slate-800 border-2 border-gray-200 dark:border-white/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-slate-400 text-base">agriculture</span>
              </div>
              <div className="pt-1">
                <h4 className="text-slate-400 dark:text-slate-600 font-black text-sm uppercase tracking-tight">Thu hoạch & Xuất kho</h4>
                <p className="text-slate-400 dark:text-slate-600 text-[10px] font-bold mt-1 uppercase tracking-widest">Dự kiến: 15/12/2023</p>
              </div>
            </div>
          </div>
        </div>

        {/* DETAILS SECTION */}
        <div className="px-5 py-8 space-y-4">
          <h3 className="text-slate-900 dark:text-white text-lg font-black uppercase tracking-tight">Thông tin chi tiết</h3>
          <div className="text-slate-500 dark:text-slate-400 text-xs font-bold leading-relaxed space-y-4">
            <p>Sử dụng các quy chuẩn nông nghiệp chính xác cao, kết hợp giữa tri thức bản địa và công nghệ IoT AI hàng đầu. Toàn bộ quá trình được lưu trữ trên Blockchain để đảm bảo tính minh bạch.</p>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white dark:bg-card-dark p-4 rounded-2xl border border-gray-100 dark:border-white/5 shadow-soft">
                <p className="text-slate-400 dark:text-slate-500 text-[9px] font-black uppercase tracking-[0.1em] mb-1">Phương pháp</p>
                <p className="text-slate-900 dark:text-white text-xs font-black uppercase tracking-tight">{isLivestock ? 'Chăn nuôi thả vườn' : 'Thủy canh hồi lưu'}</p>
              </div>
              <div className="bg-white dark:bg-card-dark p-4 rounded-2xl border border-gray-100 dark:border-white/5 shadow-soft">
                <p className="text-slate-400 dark:text-slate-500 text-[9px] font-black uppercase tracking-[0.1em] mb-1">Tiêu chuẩn</p>
                <p className="text-slate-900 dark:text-white text-xs font-black uppercase tracking-tight">Global GAP</p>
              </div>
            </div>
          </div>
        </div>

        {/* LIVE GALLERY */}
        <div className="px-5 pb-12">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-900 dark:text-white text-lg font-black flex items-center gap-3 uppercase tracking-tight">
              Live Gallery <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.5)]"></span>
            </h3>
            <button className="text-primary text-[10px] font-black uppercase tracking-[0.15em] hover:underline">Xem tất cả</button>
          </div>
          <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2 snap-x">
            <div className="relative min-w-[160px] aspect-[4/5] bg-slate-800 rounded-[2rem] overflow-hidden shrink-0 border border-white/10 shadow-deep snap-start group cursor-pointer">
              <div className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:scale-110 transition-transform duration-[5s]" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBam35dxtvjXPpzq6MULCpC6gzCVjHhVbtW-HsU4zsuDiil-H_V0b7veP-M4PmzkA--HysazQ1JMpLxGQJqxO3UN44SLM5yufFLySIHsp1rWsGKffuuTeY_Bht5QSGvzajD7RM1iDytJSdHXrefuuUNklFJRX6522PHx00aLAveZnheNYxQjlYN3KQaI1OG9xMeWNK6gyBO5oPO7OYHppUX8L7bLcKvI4q2_ZnDwA_8PKrnyUsfbCSecK-3s2AiGDylS2q-FQugotkg')"}}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="size-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-2xl border border-white/20">
                  <span className="material-symbols-outlined text-3xl icon-fill">videocam</span>
                </div>
              </div>
              <div className="absolute top-3 left-3 bg-red-600 text-white text-[8px] font-black px-2 py-1 rounded-lg flex items-center gap-1.5 shadow-lg border border-white/10 animate-pulse">
                LIVE
              </div>
              <p className="absolute bottom-4 left-4 text-white text-[10px] font-black uppercase tracking-widest drop-shadow-md">Khu vực A2</p>
            </div>
            
            <div className="relative min-w-[160px] aspect-[4/5] bg-slate-800 rounded-[2rem] overflow-hidden shrink-0 border border-white/10 shadow-deep snap-start group cursor-pointer">
              <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-[5s]" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCp17xdFVhN3VFhtJVhh7DdfznJyvqbBGF5EcvwIe1fI4YjHnWJSp27blSlLQbINisg8RfzMdeoI4Yt9KZ8RvIUTAw5Jd75jyr8PZ3ruggv1sq7yOsxUNbX0expxgnL2vQy4Jtw-hSwMvkZs2Hh8I0V3hRZ7BP1dh1jzhelHc-ox25WRRS3Ql3g7UkY7oFO3fOGzEqRd2GU3f9cnHhToNX0u664IAFg0iZBFVAw0MgWD_DwDvpCBQ8SJueiS2vLRAOc8hYBSziYqdrR')"}}></div>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-4 pt-10">
                <p className="text-white text-[9px] font-black uppercase tracking-widest">Cập nhật 2h trước</p>
              </div>
            </div>

            <div className="relative min-w-[160px] aspect-[4/5] bg-slate-800 rounded-[2rem] overflow-hidden shrink-0 border border-white/10 shadow-deep snap-start group cursor-pointer">
              <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-[5s]" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBBFwD4mRRywadaO-G3pMC705ig_hJRPtMkFn1bIU8zyF0MB0Nuc7Y3AQjPCmYY8bRYXQ4haScdh80iKumvMi26TdRTilQtIJvqyvXEYuzS22rOL-VExZNvkPaMoTfHjn-n6pHyctS0vxOQWcgiLpPiuSe7TDurcVyNgnqVeA19W0qPvSi-1c2zEKDg9LyS7IaP3AYjBlYaGDeGfIe-oJQREPsNMFJT-2RX2by963VxhD9TMXoF4BXSrjUeyhIuON3aBV5TZaXTbq6S')"}}></div>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-4 pt-10">
                <p className="text-white text-[9px] font-black uppercase tracking-widest">Hôm qua</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* STICKY FOOTER ACTIONS */}
      <div className="fixed bottom-0 left-0 right-0 z-[60] bg-white/95 dark:bg-background-dark/95 backdrop-blur-xl border-t border-gray-100 dark:border-white/10 p-4 pb-10 max-w-md mx-auto shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <div className="flex gap-4">
          <button className="flex-1 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/10 text-slate-900 dark:text-white font-black text-[11px] uppercase tracking-widest py-4 px-4 rounded-2xl transition-all active:scale-95 flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-xl">chat</span>
            <span>Liên hệ</span>
          </button>
          <button className="flex-[2] bg-primary hover:bg-primary-dark text-slate-900 font-black text-[11px] uppercase tracking-[0.2em] py-4 px-6 rounded-2xl shadow-glow shadow-primary/30 transition-all active:scale-[0.98] flex items-center justify-center gap-3 border border-primary-dark/10">
            <span>Nhận nuôi gói này</span>
            <span className="material-symbols-outlined text-xl">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdoptDetailView;
