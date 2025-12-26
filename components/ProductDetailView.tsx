
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductDetailView: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Mô tả');
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  
  const scrollRef = useRef<HTMLDivElement>(null);

  const productName = 'Phân bón hữu cơ sinh học BioGreen Premium (25kg)';
  const adPrompt = `Cận cảnh quy trình sản xuất phân bón hữu cơ BioGreen, nhấn mạnh tính an toàn và hiệu quả cho cây trồng. Kết thúc bằng cảnh trang trại xanh tươi.`;

  const productImages = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuA3CmZy_s7d21Xq9qrsPGjWEFA3j6C3KEy9qeY9OMfjy3bC6tX5lw6YjD2c7cEt_tsHr6FmvfD93NmND_vexciBPVV4ewEWtOqENwA2VYMpxF9wka1hGYaXh3K7h8U4xiE532nvdauEcFAqPvi_Lspv5PP-yT3q-SA6jvVnpPn-Ih3bJuJHRgTaUtlFEji8ONR48lFQfY9bAp6u4XxhIm8b0YCIo55PrR_mTCPVm68j3YZwpzd8yE23S4rLMHiWT22UmlbfurtbJ-uA',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuD-SnfH6faUJ-sye84iK8gdME4O-VbMsHRr51KMdzXAVmAF-AwoZ68lEdSFZDl0bY_rip0Gvozo0ROT4HTAFKVfe7HZGUnyq4hueGxPNqidnfJxM4MI-cRC_GWT-pe4xRDcU5beNDMcNmScLV8HVJQjAefk8VMVDSwim0DvKhLkZFqCvp-0nVJEsGmzuF2AMBx8NgWVYCJu6H9Ojj4qlfzmgeYWpb1ff_z1dw-PfxuJs1tB3wsWJL36rhUN6-ERopOeUl7QTNR1Z1h3',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCvOsjcyjXtX82zhwXfCQbHiofePV7jdqdI6fUg-1EkHs3J1TTSjAaRVJBJIstt97AXl8EkWY6k1-DBwgKictwWlLYDurpD_cCcK-lpnyKVneQZEquNBlf1rGXKhtrfH70GWDZNVBr7i-xjTSYhwQUxl8hr8sg6bbavKYIaKkl_Am9WVMpeCHiDB1Zmnrk9EOjMjLx1B4GEVN20JIdOcHNcRApDz3k9a-RKDyKBA57wHvTxjUOd0C1zZjn3RA6N_yb8Pnugzz_H1UbJ'
  ];

  const handleCreateVideo = () => {
    navigate('/studio', { 
      state: { 
        prompt: adPrompt, 
        mode: 'video',
        aspectRatio: '16:9',
        title: productName
      } 
    });
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / clientWidth);
      setActiveImgIndex(index);
    }
  };

  return (
    <div className="flex flex-col flex-1 animate-in fade-in duration-500 bg-background-light min-h-screen font-sans overflow-x-hidden">
      {/* FULLSCREEN ZOOM OVERLAY */}
      {isZoomed && (
        <div 
          className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center animate-in zoom-in duration-300"
          onClick={() => setIsZoomed(false)}
        >
          <button className="absolute top-8 right-6 size-12 bg-white/10 rounded-full flex items-center justify-center text-white backdrop-blur-md">
            <span className="material-symbols-outlined">close</span>
          </button>
          <img 
            src={productImages[activeImgIndex]} 
            className="w-full max-h-[80vh] object-contain"
            alt="Zoomed Product"
          />
          <p className="mt-8 text-white/50 text-[10px] font-black uppercase tracking-widest">Chạm để đóng</p>
        </div>
      )}

      {/* HEADER */}
      <header className="sticky top-0 z-50 flex items-center justify-between bg-white/95 backdrop-blur-md px-4 py-3 border-b border-gray-100 shrink-0">
        <button onClick={() => navigate(-1)} className="flex size-10 items-center justify-center rounded-full hover:bg-black/5 active:scale-95 text-slate-900">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-lg font-black font-display text-slate-900 uppercase">Chi tiết sản phẩm</h1>
        <button onClick={() => navigate('/cart')} className="relative flex size-10 items-center justify-center rounded-full hover:bg-black/5 text-slate-900">
          <span className="material-symbols-outlined">shopping_cart</span>
          <span className="absolute top-2 right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-black text-white border-2 border-white shadow-sm">2</span>
        </button>
      </header>

      <div className="flex-1 overflow-y-auto hide-scrollbar pb-32">
        {/* PRODUCT GALLERY CAROUSEL */}
        <div className="relative w-full aspect-square bg-white overflow-hidden group">
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex w-full h-full overflow-x-auto snap-x snap-mandatory hide-scrollbar"
          >
            {productImages.map((img, i) => (
              <div key={i} className="min-w-full h-full snap-center shrink-0">
                <img 
                  alt={`BioGreen Premium ${i + 1}`} 
                  className="w-full h-full object-cover" 
                  src={img} 
                />
              </div>
            ))}
          </div>

          {/* Carousel Indicators (Dots) */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {productImages.map((_, i) => (
              <div 
                key={i} 
                className={`transition-all duration-300 rounded-full ${
                  activeImgIndex === i ? 'w-6 h-2 bg-primary shadow-glow' : 'w-2 h-2 bg-slate-300'
                }`}
              />
            ))}
          </div>

          {/* Action Overlay */}
          <div className="absolute top-5 right-5 flex flex-col gap-3">
            <button onClick={() => setIsFavorite(!isFavorite)} className="size-11 rounded-2xl bg-white/90 shadow-deep flex items-center justify-center text-slate-400 active:scale-90 transition-transform">
              <span className={`material-symbols-outlined ${isFavorite ? 'text-red-500 icon-fill' : ''}`}>favorite</span>
            </button>
            <button 
              onClick={() => setIsZoomed(true)}
              className="size-11 rounded-2xl bg-white/90 shadow-deep flex items-center justify-center text-slate-400 active:scale-90 transition-transform"
            >
              <span className="material-symbols-outlined">zoom_in</span>
            </button>
          </div>

          {/* Overlay Count */}
          <div className="absolute bottom-5 right-5 bg-slate-900/60 backdrop-blur-md text-white text-[9px] font-black px-3 py-1 rounded-full border border-white/10 uppercase tracking-widest">
            {activeImgIndex + 1} / {productImages.length}
          </div>
        </div>

        {/* INFO SECTION */}
        <div className="px-5 py-6 bg-white rounded-b-[2.5rem] shadow-soft">
          <div className="flex justify-between items-start mb-2">
             <span className="bg-primary/10 text-primary-dark text-[8px] font-black px-2 py-1 rounded uppercase tracking-widest border border-primary/20">Organic Certified</span>
             <span className="text-[10px] font-bold text-slate-300">Mã: BG-PR25</span>
          </div>
          <h2 className="text-xl font-black font-display text-slate-900 leading-snug tracking-tight mb-4">{productName}</h2>
          <div className="flex items-end gap-3">
            <span className="text-3xl font-black text-primary-dark tracking-tighter">450.000đ</span>
            <span className="text-sm text-slate-300 font-bold line-through mb-1">600.000đ</span>
          </div>
        </div>

        {/* AI MARKETING HUB SECTION */}
        <div className="mx-5 mt-6 mb-2">
          <div className="bg-slate-900 rounded-[2.5rem] p-6 text-white relative overflow-hidden shadow-2xl border border-primary/20 group">
             <div className="absolute top-0 right-0 size-40 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
             
             <div className="flex items-center gap-3 mb-5 relative z-10">
                <div className="size-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary shadow-glow border border-primary/30">
                   <span className="material-symbols-outlined icon-fill">auto_awesome</span>
                </div>
                <h3 className="text-sm font-black uppercase tracking-widest">AI Marketing Hub</h3>
             </div>

             <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-6 relative z-10 group-hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                   <span className="size-2 bg-primary rounded-full animate-pulse shadow-glow"></span>
                   <span className="text-[9px] font-black text-primary uppercase tracking-widest">Kịch bản video đề xuất</span>
                </div>
                <p className="text-xs font-bold text-slate-200 leading-relaxed italic">
                  "{adPrompt}"
                </p>
             </div>

             <button 
               onClick={handleCreateVideo}
               className="w-full h-14 bg-primary text-slate-900 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] shadow-glow flex items-center justify-center gap-3 active:scale-95 transition-all border border-primary-dark/10 relative z-10"
             >
                <span className="material-symbols-outlined font-black">magic_button</span>
                Tạo video quảng cáo ngay
             </button>
             
             <p className="text-center text-[8px] font-black text-white/30 uppercase tracking-widest mt-4">Sức mạnh bởi Veo 3.1 Fast Preview</p>
          </div>
        </div>

        {/* TABS & DESCRIPTION */}
        <div className="bg-white mt-4">
          <div className="flex border-b border-slate-50 px-4">
            {['Mô tả', 'Thông số'].map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`flex-1 py-4 text-[10px] font-black uppercase tracking-widest relative ${activeTab === tab ? 'text-primary-dark' : 'text-slate-300'}`}>
                {tab}
                {activeTab === tab && <div className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-primary rounded-full shadow-glow"></div>}
              </button>
            ))}
          </div>
          <div className="p-7 text-sm text-slate-600 leading-relaxed font-bold">
            <p>Sản phẩm phân bón BioGreen Premium cung cấp giải pháp dinh dưỡng toàn diện cho mọi loại cây trồng, đặc biệt là cây ăn trái và rau màu. An toàn tuyệt đối cho người sử dụng và môi trường.</p>
          </div>
        </div>
      </div>

      {/* FOOTER ACTIONS */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-slate-100 px-5 py-4 pb-10 shadow-deep max-w-md mx-auto">
        <div className="flex items-center gap-4">
          <button className="flex flex-col items-center justify-center gap-1 text-slate-400 px-2 active:scale-90 transition-transform">
            <span className="material-symbols-outlined text-[26px]">chat</span>
            <span className="text-[9px] font-black uppercase tracking-widest">Chat</span>
          </button>
          <button onClick={() => navigate('/cart')} className="flex h-14 flex-1 items-center justify-center rounded-2xl bg-primary/10 text-primary-dark border-2 border-primary/20 text-xs font-black uppercase tracking-widest active:scale-95 transition-all shadow-soft">
            Giỏ hàng
          </button>
          <button onClick={() => navigate('/checkout')} className="flex h-14 flex-1 items-center justify-center rounded-2xl bg-primary text-slate-900 text-xs font-black uppercase tracking-widest shadow-glow active:scale-95 transition-all border border-primary-dark/10">
            Mua ngay
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailView;
