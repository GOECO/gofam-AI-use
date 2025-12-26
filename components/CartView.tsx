
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CartView: React.FC = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([
    { id: '1', name: 'Phân bón NPK 20-20-15', provider: 'Hợp tác xã Xanh', stock: 'Còn 50 bao', price: 550000, qty: 10, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgDlhzcGL8gsySHwq4hKtqt-4Gqddswx-d7DIWkKSJ6MIe2rq56TjXz9MK2TeAGEbYAtvbREnlu3XkWIMG-BEzvjECYqpQ389V_ozCJ8mKxK_33pqzeqaVPyh-EnBfiCzOsulx0ngy8_By69XgLbCR5AZtHRzz5rS8Ccdg7WOrYnrSR7dSGxHatU7vZsV3YrwnZoDnDs0anRzejMtwNDSib-Ddo39ChPcoWuU7LI8xfWs1u43ziUcGEfuUJaclzN5m8Lcj0TIIetdV' },
    { id: '2', name: 'Thuốc trừ sâu sinh học Bio-B', provider: 'Farm Tech VN', stock: 'Sắp hết hàng (12)', price: 120000, qty: 5, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDXZ-pACyblZRp-devghlEp2FV4ieDtCIt_Yt-bjSFX7BzSjd29PcSVQt29X77PDlHG7Y6Fxiz2DA2p-284pk9ILhWAv5MDGkSloq31ysIXAKdt67zlGo-Od4mw_oElod2AC0zgh7hriP0d5XrdE0wUoKnJ633tkrFfi7EPUgzsYXYrvt7Gnid8lg2dLrt-BoahYsFxLNJDlsDTBEE5Q_HkaOmk3VyZiUoIN8LdOS5BxuOJysF4YUO_vdOm8jMyEh0xaAgX-h_x9cG' },
    { id: '3', name: 'Hạt giống Lúa ST25', provider: 'Giống Cây Trồng MN', stock: 'Còn 100kg', price: 80000, qty: 20, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvOsjcyjXtX82zhwXfCQbHiofePV7jdqdI6fUg-1EkHs3J1TTSjAaRVJBJIstt97AXl8EkWY6k1-DBwgKictwWlLYDurpD_cCcK-lpnyKVneQZEquNBlf1rGXKhtrfH70GWDZNVBr7i-xjTSYhwQUxl8hr8sg6bbavKYIaKkl_Am9WVMpeCHiDB1Zmnrk9EOjMjLx1B4GEVN20JIdOcHNcRApDz3k9a-RKDyKBA57wHvTxjUOd0C1zZjn3RA6N_yb8Pnugzz_H1UbJ' }
  ]);

  const subTotal = items.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const shipping = 50000;
  const total = subTotal + shipping;

  const updateQty = (id: string, delta: number) => {
    setItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.qty + delta);
        return { ...item, qty: newQty };
      }
      return item;
    }));
  };

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="flex flex-col flex-1 animate-in fade-in duration-500 bg-background-light min-h-screen font-sans">
      {/* TOP BAR */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100 px-4 py-3 flex items-center justify-between shrink-0">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center justify-center p-2 rounded-full hover:bg-black/5 transition-all text-slate-900 active:scale-90"
        >
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </button>
        <h1 className="text-lg font-black tracking-tight font-display uppercase">Giỏ hàng của tôi</h1>
        <button 
          onClick={() => setItems([])}
          className="text-[10px] font-black text-red-500 uppercase tracking-widest hover:text-red-600 transition-colors"
        >
          Xóa tất cả
        </button>
      </header>

      <main className="flex-1 overflow-y-auto hide-scrollbar pb-32">
        {/* CART ITEMS LIST */}
        <div className="flex flex-col gap-4 p-5">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-slate-300">
              <span className="material-symbols-outlined text-[64px] mb-4">shopping_cart_off</span>
              <p className="font-black text-[10px] uppercase tracking-[0.2em]">Giỏ hàng trống</p>
              <button 
                onClick={() => navigate('/market')}
                className="mt-6 px-6 py-2 rounded-full bg-primary text-slate-900 font-black text-[10px] uppercase tracking-widest shadow-glow"
              >
                Tiếp tục mua sắm
              </button>
            </div>
          ) : items.map((item) => (
            <div key={item.id} className="group relative flex gap-5 bg-white p-4 rounded-[2rem] shadow-soft border border-gray-50 transition-all hover:shadow-deep">
              {/* Thumbnail */}
              <div className="shrink-0">
                <div 
                  className="size-24 rounded-3xl bg-gray-100 shadow-inner border border-gray-50 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" 
                  style={{ backgroundImage: `url(${item.img})` }}
                />
              </div>
              
              {/* Details */}
              <div className="flex flex-1 flex-col justify-between min-w-0 py-1">
                <div className="flex justify-between items-start gap-2">
                  <div className="min-w-0">
                    <h3 className="text-sm font-black leading-tight text-slate-900 truncate tracking-tight">{item.name}</h3>
                    <p className="text-[10px] font-bold text-slate-400 uppercase mt-1 tracking-widest">{item.provider}</p>
                    <p className={`text-[9px] mt-1 font-black uppercase tracking-widest ${item.id === '2' ? 'text-amber-500' : 'text-primary-dark'}`}>
                      {item.stock}
                    </p>
                  </div>
                  <button 
                    onClick={() => removeItem(item.id)}
                    className="text-slate-300 hover:text-red-500 transition-colors p-1"
                  >
                    <span className="material-symbols-outlined text-[20px]">delete</span>
                  </button>
                </div>
                
                <div className="flex items-center justify-between mt-3">
                  <p className="text-base font-black text-primary-dark tracking-tighter">
                    {item.price.toLocaleString('vi-VN')} <span className="text-[10px] font-bold">đ</span>
                  </p>
                  
                  {/* Stepper */}
                  <div className="flex items-center bg-gray-50 rounded-xl h-9 border border-gray-100 shadow-inner-soft p-1">
                    <button 
                      onClick={() => updateQty(item.id, -1)}
                      className="size-7 flex items-center justify-center text-slate-400 hover:text-primary-dark active:scale-90 transition-all"
                    >
                      <span className="material-symbols-outlined text-[18px]">remove</span>
                    </button>
                    <span className="w-8 text-center text-xs font-black text-slate-900">{item.qty}</span>
                    <button 
                      onClick={() => updateQty(item.id, 1)}
                      className="size-7 flex items-center justify-center text-slate-900 bg-white rounded-lg shadow-sm border border-gray-100 hover:text-primary-dark active:scale-90 transition-all"
                    >
                      <span className="material-symbols-outlined text-[18px]">add</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RECOMMENDATION SECTION */}
        <div className="mt-4 px-6">
          <h2 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Có thể bạn quan tâm</h2>
          <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar snap-x pr-4">
            {[
              { name: 'Bộ dụng cụ làm vườn 5 món', price: '250.000 đ', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCV1wxCxXZsTepD1bflrlOA-QzM3IJgDPZnwo8qYvo6yDCwLpgRhODIV0wzAHP8UedgJouFokjpT23UHwVmQGZwEgU2UCyTxwf-vkU_PymEjLXHBIEeLr-M5znHlgcbvU0lH5vEpDE4y0fv0k-OvJCBicsb4xhxcJylU2J2jtpXMqoa_kj-_ohFiypaGFLf22ZJWZJ9HeJwVwc8uqEaOq4T1tis4q7o9-iknLAg1YIuvTpwj3B442MmB_8oh9yIxCPiXPiWOXaVVLAv' },
              { name: 'Vòi tưới tự động xoay 360', price: '85.000 đ', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNXY3-MEOz6OlmidUhT6gR9ixEEV15e3N4pouVbPNVq2u4A3wDouXAjLR7-l7FgmiUrhaMlUfrbUjsX_d4LY9VP7_aK48ZyiU4fT9b62oF6I5-V3o4E7_YVVVOuzzxCBdDYeQ14nCdDqpwD43HmYeMDT9DtY_fYMZMx4_jfEa9SCelb-SNGiUvmLvVD25EcWZJt1O6dJq7gZ6oYyjefYiweYKi3g6fNU0AY_n_pbod2aARcbGaoMH5RlGvxkJ22pdyHdklCqbMfxsk' },
              { name: 'Phân hữu cơ vi sinh 10kg', price: '150.000 đ', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3s3TYpsoXC-MI9Bpxy8siTaMQ82kqgNf6j6moZ8By3g24XrO1Xx302aTRa5dQtxW23eykt7UABL-EVsusTauocLSvUXwxXmt_TqUYCDRNUtoX-2hn5HUkTzoOA1QWycR4k_yLl5Aqz4zb_zzVKgAdsl3CIniY_aCUzjt1PJ4DUGVrsRllqIN-EXUmV3DPPMQO99sfzW4I0MPOeBapJRvk8l40WcUc2N4zZKRo4wGvalcGA6BEqtVUXBulCAZeuuBsf5WlAlmKABf1' }
            ].map((rec, i) => (
              <div key={i} className="shrink-0 w-36 snap-center flex flex-col gap-2 group">
                <div 
                  className="aspect-square w-full rounded-[1.8rem] bg-gray-100 bg-cover bg-center shadow-soft group-hover:shadow-deep transition-all duration-500" 
                  style={{ backgroundImage: `url(${rec.img})` }}
                />
                <p className="text-[10px] font-black text-slate-800 line-clamp-2 leading-tight h-8 px-1 mt-1 tracking-tight">{rec.name}</p>
                <p className="text-[10px] font-black text-primary-dark px-1 tracking-tighter">{rec.price}</p>
                <button className="mt-1 w-full text-[9px] font-black py-2 bg-primary/5 text-primary-dark rounded-xl border border-primary/10 hover:bg-primary hover:text-slate-900 transition-all uppercase tracking-widest shadow-inner">
                  Thêm
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* ORDER SUMMARY */}
        <div className="mx-5 mt-6 bg-white rounded-[2.5rem] p-7 shadow-deep border border-gray-50 mb-10">
          <h3 className="text-base font-black text-slate-900 tracking-tight font-display uppercase mb-6">Tóm tắt đơn hàng</h3>
          
          {/* Coupon Input */}
          <div className="flex gap-2 mb-8">
            <div className="relative flex-1 group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-slate-300 text-[18px]">confirmation_number</span>
              </div>
              <input 
                className="block w-full pl-10 pr-4 py-3.5 text-[11px] font-black uppercase tracking-widest bg-gray-50 border-none rounded-2xl ring-1 ring-gray-100 focus:ring-2 focus:ring-primary/40 placeholder:text-slate-300 transition-all shadow-inner-soft" 
                placeholder="Mã giảm giá" 
                type="text"
              />
            </div>
            <button className="px-5 py-3 bg-primary text-slate-900 text-[10px] font-black uppercase tracking-widest rounded-2xl hover:bg-primary-dark shadow-soft active:scale-95 transition-all">
              Áp dụng
            </button>
          </div>

          {/* Totals */}
          <div className="space-y-4">
            <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
              <span className="text-slate-400">Tạm tính ({items.length} mục)</span>
              <span className="text-slate-900">{subTotal.toLocaleString('vi-VN')} đ</span>
            </div>
            <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
              <span className="text-slate-400">Phí vận chuyển</span>
              <span className="text-slate-900">{shipping.toLocaleString('vi-VN')} đ</span>
            </div>
            <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-primary-dark">
              <span>Giảm giá</span>
              <span className="font-black">-0 đ</span>
            </div>
            <div className="h-px bg-gray-50 my-2 shadow-inner"></div>
            <div className="flex justify-between items-end">
              <span className="text-base font-black text-slate-900 tracking-tight uppercase">Tổng cộng</span>
              <span className="text-3xl font-black text-primary-dark tracking-tighter leading-none">
                {total.toLocaleString('vi-VN')} <span className="text-xs">đ</span>
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* STICKY BOTTOM BAR */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/95 backdrop-blur-xl border-t border-gray-100 p-5 pb-10 z-50 shadow-deep">
        <div className="flex items-center gap-6">
          <div className="flex flex-col flex-1 min-w-0">
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Thanh toán</span>
            <span className="text-xl font-black text-primary-dark tracking-tighter truncate">{total.toLocaleString('vi-VN')} đ</span>
          </div>
          <button 
            onClick={() => navigate('/checkout')}
            disabled={items.length === 0}
            className={`flex-[2] py-4 px-6 rounded-2xl text-[11px] font-black uppercase tracking-[0.15em] flex items-center justify-center gap-3 shadow-glow transition-all active:scale-[0.98] border ${
              items.length === 0 
                ? 'bg-gray-100 text-slate-300 border-gray-100' 
                : 'bg-primary text-slate-900 border-primary-dark/10 shadow-primary/30 hover:bg-primary-dark'
            }`}
          >
            <span>Thanh toán ngay</span>
            <span className="material-symbols-outlined text-[20px] font-black">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartView;
