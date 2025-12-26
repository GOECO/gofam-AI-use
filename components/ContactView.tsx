
import React from 'react';

const ContactView: React.FC = () => {
  const experts = [
    { 
      id: '1', 
      name: 'KS. Nguyễn Văn A', 
      role: 'Chuyên gia Lúa & Gạo', 
      rating: 4.9, 
      reviews: 128,
      status: 'Online',
      img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=300&auto=format&fit=crop' 
    },
    { 
      id: '2', 
      name: 'TS. Trần Thị B', 
      role: 'Bác sĩ Cây trồng', 
      rating: 5.0, 
      reviews: 85,
      status: 'Bận',
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop' 
    },
    { 
      id: '3', 
      name: 'KS. Lê Văn C', 
      role: 'Chuyên gia Đất & Phân', 
      rating: 4.8, 
      reviews: 42,
      status: 'Online',
      img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop' 
    },
  ];

  const groups = [
    { 
      id: '1', 
      name: 'Hội Sầu Riêng Miền Tây', 
      lastMsg: 'Anh Ba: Mọi người ơi cho hỏi cách trị rệp sáp...', 
      time: '5p trước', 
      unread: 5,
      img: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?q=80&w=150&auto=format&fit=crop'
    },
    { 
      id: '2', 
      name: 'Kỹ thuật Lúa cao sản', 
      lastMsg: 'Kỹ sư Nam: Đã gửi tài liệu mới về giống lúa ST25', 
      time: '15p trước', 
      unread: 2,
      img: 'https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?q=80&w=150&auto=format&fit=crop'
    },
    { 
      id: '3', 
      name: 'Chợ Nông sản Online', 
      lastMsg: 'Cô Tư: Hôm nay giá cam sành đang tốt lắm...', 
      time: '1h trước', 
      unread: 0,
      img: 'https://images.unsplash.com/photo-1488459711635-d6dae289a63e?q=80&w=150&auto=format&fit=crop'
    },
  ];

  return (
    <div className="flex flex-col flex-1 animate-in slide-in-from-right duration-300 bg-background-light">
      {/* STICKY HEADER */}
      <div className="sticky top-0 z-50 flex items-center bg-white/95 backdrop-blur-sm px-4 py-3 justify-between border-b border-gray-100 shadow-sm">
        <div className="flex items-center gap-3">
          <button className="flex size-10 items-center justify-center rounded-full hover:bg-black/5 transition-colors">
            <span className="material-symbols-outlined text-slate-900" style={{fontSize: '26px'}}>arrow_back</span>
          </button>
          <h2 className="text-slate-900 text-xl font-black leading-tight tracking-tight">Liên lạc & Hỗ trợ</h2>
        </div>
        <button className="flex size-10 items-center justify-center rounded-full hover:bg-black/5 transition-colors">
          <span className="material-symbols-outlined text-slate-900" style={{fontSize: '26px'}}>search</span>
        </button>
      </div>

      {/* QUICK ACTIONS */}
      <div className="px-4 py-6 grid grid-cols-2 gap-4">
        <button className="flex flex-col items-center text-center justify-center gap-3 rounded-[2rem] bg-white p-6 shadow-soft border border-gray-100 active:scale-95 transition-all hover:shadow-deep">
          <div className="size-16 rounded-full bg-primary/20 flex items-center justify-center text-primary-dark ring-4 ring-primary/5">
            <span className="material-symbols-outlined" style={{fontSize: '32px'}}>support_agent</span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-base font-black text-slate-900">Tổng đài 24/7</span>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Hỗ trợ khẩn cấp</span>
          </div>
        </button>
        <button className="flex flex-col items-center text-center justify-center gap-3 rounded-[2rem] bg-white p-6 shadow-soft border border-gray-100 active:scale-95 transition-all hover:shadow-deep">
          <div className="size-16 rounded-full bg-info/10 flex items-center justify-center text-info ring-4 ring-info/5">
            <span className="material-symbols-outlined" style={{fontSize: '32px'}}>live_help</span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-base font-black text-slate-900">Câu hỏi FAQ</span>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Giải đáp nhanh</span>
          </div>
        </button>
      </div>

      {/* EXPERTS SECTION */}
      <div className="flex flex-col mb-4">
        <div className="flex items-center justify-between px-4 pb-4">
          <h2 className="text-xl font-black text-slate-900 tracking-tight">Gọi chuyên gia</h2>
          <button className="px-4 py-1.5 rounded-full bg-primary/10 text-primary-dark font-black text-[10px] uppercase tracking-wider transition-colors">Xem tất cả</button>
        </div>
        <div className="flex overflow-x-auto hide-scrollbar px-4 pb-6 gap-5 snap-x">
          {experts.map((e) => (
            <div key={e.id} className="flex-none w-[280px] snap-center flex flex-col gap-4 rounded-[2.5rem] bg-white p-4 shadow-deep border border-gray-100 relative group transition-all">
              <div className={`absolute top-6 right-6 z-10 flex items-center gap-1.5 backdrop-blur-md px-3 py-1 rounded-full border shadow-sm ${
                e.status === 'Online' ? 'bg-green-100/90 border-green-200 text-green-700' : 'bg-gray-100/90 border-gray-200 text-gray-500'
              }`}>
                <div className={`size-2 rounded-full ${e.status === 'Online' ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
                <span className="text-[10px] font-black uppercase tracking-widest">{e.status}</span>
              </div>
              <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-inner bg-gray-100">
                <img src={e.img} alt={e.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              </div>
              <div className="flex flex-col gap-1 px-1">
                <div className="flex justify-between items-start">
                  <p className="text-slate-900 text-lg font-black leading-tight">{e.name}</p>
                  <div className="flex items-center gap-1 bg-yellow-50 px-2 py-0.5 rounded-lg border border-yellow-100">
                    <span className="material-symbols-outlined text-yellow-500 text-[18px] icon-fill">star</span>
                    <span className="text-xs font-black text-slate-800">{e.rating}</span>
                  </div>
                </div>
                <p className="text-slate-400 text-sm font-bold uppercase tracking-tighter">{e.role}</p>
                <p className="text-[10px] text-slate-300 font-bold uppercase">({e.reviews} đánh giá - Phản hồi nhanh)</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button className="flex items-center justify-center gap-2 h-12 rounded-2xl bg-primary hover:bg-primary-dark text-slate-900 font-black text-xs shadow-lg shadow-primary/20 active:scale-95 transition-all uppercase tracking-widest">
                  <span className="material-symbols-outlined text-[20px] icon-fill">call</span>
                  <span>Gọi Ngay</span>
                </button>
                <button className="flex items-center justify-center gap-2 h-12 rounded-2xl bg-info hover:bg-blue-600 text-white font-black text-xs shadow-lg shadow-info/20 active:scale-95 transition-all uppercase tracking-widest">
                  <span className="material-symbols-outlined text-[20px] icon-fill">chat_bubble</span>
                  <span>Nhắn Tin</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TECH GROUPS SECTION */}
      <div className="flex flex-col mt-2 px-4 pb-8">
        <h2 className="text-xl font-black text-slate-900 tracking-tight mb-4">Nhóm kỹ thuật</h2>
        <div className="space-y-3">
          {groups.map((g) => (
            <div key={g.id} className="flex items-center gap-4 bg-white px-4 py-4 rounded-3xl border border-gray-100 shadow-soft hover:shadow-deep transition-all cursor-pointer group active:scale-[0.98]">
              <div className="relative shrink-0">
                <div className="size-16 rounded-2xl overflow-hidden shadow-sm border border-gray-50">
                   <img src={g.img} alt={g.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                {g.unread > 0 && (
                  <div className="absolute -top-1 -right-1 flex h-6 min-w-6 items-center justify-center rounded-full bg-red-500 px-1.5 border-2 border-white">
                    <span className="text-[10px] font-black text-white">{g.unread}</span>
                  </div>
                )}
              </div>
              <div className="flex flex-col justify-center flex-1 min-w-0">
                <div className="flex justify-between items-baseline w-full mb-0.5">
                  <p className="text-slate-900 text-base font-black leading-tight truncate">{g.name}</p>
                  <span className="text-[9px] text-slate-300 font-bold uppercase whitespace-nowrap ml-2">{g.time}</span>
                </div>
                <p className="text-slate-400 text-[11px] font-medium truncate leading-normal">{g.lastMsg}</p>
              </div>
              <span className="material-symbols-outlined text-slate-200 group-hover:text-primary transition-colors">chevron_right</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactView;
