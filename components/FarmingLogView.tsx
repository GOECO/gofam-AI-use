
import React from 'react';
import { useNavigate } from 'react-router-dom';

const FarmingLogView: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col flex-1 animate-in fade-in duration-500 bg-background-light min-h-screen">
      {/* HEADER STICKY */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-soft">
        <div className="flex items-center justify-between px-4 pt-5 pb-3">
          <button 
            onClick={() => navigate(-1)}
            className="flex size-10 items-center justify-center rounded-full hover:bg-black/5 active:scale-95 transition-all text-slate-900"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div className="flex flex-col items-center">
            <h2 className="text-slate-900 text-lg font-black leading-tight font-display tracking-tight">Nhật ký Canh tác</h2>
            <span className="text-[9px] text-slate-400 font-black uppercase tracking-widest">Vườn Ổi Lô 2 • Vụ mùa 2024</span>
          </div>
          <button className="flex size-10 items-center justify-center rounded-full hover:bg-black/5 active:scale-95 transition-all text-slate-900">
            <span className="material-symbols-outlined">more_horiz</span>
          </button>
        </div>

        {/* SEARCH BAR */}
        <div className="px-5 pb-3">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-slate-300 text-[20px] group-focus-within:text-primary transition-colors">search</span>
            </div>
            <input 
              className="block w-full pl-11 pr-11 py-3 border-none rounded-2xl bg-gray-50 shadow-inner-soft ring-1 ring-gray-100 focus:ring-2 focus:ring-primary/40 text-sm font-bold text-slate-800 placeholder:text-slate-300 transition-all" 
              placeholder="Tìm hoạt động, vật tư, người làm..." 
              type="text"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <button className="p-1.5 rounded-xl hover:bg-gray-200 text-slate-400 hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-[20px]">tune</span>
              </button>
            </div>
          </div>
        </div>

        {/* CHIP FILTERS */}
        <div className="flex gap-2 px-5 pb-4 overflow-x-auto hide-scrollbar w-full">
          <button className="flex shrink-0 items-center gap-x-1.5 rounded-xl bg-slate-900 text-white px-5 py-2 text-[10px] font-black uppercase tracking-widest shadow-lg active:scale-95 transition-all">
            <span>Tất cả</span>
          </button>
          {[
            { label: 'Khu vực', icon: 'location_on' },
            { label: 'Loại hoạt động', icon: 'category' },
            { label: 'Thời gian', icon: 'calendar_month' }
          ].map((filter) => (
            <button key={filter.label} className="flex shrink-0 items-center gap-x-1 rounded-xl bg-white border border-gray-100 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-slate-400 shadow-soft hover:border-primary/50 active:scale-95 transition-all group">
              <span className="material-symbols-outlined text-[16px] group-hover:text-primary">{filter.icon}</span>
              <span>{filter.label}</span>
              <span className="material-symbols-outlined text-[16px]">arrow_drop_down</span>
            </button>
          ))}
        </div>
      </div>

      {/* TIMELINE CONTENT */}
      <div className="flex-1 flex flex-col px-5 pt-6 pb-32">
        {/* DATE DIVIDER: TODAY */}
        <div className="flex items-center gap-4 mb-6">
          <div className="text-[10px] font-black text-white bg-primary px-3 py-1 rounded-lg shadow-glow uppercase tracking-widest">Hôm nay</div>
          <div className="h-px flex-1 bg-gray-100"></div>
          <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest">15 Thg 6, 2024</div>
        </div>

        {/* LOG CARD 1: PEST CONTROL */}
        <div className="grid grid-cols-[48px_1fr] gap-x-4">
          <div className="flex flex-col items-center pt-1 relative">
            <div className="flex items-center justify-center size-10 rounded-2xl bg-red-50 text-red-600 z-10 border border-red-100 shadow-soft">
              <span className="material-symbols-outlined text-[22px] icon-fill">pest_control</span>
            </div>
            <div className="w-[2px] bg-gray-100 h-full absolute top-10 bottom-0 -z-0"></div>
          </div>
          <div className="flex flex-col pb-8">
            <div className="bg-white rounded-3xl p-5 shadow-deep border border-gray-50 relative overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-red-500"></div>
              <div className="flex justify-between items-start gap-3">
                <div className="flex-1">
                  <h3 className="text-slate-900 text-base font-black leading-tight tracking-tight">Phun thuốc trừ sâu</h3>
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    <span className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-gray-50 border border-gray-100 text-[9px] font-black text-slate-500 uppercase">
                      <span className="material-symbols-outlined text-[14px]">location_on</span>
                      Vườn Ổi Lô 2
                    </span>
                    <span className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-red-50 text-red-600 border border-red-100 text-[9px] font-black uppercase">
                      <span className="material-symbols-outlined text-[14px] icon-fill">warning</span>
                      Rệp sáp
                    </span>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="block text-xs font-black text-slate-900 font-mono">09:30</span>
                  <span className="text-[8px] text-slate-400 font-black uppercase tracking-widest">Sáng</span>
                </div>
              </div>
              
              <hr className="my-4 border-gray-100 border-dashed"/>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded-xl bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100">
                    <span className="material-symbols-outlined text-[16px] text-slate-400 icon-fill">person</span>
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="text-[8px] text-slate-300 font-black uppercase mb-1">Thực hiện</span>
                    <span className="text-[11px] text-slate-800 font-black">Nguyễn Văn Nam</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                    <span className="material-symbols-outlined text-[16px] text-info icon-fill">science</span>
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="text-[8px] text-slate-300 font-black uppercase mb-1">Vật tư</span>
                    <span className="text-[11px] text-slate-800 font-black">Bio-B (200ml)</span>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-gray-50 rounded-2xl border border-gray-100 mb-4">
                <p className="text-[11px] text-slate-600 font-bold leading-relaxed">
                  <span className="font-black text-slate-900 mr-1 uppercase text-[10px]">Ghi chú:</span> 
                  Phát hiện rệp sáp mật độ cao trên lá non, đã xử lý cục bộ và phun phòng ngừa diện rộng.
                </p>
              </div>

              <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1">
                <div className="relative size-16 shrink-0 rounded-2xl overflow-hidden border border-gray-100 shadow-soft group/img">
                  <img className="w-full h-full object-cover transition-transform group-hover/img:scale-110" src="https://images.unsplash.com/photo-1597389880944-214873954a48?q=80&w=200&auto=format&fit=crop" />
                </div>
                <div className="relative size-16 shrink-0 rounded-2xl overflow-hidden border border-gray-100 bg-gray-50 flex items-center justify-center text-slate-300">
                  <span className="material-symbols-outlined">image</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* LOG CARD 2: IRRIGATION */}
        <div className="grid grid-cols-[48px_1fr] gap-x-4">
          <div className="flex flex-col items-center pt-1 relative">
            <div className="flex items-center justify-center size-10 rounded-2xl bg-blue-50 text-info z-10 border border-blue-100 shadow-soft">
              <span className="material-symbols-outlined text-[22px] icon-fill">water_drop</span>
            </div>
            <div className="w-[2px] bg-gray-100 h-full absolute top-10 bottom-0 -z-0"></div>
          </div>
          <div className="flex flex-col pb-8">
            <div className="bg-white rounded-3xl p-5 shadow-deep border border-gray-50 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-info"></div>
              <div className="flex justify-between items-start gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-slate-900 text-base font-black leading-tight tracking-tight">Tưới nhỏ giọt</h3>
                    <span className="px-2 py-0.5 rounded-lg bg-info/10 text-[8px] font-black text-info border border-info/20 uppercase tracking-widest shadow-inner">IoT Auto</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-gray-50 border border-gray-100 text-[9px] font-black text-slate-500 uppercase">
                      <span className="material-symbols-outlined text-[14px]">location_on</span>
                      Toàn bộ Farm
                    </span>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="block text-xs font-black text-slate-900 font-mono">07:00</span>
                  <span className="text-[8px] text-slate-400 font-black uppercase tracking-widest">Sáng</span>
                </div>
              </div>
              
              <hr className="my-4 border-gray-100 border-dashed"/>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded-xl bg-cyan-50 flex items-center justify-center shrink-0 border border-cyan-100">
                    <span className="material-symbols-outlined text-[16px] text-cyan-600 icon-fill">sensors</span>
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="text-[8px] text-slate-300 font-black uppercase mb-1">Độ ẩm kích hoạt</span>
                    <span className="text-[11px] text-slate-800 font-black">65% <span className="opacity-40 font-bold ml-0.5">RH</span></span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                    <span className="material-symbols-outlined text-[16px] text-info icon-fill">opacity</span>
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="text-[8px] text-slate-300 font-black uppercase mb-1">Lượng nước</span>
                    <span className="text-[11px] text-slate-800 font-black">1,200 <span className="opacity-40 font-bold ml-0.5">Lít</span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DATE DIVIDER: YESTERDAY */}
        <div className="flex items-center gap-4 mb-6 mt-2">
          <div className="text-[10px] font-black text-slate-400 bg-gray-100 px-3 py-1 rounded-lg uppercase tracking-widest">Hôm qua</div>
          <div className="h-px flex-1 bg-gray-100"></div>
          <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest">14 Thg 6, 2024</div>
        </div>

        {/* LOG CARD 3: FERTILIZING */}
        <div className="grid grid-cols-[48px_1fr] gap-x-4">
          <div className="flex flex-col items-center pt-1 relative">
            <div className="flex items-center justify-center size-10 rounded-2xl bg-green-50 text-primary-dark z-10 border border-green-100 shadow-soft">
              <span className="material-symbols-outlined text-[22px] icon-fill">compost</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="bg-white rounded-3xl p-5 shadow-deep border border-gray-50 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary"></div>
              <div className="flex justify-between items-start gap-3">
                <div className="flex-1">
                  <h3 className="text-slate-900 text-base font-black leading-tight tracking-tight">Bón phân NPK</h3>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-gray-50 border border-gray-100 text-[9px] font-black text-slate-500 uppercase">
                      <span className="material-symbols-outlined text-[14px]">location_on</span>
                      Nhà màng 1
                    </span>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="block text-xs font-black text-slate-900 font-mono">16:00</span>
                  <span className="text-[8px] text-slate-400 font-black uppercase tracking-widest">Chiều</span>
                </div>
              </div>
              
              <hr className="my-4 border-gray-100 border-dashed"/>
              
              <div className="grid grid-cols-2 gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded-xl bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100">
                    <span className="material-symbols-outlined text-[16px] text-slate-400 icon-fill">person</span>
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="text-[8px] text-slate-300 font-black uppercase mb-1">Thực hiện</span>
                    <span className="text-[11px] text-slate-800 font-black">Lê Thị B</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded-xl bg-amber-50 flex items-center justify-center shrink-0 border border-amber-100">
                    <span className="material-symbols-outlined text-[16px] text-amber-600 icon-fill">spa</span>
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="text-[8px] text-slate-300 font-black uppercase mb-1">Vật tư</span>
                    <span className="text-[11px] text-slate-800 font-black">NPK 20-20-15</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-2 text-slate-500 italic">
                <span className="material-symbols-outlined text-[16px] text-slate-300">edit_note</span>
                <p className="text-[11px] font-bold leading-tight">Bón thúc đợt 2 cho dưa lưới, kết hợp xới đất nhẹ.</p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SPACER */}
        <div className="flex items-center gap-4 my-12 opacity-30">
           <div className="h-px flex-1 bg-slate-200"></div>
           <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Hết danh sách</span>
           <div className="h-px flex-1 bg-slate-200"></div>
        </div>
      </div>

      {/* FLOATING ACTION BUTTON */}
      <div className="fixed bottom-28 right-6 z-40">
        <button className="flex items-center justify-center size-16 rounded-[2rem] bg-primary text-slate-900 shadow-glow active:scale-90 transition-all cursor-pointer group">
          <span className="material-symbols-outlined text-[32px] font-black group-hover:rotate-90 transition-transform duration-300">add</span>
        </button>
      </div>
    </div>
  );
};

export default FarmingLogView;
