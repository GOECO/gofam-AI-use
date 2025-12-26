
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TimeAttendanceView: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('list');

  const attendanceList = [
    {
      id: '1',
      name: 'Nguyễn Văn An',
      role: 'Công nhân • Lô A3',
      status: 'issue',
      issueType: 'Vị trí không khớp',
      checkIn: '07:05',
      checkOut: '--:--',
      progress: 90,
      img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=150&auto=format&fit=crop'
    },
    {
      id: '2',
      name: 'Trần Thị Bích',
      role: 'Kỹ thuật • Nhà kính B',
      status: 'issue',
      issueType: 'Thiếu ảnh xác nhận',
      checkIn: '08:00',
      checkOut: 'Đang làm',
      progress: 0,
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop'
    },
    {
      id: '3',
      name: 'Hoàng Thị Lan',
      role: 'Giám sát • Khu vực B',
      status: 'ok',
      issueType: 'Đúng giờ',
      checkIn: '06:45',
      checkOut: '16:45',
      progress: 100,
      img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop'
    }
  ];

  return (
    <div className="flex flex-col flex-1 animate-in slide-in-from-right duration-300 bg-background-light">
      {/* HEADER */}
      <div className="sticky top-0 z-50 flex items-center bg-white/95 backdrop-blur-md px-4 py-4 justify-between border-b border-gray-100 shadow-sm shrink-0">
        <button 
          onClick={() => navigate(-1)}
          className="flex size-10 items-center justify-center rounded-full hover:bg-black/5 transition-colors"
        >
          <span className="material-symbols-outlined text-slate-900" style={{fontSize: '24px'}}>arrow_back</span>
        </button>
        <h2 className="text-slate-900 text-xl font-black leading-tight tracking-tight flex-1 text-center font-display">Chấm công nhân viên</h2>
        <div className="w-10 flex justify-end">
          <button className="flex size-10 items-center justify-center rounded-full hover:bg-black/5 transition-colors">
            <span className="material-symbols-outlined text-slate-900">more_vert</span>
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto hide-scrollbar pb-32">
        {/* TOP STATUS CARD */}
        <div className="px-5 py-6">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-white border border-gray-100 shadow-deep p-6 group">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] z-0"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 bg-primary/10 backdrop-blur-md px-4 py-2 rounded-full border border-primary/20 shadow-inner-soft">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                  </span>
                  <span className="text-[10px] font-black text-primary-dark uppercase tracking-widest">Khu vực A (Đã định vị)</span>
                </div>
                <button className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-lg hover:scale-105 transition-transform active:scale-95">
                  <span className="material-symbols-outlined text-[18px] icon-fill">photo_camera</span>
                  Xác nhận
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="flex flex-col items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-slate-900 p-6 rounded-[2rem] shadow-glow active:scale-95 transition-all h-36 border border-primary-dark/10">
                  <span className="material-symbols-outlined text-[36px] icon-fill">login</span>
                  <div className="text-center">
                    <span className="font-black text-base block leading-none uppercase tracking-tight">Chấm công Vào</span>
                    <span className="text-[10px] font-black opacity-60 mt-2 block tracking-widest">07:00:00</span>
                  </div>
                </button>
                <button className="flex flex-col items-center justify-center gap-2 bg-white border-2 border-gray-100 text-slate-400 hover:text-red-500 hover:border-red-200 p-6 rounded-[2rem] active:scale-95 transition-all h-36 group">
                  <span className="material-symbols-outlined text-[36px] group-hover:icon-fill transition-colors">logout</span>
                  <div className="text-center">
                    <span className="font-black text-base block leading-none uppercase tracking-tight">Chấm công Ra</span>
                    <span className="text-[10px] font-black opacity-40 mt-2 block tracking-widest">--:--:--</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* SUMMARY STATS */}
        <div className="px-5 pb-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Hôm nay</p>
              <div className="flex items-center gap-1 group cursor-pointer">
                <h1 className="text-2xl font-black text-slate-900 tracking-tight">12 Th10, 2023</h1>
                <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">expand_more</span>
              </div>
            </div>
            <button className="text-[10px] font-black text-primary-dark bg-primary/10 px-4 py-2.5 rounded-full border border-primary/20 uppercase tracking-widest hover:bg-primary/20 transition-all">
              Xuất báo cáo
            </button>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'Nhân sự', val: '24/25', icon: 'group', color: 'text-primary-dark', bg: 'bg-primary/5' },
              { label: 'Đối soát', val: '3', icon: 'fact_check', color: 'text-amber-600', bg: 'bg-amber-50', alert: true },
              { label: 'Tổng giờ', val: '186h', icon: 'timer', color: 'text-info', bg: 'bg-info/5' }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-2 rounded-3xl p-4 bg-white border border-gray-100 shadow-soft relative overflow-hidden">
                {stat.alert && <div className="absolute top-3 right-3 size-2 rounded-full bg-amber-500 shadow-glow animate-pulse"></div>}
                <div className="flex items-center gap-2 mb-1">
                  <span className={`material-symbols-outlined ${stat.color} text-[20px] icon-fill`}>{stat.icon}</span>
                  <p className="text-slate-400 text-[9px] font-black uppercase tracking-widest truncate">{stat.label}</p>
                </div>
                <p className="text-slate-900 text-xl font-black tracking-tighter">{stat.val}</p>
              </div>
            ))}
          </div>
        </div>

        {/* TABS & LIST */}
        <div className="px-5 py-2 sticky top-16 z-30 bg-background-light/95 backdrop-blur-md">
          <div className="flex h-12 w-full items-center p-1.5 rounded-2xl bg-gray-100 mb-6">
            <button 
              onClick={() => setActiveTab('list')}
              className={`flex-1 h-full rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'list' ? 'bg-white shadow-md text-slate-900' : 'text-slate-400'}`}
            >Danh sách</button>
            <button 
              onClick={() => setActiveTab('map')}
              className={`flex-1 h-full rounded-xl text-[10px] font-black uppercase tracking-widest transition-all relative flex items-center justify-center gap-1.5 ${activeTab === 'map' ? 'bg-white shadow-md text-slate-900' : 'text-slate-400'}`}
            >
              Đối soát & Map
              <span className="bg-amber-500 text-white text-[8px] px-1.5 py-0.5 rounded-full shadow-sm">3</span>
            </button>
            <button 
              onClick={() => setActiveTab('report')}
              className={`flex-1 h-full rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'report' ? 'bg-white shadow-md text-slate-900' : 'text-slate-400'}`}
            >Báo cáo</button>
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-300">
              <span className="material-symbols-outlined text-[20px]">search</span>
            </div>
            <input 
              className="block w-full py-3.5 pl-12 pr-12 text-sm font-bold text-slate-900 bg-white border border-gray-100 rounded-[1.5rem] focus:ring-2 focus:ring-primary/40 focus:border-primary placeholder:text-slate-300 shadow-soft transition-all" 
              placeholder="Tìm tên, mã, khu vực..." 
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-300">
              <span className="material-symbols-outlined text-[20px] hover:text-primary transition-colors cursor-pointer">tune</span>
            </div>
          </div>
        </div>

        {/* MAP PREVIEW */}
        <div className="px-5 pb-6">
          <div className="rounded-[2.5rem] overflow-hidden border border-gray-100 h-48 w-full relative shadow-deep group cursor-pointer bg-gray-200">
            <div className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:scale-110 transition-transform duration-1000" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCn2TzgmDznVqA9nNTDh5SJuNUchjlXXKDtzfsXCvCAEVUiqq6aBzNUYuXyDq3HYulHtbXmzjfe5Ucr2pTNi_LDo4OHqyOV_Z-blvjj290fVQKup4CeyhR0cSVx48Wcz4chVpnM4gGzahbLuCP5s2ShZ4Gzoidk4TFruZBbIl2C8GFNShQSUh838ANa_-A_G79J3kUEUHHANz_u1ciJTdMQOvTvIX_9zxioE1qEFUco4N1qEbGMqd6YvNb19MS-qlKscbNKIFYeQ1wF")'}}></div>
            <div className="absolute top-1/2 left-1/3 flex flex-col items-center">
              <span className="material-symbols-outlined text-primary text-3xl drop-shadow-glow icon-fill">location_on</span>
            </div>
            <div className="absolute bottom-1/4 right-1/3 flex flex-col items-center">
              <span className="material-symbols-outlined text-amber-500 text-3xl drop-shadow-md animate-bounce icon-fill">location_on</span>
            </div>
            <div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur-md px-4 py-1.5 rounded-full text-[9px] font-black text-white uppercase tracking-widest border border-white/10">
              Bản đồ mặt bằng (24 active)
            </div>
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-2.5 rounded-full shadow-lg border border-gray-100">
              <span className="material-symbols-outlined text-slate-800" style={{fontSize: '18px'}}>open_in_full</span>
            </div>
          </div>
        </div>

        {/* ATTENDANCE LIST */}
        <div className="px-5 space-y-4">
          <div className="flex items-center gap-3 py-2">
             <div className="h-px flex-1 bg-gray-100"></div>
             <span className="text-[9px] font-black text-amber-600 uppercase tracking-widest bg-amber-50 px-4 py-1.5 rounded-full border border-amber-100">Cần đối soát (2)</span>
             <div className="h-px flex-1 bg-gray-100"></div>
          </div>

          {attendanceList.map((item) => (
            <div key={item.id} className={`group relative flex flex-col gap-4 rounded-[2rem] p-5 shadow-deep border transition-all active:scale-[0.98] ${
              item.status === 'issue' ? 'bg-amber-50/50 border-amber-100' : 'bg-white border-gray-50'
            }`}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  <div className={`size-14 rounded-2xl overflow-hidden shadow-soft border-2 ${item.status === 'issue' ? 'border-amber-200' : 'border-white'}`}>
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="flex flex-col min-w-0 gap-1">
                    <p className="text-base font-black text-slate-900 truncate tracking-tight">{item.name}</p>
                    <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg w-fit ${
                      item.status === 'issue' ? 'bg-amber-100/50 text-amber-700' : 'bg-primary/10 text-primary-dark'
                    }`}>
                      <span className="material-symbols-outlined text-[16px] icon-fill">
                        {item.status === 'issue' ? 'warning' : 'verified'}
                      </span>
                      <p className="text-[10px] font-black uppercase tracking-tight">{item.issueType}</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                   <button className="size-10 rounded-xl bg-white flex items-center justify-center text-slate-400 border border-gray-100 shadow-soft hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-[20px]">map</span>
                   </button>
                   {item.status === 'issue' && (
                     <button className="size-10 rounded-xl bg-white flex items-center justify-center text-slate-400 border border-gray-100 shadow-soft hover:text-amber-600 transition-colors">
                        <span className="material-symbols-outlined text-[20px]">image</span>
                     </button>
                   )}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100/50">
                <div className="flex items-center gap-6">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Vào</span>
                    <span className="text-sm font-black text-slate-900 font-mono tracking-tighter">{item.checkIn}</span>
                  </div>
                  {item.progress > 0 && (
                    <div className="flex h-1.5 w-16 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                      <div className={`h-full rounded-full transition-all duration-1000 ${
                        item.status === 'issue' ? 'bg-amber-400' : 'bg-primary'
                      }`} style={{ width: `${item.progress}%` }}></div>
                    </div>
                  )}
                  <div className="flex flex-col">
                    <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest text-right">Ra</span>
                    <span className={`text-sm font-black font-mono tracking-tighter text-right ${
                      item.checkOut === 'Đang làm' ? 'text-info animate-pulse' : 'text-slate-900'
                    }`}>{item.checkOut}</span>
                  </div>
                </div>
                <button className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-soft transition-all ${
                  item.status === 'issue' ? 'bg-amber-500 text-white hover:bg-amber-600' : 'bg-gray-50 text-slate-400'
                }`}>
                  {item.status === 'issue' ? 'Duyệt nhanh' : 'Chi tiết'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeAttendanceView;
