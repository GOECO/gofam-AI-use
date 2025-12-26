
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SellProductView: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col flex-1 animate-in fade-in duration-500 bg-background-light min-h-screen font-sans">
      {/* TOP APP BAR */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shrink-0">
        <div className="flex items-center justify-between p-4 h-16 max-w-md mx-auto">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center justify-center size-10 rounded-full hover:bg-gray-100 transition-colors text-slate-900"
          >
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </button>
          <h2 className="text-lg font-black leading-tight tracking-tight flex-1 text-center truncate px-2 font-display uppercase">Đăng bán sản phẩm</h2>
          <button className="flex items-center justify-center size-10 rounded-full hover:bg-gray-100 transition-colors text-slate-900">
            <span className="material-symbols-outlined text-[24px]">help_outline</span>
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto hide-scrollbar p-5 space-y-8 pb-32">
        {/* SECTION 1: THÔNG TIN SẢN PHẨM */}
        <section className="space-y-6">
          <h3 className="text-[10px] font-black text-primary-dark tracking-[0.2em] uppercase pl-1">Thông tin sản phẩm</h3>
          
          <div className="space-y-2">
            <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest px-1">Tên sản phẩm</label>
            <input 
              type="text" 
              placeholder="Nhập tên sản phẩm (ví dụ: Cà chua bi)"
              className="w-full h-14 px-5 rounded-2xl border-none bg-white shadow-soft ring-1 ring-gray-100 focus:ring-2 focus:ring-primary/40 text-sm font-bold text-slate-900 placeholder:text-slate-300 transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest px-1">Danh mục</label>
            <div className="relative">
              <select className="w-full h-14 appearance-none rounded-2xl border-none bg-white shadow-soft ring-1 ring-gray-100 focus:ring-2 focus:ring-primary/40 px-5 text-sm font-bold text-slate-900 pr-12 transition-all">
                <option disabled selected value="">Chọn danh mục sản phẩm</option>
                <option value="fresh">Nông sản tươi</option>
                <option value="seeds">Hạt giống</option>
                <option value="tools">Thiết bị & Dụng cụ</option>
                <option value="fertilizer">Phân bón & Thuốc</option>
              </select>
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-300">expand_more</span>
            </div>
          </div>

          <div className="space-y-3">
            <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest px-1">Ảnh/Video sản phẩm</label>
            <div className="flex gap-4 overflow-x-auto pb-2 hide-scrollbar snap-x">
              <button className="shrink-0 flex flex-col items-center justify-center size-24 rounded-3xl border-2 border-dashed border-primary/40 bg-primary/5 hover:bg-primary/10 transition-all group snap-start">
                <span className="material-symbols-outlined text-primary text-[28px] group-hover:scale-110 transition-transform icon-fill">add_a_photo</span>
                <span className="text-[9px] font-black text-primary-dark mt-1 uppercase tracking-widest">Thêm ảnh</span>
              </button>
              
              <div className="relative shrink-0 size-24 rounded-3xl overflow-hidden shadow-soft border border-gray-100 snap-start group">
                <img 
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEJUimhgu4ag08QyZm_hgAa5QU-Sql9EK5DRhhx_AZkNFoQXnQilKq7jOyaha1qFa6rZEQFVP5OQjgBVG_AQ3v4SctQfnRuwKn2exLz2RvvWv4zXX--cZwPysfWPYnye75FWJHCIaTMf8rmpwCxqMsS3biu4CKnUNgGi3SokUAIcnJkXOxKf9yvAiKhXEGi9dQFODTI1vOIHb0fqwJzmRmHxnvYZU5SVXxzoVVASCmv9TqX-nCS5H3rvknTHuGhGYrnFf-Velex9AJ" 
                />
                <button className="absolute top-1.5 right-1.5 bg-black/60 hover:bg-red-500 backdrop-blur-md rounded-xl p-1 text-white transition-all active:scale-90">
                  <span className="material-symbols-outlined text-[16px]">close</span>
                </button>
              </div>

              <div className="relative shrink-0 size-24 rounded-3xl overflow-hidden shadow-soft border border-gray-100 snap-start group">
                <img 
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAVJvo8ZnIYPEZl70BCEH0AHxTRrrYYsoyJqzWvvtgJPbnfxL5noA744figXYWbHQYUq67zdbe0waneFF3wenxUgJLxnOQK2Foj9OubJuen5hq2h2mGZxB-K_gSZ5YScZAzpM7Sy86lndyCm66m4CzaaNe0Mu_o90UBIR_3ypuYhqNZuRKiVUOCjCo9Zeg4zo8Q7w0f5my8bhmlV1MrsSLDhd8o226cZvQTEUiZTS5d04tNVSccuCxeEGsckSpVdmsYaXDwJDIqkKM" 
                />
                <button className="absolute top-1.5 right-1.5 bg-black/60 hover:bg-red-500 backdrop-blur-md rounded-xl p-1 text-white transition-all active:scale-90">
                  <span className="material-symbols-outlined text-[16px]">close</span>
                </button>
              </div>
            </div>
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest px-1">Tối đa 5 ảnh hoặc 1 video ngắn.</p>
          </div>

          <div className="space-y-2">
            <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest px-1">Mô tả chi tiết</label>
            <textarea 
              rows={4}
              placeholder="Mô tả về quy trình trồng, hương vị, hạn sử dụng..."
              className="w-full p-5 rounded-[2rem] border-none bg-white shadow-soft ring-1 ring-gray-100 focus:ring-2 focus:ring-primary/40 text-sm font-bold text-slate-900 placeholder:text-slate-300 transition-all resize-none"
            ></textarea>
          </div>
        </section>

        <div className="h-px bg-gray-100 w-full"></div>

        {/* SECTION 2: GIÁ & KHO HÀNG */}
        <section className="space-y-6">
          <h3 className="text-[10px] font-black text-primary-dark tracking-[0.2em] uppercase pl-1">Giá & Kho hàng</h3>
          
          <div className="flex gap-4">
            <div className="flex-1 space-y-2">
              <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest px-1">Giá bán</label>
              <input 
                type="number" 
                placeholder="0"
                className="w-full h-14 px-5 rounded-2xl border-none bg-white shadow-soft ring-1 ring-gray-100 focus:ring-2 focus:ring-primary/40 text-sm font-bold text-slate-900 transition-all"
              />
            </div>
            <div className="w-1/3 space-y-2">
              <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest px-1">Đơn vị tiền</label>
              <div className="relative">
                <select className="w-full h-14 appearance-none rounded-2xl border-none bg-white shadow-soft ring-1 ring-gray-100 focus:ring-2 focus:ring-primary/40 px-4 text-sm font-bold text-slate-900 pr-10 transition-all">
                  <option value="vnd">VNĐ</option>
                  <option value="gofam">Xu</option>
                  <option value="token">GFT</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-300">expand_more</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1 space-y-2">
              <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest px-1">Tồn kho</label>
              <input 
                type="number" 
                placeholder="0"
                className="w-full h-14 px-5 rounded-2xl border-none bg-white shadow-soft ring-1 ring-gray-100 focus:ring-2 focus:ring-primary/40 text-sm font-bold text-slate-900 transition-all"
              />
            </div>
            <div className="w-1/3 space-y-2">
              <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest px-1">Đơn vị bán</label>
              <div className="relative">
                <select className="w-full h-14 appearance-none rounded-2xl border-none bg-white shadow-soft ring-1 ring-gray-100 focus:ring-2 focus:ring-primary/40 px-4 text-sm font-bold text-slate-900 pr-10 transition-all">
                  <option value="kg">Kg</option>
                  <option value="bag">Túi</option>
                  <option value="box">Hộp</option>
                  <option value="piece">Cái</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-300">expand_more</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest px-1">Vị trí kho/farm</label>
            <div className="relative group cursor-pointer">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-primary-dark icon-fill">location_on</span>
              </div>
              <select className="w-full h-14 appearance-none rounded-2xl border-none bg-white shadow-soft ring-1 ring-gray-100 focus:ring-2 focus:ring-primary/40 pl-12 pr-12 text-sm font-bold text-slate-900 transition-all cursor-pointer">
                <option value="farm1">Nông trại Xanh - Đồng Nai (Mặc định)</option>
                <option value="farm2">Vườn rau sạch - Đà Lạt</option>
                <option value="new">+ Thêm vị trí mới</option>
              </select>
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-300">expand_more</span>
            </div>
          </div>
        </section>

        <div className="h-px bg-gray-100 w-full"></div>

        {/* SECTION 3: CHỨNG NHẬN & NGUỒN GỐC */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <h3 className="text-[10px] font-black text-primary-dark tracking-[0.2em] uppercase pl-1">Chứng nhận & Nguồn gốc</h3>
            <span className="bg-primary/20 text-primary-dark text-[8px] px-2 py-0.5 rounded-lg font-black border border-primary/20 tracking-tighter shadow-inner">BLOCKCHAIN</span>
          </div>

          <div className="space-y-2">
            <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest px-1">Mã lô sản xuất</label>
            <div className="flex gap-3">
              <input 
                type="text" 
                placeholder="Nhập mã hoặc quét QR"
                className="flex-1 h-14 px-5 rounded-2xl border-none bg-white shadow-soft ring-1 ring-gray-100 focus:ring-2 focus:ring-primary/40 text-sm font-bold text-slate-900 placeholder:text-slate-300 transition-all"
              />
              <button className="flex items-center justify-center size-14 bg-white ring-1 ring-gray-100 rounded-2xl hover:bg-gray-50 transition-all text-primary shadow-soft active:scale-90">
                <span className="material-symbols-outlined text-[26px]">qr_code_scanner</span>
              </button>
            </div>
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest px-1 leading-relaxed">Liên kết dữ liệu nuôi trồng từ IoT để tăng uy tín.</p>
          </div>

          <div className="space-y-4">
            <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest px-1">Chứng nhận chất lượng</label>
            
            <div className="flex items-center justify-between p-4 rounded-[1.5rem] ring-1 ring-gray-100 bg-white shadow-soft group hover:ring-primary/20 transition-all">
              <div className="flex items-center gap-4">
                <div className="size-11 rounded-xl bg-green-50 flex items-center justify-center text-green-600 shadow-inner">
                  <span className="material-symbols-outlined text-[24px] icon-fill">verified</span>
                </div>
                <div>
                  <p className="text-sm font-black text-slate-900 tracking-tight">VietGAP Certified</p>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Đã xác thực • 12/2024</p>
                </div>
              </div>
              <button className="size-9 rounded-xl flex items-center justify-center text-slate-300 hover:text-red-500 hover:bg-red-50 transition-all active:scale-90">
                <span className="material-symbols-outlined text-[20px]">delete</span>
              </button>
            </div>

            <button className="flex items-center justify-center gap-2 w-full h-14 rounded-[1.5rem] border-2 border-dashed border-gray-200 bg-transparent hover:bg-gray-50 hover:border-primary/40 transition-all text-slate-400 hover:text-primary-dark font-black text-[10px] uppercase tracking-widest">
              <span className="material-symbols-outlined text-[20px]">upload_file</span>
              Tải lên chứng nhận (PDF, JPG)
            </button>
          </div>
        </section>

        <div className="h-10"></div>
      </main>

      {/* STICKY BOTTOM ACTION */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-t border-gray-100 p-5 pb-10 shadow-deep max-w-md mx-auto">
        <button className="w-full bg-primary hover:bg-primary-dark text-slate-900 font-black text-sm h-16 rounded-[2rem] shadow-glow shadow-primary/30 transition-all active:scale-[0.98] flex items-center justify-center gap-3 uppercase tracking-[0.15em] border border-primary-dark/10">
          <span className="material-symbols-outlined text-[26px] font-black">storefront</span>
          Đăng bán sản phẩm
        </button>
      </div>
    </div>
  );
};

export default SellProductView;
