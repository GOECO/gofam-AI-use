
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MapView: React.FC = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(true);
  const [activeFilter, setActiveFilter] = useState('Sức khỏe');

  const filters = [
    { id: 'health', label: 'Sức khỏe', icon: 'spa', color: 'text-primary' },
    { id: 'humidity', label: 'Độ ẩm', icon: 'water_drop', color: 'text-blue-500' },
    { id: 'temp', label: 'Nhiệt độ', icon: 'thermometer', color: 'text-red-500' },
    { id: 'terrain', label: 'Địa hình', icon: 'terrain', color: 'text-purple-500' },
  ];

  return (
    <div className="flex flex-col flex-1 h-screen animate-in fade-in duration-500 overflow-hidden w-full max-w-md mx-auto bg-background-light relative">
      {/* TOP APP BAR */}
      <header className="flex items-center bg-white p-4 pb-2 pt-6 justify-between z-20 shadow-sm shrink-0">
        <button 
          onClick={() => navigate(-1)}
          className="text-slate-900 flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 transition-colors active:scale-90"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-slate-900 text-lg font-black leading-tight tracking-tight flex-1 text-center font-display uppercase">
          Bản đồ Trang trại
        </h2>
        <div className="flex w-10 items-center justify-end">
          <button className="flex size-10 items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-slate-900">
            <span className="material-symbols-outlined">layers</span>
          </button>
        </div>
      </header>

      {/* MAIN MAP CONTAINER */}
      <div className="relative flex-1 w-full bg-gray-200 overflow-hidden">
        {/* Map Background */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-[10000ms] hover:scale-110" 
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAUDYOudDbeazvcDylzsQ8VHOELyC9FWlF3X0pvARgshz2Wavmr4S0O-HORAQ0iljbBmc5oR-OCAtCKIoW8Y_CHsHrK0nPGsnD23q-_RpdYzuN5j49BYaQOSQU-VzvecU7QyGwEd2q3mZ_eN1SoD8Bqg4WHBEdrn3Zu0smfc-zZ2i38io6eepPqRNgancFkSBo0sthgBnYJyJSxHdSFs7Qaj8q5DC2uL5N2pc_ovbzpwDQqIdU95nkwYrYLX3dIK4iibV5h-HeHxKFI")' }}
        />
        
        {/* Map Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent pointer-events-none"></div>

        {/* Floating Search Bar */}
        <div className="absolute top-4 left-4 right-4 z-10">
          <div className="flex w-full items-center bg-white/95 backdrop-blur-md rounded-2xl shadow-deep h-14 px-5 transition-all ring-1 ring-black/5 focus-within:ring-primary/40">
            <span className="material-symbols-outlined text-slate-400 mr-3">search</span>
            <input 
              className="flex-1 bg-transparent border-none focus:ring-0 p-0 text-sm font-bold text-slate-900 placeholder:text-slate-300" 
              placeholder="Tìm kiếm lô đất, thiết bị..."
            />
            <button className="p-2 rounded-xl hover:bg-gray-100 text-slate-500">
              <span className="material-symbols-outlined">tune</span>
            </button>
          </div>
        </div>

        {/* Filter Chips */}
        <div className="absolute top-24 left-0 right-0 z-10 overflow-x-auto hide-scrollbar px-4 pb-2 flex gap-3 snap-x">
          {filters.map((f) => (
            <button 
              key={f.id}
              onClick={() => setActiveFilter(f.label)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full shadow-lg backdrop-blur-md whitespace-nowrap transition-all snap-start border ${
                activeFilter === f.label 
                  ? 'bg-primary text-slate-900 border-primary-dark/20 font-black shadow-glow' 
                  : 'bg-white/90 text-slate-500 border-white/20 font-bold hover:bg-white'
              }`}
            >
              <span className={`material-symbols-outlined text-[20px] ${activeFilter === f.label ? 'icon-fill' : f.color}`}>{f.icon}</span>
              <span className="text-[10px] uppercase tracking-widest">{f.label}</span>
            </button>
          ))}
        </div>

        {/* Map Zone Markers */}
        {/* Zone A: Healthy */}
        <div className="absolute top-[32%] left-[15%] w-36 h-28 border-2 border-primary/60 bg-primary/10 rounded-[2rem] flex items-center justify-center rotate-3 cursor-pointer group hover:bg-primary/20 transition-all backdrop-blur-[1px]">
          <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-soft scale-90 group-hover:scale-105 transition-transform border border-white/20">
            <span className="text-[10px] font-black text-slate-900 whitespace-nowrap uppercase tracking-widest">Khu A • Tốt</span>
          </div>
        </div>

        {/* Zone B: Warning */}
        <div className="absolute top-[48%] right-[12%] w-32 h-36 border-2 border-amber-400/60 bg-amber-400/10 rounded-[2.5rem] flex items-center justify-center -rotate-2 cursor-pointer group hover:bg-amber-400/20 transition-all backdrop-blur-[1px]">
          <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-soft scale-90 group-hover:scale-105 transition-transform flex items-center gap-2 border border-white/20">
            <span className="text-[10px] font-black text-slate-900 whitespace-nowrap uppercase tracking-widest">Khu B</span>
            <span className="block size-2 rounded-full bg-amber-400 shadow-glow animate-pulse"></span>
          </div>
        </div>

        {/* IoT Device Pins */}
        {/* Camera Pin */}
        <button 
          onClick={() => setShowPopup(true)}
          className="absolute top-[35%] left-[28%] -translate-x-1/2 -translate-y-1/2 z-20 group active:scale-90 transition-transform"
        >
          <div className="relative">
            <div className="absolute -inset-3 bg-blue-500/20 rounded-full animate-pulse"></div>
            <div className="size-11 bg-white rounded-full shadow-deep flex items-center justify-center border-2 border-blue-100 group-hover:border-blue-400 transition-colors">
              <span className="material-symbols-outlined text-blue-600 text-[22px] icon-fill">videocam</span>
            </div>
            <div className="absolute -top-1 -right-1 size-3.5 bg-green-500 rounded-full border-[3px] border-white shadow-sm"></div>
          </div>
        </button>

        {/* Sensor Pin (Active) */}
        <button className="absolute top-[58%] right-[28%] -translate-x-1/2 -translate-y-1/2 z-20 group active:scale-90 transition-transform">
          <div className="relative">
            <div className="size-10 bg-white rounded-full shadow-deep flex items-center justify-center border-2 border-primary group-hover:bg-primary transition-all">
              <span className="material-symbols-outlined text-primary-dark group-hover:text-slate-900 text-[22px] icon-fill">sensors</span>
            </div>
          </div>
        </button>

        {/* Sensor Pin (Issue) */}
        <button className="absolute top-[52%] right-[18%] -translate-x-1/2 -translate-y-1/2 z-20 group active:scale-90 transition-transform">
          <div className="relative">
            <div className="absolute -inset-4 bg-red-500/10 rounded-full animate-ping"></div>
            <div className="size-11 bg-white rounded-full shadow-deep flex items-center justify-center border-2 border-red-100 group-hover:border-red-500 transition-all">
              <span className="material-symbols-outlined text-red-500 text-[22px] icon-fill">warning</span>
            </div>
          </div>
        </button>

        {/* Pop-up Info Card */}
        {showPopup && (
          <div className="absolute bottom-28 left-5 right-5 z-30 animate-in slide-in-from-bottom-8 duration-500">
            <div className="bg-white/95 backdrop-blur-xl rounded-[2.5rem] shadow-deep p-6 border border-white/60 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 z-10">
                <button 
                  onClick={() => setShowPopup(false)}
                  className="size-8 flex items-center justify-center rounded-full bg-gray-100/50 hover:bg-gray-100 text-slate-400 transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
              </div>

              <div className="flex flex-col gap-5 relative z-10">
                <div className="flex flex-col">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-blue-100 text-blue-700 text-[9px] font-black px-2.5 py-1 rounded-lg uppercase tracking-widest shadow-inner">Camera AI</span>
                    <span className="flex items-center gap-1.5 text-[9px] text-green-600 font-black uppercase tracking-widest">
                      <span className="size-2 bg-green-500 rounded-full animate-pulse shadow-glow"></span> Online
                    </span>
                  </div>
                  <h3 className="text-slate-900 text-xl font-black font-display tracking-tight leading-tight group-hover:text-primary-dark transition-colors">Khu A - Nhà kính Dưa lưới</h3>
                  <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-1">Cập nhật: 2 phút trước</p>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {[
                    { icon: 'thermometer', val: '28°C', color: 'text-red-500', bg: 'bg-red-50/50' },
                    { icon: 'humidity_percentage', val: '65%', color: 'text-blue-500', bg: 'bg-blue-50/50' },
                    { icon: 'science', val: 'pH 6.5', color: 'text-purple-500', bg: 'bg-purple-50/50' }
                  ].map((stat, i) => (
                    <div key={i} className={`rounded-2xl p-4 flex flex-col items-center justify-center gap-2 border border-black/5 shadow-inner-soft hover:scale-105 transition-transform ${stat.bg}`}>
                      <span className={`material-symbols-outlined ${stat.color} text-[20px] icon-fill`}>{stat.icon}</span>
                      <span className="text-sm font-black text-slate-900 tracking-tight">{stat.val}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-primary hover:bg-primary-dark text-slate-900 font-black py-4 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-glow active:scale-95 uppercase tracking-widest border border-primary-dark/10">
                  <span className="material-symbols-outlined text-[24px] icon-fill">videocam</span>
                  <span>Xem Live Camera</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Map Controls */}
        <div className="absolute bottom-10 right-5 flex flex-col gap-4 z-20">
          <div className="flex flex-col bg-white rounded-2xl shadow-deep overflow-hidden border border-gray-100">
            <button className="size-12 flex items-center justify-center hover:bg-gray-50 border-b border-gray-100 text-slate-800 transition-colors active:scale-90">
              <span className="material-symbols-outlined font-black">add</span>
            </button>
            <button className="size-12 flex items-center justify-center hover:bg-gray-50 text-slate-800 transition-colors active:scale-90">
              <span className="material-symbols-outlined font-black">remove</span>
            </button>
          </div>
          <button className="size-14 bg-white rounded-2xl shadow-deep flex items-center justify-center hover:bg-gray-50 text-blue-600 transition-all border border-gray-100 active:scale-90">
            <span className="material-symbols-outlined text-[28px] icon-fill">my_location</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MapView;
