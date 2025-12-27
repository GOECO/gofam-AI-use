import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const SellProductView: React.FC = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedImages, setSelectedImages] = useState<{data: string, type: string}[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      // Fix: Cast Array.from(files) to File[] to avoid 'unknown' type errors for file properties and reader arguments
      const filesArray = Array.from(files) as File[];
      filesArray.forEach(file => {
        const reader = new FileReader();
        reader.onload = (event) => {
          if (event.target?.result) {
            setSelectedImages(prev => [...prev, { 
              data: event.target?.result as string, 
              type: file.type 
            }]);
          }
        };
        reader.readAsDataURL(file);
      });
    }
    // Reset input to allow re-uploading same file if needed
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const removeImage = (index: number) => {
    setSelectedImages(prev => prev.filter((_, i) => i !== index));
  };

  const setAsMain = (index: number) => {
    if (index === 0) return;
    const newImages = [...selectedImages];
    const [target] = newImages.splice(index, 1);
    newImages.unshift(target);
    setSelectedImages(newImages);
  };

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

          <div className="space-y-3">
            <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest px-1">Ảnh sản phẩm thực tế</label>
            <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar snap-x pt-2">
              {/* Upload Button */}
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="shrink-0 flex flex-col items-center justify-center size-28 rounded-[2rem] border-2 border-dashed border-primary/40 bg-primary/5 hover:bg-primary/10 transition-all group snap-start shadow-inner-soft"
              >
                <span className="material-symbols-outlined text-primary text-[32px] group-hover:scale-110 transition-transform icon-fill">add_a_photo</span>
                <span className="text-[9px] font-black text-primary-dark mt-1 uppercase tracking-widest">Thêm ảnh</span>
              </button>

              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileChange} 
                className="hidden" 
                accept="image/*" 
                multiple 
              />
              
              {/* Dynamic Image List */}
              {selectedImages.map((img, index) => (
                <div 
                  key={index} 
                  className={`relative shrink-0 size-28 rounded-[2rem] overflow-hidden shadow-deep border-2 transition-all snap-start group ${index === 0 ? 'border-primary' : 'border-gray-100'}`}
                >
                  <img 
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    src={img.data} 
                    alt={`Product ${index}`}
                  />
                  
                  {/* Overlay Badge for Main Image */}
                  {index === 0 && (
                    <div className="absolute top-0 inset-x-0 bg-primary/90 py-1 flex items-center justify-center shadow-sm">
                      <span className="text-[7px] font-black text-slate-900 uppercase tracking-[0.1em]">Ảnh đại diện</span>
                    </div>
                  )}

                  {/* Actions Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    {index !== 0 && (
                      <button 
                        onClick={() => setAsMain(index)}
                        className="size-8 bg-white rounded-xl flex items-center justify-center text-primary-dark shadow-lg active:scale-90 transition-transform"
                        title="Đặt làm ảnh bìa"
                      >
                        <span className="material-symbols-outlined text-[18px] icon-fill">star</span>
                      </button>
                    )}
                    <button 
                      onClick={() => removeImage(index)}
                      className="size-8 bg-white rounded-xl flex items-center justify-center text-red-500 shadow-lg active:scale-90 transition-transform"
                    >
                      <span className="material-symbols-outlined text-[18px]">delete</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest px-1 leading-relaxed">
              * Ảnh đầu tiên sẽ là ảnh hiển thị chính. Nhấn vào ảnh để đổi vị trí.
            </p>
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
          </div>
        </section>

        <div className="h-10"></div>
      </main>

      {/* STICKY BOTTOM ACTION */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-t border-gray-100 p-5 pb-10 shadow-deep max-w-md mx-auto">
        <button 
          disabled={selectedImages.length === 0}
          className="w-full bg-primary hover:bg-primary-dark disabled:bg-gray-200 disabled:text-slate-400 text-slate-900 font-black text-sm h-16 rounded-[2rem] shadow-glow shadow-primary/30 transition-all active:scale-[0.98] flex items-center justify-center gap-3 uppercase tracking-[0.15em] border border-primary-dark/10"
        >
          <span className="material-symbols-outlined text-[26px] font-black">storefront</span>
          Đăng bán sản phẩm
        </button>
      </div>
    </div>
  );
};

export default SellProductView;
