
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const OrderDetailView: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const steps = [
    { label: 'Đặt hàng', icon: 'check', active: true, completed: true },
    { label: 'Xác nhận', icon: 'check', active: true, completed: true },
    { label: 'Đóng gói', icon: 'inventory_2', active: true, completed: true },
    { label: 'Giao hàng', icon: 'local_shipping', active: true, completed: false, current: true },
    { label: 'Hoàn thành', icon: 'flag', active: false, completed: false }
  ];

  return (
    <div className="flex flex-col flex-1 animate-in fade-in duration-500 bg-background-light min-h-screen font-sans">
      {/* TOP APP BAR */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md px-4 py-4 flex items-center justify-between border-b border-gray-200 shrink-0">
        <button 
          onClick={() => navigate(-1)}
          className="flex size-10 shrink-0 items-center justify-center rounded-full active:bg-gray-100 transition-colors text-slate-900"
        >
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </button>
        <h2 className="text-slate-900 text-lg font-black leading-tight tracking-tight flex-1 text-center font-display uppercase pr-10">Chi tiết đơn hàng</h2>
      </header>

      <div className="flex-1 overflow-y-auto hide-scrollbar pb-32">
        {/* STATUS & TIMELINE SECTION */}
        <div className="px-5 py-6 bg-white mb-3 shadow-soft border-b border-gray-100">
          <div className="flex justify-between items-start mb-8">
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Mã đơn hàng</p>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-black tracking-tighter text-slate-900">#GOFAM-{id || '8823'}</h2>
                <button className="text-slate-300 hover:text-primary transition-colors active:scale-90">
                  <span className="material-symbols-outlined text-[18px]">content_copy</span>
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center rounded-xl bg-primary/10 px-4 py-2 border border-primary/20 shadow-inner">
              <span className="text-primary-dark text-[10px] font-black uppercase tracking-widest">Đang giao</span>
            </div>
          </div>

          {/* Horizontal Stepper */}
          <div className="relative flex items-center justify-between w-full px-2 mb-8">
            {/* Progress Line Background */}
            <div className="absolute left-0 top-4 -translate-y-1/2 w-full h-[3px] bg-gray-100 -z-10 rounded-full"></div>
            {/* Progress Line Active (75%) */}
            <div className="absolute left-0 top-4 -translate-y-1/2 w-[75%] h-[3px] bg-primary -z-10 rounded-full shadow-glow"></div>
            
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <div className={`size-9 rounded-full flex items-center justify-center ring-[6px] ring-white transition-all shadow-sm ${
                  step.current 
                    ? 'bg-white border-[3px] border-primary text-primary' 
                    : (step.completed ? 'bg-primary text-white' : 'bg-gray-100 text-slate-300')
                }`}>
                  <span className={`material-symbols-outlined text-[18px] font-black ${step.completed ? 'icon-fill' : ''}`}>
                    {step.icon}
                  </span>
                </div>
                <span className={`text-[9px] font-black uppercase tracking-tighter whitespace-nowrap ${
                  step.current || step.completed ? 'text-slate-900' : 'text-slate-300'
                }`}>
                  {step.label}
                </span>
              </div>
            ))}
          </div>

          <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10 flex gap-4 items-start shadow-inner-soft">
            <div className="size-8 rounded-xl bg-primary/20 flex items-center justify-center shrink-0 text-primary-dark">
              <span className="material-symbols-outlined text-[20px] icon-fill">info</span>
            </div>
            <p className="text-xs text-slate-600 font-bold leading-relaxed">
              Đơn hàng đang được vận chuyển bởi <span className="text-slate-900 font-black">GHN</span>. Dự kiến giao vào ngày <span className="text-slate-900 font-black">24/10/2023</span>.
            </p>
          </div>
        </div>

        {/* PRODUCTS LIST */}
        <div className="bg-white mb-3 shadow-soft border-b border-gray-100">
          <div className="px-5 py-4 border-b border-gray-50 flex justify-between items-center">
            <h3 className="text-base font-black text-slate-900 uppercase tracking-tight font-display">Sản phẩm (2)</h3>
            <span className="text-[10px] font-black text-slate-400 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100 uppercase tracking-widest">GOFAM Mall</span>
          </div>
          
          <div className="flex flex-col divide-y divide-gray-50">
            {/* Product 1 */}
            <div className="flex gap-5 p-5 group cursor-pointer hover:bg-gray-50 transition-colors">
              <div className="size-20 shrink-0 rounded-2xl bg-gray-100 overflow-hidden border border-gray-100 shadow-soft relative">
                <img 
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQlvixuAbkRkYf-3KQ8uCxLHCUz1XTbRvkkFoVZemmfOY7XfRPa0YA7vOQzPpVj5kmH2OBzWhRC_39kG9SV3mnBX8rq_NM3S6YMWMsMsuzqmGuszr60LVEy7Jw0Bl14Q9VZHZGQb0s-FEGG0QuZX0Tv7XiTTPlcR9zrEGrGVJnOhTtT-wnQ0RKfWE1CoPL-X3GjSpG2WtNIevOvrf_p5Mm4jgOsS9I2IrQgC3HzYGO-YIEu2eNXsg3_sBZxh-HdEUOUIG9hNb4zjBO" 
                />
              </div>
              <div className="flex flex-1 flex-col justify-between py-1 min-w-0">
                <div>
                  <p className="text-sm font-black text-slate-900 leading-snug line-clamp-2 tracking-tight">Phân bón hữu cơ BioGreen 5kg - Kích thích ra rễ</p>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Phân loại: Bao 5kg</p>
                </div>
                <div className="flex items-end justify-between mt-2">
                  <span className="text-[10px] font-black text-slate-300 uppercase bg-gray-100 px-2 py-0.5 rounded">x2</span>
                  <div className="text-right">
                    <p className="text-[10px] text-slate-300 line-through font-bold">180.000đ</p>
                    <p className="text-sm font-black text-slate-900 tracking-tighter">150.000đ</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="flex gap-5 p-5 group cursor-pointer hover:bg-gray-50 transition-colors">
              <div className="size-20 shrink-0 rounded-2xl bg-gray-100 overflow-hidden border border-gray-100 shadow-soft relative">
                <img 
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDY6tLwHaF31zM1y_9nw1JZedPtiSy55tYHiIT4eDAOHca_QmOpb2REHni85QaF2lXydtFuHMkXAUBpIWTN7iMII7ufw6icono3JKJh9itkhECIuVkTpH2VDU8LoBiL39QqEzOj-5j3zzVZA9ErW0-O-_jYP1Gjdpt1m8vMwTzVQLSeiAXcNcmI5ssi20XngoWpLVR31yjCceLrZ8frta0xN-wCUCL90IiilwiCE3cCBubnpPBVCN0eCP8KPExIUtD0ckEVX1Qjet0J" 
                />
              </div>
              <div className="flex flex-1 flex-col justify-between py-1 min-w-0">
                <div>
                  <p className="text-sm font-black text-slate-900 leading-snug line-clamp-2 tracking-tight">Bộ dụng cụ làm vườn chuyên dụng (5 món)</p>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Phân loại: Thép không gỉ</p>
                </div>
                <div className="flex items-end justify-between mt-2">
                  <span className="text-[10px] font-black text-slate-300 uppercase bg-gray-100 px-2 py-0.5 rounded">x1</span>
                  <p className="text-sm font-black text-slate-900 tracking-tighter">350.000đ</p>
                </div>
              </div>
            </div>
          </div>

          <div className="px-5 py-4 border-t border-gray-50 flex justify-end items-center gap-3 bg-gray-50/30">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Thành tiền (3 sản phẩm):</span>
            <span className="text-lg font-black text-primary-dark tracking-tighter">650.000đ</span>
          </div>
        </div>

        {/* INFO GRID (ADDRESS & SHIPPING) */}
        <div className="space-y-3 mb-3">
          {/* Delivery Address */}
          <div className="bg-white p-6 shadow-soft border-b border-gray-100">
            <div className="flex items-center gap-3 mb-5 pb-3 border-b border-gray-50">
              <div className="size-9 flex items-center justify-center rounded-xl bg-primary/10 text-primary-dark shadow-inner">
                <span className="material-symbols-outlined text-[20px] icon-fill">location_on</span>
              </div>
              <h3 className="text-xs font-black uppercase tracking-[0.15em] text-slate-900">Địa chỉ nhận hàng</h3>
            </div>
            <div className="pl-4 border-l-2 border-primary/20 ml-4">
              <p className="text-sm font-black text-slate-900 tracking-tight flex items-center gap-2">
                Nguyễn Văn A 
                <span className="text-slate-200 font-normal">|</span> 
                <span className="text-slate-400 font-bold tracking-widest">(+84) 912 345 678</span>
              </p>
              <p className="text-[11px] text-slate-500 font-bold mt-2 leading-relaxed tracking-tight">
                Trang trại Xanh, Ấp 3, Xã Minh Hưng, Huyện Chơn Thành, Tỉnh Bình Phước
              </p>
            </div>
          </div>

          {/* Shipping Method */}
          <div className="bg-white p-6 shadow-soft border-b border-gray-100">
            <div className="flex items-center gap-3 mb-5 pb-3 border-b border-gray-50">
              <div className="size-9 flex items-center justify-center rounded-xl bg-info/10 text-info shadow-inner">
                <span className="material-symbols-outlined text-[20px] icon-fill">local_shipping</span>
              </div>
              <h3 className="text-xs font-black uppercase tracking-[0.15em] text-slate-900">Vận chuyển</h3>
            </div>
            <div className="flex justify-between items-center bg-gray-50/50 p-4 rounded-2xl border border-gray-100 shadow-inner-soft">
              <div>
                <p className="text-sm font-black text-slate-900 tracking-tight">Giao Hàng Nhanh (GHN)</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Tiêu chuẩn - Đồng kiểm</p>
              </div>
              <p className="text-sm font-black text-slate-900 tracking-tighter">35.000đ</p>
            </div>
          </div>
        </div>

        {/* PAYMENT INFO */}
        <div className="bg-white p-7 mb-10 shadow-soft border-b border-gray-100">
          <div className="flex items-center gap-3 mb-6 pb-3 border-b border-gray-50">
            <div className="size-9 flex items-center justify-center rounded-xl bg-amber-50 text-amber-500 shadow-inner">
              <span className="material-symbols-outlined text-[20px] icon-fill">payments</span>
            </div>
            <h3 className="text-xs font-black uppercase tracking-[0.15em] text-slate-900">Thanh toán</h3>
          </div>

          <div className="flex items-center gap-4 mb-8 bg-gray-50/50 p-4 rounded-[1.5rem] border border-gray-100 shadow-inner-soft">
            <div className="size-11 rounded-xl bg-white flex items-center justify-center text-pink-500 shadow-soft border border-pink-50">
              <span className="material-symbols-outlined text-[26px] icon-fill">account_balance_wallet</span>
            </div>
            <div>
              <p className="text-sm font-black text-slate-900 tracking-tight uppercase">Ví MoMo</p>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">Đã thanh toán • 20/10/2023 14:30</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center text-[11px] font-black uppercase tracking-widest">
              <span className="text-slate-400">Tổng tiền hàng</span>
              <span className="text-slate-900">650.000đ</span>
            </div>
            <div className="flex justify-between items-center text-[11px] font-black uppercase tracking-widest">
              <span className="text-slate-400">Phí vận chuyển</span>
              <span className="text-slate-900">35.000đ</span>
            </div>
            <div className="flex justify-between items-center text-[11px] font-black uppercase tracking-widest text-primary-dark">
              <span>Giảm giá vận chuyển</span>
              <span className="font-black">-15.000đ</span>
            </div>
            <div className="flex justify-between items-center text-[11px] font-black uppercase tracking-widest text-primary-dark">
              <span>Voucher GOFAM</span>
              <span className="font-black">-20.000đ</span>
            </div>
            <div className="h-px bg-gray-100 my-4 shadow-inner"></div>
            <div className="flex justify-between items-end">
              <span className="text-base font-black text-slate-900 tracking-tight uppercase">Tổng thanh toán</span>
              <span className="text-3xl font-black text-primary-dark tracking-tighter leading-none">650.000đ</span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM ACTION BAR (STICKY) */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/95 backdrop-blur-xl border-t border-gray-100 p-5 pb-10 z-[60] shadow-deep">
        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-3 px-6 h-14 rounded-2xl border-2 border-gray-100 bg-white text-slate-600 font-black text-[11px] uppercase tracking-widest transition-all active:scale-95 hover:bg-gray-50 shadow-soft group">
            <span className="material-symbols-outlined text-[22px] group-hover:text-primary-dark transition-colors">chat</span>
            <span>Liên hệ Shop</span>
          </button>
          <button className="flex items-center justify-center gap-3 px-6 h-14 rounded-2xl bg-primary text-slate-900 font-black text-[11px] uppercase tracking-[0.15em] shadow-glow shadow-primary/30 active:scale-[0.98] transition-all border border-primary-dark/10">
            <span>Đã nhận hàng</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailView;
