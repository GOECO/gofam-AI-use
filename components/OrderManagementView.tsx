
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OrderManagementView: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('buy'); // 'buy' or 'sell'
  const [activeFilter, setActiveFilter] = useState('Tất cả');

  const filters = ['Tất cả', 'Chờ xác nhận', 'Đang giao', 'Hoàn thành'];

  const orders = [
    {
      id: '#GOFAM-8823',
      date: '20/10/2023 14:30',
      status: 'shipping',
      statusText: 'Đang giao',
      productName: 'Phân bón NPK 20-20-15',
      variant: 'Bao 25kg',
      quantity: 5,
      seller: 'Hợp tác xã Xanh',
      total: '2.750.000 đ',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgDlhzcGL8gsySHwq4hKtqt-4Gqddswx-d7DIWkKSJ6MIe2rq56TjXz9MK2TeAGEbYAtvbREnlu3XkWIMG-BEzvjECYqpQ389V_ozCJ8mKxK_33pqzeqaVPyh-EnBfiCzOsulx0ngy8_By69XgLbCR5AZtHRzz5rS8Ccdg7WOrYnrSR7dSGxHatU7vZsV3YrwnZoDnDs0anRzejMtwNDSib-Ddo39ChPcoWuU7LI8xfWs1u43ziUcGEfuUJaclzN5m8Lcj0TIIetdV',
      otherCount: 2
    },
    {
      id: '#GF-882305',
      date: 'Vừa xong',
      status: 'pending',
      statusText: 'Chờ xác nhận',
      productName: 'Hạt giống Lúa ST25 - Chính hãng',
      variant: 'Túi 1kg',
      quantity: 10,
      seller: 'Giống Cây Trồng MN',
      total: '800.000 đ',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvOsjcyjXtX82zhwXfCQbHiofePV7jdqdI6fUg-1EkHs3J1TTSjAaRVJBJIstt97AXl8EkWY6k1-DBwgKictwWlLYDurpD_cCcK-lpnyKVneQZEquNBlf1rGXKhtrfH70GWDZNVBr7i-xjTSYhwQUxl8hr8sg6bbavKYIaKkl_Am9WVMpeCHiDB1Zmnrk9EOjMjLx1B4GEVN20JIdOcHNcRApDz3k9a-RKDyKBA57wHvTxjUOd0C1zZjn3RA6N_yb8Pnugzz_H1UbJ'
    },
    {
      id: '#GF-881902',
      date: '15/10/2023',
      status: 'completed',
      statusText: 'Hoàn thành',
      productName: 'Thuốc trừ sâu sinh học Bio-B',
      variant: 'Chai 500ml',
      quantity: 2,
      seller: 'Farm Tech VN',
      total: '240.000 đ',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDXZ-pACyblZRp-devghlEp2FV4ieDtCIt_Yt-bjSFX7BzSjd29PcSVQt29X77PDlHG7Y6Fxiz2DA2p-284pk9ILhWAv5MDGkSloq31ysIXAKdt67zlGo-Od4mw_oElod2AC0zgh7hriP0d5XrdE0wUoKnJ633tkrFfi7EPUgzsYXYrvt7Gnid8lg2dLrt-BoahYsFxLNJDlsDTBEE5Q_HkaOmk3VyZiUoIN8LdOS5BxuOJysF4YUO_vdOm8jMyEh0xaAgX-h_x9cG'
    },
    {
      id: '#GF-881500',
      date: '10/10/2023',
      status: 'cancelled',
      statusText: 'Đã hủy',
      productName: 'Bộ dụng cụ làm vườn 5 món',
      variant: 'Thép không gỉ',
      quantity: 1,
      seller: 'Tools & Garden',
      total: '250.000 đ',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCV1wxCxXZsTepD1bflrlOA-QzM3IJgDPZnwo8qYvo6yDCwLpgRhODIV0wzAHP8UedgJouFokjpT23UHwVmQGZwEgU2UCyTxwf-vkU_PymEjLXHBIEeLr-M5znHlgcbvU0lH5vEpDE4y0fv0k-OvJCBicsb4xhxcJylU2J2jtpXMqoa_kj-_ohFiypaGFLf22ZJWZJ9HeJwVwc8uqEaOq4T1tis4q7o9-iknLAg1YIuvTpwj3B442MmB_8oh9yIxCPiXPiWOXaVVLAv',
      cancelledBy: 'người mua'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'shipping': return 'bg-blue-50 text-blue-600 border-blue-100';
      case 'pending': return 'bg-orange-50 text-orange-600 border-orange-100';
      case 'completed': return 'bg-green-50 text-green-600 border-green-100';
      case 'cancelled': return 'bg-red-50 text-red-600 border-red-100';
      default: return 'bg-gray-50 text-gray-500 border-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'shipping': return 'local_shipping';
      case 'pending': return 'hourglass_empty';
      case 'completed': return 'check_circle';
      case 'cancelled': return 'cancel';
      default: return 'info';
    }
  };

  return (
    <div className="flex flex-col flex-1 animate-in fade-in duration-500 bg-background-light min-h-screen font-sans">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md px-4 py-3 flex items-center justify-between border-b border-gray-100 shrink-0">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center justify-center p-2 rounded-full hover:bg-black/5 transition-all text-slate-900"
        >
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </button>
        <h1 className="text-lg font-black tracking-tight font-display uppercase">Quản lý đơn hàng</h1>
        <button className="flex items-center justify-center p-2 rounded-full hover:bg-black/5 transition-all text-slate-900">
          <span className="material-symbols-outlined text-[24px]">tune</span>
        </button>
      </header>

      {/* SEARCH & TABS */}
      <div className="bg-background-light pt-4 px-4 pb-2 sticky top-[52px] z-40">
        <div className="relative mb-4 group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <span className="material-symbols-outlined text-slate-300 group-focus-within:text-primary transition-colors text-[20px]">search</span>
          </div>
          <input 
            className="block w-full pl-11 pr-4 py-3.5 text-sm font-bold bg-white border-none rounded-[1.5rem] shadow-soft ring-1 ring-gray-100 focus:ring-2 focus:ring-primary/40 placeholder:text-slate-300 text-slate-900 transition-all" 
            placeholder="Tìm theo mã, tên SP, người bán..." 
            type="text"
          />
        </div>

        <div className="flex p-1 bg-gray-200/50 rounded-2xl shadow-inner-soft">
          <button 
            onClick={() => setActiveTab('buy')}
            className={`flex-1 py-2.5 px-3 text-[11px] font-black uppercase tracking-widest rounded-xl transition-all ${
              activeTab === 'buy' ? 'bg-white shadow-md text-slate-900' : 'text-slate-400'
            }`}
          >
            Đơn mua
          </button>
          <button 
            onClick={() => setActiveTab('sell')}
            className={`flex-1 py-2.5 px-3 text-[11px] font-black uppercase tracking-widest rounded-xl transition-all ${
              activeTab === 'sell' ? 'bg-white shadow-md text-slate-900' : 'text-slate-400'
            }`}
          >
            Đơn bán
          </button>
        </div>

        <div className="flex gap-2 overflow-x-auto hide-scrollbar mt-4 pb-2">
          {filters.map(f => (
            <button 
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`whitespace-nowrap px-5 py-2 text-[10px] font-black uppercase tracking-widest rounded-full border transition-all ${
                activeFilter === f 
                  ? 'bg-slate-900 text-white border-slate-900 shadow-lg' 
                  : 'bg-white text-slate-400 border-gray-100 hover:bg-gray-50'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* ORDER LIST */}
      <main className="flex-1 px-4 pb-32 space-y-4 pt-2">
        {orders.map((order) => (
          <div 
            key={order.id} 
            onClick={() => navigate(`/order/${order.id.replace('#', '')}`)}
            className={`group bg-white rounded-[2rem] border border-gray-50 shadow-deep overflow-hidden active:scale-[0.98] transition-all cursor-pointer ${order.status === 'cancelled' ? 'opacity-70' : ''}`}
          >
            <div className="px-5 py-3.5 border-b border-gray-50 flex justify-between items-center bg-gray-50/50">
              <div className="flex flex-col">
                <span className="text-[11px] font-black text-slate-900 uppercase tracking-tight">{order.id}</span>
                <span className="text-[9px] font-bold text-slate-300 uppercase tracking-widest mt-0.5">{order.date}</span>
              </div>
              <div className={`flex items-center gap-1.5 px-3 py-1 rounded-lg border ${getStatusColor(order.status)} shadow-inner-soft`}>
                <span className="material-symbols-outlined text-[16px] icon-fill">{getStatusIcon(order.status)}</span>
                <span className="text-[9px] font-black uppercase tracking-widest">{order.statusText}</span>
              </div>
            </div>

            <div className="p-5 flex gap-4">
              <div className="shrink-0 relative">
                <div 
                  className={`size-20 rounded-2xl bg-gray-100 bg-cover bg-center border border-gray-100 shadow-soft ${order.status === 'completed' || order.status === 'cancelled' ? 'grayscale opacity-60' : ''}`} 
                  style={{ backgroundImage: `url(${order.image})` }}
                ></div>
                <span className="absolute -bottom-2 -right-2 bg-slate-900 text-white text-[9px] font-black px-2 py-1 rounded-lg border-2 border-white shadow-lg">x{order.quantity}</span>
              </div>
              <div className="flex-1 min-w-0 flex flex-col justify-center">
                <h3 className="text-sm font-black text-slate-900 truncate tracking-tight">{order.productName}</h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Phân loại: {order.variant}</p>
                {order.otherCount && (
                  <p className="text-[10px] text-primary-dark font-black uppercase tracking-widest mt-1">...và {order.otherCount} sản phẩm khác</p>
                )}
                {order.status === 'completed' && (
                  <div className="mt-3 flex gap-2">
                    <button className="text-[9px] font-black uppercase tracking-widest text-primary-dark border border-primary/20 bg-primary/5 px-3 py-1.5 rounded-lg hover:bg-primary transition-all active:scale-95 hover:text-slate-900">Mua lại</button>
                    <button className="text-[9px] font-black uppercase tracking-widest text-slate-400 border border-gray-100 bg-transparent px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-all active:scale-95">Đánh giá</button>
                  </div>
                )}
                {order.status === 'cancelled' && (
                  <p className="text-[10px] text-red-500 font-black uppercase tracking-widest mt-2 italic">Đã hủy bởi {order.cancelledBy}</p>
                )}
              </div>
            </div>

            <div className="px-5 py-4 border-t border-gray-50 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="size-6 rounded-full bg-primary/20 flex items-center justify-center text-primary-dark text-[10px] font-black shadow-inner border border-primary/10">
                  {order.seller.charAt(0)}
                </div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{order.seller}</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest mr-2">Tổng tiền:</span>
                <span className="text-sm font-black text-primary-dark tracking-tighter">{order.total}</span>
              </div>
            </div>
          </div>
        ))}

        <div className="text-center py-10 opacity-30">
          <div className="size-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-3">
             <span className="material-symbols-outlined text-[32px]">inventory_2</span>
          </div>
          <p className="text-[9px] font-black uppercase tracking-[0.2em]">Hết danh sách đơn hàng</p>
        </div>
      </main>

      {/* FAB FOR SUPPORT */}
      <button className="fixed bottom-6 right-6 z-50 size-14 rounded-full bg-primary text-slate-900 shadow-glow shadow-primary/30 flex items-center justify-center transition-all active:scale-90 hover:scale-105 border-4 border-white">
        <span className="material-symbols-outlined text-[28px] font-black">support_agent</span>
      </button>
    </div>
  );
};

export default OrderManagementView;
