
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AIChatModal from './AIChatModal';

const HomeView: React.FC = () => {
  const navigate = useNavigate();
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);
  const [aiFilter, setAiFilter] = useState<'all' | 'pending' | 'completed'>('all');

  // Dữ liệu mẫu cho các khu vực trang trại
  const [regions] = useState([
    { id: '1', name: 'Lô Cà Phê A1', type: 'Vườn', status: 'Tốt', color: 'text-primary', icon: 'potted_plant' },
    { id: '2', name: 'Chuồng Gà B2', type: 'Chuồng', status: 'Ổn định', color: 'text-blue-500', icon: 'pets' },
    { id: '3', name: 'Lô Mắc Ca C3', type: 'Vườn', status: 'Cần nước', color: 'text-amber-500', icon: 'agriculture' },
    { id: '4', name: 'Ao Cá Lô D', type: 'Ao', status: 'Tốt', color: 'text-cyan-500', icon: 'phishing' },
  ]);

  // Danh sách gợi ý AI mẫu
  const aiInsights = [
    { 
      id: 'ai1', 
      title: 'CÀ PHÊ LÔ A3', 
      status: 'pending', 
      match: 98, 
      time: '14:00', 
      desc: 'Có dấu hiệu <span class="text-red-500">rỉ sắt nhẹ</span> trên lá non. Bác nên kiểm tra và phun thuốc sinh học vào chiều mát nay nhé!',
      icon: 'smart_toy'
    },
    { 
      id: 'ai2', 
      title: 'NHÀ KÍNH LÔ B2', 
      status: 'completed', 
      match: 92, 
      time: 'Hôm qua', 
      desc: 'Nhiệt độ đã được điều chỉnh giảm 2°C theo khuyến nghị. Độ ẩm hiện tại đạt mức 70% lý tưởng.',
      icon: 'check_circle'
    },
    { 
      id: 'ai3', 
      title: 'AO CÁ LÔ D', 
      status: 'pending', 
      match: 85, 
      time: '09:00', 
      desc: 'Nồng độ oxy hòa tan đang giảm nhẹ. Hãy kích hoạt quạt nước trong 30 phút.',
      icon: 'waves'
    }
  ];

  const filteredInsights = aiInsights.filter(item => {
    if (aiFilter === 'all') return true;
    return item.status === aiFilter;
  });

  return (
    <div className="flex flex-col flex-1 animate-in fade-in duration-700 bg-white dark:bg-background-dark">
      <AIChatModal isOpen={isAIChatOpen} onClose={() => setIsAIChatOpen(false)} />
      
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-gray-100 dark:border-border-dark px-4 pt-5 pb-5">
        <div className="flex items-center justify-between gap-3">
          <button 
            aria-label="Hồ sơ người dùng" 
            onClick={() => navigate('/profile')}
            className="relative shrink-0 active:scale-95 transition-transform"
          >
            <div className="h-14 w-14 rounded-full bg-surface-light dark:bg-surface-dark overflow-hidden border-2 border-primary/20 shadow-sm">
              <img alt="Portrait" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCH6xT1JxtJAjFU126T-G22k-h0Br79gjsbaBp-HYg2926CfcWp6y1ZV0aSOOWs6IXCLgf_q6sWIsxngsoqouuEGwtJyCLQvmcs4XhTrRp-B9U5O9Z8Ispsi6_Gzx_783F60KVBTXuVZgp0Vr4hzGFPtwJHtNHgoumztTOKBBuAFMwew60ExTd8hrHulNoFioUU0BQVIqzyhzr4rWfGjTJY7ORU_xcXb6ZhidiMO923i3FobN-K_-UAKHq_TYI7bVWnKyIx5e-DuzP0"/>
            </div>
            <div className="absolute bottom-0 right-0 h-4 w-4 bg-primary rounded-full border-2 border-white dark:border-background-dark z-10 shadow-sm"></div>
          </button>
          
          <div className="flex flex-col flex-1 min-w-0 justify-center">
            <h1 className="text-xl font-bold truncate leading-tight flex items-center gap-1 font-display text-slate-900 dark:text-white">
              Xin chào, Bác Ba <span className="animate-pulse">👋</span>
            </h1>
            <button className="flex items-center gap-1 mt-1 text-sm text-text-secondary dark:text-slate-400 font-medium truncate px-2 py-1 rounded-lg border border-gray-100 dark:border-border-dark bg-gray-50 dark:bg-surface-dark w-fit max-w-full">
              <span className="material-symbols-outlined text-[18px] shrink-0 text-primary-dark">location_on</span>
              <span className="truncate">Lâm Đồng</span>
              <span className="opacity-50 shrink-0 mx-0.5">|</span>
              <span className="shrink-0">26/12</span>
              <span className="material-symbols-outlined text-[20px] text-text-secondary shrink-0 ml-1">expand_more</span>
            </button>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button className="h-11 w-11 flex items-center justify-center rounded-full bg-gray-50 dark:bg-surface-dark text-slate-900 dark:text-white">
              <span className="material-symbols-outlined text-[26px]">search</span>
            </button>
            <div className="relative">
              <button onClick={() => navigate('/notifications')} className="h-11 w-11 flex items-center justify-center rounded-full bg-red-50 dark:bg-red-900/20 text-red-500">
                <span className="material-symbols-outlined text-[26px] animate-pulse">warning</span>
              </button>
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full ring-2 ring-white dark:ring-background-dark"></span>
            </div>
            <button className="flex items-center justify-center h-11 w-11 rounded-full bg-red-500 text-white shadow-md shadow-red-500/30">
              <span className="material-symbols-outlined text-[24px]">videocam</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto w-full pb-28 bg-[#fdfdfd] dark:bg-background-dark">
        {/* QUICK ACTIONS GRID */}
        <div className="pt-6 pb-2 px-4">
          <div className="grid grid-cols-4 gap-4">
            <button onClick={() => navigate('/scan')} className="flex flex-col items-center gap-2 group active:scale-95 transition-transform">
              <div className="w-14 h-14 rounded-2xl bg-green-50 dark:bg-surface-dark flex items-center justify-center shadow-sm border border-green-100 dark:border-border-dark">
                <span className="material-symbols-outlined text-green-600 text-3xl icon-fill">add_a_photo</span>
              </div>
              <span className="text-[10px] font-bold text-center text-slate-600 dark:text-slate-300 leading-tight">Video<br/>mới</span>
            </button>
            <button onClick={() => setIsAIChatOpen(true)} className="flex flex-col items-center gap-2 group active:scale-95 transition-transform">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-surface-dark flex items-center justify-center shadow-sm border border-blue-100 dark:border-border-dark">
                <span className="material-symbols-outlined text-blue-600 text-3xl icon-fill">smart_toy</span>
              </div>
              <span className="text-[10px] font-bold text-center text-slate-600 dark:text-slate-300 leading-tight">AI<br/>Trợ lý</span>
            </button>
            <button onClick={() => navigate('/regions')} className="flex flex-col items-center gap-2 group active:scale-95 transition-transform">
              <div className="w-14 h-14 rounded-2xl bg-orange-50 dark:bg-surface-dark flex items-center justify-center shadow-sm border border-orange-100 dark:border-border-dark">
                <span className="material-symbols-outlined text-orange-600 text-3xl icon-fill">agriculture</span>
              </div>
              <span className="text-[10px] font-bold text-center text-slate-600 dark:text-slate-300 leading-tight">Trang<br/>trại</span>
            </button>
            <button onClick={() => navigate('/adopt')} className="flex flex-col items-center gap-2 group active:scale-95 transition-transform">
              <div className="w-14 h-14 rounded-2xl bg-purple-50 dark:bg-surface-dark flex items-center justify-center shadow-sm border border-purple-100 dark:border-border-dark">
                <span className="material-symbols-outlined text-purple-600 text-3xl icon-fill">pets</span>
              </div>
              <span className="text-[10px] font-bold text-center text-slate-600 dark:text-slate-300 leading-tight">Nhận<br/>nuôi</span>
            </button>
            <button onClick={() => navigate('/attendance')} className="flex flex-col items-center gap-2 group active:scale-95 transition-transform">
              <div className="w-14 h-14 rounded-2xl bg-teal-50 dark:bg-surface-dark flex items-center justify-center shadow-sm border border-teal-100 dark:border-border-dark">
                <span className="material-symbols-outlined text-teal-600 text-3xl icon-fill">calendar_today</span>
              </div>
              <span className="text-[10px] font-bold text-center text-slate-600 dark:text-slate-300 leading-tight">Chấm<br/>công</span>
            </button>
            <button onClick={() => navigate('/market')} className="flex flex-col items-center gap-2 group active:scale-95 transition-transform">
              <div className="w-14 h-14 rounded-2xl bg-yellow-50 dark:bg-surface-dark flex items-center justify-center shadow-sm border border-yellow-100 dark:border-border-dark">
                <span className="material-symbols-outlined text-yellow-600 text-3xl icon-fill">storefront</span>
              </div>
              <span className="text-[10px] font-bold text-center text-slate-600 dark:text-slate-300 leading-tight">Chợ<br/>nông sản</span>
            </button>
            <button onClick={() => navigate('/optimization')} className="flex items-center gap-3 px-5 col-span-2 h-14 rounded-2xl bg-gray-50 dark:bg-surface-dark shadow-sm border border-gray-100 dark:border-border-dark group active:scale-[0.98] transition-transform">
              <span className="material-symbols-outlined text-slate-600 dark:text-slate-300 text-3xl">settings_remote</span>
              <span className="text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-tight">Điều khiển IoT</span>
            </button>
          </div>
        </div>

        {/* VIDEO SECTION */}
        <div className="pt-6 pb-2 border-t border-gray-50 dark:border-border-dark mt-4">
          <div className="flex items-center justify-between px-4 mb-4">
            <h2 className="text-lg font-black tracking-tight text-slate-900 dark:text-white flex items-center gap-2 font-display uppercase">
              VIDEO THỰC TẾ 🎥
            </h2>
            <button onClick={() => navigate('/regions')} className="text-primary-dark dark:text-primary text-xs font-bold px-3 py-1.5">Xem tất cả</button>
          </div>
          <div className="flex overflow-x-auto hide-scrollbar gap-4 px-4 pb-4">
            <div className="shrink-0 w-[85vw] sm:w-80 flex flex-col gap-2">
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-sm bg-gray-200 border border-gray-100 dark:border-border-dark group cursor-pointer">
                <img alt="Coffee field" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIG_Xv-S6uObfcDO11nZCmAbeCk7VsLa0CbLJRpkH9yE0j3B7jLjWvzIHy4VDA_11BmJNtap1GdpuEfxiY_tDHeVHnPWGwasUUGMGlWWOWMmjo9nlsLwEHBRtYX6gAs4rkog26QC6A4i2O1BfeHeUdi91arON3mfy5nRHDaTn1wD8gOaU6gmSccdajEaqSxllL6w1aOAliAPHqechECWF7xrpUsjOCwG6EC1Na8jeL3xptizV8MBbVAyHBQVfIkaq-qKGIG2QZvo_Z" />
                <div className="absolute top-2.5 left-2.5 flex items-center gap-1 px-2.5 py-1 bg-red-500 text-white text-[9px] font-black rounded-lg">
                  <span className="material-symbols-outlined text-[14px] animate-pulse">sensors</span> LIVE
                </div>
                <div className="absolute bottom-3 left-3 flex flex-col gap-1 text-white">
                   <div className="flex items-center gap-1.5">
                      <span className="size-2 bg-primary rounded-full shadow-glow"></span>
                      <span className="text-[9px] font-black text-primary uppercase tracking-widest">Cảnh báo rỉ sắt</span>
                   </div>
                   <h3 className="font-bold text-lg leading-tight uppercase tracking-tight">Lô cà phê số 12</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MAP SECTION */}
        <div className="px-4 mt-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-black text-slate-900 dark:text-white uppercase font-display flex items-center gap-2">
              BẢN ĐỒ TRANG TRẠI 🗺️
            </h2>
            <button onClick={() => navigate('/map')} className="text-primary-dark font-black text-[10px] bg-primary/10 px-3 py-1.5 rounded-lg flex items-center gap-1 border border-primary/20">
              MỞ BẢN ĐỒ <span className="material-symbols-outlined text-[16px]">open_in_new</span>
            </button>
          </div>
          <div className="w-full bg-[#f6fbf8] dark:bg-surface-dark rounded-[2rem] p-3 border border-green-50 dark:border-border-dark shadow-soft relative overflow-hidden">
            <div className="relative aspect-[16/9] bg-[#eef7f0] dark:bg-[#122016] rounded-2xl overflow-hidden border border-green-100/50 flex items-center justify-center p-4">
               <div className="grid grid-cols-2 grid-rows-2 gap-2 w-full h-full relative">
                  <div className="bg-green-100/80 dark:bg-green-800/40 rounded-xl border-2 border-green-400 flex flex-col items-center justify-center relative">
                     <span className="text-[10px] font-black text-green-800 dark:text-green-100 uppercase tracking-tighter">Khu A</span>
                  </div>
                  <div className="bg-yellow-50/80 dark:bg-yellow-900/30 rounded-xl border-2 border-yellow-400 flex flex-col items-center justify-center relative animate-pulse">
                     <span className="text-[10px] font-black text-yellow-800 dark:text-yellow-100 uppercase tracking-tighter">Khu B 📍</span>
                  </div>
                  <div className="bg-green-100/80 dark:bg-green-800/40 rounded-xl border-2 border-green-400 flex flex-col items-center justify-center relative">
                     <span className="text-[10px] font-black text-green-800 dark:text-green-100 uppercase tracking-tighter">Khu C</span>
                  </div>
                  <div className="bg-blue-50/80 dark:bg-blue-900/30 rounded-xl border-2 border-blue-300 flex items-center justify-center">
                     <span className="text-[10px] font-black text-blue-800 dark:text-blue-100 uppercase tracking-tighter">Hồ nước</span>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* FARM REGIONS SECTION */}
        <div className="px-4 mt-8">
          <div className="flex items-center justify-between mb-4 px-1">
            <h2 className="text-lg font-black text-slate-900 dark:text-white uppercase font-display flex items-center gap-2">
              KHU VỰC CỦA TÔI 🏡
            </h2>
            <button 
              onClick={() => navigate('/regions')} 
              className="text-primary-dark font-black text-[10px] uppercase tracking-widest hover:underline"
            >
              Xem tất cả
            </button>
          </div>
          
          <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2 snap-x">
             {regions.map(r => (
               <div 
                 key={r.id}
                 onClick={() => navigate(`/region/${r.id}`)}
                 className="snap-start shrink-0 w-44 bg-white dark:bg-surface-dark rounded-[2.2rem] p-5 border border-gray-100 dark:border-border-dark shadow-soft group hover:shadow-deep active:scale-95 transition-all cursor-pointer"
               >
                  <div className={`size-14 rounded-2xl ${r.color.replace('text', 'bg')}/10 flex items-center justify-center ${r.color} mb-4 shadow-inner`}>
                     <span className="material-symbols-outlined text-[32px] icon-fill">
                       {r.icon}
                     </span>
                  </div>
                  <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight truncate">{r.name}</h4>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1 mb-4">{r.type}</p>
                  
                  <div className="flex items-center justify-between">
                     <span className={`text-[9px] font-black px-2 py-1 rounded-lg uppercase tracking-tighter ${
                       r.status === 'Tốt' ? 'bg-green-50 text-green-600' : 'bg-amber-50 text-amber-600'
                     }`}>
                       {r.status}
                     </span>
                     <button className="size-8 rounded-lg bg-gray-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-[18px]">edit</span>
                     </button>
                  </div>
               </div>
             ))}
          </div>
        </div>

        {/* AI ANALYSIS SECTION WITH FILTER */}
        <div className="px-4 mt-8 mb-12">
          <div className="flex flex-col gap-4 mb-5">
            <h2 className="text-lg font-black text-slate-900 dark:text-white uppercase font-display">GỢI Ý RIÊNG - PHÂN TÍCH AI ✨</h2>
            
            {/* Filter Chips */}
            <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1">
              {[
                { id: 'all', label: 'Tất cả' },
                { id: 'pending', label: 'Chờ xử lý' },
                { id: 'completed', label: 'Đã hoàn thành' }
              ].map(f => (
                <button 
                  key={f.id}
                  onClick={() => setAiFilter(f.id as any)}
                  className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border shrink-0 ${
                    aiFilter === f.id 
                      ? 'bg-slate-900 text-white border-slate-900 shadow-lg' 
                      : 'bg-white dark:bg-slate-800 text-slate-400 border-gray-100 dark:border-slate-700 hover:bg-gray-50'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {filteredInsights.length > 0 ? filteredInsights.map((insight) => (
              <div key={insight.id} className="bg-white dark:bg-surface-dark rounded-[2.5rem] p-6 border border-primary/20 dark:border-border-dark shadow-soft relative overflow-hidden group animate-in slide-in-from-bottom-4 duration-500">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full -mr-4 -mt-4 z-0"></div>
                <div className="flex flex-col gap-5 relative z-10">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">{insight.title}</h3>
                      <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-widest">Phát hiện: {insight.time}</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-2xl font-black text-primary-dark dark:text-primary tracking-tighter">{insight.match}%</span>
                      <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">PHÙ HỢP</span>
                    </div>
                  </div>

                  <div className={`flex items-start gap-4 p-5 rounded-3xl border ${
                    insight.status === 'completed' 
                      ? 'bg-green-50/50 dark:bg-green-900/10 border-green-100 dark:border-green-900/20' 
                      : 'bg-gray-50 dark:bg-background-dark/50 border-gray-100 dark:border-border-dark'
                  }`}>
                    <div className={`size-11 rounded-full flex items-center justify-center shrink-0 shadow-glow ${
                      insight.status === 'completed' ? 'bg-green-500' : 'bg-primary'
                    }`}>
                      <span className="material-symbols-outlined text-white text-[24px] icon-fill">{insight.icon}</span>
                    </div>
                    <p 
                      className={`text-[14px] leading-relaxed font-bold ${
                        insight.status === 'completed' ? 'text-slate-500 dark:text-slate-400 italic' : 'text-slate-700 dark:text-slate-300'
                      }`}
                      dangerouslySetInnerHTML={{ __html: insight.desc }}
                    />
                  </div>

                  {insight.status === 'pending' && (
                    <div className="grid grid-cols-2 gap-4 mt-1">
                      <button className="flex items-center justify-center gap-2 py-4 px-4 bg-primary text-slate-900 rounded-2xl font-black text-[11px] uppercase tracking-widest shadow-glow active:scale-95 transition-all">
                        <span className="material-symbols-outlined text-[18px]">check_circle</span> Đã làm
                      </button>
                      <button onClick={() => navigate('/scan')} className="flex items-center justify-center gap-2 py-4 px-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-gray-200 dark:border-border-dark rounded-2xl font-black text-[11px] uppercase tracking-widest shadow-soft active:scale-95 transition-all">
                        <span className="material-symbols-outlined text-[18px]">add_a_photo</span> Chụp ảnh
                      </button>
                    </div>
                  )}

                  <button 
                    onClick={() => insight.status === 'pending' ? navigate('/live') : null}
                    className={`flex items-center justify-center gap-2 py-2 font-black text-[11px] uppercase tracking-widest transition-all ${
                      insight.status === 'completed' ? 'text-slate-300 cursor-default' : 'text-primary-dark dark:text-primary hover:underline'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[20px]">{insight.status === 'completed' ? 'verified' : 'videocam'}</span>
                    {insight.status === 'completed' ? 'Đã xác nhận hoàn tất' : 'Mở LIVE để AI xác nhận lại'}
                  </button>
                </div>
              </div>
            )) : (
              <div className="py-12 flex flex-col items-center justify-center text-center opacity-40">
                <span className="material-symbols-outlined text-[64px] mb-4">search_off</span>
                <p className="text-[10px] font-black uppercase tracking-[0.2em]">Không tìm thấy gợi ý nào</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomeView;
