
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MarketView: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);

  const categories = [
    { id: '1', name: 'Hạt giống', icon: 'grass', color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', activeColor: 'bg-[#E6FFEC]' },
    { id: '2', name: 'Phân bón', icon: 'compost', color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400', activeColor: 'bg-[#E6FFEC]' },
    { id: '3', name: 'Máy móc', icon: 'agriculture', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', activeColor: 'bg-[#E6FFEC]' },
    { id: '4', name: 'Nông sản', icon: 'nutrition', color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400', activeColor: 'bg-[#E6FFEC]' },
  ];

  const products = [
    {
      id: 'p1',
      categoryId: '1',
      title: 'Hạt giống Cà chua Beef (F1) - Năng suất cao',
      price: '45.000₫',
      token: '12 GOFAM',
      rating: '4.8 (120)',
      isVerified: true,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-SnfH6faUJ-sye84iK8gdME4O-VbMsHRr51KMdzXAVmAF-AwoZ68lEdSFZDl0bY_rip0Gvozo0ROT4HTAFKVfe7HZGUnyq4hueGxPNqidnfJxM4MI-cRC_GWT-pe4xRDcU5beNDMcNmScLV8HVJQjAefk8VMVDSwim0DvKhLkZFqCvp-0nVJEsGmzuF2AMBx8NgWVYCJu6H9Ojj4qlfzmgeYWpb1ff_z1dw-PfxuJs1tB3wsWJL36rhUN6-ERopOeUl7QTNR1Z1h3'
    },
    {
      id: 'p5',
      categoryId: '2',
      title: 'Phân bón BioGreen Premium (25kg)',
      price: '450.000₫',
      token: '45 GOFAM',
      rating: '5.0 (500+)',
      isVerified: true,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3CmZy_s7d21Xq9qrsPGjWEFA3j6C3KEy9qeY9OMfjy3bC6tX5lw6YjD2c7cEt_tsHr6FmvfD93NmND_vexciBPVV4ewEWtOqENwA2VYMpxF9wka1hGYaXh3K7h8U4xiE532nvdauEcFAqPvi_Lspv5PP-yT3q-SA6jvVnpPn-Ih3bJuJHRgTaUtlFEji8ONR48lFQfY9bAp6u4XxhIm8b0YCIo55PrR_mTCPVm68j3YZwpzd8yE23S4rLMHiWT22UmlbfurtbJ-uA'
    },
    {
      id: 'p3',
      categoryId: '3',
      title: 'Máy cày cầm tay mini Honda - Chính hãng',
      price: '12.500.000₫',
      token: '1200 GOFAM',
      rating: '4.9 (45)',
      isVerified: true,
      image: 'https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?q=80&w=400&auto=format&fit=crop'
    },
    {
      id: 'p4',
      categoryId: '4',
      title: 'Sầu riêng Ri6 Cái Mơn - Loại 1',
      price: '180.000₫',
      token: '18 GOFAM',
      rating: '4.7 (230)',
      isVerified: true,
      image: 'https://images.unsplash.com/photo-1595475207225-428b62bda831?q=80&w=400&auto=format&fit=crop'
    }
  ];

  const filteredProducts = selectedCategoryId 
    ? products.filter(p => p.categoryId === selectedCategoryId)
    : products;

  const handleGenBioGreenAd = () => {
    navigate('/studio', { 
      state: { 
        prompt: 'Cận cảnh quy trình sản xuất phân bón hữu cơ BioGreen, nhấn mạnh tính an toàn và hiệu quả cho cây trồng. Kết thúc bằng cảnh trang trại xanh tươi.', 
        mode: 'video',
        aspectRatio: '16:9',
        title: 'Phân bón BioGreen Premium'
      } 
    });
  };

  const toggleCategory = (id: string) => {
    setSelectedCategoryId(prev => prev === id ? null : id);
  };

  return (
    <div className="flex flex-col flex-1 animate-in fade-in duration-500 bg-background-light min-h-screen font-sans">
      {/* HEADER */}
      <header className="sticky top-0 z-50 flex items-center bg-white/95 backdrop-blur-md p-4 justify-between border-b border-gray-100 shrink-0">
        <button onClick={() => navigate(-1)} className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-black/5 active:scale-95 text-slate-900">
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </button>
        <h2 className="text-slate-900 text-lg font-black leading-tight tracking-tight flex-1 text-center font-display uppercase">Chợ GOFAM</h2>
        <div className="flex w-10 items-center justify-end relative">
          <button onClick={() => navigate('/cart')} className="flex size-10 items-center justify-center rounded-full hover:bg-black/5 text-slate-900 active:scale-90">
            <span className="material-symbols-outlined text-[24px]">shopping_cart</span>
          </button>
          <div className="absolute top-1.5 right-0.5 size-2.5 bg-red-500 rounded-full border-2 border-white"></div>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto hide-scrollbar pb-32">
        {/* SEARCH */}
        <div className="px-5 py-4">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-primary">
              <span className="material-symbols-outlined text-[22px] font-black">search</span>
            </div>
            <input className="block w-full py-3.5 pl-12 pr-4 text-sm font-bold rounded-2xl bg-white border-none shadow-soft ring-1 ring-gray-100 focus:ring-2 focus:ring-primary/40 text-slate-900 transition-all" placeholder="Tìm vật tư, giống, nông sản..." />
          </div>
        </div>

        {/* AI ADS SHOWCASE */}
        <div className="px-5 py-4">
           <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
                 <span className="material-symbols-outlined text-primary-dark animate-pulse">movie_edit</span>
                 Video Quảng Cáo AI
              </h3>
              <span className="text-[9px] font-black text-primary-dark bg-primary/10 px-2 py-1 rounded border border-primary/20 uppercase">Mới</span>
           </div>
           
           <div className="bg-slate-900 rounded-[2.5rem] p-6 text-white relative overflow-hidden shadow-2xl group border border-primary/20">
              <div className="absolute top-0 right-0 size-48 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
              <div className="relative z-10 flex flex-col gap-4">
                 <div className="flex gap-4">
                    <div className="size-20 rounded-2xl overflow-hidden shadow-deep shrink-0 border border-white/10">
                       <img className="size-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3CmZy_s7d21Xq9qrsPGjWEFA3j6C3KEy9qeY9OMfjy3bC6tX5lw6YjD2c7cEt_tsHr6FmvfD93NmND_vexciBPVV4ewEWtOqENwA2VYMpxF9wka1hGYaXh3K7h8U4xiE532nvdauEcFAqPvi_Lspv5PP-yT3q-SA6jvVnpPn-Ih3bJuJHRgTaUtlFEji8ONR48lFQfY9bAp6u4XxhIm8b0YCIo55PrR_mTCPVm68j3YZwpzd8yE23S4rLMHiWT22UmlbfurtbJ-uA" alt="BioGreen" />
                    </div>
                    <div className="flex-1">
                       <h4 className="text-base font-black tracking-tight leading-tight mb-1">Phân bón BioGreen Premium</h4>
                       <p className="text-[10px] text-slate-400 font-bold leading-relaxed">AI sẽ tạo video quảng cáo chuyên nghiệp 16:9 cho sản phẩm này ngay lập tức.</p>
                    </div>
                 </div>
                 
                 <button 
                    onClick={handleGenBioGreenAd}
                    className="w-full h-12 bg-primary text-slate-900 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] shadow-glow flex items-center justify-center gap-2 active:scale-95 transition-all border border-primary-dark/10"
                 >
                    <span className="material-symbols-outlined text-[18px]">magic_button</span>
                    Tạo Video Quảng Cáo AI
                 </button>
              </div>
           </div>
        </div>

        {/* CATEGORIES */}
        <div className="px-5 py-4">
          <div className="flex justify-between items-end mb-6">
            <h3 className="text-lg font-black text-slate-900 tracking-tight font-display uppercase">Danh mục</h3>
            <button 
              onClick={() => setSelectedCategoryId(null)}
              className={`text-[10px] font-black uppercase tracking-widest transition-colors ${!selectedCategoryId ? 'text-primary-dark' : 'text-slate-400 hover:text-slate-600'}`}
            >
              {selectedCategoryId ? 'Xóa lọc' : 'Xem tất cả'}
            </button>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {categories.map(cat => (
              <div 
                key={cat.id} 
                onClick={() => toggleCategory(cat.id)}
                className="flex flex-col items-center gap-3 cursor-pointer group"
              >
                <div className={`size-16 rounded-3xl flex items-center justify-center transition-all shadow-soft border relative ${
                  selectedCategoryId === cat.id 
                    ? 'scale-110 shadow-glow ring-2 ring-primary ring-offset-2 dark:ring-offset-slate-950 bg-[#E6FFEC]'
                    : 'group-hover:scale-105 border-black/5 ' + cat.color
                }`}>
                  <span className={`material-symbols-outlined text-[32px] ${selectedCategoryId === cat.id ? 'icon-fill text-primary-dark' : ''}`}>{cat.icon}</span>
                  {selectedCategoryId === cat.id && (
                    <div className="absolute -top-1 -right-1 bg-primary text-slate-900 rounded-full size-5 flex items-center justify-center border-2 border-white shadow-sm">
                      <span className="material-symbols-outlined text-[12px] font-black">check</span>
                    </div>
                  )}
                </div>
                <span className={`text-[10px] font-black text-center uppercase tracking-widest transition-colors ${
                  selectedCategoryId === cat.id ? 'text-slate-900' : 'text-slate-500 group-hover:text-slate-900'
                }`}>
                  {cat.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* PRODUCTS */}
        <div className="px-5 py-4">
          <div className="flex items-baseline gap-3 mb-6">
            <h3 className="text-lg font-black text-slate-900 tracking-tight font-display uppercase">
              {selectedCategoryId 
                ? categories.find(c => c.id === selectedCategoryId)?.name 
                : 'Sản phẩm nổi bật'}
            </h3>
            {selectedCategoryId && (
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">({filteredProducts.length} kết quả)</span>
            )}
          </div>
          
          <div className="grid grid-cols-2 gap-5">
            {filteredProducts.length > 0 ? filteredProducts.map((p) => (
              <div key={p.id} onClick={() => navigate(`/product/${p.id}`)} className="bg-white rounded-[2.2rem] overflow-hidden shadow-deep border border-gray-50 flex flex-col group cursor-pointer active:scale-[0.98] transition-all animate-in fade-in zoom-in duration-300">
                <div className="aspect-square bg-gray-100 w-full relative overflow-hidden">
                  <img src={p.image} className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={p.title} />
                  {p.isVerified && (
                    <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[8px] font-black px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 border border-white/10 uppercase tracking-widest">
                      <span className="material-symbols-outlined text-[14px] text-primary icon-fill">verified</span> G-Auth
                    </div>
                  )}
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h4 className="text-slate-900 text-[13px] font-black leading-tight tracking-tight line-clamp-2 mb-3 min-h-[2.5em]">{p.title}</h4>
                  <div className="mt-auto">
                    <span className="text-red-500 font-black text-base tracking-tighter">{p.price}</span>
                    <div className="flex items-center justify-between mt-3">
                       <span className="text-[10px] font-black text-slate-400 uppercase">{p.rating}</span>
                       <button className="size-9 rounded-xl bg-primary/10 text-primary-dark flex items-center justify-center shadow-soft border border-primary/10 active:scale-90 transition-transform"><span className="material-symbols-outlined text-[18px] icon-fill">add_shopping_cart</span></button>
                    </div>
                  </div>
                </div>
              </div>
            )) : (
              <div className="col-span-2 py-20 flex flex-col items-center justify-center text-center opacity-30">
                <span className="material-symbols-outlined text-[64px] mb-4">search_off</span>
                <p className="text-[10px] font-black uppercase tracking-[0.2em]">Không tìm thấy sản phẩm nào</p>
                <button onClick={() => setSelectedCategoryId(null)} className="mt-4 text-xs font-black text-primary-dark underline">Quay lại tất cả</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketView;