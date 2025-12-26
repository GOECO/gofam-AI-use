
import React, { useState } from 'react';

const CommunityView: React.FC = () => {
  const [view, setView] = useState<'list' | 'chat'>('list');
  const [activeFilter, setActiveFilter] = useState('Tất cả');

  const filters = ['Tất cả', 'Chưa đọc', 'Kỹ thuật', 'Cảnh báo'];

  const messages = [
    {
      id: '1',
      title: 'Đội Kỹ Thuật Farm A',
      lastMsg: 'Bạn: Đã cập nhật lịch phun...',
      time: '09:30',
      unread: 3,
      online: true,
      img: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=200&auto=format&fit=crop'
    },
    {
      id: '2',
      title: 'TS. Nông nghiệp (Tư vấn)',
      lastMsg: 'Cảm ơn bác, cháu sẽ gửi mẫu đất ngay...',
      time: 'Hôm qua',
      unread: 0,
      online: false,
      img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop'
    },
    {
      id: '3',
      title: 'Nguyễn Thị Mơ (Kho)',
      lastMsg: 'Đã nhập 500kg phân bón hữu cơ...',
      time: 'Thứ 2',
      unread: 0,
      online: false,
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
    }
  ];

  if (view === 'chat') {
    return (
      <div className="flex flex-col h-screen animate-in slide-in-from-right duration-300 bg-[#f2f4f6]">
        {/* CHAT HEADER */}
        <div className="bg-white px-4 py-3 flex items-center justify-between shadow-sm z-10 shrink-0">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <button 
              onClick={() => setView('list')}
              className="text-slate-900 flex size-10 shrink-0 items-center justify-center rounded-full -ml-2 hover:bg-gray-100 transition"
            >
              <span className="material-symbols-outlined">arrow_back_ios_new</span>
            </button>
            <div className="size-11 rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <img src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=150&auto=format&fit=crop" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-slate-900 text-base font-black leading-tight truncate">Đội Kỹ Thuật Farm A</h2>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="size-2 bg-green-500 rounded-full animate-pulse"></span>
                <p className="text-primary-dark text-[10px] font-black uppercase">8 thành viên • Online</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button className="flex size-10 items-center justify-center rounded-full text-slate-600 bg-gray-50 hover:bg-gray-100 transition">
              <span className="material-symbols-outlined text-[22px]">call</span>
            </button>
            <button className="flex size-10 items-center justify-center rounded-full text-primary bg-primary/10 hover:bg-primary/20 transition ml-1">
              <span className="material-symbols-outlined text-[22px] icon-fill">info</span>
            </button>
          </div>
        </div>

        {/* PINNED MESSAGE */}
        <div className="bg-amber-50 px-5 py-3 flex items-center gap-3 border-b border-amber-100 shrink-0">
          <div className="bg-amber-100 p-1.5 rounded-lg">
            <span className="material-symbols-outlined text-amber-700 text-sm rotate-45 block">push_pin</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-black text-amber-800 uppercase mb-0.5">Ghim</p>
            <p className="text-xs font-bold text-slate-800 truncate">Lịch phun thuốc dời sang 15:00 do dự báo mưa.</p>
          </div>
          <span className="material-symbols-outlined text-slate-300 text-xl">chevron_right</span>
        </div>

        {/* CHAT CONTENT */}
        <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-6 hide-scrollbar">
          <div className="flex justify-center my-2">
            <span className="bg-gray-200/80 backdrop-blur text-slate-500 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">Hôm nay, 08:30</span>
          </div>

          {/* Received Text */}
          <div className="flex gap-3 max-w-[90%] self-start items-end">
            <div className="size-10 rounded-2xl overflow-hidden shrink-0 shadow-sm border border-white">
              <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] text-slate-400 font-black ml-1 uppercase">Nguyễn Văn B</span>
              <div className="bg-white p-4 rounded-3xl rounded-bl-none shadow-soft relative border border-gray-100">
                <p className="text-sm font-medium leading-relaxed text-slate-800">Đã kiểm tra xong khu vực C. Độ ẩm đang giảm nhanh, cần chú ý.</p>
                <p className="text-[9px] text-slate-300 text-right mt-2 font-bold uppercase">08:31</p>
                <div className="absolute -bottom-3 -right-2 bg-white shadow-md rounded-full px-2 py-1 border border-gray-100 flex items-center gap-1 hover:scale-110 transition cursor-pointer">
                  <span className="text-sm">👍</span>
                  <span className="text-[10px] font-black text-slate-500">2</span>
                </div>
              </div>
            </div>
          </div>

          {/* Received Image */}
          <div className="flex gap-3 max-w-[90%] self-start items-end">
            <div className="size-10 rounded-2xl overflow-hidden shrink-0 shadow-sm border border-white">
              <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100&auto=format&fit=crop" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <div className="bg-white p-2 rounded-[2rem] rounded-bl-none shadow-soft border border-gray-100 w-full">
                <div className="rounded-2xl overflow-hidden mb-2 relative aspect-[4/3]">
                  <img src="https://images.unsplash.com/photo-1597389880944-214873954a48?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" />
                  <div className="absolute bottom-3 right-3 bg-black/60 text-white text-[10px] font-black px-2.5 py-1 rounded-lg backdrop-blur-md uppercase">JPG • 2MB</div>
                </div>
                <p className="text-sm font-medium px-2 text-slate-800 leading-relaxed">Có dấu hiệu nấm lá ở một số cây góc vườn.</p>
                <p className="text-[9px] text-slate-300 text-right mt-1 mr-2 font-bold uppercase">08:32</p>
              </div>
            </div>
          </div>

          {/* Sent Text */}
          <div className="flex gap-3 max-w-[90%] self-end items-end">
            <div className="flex flex-col gap-1 items-end">
              <div className="bg-primary p-4 rounded-[2rem] rounded-br-none shadow-glow text-slate-900 border border-primary-dark/10">
                <p className="text-sm font-black leading-relaxed">OK, để anh báo bên kho xuất thuốc xử lý ngay.</p>
                <div className="flex items-center justify-end gap-1 mt-2 opacity-60">
                  <p className="text-[9px] font-black uppercase tracking-tighter">09:15</p>
                  <span className="material-symbols-outlined text-[14px] icon-fill">done_all</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sent File */}
          <div className="flex gap-3 max-w-[90%] self-end items-end">
            <div className="flex flex-col gap-1 items-end w-full">
              <div className="bg-white p-4 rounded-[2rem] rounded-br-none shadow-soft border border-primary/20 w-full">
                <div className="flex items-center gap-4">
                  <div className="size-12 bg-red-50 rounded-2xl flex items-center justify-center text-red-500 shrink-0">
                    <span className="material-symbols-outlined text-2xl icon-fill">description</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <p className="text-sm font-black text-slate-900 truncate">Quy_trinh_xu_ly_nam.pdf</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase">1.2 MB • PDF</p>
                  </div>
                </div>
                <div className="flex items-center justify-end gap-1 mt-3 text-primary-dark">
                  <p className="text-[9px] font-black uppercase">09:16</p>
                  <span className="material-symbols-outlined text-[14px] icon-fill">done_all</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* INPUT AREA */}
        <div className="bg-white px-4 py-4 shrink-0 border-t border-gray-100 pb-10">
          <div className="flex items-end gap-3">
            <button className="text-slate-400 hover:text-primary transition pb-3 p-1">
              <span className="material-symbols-outlined text-[28px]">add_circle</span>
            </button>
            <div className="flex-1 bg-gray-50 rounded-[2rem] px-5 py-3 min-h-[56px] flex items-center shadow-inner border border-gray-100 focus-within:border-primary/50 transition">
              <textarea 
                className="w-full bg-transparent border-none focus:ring-0 p-0 text-sm font-medium resize-none max-h-32 text-slate-900 placeholder:text-slate-300 leading-relaxed" 
                placeholder="Nhập tin nhắn..." 
                rows={1}
              ></textarea>
              <button className="text-slate-400 hover:text-yellow-500 ml-3 transition p-1">
                <span className="material-symbols-outlined text-[24px]">sentiment_satisfied</span>
              </button>
            </div>
            <button className="bg-primary hover:bg-primary-dark text-slate-900 rounded-full size-14 flex items-center justify-center shrink-0 transition shadow-glow active:scale-95">
              <span className="material-symbols-outlined text-[28px] icon-fill">send</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-1 animate-in fade-in duration-300 bg-background-light min-h-screen">
      {/* HEADER */}
      <div className="bg-white px-6 py-6 flex items-center justify-between shrink-0">
        <h2 className="text-3xl font-black text-slate-900 tracking-tight">Tin nhắn</h2>
        <div className="flex items-center gap-3">
          <button className="size-12 rounded-full bg-gray-50 text-slate-600 flex items-center justify-center border border-gray-100">
            <span className="material-symbols-outlined text-[24px]">search</span>
          </button>
          <button className="size-12 rounded-full bg-primary text-slate-900 flex items-center justify-center shadow-glow active:scale-90 transition-transform">
            <span className="material-symbols-outlined text-[24px] font-black">add</span>
          </button>
        </div>
      </div>

      {/* FILTERS */}
      <div className="flex gap-3 px-6 pb-4 overflow-x-auto hide-scrollbar bg-white shrink-0">
        {filters.map(f => (
          <button 
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`flex h-10 shrink-0 items-center justify-center px-6 rounded-full font-black text-xs transition-all uppercase tracking-widest ${
              activeFilter === f ? 'bg-slate-900 text-white shadow-lg' : 'bg-gray-50 text-slate-400 hover:bg-gray-100'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto pb-20">
        {/* IMPORTANT SECTION */}
        <div className="px-6 py-4 bg-gray-50/50 flex items-center gap-2">
          <span className="material-symbols-outlined text-red-500 text-[18px] icon-fill">priority_high</span>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Quan trọng</p>
        </div>
        
        <div className="flex items-center gap-4 bg-red-50/50 px-6 py-6 hover:bg-red-50 cursor-pointer border-l-[6px] border-red-500 transition-colors group">
          <div className="size-14 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center shadow-sm shrink-0">
            <span className="material-symbols-outlined text-[28px] icon-fill">warning</span>
          </div>
          <div className="flex flex-col flex-1 min-w-0 gap-1">
            <div className="flex justify-between items-start">
              <p className="text-slate-900 text-base font-black truncate">Cảnh báo: Khu vực C</p>
              <p className="text-red-600 text-[10px] font-black bg-white px-2 py-1 rounded-full shadow-sm tracking-tighter">10:05</p>
            </div>
            <p className="text-slate-600 text-xs font-semibold leading-relaxed line-clamp-2">Độ ẩm đất giảm dưới ngưỡng 40%. Kiểm tra ngay hệ thống tưới.</p>
          </div>
        </div>

        {/* RECENT SECTION */}
        <div className="px-6 py-4 bg-gray-50/50">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Gần đây</p>
        </div>

        <div className="space-y-1">
          {messages.map((m) => (
            <div 
              key={m.id}
              onClick={() => setView('chat')}
              className="flex items-center gap-4 bg-white px-6 py-5 hover:bg-gray-50 cursor-pointer border-b border-gray-50 transition-all group"
            >
              <div className="relative shrink-0">
                <div className="size-16 rounded-[1.5rem] overflow-hidden shadow-soft border border-gray-100 group-hover:scale-105 transition-transform duration-500">
                  <img src={m.img} alt={m.title} className="w-full h-full object-cover" />
                </div>
                {m.online && (
                  <div className="absolute -bottom-1 -right-1 size-4 bg-green-500 border-[3px] border-white rounded-full"></div>
                )}
              </div>
              <div className="flex flex-col flex-1 min-w-0 justify-center h-full gap-1">
                <div className="flex justify-between items-baseline">
                  <p className="text-slate-900 text-lg font-black truncate group-hover:text-primary-dark transition-colors">{m.title}</p>
                  <p className={`text-[10px] font-black uppercase tracking-tighter ${m.unread > 0 ? 'text-primary-dark' : 'text-slate-300'}`}>{m.time}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-slate-400 text-sm font-medium truncate leading-tight pr-4">{m.lastMsg}</p>
                  {m.unread > 0 && (
                    <div className="flex items-center justify-center px-2 h-6 min-w-[24px] rounded-full bg-primary shadow-glow">
                      <span className="text-[10px] font-black text-slate-900 leading-none">{m.unread}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityView;
