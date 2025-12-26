
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface NotificationItem {
  id: string;
  type: 'alert' | 'system' | 'update' | 'message';
  title: string;
  desc: string;
  time: string;
  isRead: boolean;
  icon: string;
}

const NotificationView: React.FC = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('Tất cả');

  const notifications: NotificationItem[] = [
    {
      id: '1',
      type: 'alert',
      title: 'Cảnh báo: Độ ẩm cực thấp',
      desc: 'Lô A3 đang có độ ẩm 12%. Hệ thống tưới tự động đã được kích hoạt dự kiến trong 10 phút.',
      time: '10 phút trước',
      isRead: false,
      icon: 'warning'
    },
    {
      id: '2',
      type: 'system',
      title: 'Chấm công thành công',
      desc: 'Bạn đã hoàn thành chấm công ra lúc 17:30. Chúc bạn một buổi tối vui vẻ!',
      time: '1 giờ trước',
      isRead: true,
      icon: 'verified'
    },
    {
      id: '3',
      type: 'update',
      title: 'Bản tin nông nghiệp mới',
      desc: 'Chuyên gia KS. Nam vừa đăng video hướng dẫn xử lý nấm lá sầu riêng.',
      time: '3 giờ trước',
      isRead: false,
      icon: 'smart_display'
    },
    {
      id: '4',
      type: 'message',
      title: 'Tin nhắn từ Đội Kỹ thuật',
      desc: 'Anh Ba: "Mọi người kiểm tra lại lô B2 nhé, có vẻ có sâu cuốn lá."',
      time: '5 giờ trước',
      isRead: false,
      icon: 'forum'
    },
    {
      id: '5',
      type: 'update',
      title: 'Giá nông sản hôm nay',
      desc: 'Cà phê Robusta tăng nhẹ 500đ/kg. Xem chi tiết bảng giá tại thị trường.',
      time: 'Hôm qua',
      isRead: true,
      icon: 'trending_up'
    }
  ];

  const filters = ['Tất cả', 'Chưa đọc', 'Cảnh báo'];

  const getTypeStyles = (type: string) => {
    switch (type) {
      case 'alert': return 'bg-red-50 text-red-500 border-red-100';
      case 'system': return 'bg-primary/10 text-primary-dark border-primary/20';
      case 'update': return 'bg-blue-50 text-blue-500 border-blue-100';
      case 'message': return 'bg-amber-50 text-amber-500 border-amber-100';
      default: return 'bg-gray-50 text-gray-500 border-gray-100';
    }
  };

  return (
    <div className="flex flex-col flex-1 animate-in slide-in-from-right duration-300 bg-background-light">
      {/* HEADER */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md px-5 py-6 flex items-center justify-between border-b border-gray-100 shadow-soft shrink-0">
        <h2 className="text-3xl font-black text-slate-900 tracking-tight font-display">Thông báo</h2>
        <button className="text-[10px] font-black text-primary-dark uppercase tracking-widest bg-primary/10 px-4 py-2 rounded-full border border-primary/20 hover:bg-primary/20 transition-all">
          Đánh dấu đã đọc
        </button>
      </div>

      {/* FILTERS */}
      <div className="flex gap-3 px-5 py-4 overflow-x-auto hide-scrollbar bg-white/50 shrink-0">
        {filters.map(f => (
          <button 
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`flex h-9 shrink-0 items-center justify-center px-6 rounded-full font-black text-[10px] transition-all uppercase tracking-widest border ${
              activeFilter === f 
                ? 'bg-slate-900 text-white border-slate-900 shadow-lg' 
                : 'bg-white text-slate-400 border-gray-100 hover:bg-gray-50'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* NOTIFICATION LIST */}
      <div className="flex-1 overflow-y-auto px-5 py-2 space-y-4 hide-scrollbar">
        {notifications.map((n) => (
          <div 
            key={n.id} 
            className={`group relative flex gap-4 p-5 rounded-[2rem] border transition-all active:scale-[0.98] cursor-pointer ${
              n.isRead ? 'bg-white border-gray-50' : 'bg-white border-primary/20 shadow-soft ring-1 ring-primary/5'
            }`}
          >
            {!n.isRead && (
              <div className="absolute top-5 right-5 size-2.5 rounded-full bg-primary shadow-glow"></div>
            )}
            
            <div className={`size-14 rounded-2xl flex items-center justify-center border shrink-0 shadow-inner-soft ${getTypeStyles(n.type)}`}>
              <span className={`material-symbols-outlined text-[28px] ${n.isRead ? '' : 'icon-fill'}`}>{n.icon}</span>
            </div>

            <div className="flex flex-col flex-1 min-w-0">
              <div className="flex justify-between items-start mb-1">
                <h4 className={`text-[15px] font-black leading-tight truncate tracking-tight ${n.isRead ? 'text-slate-900' : 'text-slate-900'}`}>
                  {n.title}
                </h4>
              </div>
              <p className={`text-xs leading-relaxed mb-3 line-clamp-2 ${n.isRead ? 'text-slate-400' : 'text-slate-600 font-bold'}`}>
                {n.desc}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">{n.time}</span>
                <button className="text-[10px] font-black text-primary-dark uppercase tracking-widest flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Xem chi tiết <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        ))}

        <div className="text-center py-12">
           <div className="size-20 rounded-full bg-gray-100 flex items-center justify-center text-slate-300 mx-auto mb-4">
              <span className="material-symbols-outlined text-[40px]">notifications_off</span>
           </div>
           <p className="text-xs font-black text-slate-300 uppercase tracking-widest">Bạn đã xem hết thông báo</p>
        </div>
      </div>
    </div>
  );
};

export default NotificationView;
