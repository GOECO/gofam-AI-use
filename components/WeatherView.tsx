
import React from 'react';
import { useNavigate } from 'react-router-dom';

const WeatherView: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col flex-1 animate-in fade-in duration-500 bg-background-light min-h-screen font-sans">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md px-4 py-4 flex items-center justify-between border-b border-gray-100 shadow-soft shrink-0">
        <button 
          onClick={() => navigate(-1)}
          className="flex size-10 items-center justify-center rounded-full hover:bg-black/5 active:scale-95 transition-all text-slate-900"
        >
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </button>
        <div className="flex flex-col items-center">
          <h2 className="text-slate-900 text-lg font-black leading-tight tracking-tight font-display">Thời tiết Farm</h2>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="size-1.5 bg-primary rounded-full animate-pulse"></span>
            <span className="text-[9px] font-black text-primary-dark uppercase tracking-widest">Pro Mode</span>
          </div>
        </div>
        <button className="flex size-10 items-center justify-center rounded-full hover:bg-black/5 active:scale-95 transition-all text-slate-900">
          <span className="material-symbols-outlined text-[24px]">tune</span>
        </button>
      </header>

      {/* LOCATION & SOURCE SELECTOR */}
      <div className="px-5 py-4 bg-white border-b border-gray-100 shrink-0">
        <button className="flex w-full items-center justify-between rounded-2xl bg-gray-50 border border-gray-100 p-4 hover:bg-gray-100 transition-colors mb-4 group shadow-inner-soft">
          <div className="flex items-center gap-4">
            <div className="size-11 flex items-center justify-center rounded-full bg-primary/20 text-primary-dark shadow-sm">
              <span className="material-symbols-outlined text-[22px] icon-fill">location_on</span>
            </div>
            <div className="text-left min-w-0">
              <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest">Khu vực canh tác</p>
              <p className="text-slate-900 text-sm font-black truncate tracking-tight">Trang trại Cà phê Đắk Lắk</p>
            </div>
          </div>
          <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">expand_more</span>
        </button>
        
        <div className="flex p-1 bg-gray-100 rounded-xl overflow-hidden shadow-inner-soft">
          <button className="flex-1 py-2 text-[10px] font-black rounded-lg bg-white shadow-sm text-slate-900 border border-gray-200 uppercase tracking-widest">Tổng hợp AI</button>
          <button className="flex-1 py-2 text-[10px] font-black text-slate-400 hover:text-slate-600 transition-colors uppercase tracking-widest">ECMWF</button>
          <button className="flex-1 py-2 text-[10px] font-black text-slate-400 hover:text-slate-600 transition-colors uppercase tracking-widest">GFS</button>
          <button className="flex-1 py-2 text-[10px] font-black text-slate-400 hover:text-slate-600 transition-colors uppercase tracking-widest">ICON</button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto hide-scrollbar pb-32">
        {/* MAIN WEATHER CARD */}
        <div className="p-5">
          <div className="relative rounded-[3rem] overflow-hidden shadow-deep group h-80">
            <img 
              className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-1000" 
              src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?q=80&w=800&auto=format&fit=crop" 
              alt="Weather background" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80"></div>
            
            <div className="relative z-10 w-full h-full p-8 flex flex-col justify-between text-white">
              <div className="flex justify-between items-start">
                <div>
                  <div className="inline-flex items-center gap-2 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full mb-3 border border-white/10 shadow-lg">
                    <span className="size-2 bg-green-500 rounded-full animate-pulse shadow-glow"></span>
                    <span className="text-[10px] font-black uppercase tracking-widest">Dữ liệu thực - IoT Sensor #04</span>
                  </div>
                  <p className="text-white/80 text-[10px] font-black uppercase tracking-widest mb-1">15:30, 15 Th04</p>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-3xl icon-fill animate-float">wb_sunny</span>
                    <span className="text-xl font-black tracking-tight">Nắng đẹp</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-7xl font-black tracking-tighter leading-none font-display">28°</p>
                  <div className="flex items-center justify-end gap-2 mt-2 font-black text-[10px] uppercase tracking-widest opacity-80">
                    <span>Thấp 22°</span>
                    <span className="w-px h-3 bg-white/30"></span>
                    <span>Cao 31°</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mt-auto">
                {[
                  { icon: 'water_drop', label: 'Độ ẩm', val: '75%', color: 'text-primary' },
                  { icon: 'air', label: 'Gió', val: '15 km/h', color: 'text-primary' },
                  { icon: 'rainy', label: 'Lượng mưa', val: '0 mm', color: 'text-primary' },
                  { icon: 'compress', label: 'Áp suất', val: '1012 hPa', color: 'text-amber-400' },
                  { icon: 'light_mode', label: 'UV Index', val: '8.5 Cao', color: 'text-orange-400' },
                  { icon: 'potted_plant', label: 'Đất', val: '62%', color: 'text-emerald-400' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-md rounded-[1.5rem] p-3 border border-white/10 flex flex-col items-center gap-1.5">
                    <div className="flex items-center gap-1">
                      <span className={`material-symbols-outlined ${item.color} text-[14px] icon-fill`}>{item.icon}</span>
                      <span className="text-[8px] text-white/60 uppercase font-black tracking-widest">{item.label}</span>
                    </div>
                    <span className="text-xs font-black tracking-tight">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 24H FORECAST */}
        <div className="mb-8">
          <div className="px-6 pb-4 flex justify-between items-end">
            <h3 className="text-lg font-black text-slate-900 tracking-tight font-display">Chi tiết 24h tới</h3>
            <div className="flex gap-4 text-[9px] font-black uppercase tracking-widest text-slate-400">
              <span className="flex items-center gap-1.5"><span className="size-2 rounded-sm bg-blue-500"></span> Mưa</span>
              <span className="flex items-center gap-1.5"><span className="size-2 rounded-sm bg-yellow-400"></span> Nắng</span>
            </div>
          </div>
          <div className="flex gap-3 overflow-x-auto px-6 pb-2 hide-scrollbar snap-x">
            {[
              { time: 'Bây giờ', icon: 'wb_sunny', temp: '28°', uv: 'UV 8', rain: '0%', fill: '80%', type: 'sun', active: true },
              { time: '14:00', icon: 'partly_cloudy_day', temp: '29°', rain: '10%', fill: '10%', type: 'rain' },
              { time: '15:00', icon: 'cloud', temp: '28°', rain: '30%', fill: '30%', type: 'rain' },
              { time: '16:00', icon: 'rainy', temp: '27°', rain: '2.1mm', fill: '60%', type: 'rain', warning: true },
              { time: '17:00', icon: 'thunderstorm', temp: '26°', rain: '5.4mm', fill: '85%', type: 'rain', warning: true },
              { time: '18:00', icon: 'cloud', temp: '25°', rain: '20%', fill: '20%', type: 'rain' }
            ].map((item, i) => (
              <div key={i} className={`flex flex-col items-center justify-between gap-1 rounded-[1.8rem] min-w-[76px] h-36 py-4 shadow-soft border transition-all snap-center relative overflow-hidden ${
                item.active 
                  ? 'bg-slate-900 text-white border-slate-900 shadow-glow z-10' 
                  : 'bg-white text-slate-900 border-gray-100 hover:border-primary/20'
              }`}>
                <p className={`text-[10px] font-black uppercase tracking-widest ${item.active ? 'text-primary' : 'text-slate-400'}`}>{item.time}</p>
                <span className={`material-symbols-outlined text-[26px] ${item.warning ? 'text-blue-500 animate-pulse' : (item.type === 'sun' ? 'text-yellow-400' : 'text-slate-300')}`}>{item.icon}</span>
                <p className="text-base font-black tracking-tighter">{item.temp}</p>
                <div className="w-full h-8 absolute bottom-0 flex items-end justify-center">
                   <div className={`w-full transition-all duration-1000 ${item.type === 'sun' ? 'bg-yellow-400/20' : 'bg-blue-500/20'}`} style={{height: item.fill}}></div>
                </div>
                <p className={`text-[9px] font-black uppercase tracking-tighter z-10 ${item.warning ? 'text-blue-500' : (item.active ? 'text-white/60' : 'text-slate-300')}`}>{item.uv || item.rain}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RISK ANALYSIS SECTION */}
        <div className="px-5 py-2">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-black text-slate-900 tracking-tight font-display">Phân tích Rủi ro</h3>
              <span className="bg-primary/10 text-primary-dark text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-primary/20">AI Insight</span>
            </div>
            <button className="text-primary-dark text-[10px] font-black uppercase tracking-widest hover:underline">Xem bản đồ</button>
          </div>

          <div className="bg-white rounded-[2.5rem] shadow-deep border border-gray-100 overflow-hidden mb-5">
            <div className="p-6 border-b border-gray-50 flex justify-between items-start">
              <div className="flex items-start gap-4">
                <div className="size-12 rounded-2xl bg-red-50 flex items-center justify-center shrink-0 border border-red-100">
                  <span className="material-symbols-outlined text-red-500 text-[24px] icon-fill">ac_unit</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-slate-900 font-black text-base tracking-tight">Cảnh báo Sương muối</h4>
                    <span className="px-2 py-0.5 rounded-lg bg-red-600 text-white text-[8px] font-black uppercase tracking-widest shadow-sm">Nguy cấp</span>
                  </div>
                  <p className="text-slate-400 text-[10px] font-black uppercase mt-1 tracking-widest">Dự báo 04:00 - 06:00 sáng mai</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-3xl font-black text-red-600 tracking-tighter">95%</p>
                <p className="text-[8px] text-slate-400 uppercase font-black tracking-widest">Khả năng</p>
              </div>
            </div>
            <div className="p-6 bg-gray-50/50">
              <p className="text-[9px] font-black text-slate-300 mb-4 uppercase tracking-widest">Biểu đồ nhiệt độ sáng mai (°C)</p>
              <div className="flex items-end justify-between h-20 gap-3 mb-5 px-2">
                {[
                  { temp: 8, time: '02:00', h: '80%', c: 'bg-green-200' },
                  { temp: 5, time: '03:00', h: '50%', c: 'bg-yellow-200' },
                  { temp: 2, time: '04:00', h: '25%', c: 'bg-red-400 animate-pulse', active: true },
                  { temp: 1, time: '05:00', h: '15%', c: 'bg-red-500 animate-pulse', active: true },
                  { temp: 4, time: '06:00', h: '40%', c: 'bg-yellow-200' }
                ].map((bar, i) => (
                  <div key={i} className="flex flex-col items-center flex-1 gap-2">
                    <span className={`text-[10px] font-black ${bar.active ? 'text-red-600' : 'text-slate-400'}`}>{bar.temp}°</span>
                    <div className={`w-full rounded-t-lg transition-all duration-1000 ${bar.c}`} style={{height: bar.h}}></div>
                    <span className={`text-[9px] font-black uppercase tracking-tighter ${bar.active ? 'text-red-600' : 'text-slate-300'}`}>{bar.time}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-3">
                <button className="flex-1 bg-white border border-gray-100 text-slate-900 text-[10px] font-black uppercase tracking-widest py-3 rounded-2xl shadow-soft hover:bg-gray-50 active:scale-95 transition-all">Chi tiết</button>
                <button className="flex-1 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest py-3 rounded-2xl shadow-lg shadow-red-200 hover:bg-red-700 active:scale-95 transition-all flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">shield</span>
                  Giải pháp
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[2rem] shadow-soft border border-gray-100 border-l-[6px] border-l-amber-500 p-5 flex gap-4 items-center group cursor-pointer hover:shadow-deep transition-all">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="material-symbols-outlined text-amber-500 text-[20px] icon-fill">pest_control</span>
                <h4 className="text-slate-900 font-black text-[13px] tracking-tight uppercase tracking-widest">Nguy cơ sâu bệnh (Nấm)</h4>
              </div>
              <p className="text-slate-400 text-[11px] font-bold leading-relaxed mb-3">Độ ẩm &gt;80% kéo dài 3 ngày tới.</p>
              <div className="w-full h-2 bg-gray-50 rounded-full overflow-hidden shadow-inner">
                <div className="h-full bg-gradient-to-r from-green-400 via-amber-400 to-red-500 w-[65%] rounded-full shadow-glow"></div>
              </div>
              <div className="flex justify-between mt-1.5 text-[8px] font-black uppercase tracking-widest text-slate-300">
                <span>Thấp</span>
                <span className="text-amber-500">Trung bình</span>
                <span>Cao</span>
              </div>
            </div>
            <button className="shrink-0 size-10 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center group-hover:bg-amber-100 transition-colors">
              <span className="material-symbols-outlined text-[20px]">chevron_right</span>
            </button>
          </div>
        </div>

        {/* 10-DAY FORECAST */}
        <div className="px-5 py-6">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-lg font-black text-slate-900 tracking-tight font-display">Dự báo 10 Ngày</h3>
            <button className="text-primary-dark text-[10px] font-black uppercase tracking-widest bg-primary/10 px-4 py-2 rounded-full border border-primary/20">Chi tiết nông vụ</button>
          </div>
          
          <div className="space-y-3">
            {[
              { day: 'Hôm nay', date: '15/04', icon: 'rainy', ic: 'text-blue-500', tH: '28°', tL: '22°', rain: '40%', hum: '82%', wind: '15km', dir: 'Đông Nam', active: true },
              { day: 'Thứ 3', date: '16/04', icon: 'sunny', ic: 'text-yellow-400', tH: '31°', tL: '24°', rain: '0%', hum: '65%', wind: '12km', dir: 'Đông' },
              { day: 'Thứ 4', date: '17/04', icon: 'partly_cloudy_day', ic: 'text-amber-400', tH: '30°', tL: '23°', rain: '10%', hum: '70%', wind: '10km', dir: 'Đông Nam' },
              { day: 'Thứ 5', date: '18/04', icon: 'cloud', ic: 'text-slate-300', tH: '27°', tL: '21°', rain: '60%', hum: '85%', wind: '18km', dir: 'Đông Nam' }
            ].map((day, idx) => (
              <div key={idx} className={`grid grid-cols-12 gap-3 items-center p-4 rounded-3xl transition-all border ${
                day.active 
                  ? 'bg-primary/5 border-primary/20 shadow-soft' 
                  : 'bg-white border-gray-50 hover:bg-gray-50'
              }`}>
                <div className="col-span-3">
                  <p className="text-slate-900 font-black text-[13px] tracking-tight">{day.day}</p>
                  <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest">{day.date}</p>
                </div>
                <div className="col-span-3 flex items-center justify-center gap-3">
                  <span className={`material-symbols-outlined text-[24px] ${day.ic} icon-fill`}>{day.icon}</span>
                  <div className="flex flex-col items-center">
                    <span className="text-sm font-black text-slate-900">{day.tH}</span>
                    <span className="text-[10px] text-slate-300 font-black">{day.tL}</span>
                  </div>
                </div>
                <div className="col-span-3 flex flex-col items-center justify-center">
                  <div className="flex items-center gap-1 text-blue-500 font-black text-[11px] uppercase tracking-tighter">
                    <span className="material-symbols-outlined text-[12px] icon-fill">water_drop</span> {day.rain}
                  </div>
                  <span className="text-[8px] text-slate-300 font-black uppercase tracking-widest mt-0.5">Ẩm {day.hum}</span>
                </div>
                <div className="col-span-3 text-right">
                  <p className="text-[11px] font-black text-slate-900 tracking-tighter">{day.wind}<span className="text-[8px] font-bold text-slate-300 ml-0.5 uppercase">km/h</span></p>
                  <p className="text-[8px] text-slate-400 font-black uppercase tracking-widest">{day.dir}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI TIPS BANNER */}
        <div className="px-5 py-2 mb-10">
          <div className="bg-gradient-to-br from-primary/10 to-emerald-50 rounded-[2rem] p-6 border border-primary/20 flex items-start gap-4 shadow-soft">
            <div className="size-12 bg-white rounded-2xl shadow-glow flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-primary-dark text-[24px] icon-fill animate-float">tips_and_updates</span>
            </div>
            <div>
              <p className="text-primary-dark font-black text-[11px] uppercase tracking-widest mb-1.5 flex items-center gap-2">
                <span className="size-2 bg-primary rounded-full animate-pulse"></span>
                Lời khuyên nông vụ (AI)
              </p>
              <p className="text-slate-600 text-xs font-bold leading-relaxed">
                Cửa sổ phun thuốc tối ưu: <span className="text-slate-900 font-black">14:00 - 16:00 ngày mai</span>. Thời tiết khô ráo, gió nhẹ, hiệu quả thuốc tăng 20%.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherView;
