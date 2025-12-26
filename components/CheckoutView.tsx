
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckoutView: React.FC = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('token');

  return (
    <div className="flex flex-col flex-1 animate-in fade-in duration-500 bg-background-light min-h-screen font-sans">
      {/* TOP APP BAR */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md p-4 border-b border-gray-100 shrink-0">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => navigate(-1)}
            className="text-slate-900 flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-black/5 transition-all"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h2 className="text-slate-900 text-lg font-black leading-tight tracking-tight flex-1 text-center font-display uppercase pr-10">Thanh toán</h2>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto hide-scrollbar pb-32">
        <div className="flex flex-col gap-5 p-5">
          {/* SECTION: DELIVERY ADDRESS */}
          <div className="flex flex-col gap-4 rounded-[2.5rem] bg-white p-6 shadow-soft border border-gray-50">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3 text-primary-dark">
                <span className="material-symbols-outlined text-[22px] icon-fill">location_on</span>
                <p className="text-[10px] font-black uppercase tracking-[0.15em]">Địa chỉ nhận hàng</p>
              </div>
              <button className="text-primary-dark text-[10px] font-black uppercase tracking-widest hover:underline">Thay đổi</button>
            </div>
            
            <div className="pl-8 border-l-2 border-gray-50 ml-2.5">
              <p className="text-slate-900 text-base font-black leading-tight mb-1.5 tracking-tight">Nông trại A - Khu vực 2</p>
              <p className="text-slate-400 text-xs font-bold leading-relaxed line-clamp-2">Xã Hòa An, Huyện Cao Lãnh, Đồng Tháp</p>
              <p className="text-slate-400 text-xs font-bold mt-1.5">+84 912 345 678 (Anh Ba)</p>
            </div>

            <div className="flex items-center gap-3 pl-8 mt-2">
              <div className="h-px flex-1 bg-gray-50"></div>
              <span className="text-[8px] text-slate-300 font-black uppercase tracking-[0.2em]">Tùy chọn</span>
              <div className="h-px flex-1 bg-gray-50"></div>
            </div>

            <label className="flex items-center gap-3 pl-8 cursor-pointer group">
              <input 
                type="checkbox" 
                className="size-5 rounded-lg border-2 border-gray-100 text-primary focus:ring-primary shadow-inner-soft transition-all"
              />
              <span className="text-xs font-bold text-slate-500 group-hover:text-slate-900 transition-colors">Nhận tại kho HTX Cao Lãnh</span>
            </label>
          </div>

          {/* SECTION: ORDER ITEMS */}
          <div className="space-y-4">
            <h3 className="text-slate-900 text-base font-black tracking-tight uppercase px-1 font-display">Sản phẩm</h3>
            
            {/* Item 1 */}
            <div className="flex gap-5 bg-white p-4 rounded-[2rem] shadow-soft border border-gray-50 group hover:shadow-deep transition-all">
              <div className="bg-gray-100 rounded-2xl size-20 shrink-0 overflow-hidden shadow-inner border border-gray-50">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEpFpV4idFU0ho4X94SBmdtpnavhzXJgUvbZGVGlaccvj-JVU9T188NfWn5qjhPH1I8Kc_S2OouxJbyrxCTeSSh5EkRs2dQf4aCtkVXzQVob5lkZgTfILQs4UdQw21UNW3X9froB-WDb9ws3P6c4OStck4GO6QhBnHUOKRld_uO_0kb9pgnVMMP_NDOnpuHaKinZXSUNl-UGU-geCE8urj-z6bLrvlBEmdp3p8IcuJizbcJ1vAACHYtclB30B9GJsKlTPQddU0_vRw"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between py-1 min-w-0">
                <div>
                  <p className="text-slate-900 text-sm font-black leading-tight line-clamp-1 tracking-tight">Hạt giống lúa ST25</p>
                  <p className="text-slate-300 text-[10px] font-black uppercase tracking-widest mt-1">Bao 50kg • Đông Xuân</p>
                </div>
                <div className="flex justify-between items-end mt-2">
                  <p className="text-primary-dark text-base font-black tracking-tighter">1.200.000 đ</p>
                  <p className="text-slate-400 text-xs font-black bg-gray-50 px-2 py-0.5 rounded-lg border border-gray-100">x50</p>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex gap-5 bg-white p-4 rounded-[2rem] shadow-soft border border-gray-50 group hover:shadow-deep transition-all">
              <div className="bg-gray-100 rounded-2xl size-20 shrink-0 overflow-hidden shadow-inner border border-gray-50">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQgbt1DKpjKUCORVr6KsanP_GVklyS9zL_KMwyPHdI_UTqvjJ4vFGdBDCrUm1zkxy7auYs8EhtLToOKypTjAi1RaWpDa_AyRj43EkV0X_siZA8ylIdmVh221wlXmohmcZT-8sSMvXtaoPAWs6L7KIJN4KcimywNYQAoebIlfjpproowSBYzop9WEuh9oHVcnYiuDUjnOjSME39rtcqsqllD_R-u3Eolq6uOUKCvJuRF34-5BV5D1ryDPPrW8IvY05QNYZnYddI7zeu"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between py-1 min-w-0">
                <div>
                  <p className="text-slate-900 text-sm font-black leading-tight line-clamp-1 tracking-tight">Máy đo độ ẩm đất IoT</p>
                  <p className="text-slate-300 text-[10px] font-black uppercase tracking-widest mt-1">Đa điểm • Bảo hành 12th</p>
                </div>
                <div className="flex justify-between items-end mt-2">
                  <p className="text-primary-dark text-base font-black tracking-tighter">3.500.000 đ</p>
                  <p className="text-slate-400 text-xs font-black bg-gray-50 px-2 py-0.5 rounded-lg border border-gray-100">x1</p>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION: PAYMENT METHODS */}
          <div className="mt-4 space-y-4">
            <h3 className="text-slate-900 text-base font-black tracking-tight uppercase px-1 font-display">Phương thức thanh toán</h3>
            <div className="flex flex-col gap-3">
              {/* Token */}
              <label className={`relative flex items-center justify-between p-5 rounded-[2rem] border-2 cursor-pointer transition-all ${
                paymentMethod === 'token' ? 'bg-primary/5 border-primary/30 shadow-glow' : 'bg-white border-gray-50 shadow-soft hover:bg-gray-50'
              }`}>
                <div className="flex items-center gap-4">
                  <div className={`size-12 rounded-2xl flex items-center justify-center shadow-inner transition-colors ${
                    paymentMethod === 'token' ? 'bg-primary/20 text-primary-dark' : 'bg-gray-100 text-slate-400'
                  }`}>
                    <span className="material-symbols-outlined text-[28px] icon-fill">token</span>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-slate-900 font-black text-sm tracking-tight uppercase">GOFAM Token</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <p className="text-primary-dark text-[9px] font-black">1 GFT ≈ 25k</p>
                      <span className="size-1 rounded-full bg-slate-200"></span>
                      <p className="text-slate-400 text-[9px] font-black uppercase">Dư: 500 GFT</p>
                    </div>
                  </div>
                </div>
                <input 
                  type="radio" 
                  name="payment" 
                  checked={paymentMethod === 'token'}
                  onChange={() => setPaymentMethod('token')}
                  className="size-6 border-2 border-gray-100 text-primary focus:ring-primary shadow-inner-soft transition-all"
                />
                <div className="absolute -top-2 -right-2 bg-primary text-slate-900 text-[8px] font-black px-3 py-1 rounded-full shadow-glow border-2 border-white uppercase tracking-widest">
                  Khuyên dùng
                </div>
              </label>

              {/* COD */}
              <label className={`flex items-center justify-between p-5 rounded-[2rem] border-2 cursor-pointer transition-all ${
                paymentMethod === 'cod' ? 'bg-primary/5 border-primary/30 shadow-glow' : 'bg-white border-gray-50 shadow-soft hover:bg-gray-50'
              }`}>
                <div className="flex items-center gap-4">
                  <div className="size-12 rounded-2xl bg-gray-100 text-slate-400 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[28px] icon-fill">payments</span>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-slate-900 font-black text-sm tracking-tight uppercase">Tiền mặt (COD)</p>
                    <p className="text-slate-400 text-[9px] font-bold uppercase tracking-widest mt-0.5">Thanh toán cho Shipper</p>
                  </div>
                </div>
                <input 
                  type="radio" 
                  name="payment" 
                  checked={paymentMethod === 'cod'}
                  onChange={() => setPaymentMethod('cod')}
                  className="size-6 border-2 border-gray-100 text-primary focus:ring-primary"
                />
              </label>

              {/* Bank */}
              <label className={`flex items-center justify-between p-5 rounded-[2rem] border-2 cursor-pointer transition-all ${
                paymentMethod === 'bank' ? 'bg-primary/5 border-primary/30 shadow-glow' : 'bg-white border-gray-50 shadow-soft hover:bg-gray-50'
              }`}>
                <div className="flex items-center gap-4">
                  <div className="size-12 rounded-2xl bg-gray-100 text-slate-400 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[28px] icon-fill">qr_code_scanner</span>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-slate-900 font-black text-sm tracking-tight uppercase">Chuyển khoản</p>
                    <p className="text-slate-400 text-[9px] font-bold uppercase tracking-widest mt-0.5">Quét mã VietQR</p>
                  </div>
                </div>
                <input 
                  type="radio" 
                  name="payment" 
                  checked={paymentMethod === 'bank'}
                  onChange={() => setPaymentMethod('bank')}
                  className="size-6 border-2 border-gray-100 text-primary focus:ring-primary"
                />
              </label>
            </div>
          </div>

          {/* SECTION: SUMMARY */}
          <div className="mt-4 p-7 rounded-[2.5rem] bg-white border border-gray-50 shadow-deep">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                <span className="text-slate-400">Tạm tính (2 mục)</span>
                <span className="text-slate-900">63.500.000 đ</span>
              </div>
              <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                <span className="text-slate-400">Phí vận chuyển</span>
                <span className="text-slate-900">150.000 đ</span>
              </div>
              <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                <span className="text-slate-400">Ưu đãi thành viên</span>
                <span className="text-primary-dark">- 500.000 đ</span>
              </div>
              <div className="h-px bg-gray-50 my-2 shadow-inner"></div>
              <div className="flex justify-between items-end">
                <span className="text-slate-900 font-black text-base tracking-tight uppercase">Tổng cộng</span>
                <div className="text-right">
                  <span className="text-3xl font-black text-primary-dark tracking-tighter leading-none">63.150.000 đ</span>
                  <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest mt-2 bg-gray-50 px-2 py-1 rounded-lg inline-block">≈ 2,526 GFT</p>
                </div>
              </div>
            </div>
          </div>

          {/* SECURITY NOTE */}
          <div className="flex items-center justify-center gap-2.5 text-slate-300 py-6 mb-10">
            <span className="material-symbols-outlined text-[18px]">lock</span>
            <p className="text-[9px] font-black uppercase tracking-widest">Dữ liệu được bảo mật bởi GOFAM Cloud</p>
          </div>
        </div>
      </div>

      {/* STICKY BOTTOM BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-gray-100 p-5 pb-10 shadow-deep max-w-md mx-auto">
        <div className="flex items-center justify-between gap-6">
          <div className="flex flex-col min-w-0">
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Tổng thanh toán</p>
            <p className="text-xl font-black text-slate-900 tracking-tighter truncate">63.150.000 đ</p>
          </div>
          <button className="flex-1 bg-primary hover:bg-[#0fd640] text-slate-900 text-xs font-black py-4 px-8 rounded-2xl shadow-glow shadow-primary/30 active:scale-[0.98] transition-all flex items-center justify-center gap-3 uppercase tracking-[0.15em] border border-primary-dark/10">
            <span>Đặt hàng ngay</span>
            <span className="material-symbols-outlined text-[20px] font-black">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutView;
