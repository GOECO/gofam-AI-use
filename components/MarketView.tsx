
import React from 'react';
import { useNavigate } from 'react-router-dom';

const MarketView: React.FC = () => {
  const navigate = useNavigate();

  const categories = [
    { id: '1', name: 'Hạt giống', icon: 'grass', color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' },
    { id: '2', name: 'Phân bón', icon: 'compost', color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' },
    { id: '3', name: 'Máy móc', icon: 'agriculture', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' },
    { id: '4', name: 'Nông sản', icon: 'nutrition', color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' },
    { id: '5', name: 'Thuốc BVTV', icon: 'pest_control', color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' },
    { id: '6', name: 'Dịch vụ', icon: 'handyman', color: 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400' },
    { id: '7', name: 'Gian hàng', icon: 'storefront', color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' },
    { id: '8', name: 'Khác', icon: 'grid_view', color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400' },
  ];

  const products = [
    {
      id: 'p1',
      title: 'Hạt giống Cà chua Beef (F1) - Năng suất cao',
      price: '45.000₫',
      oldPrice: '52.000₫',
      discount: '-15%',
      token: '12 GOFAM',
      rating: '4.8 (120)',
      isVerified: true,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-SnfH6faUJ-sye84iK8gdME4O-VbMsHRr51KMdzXAVmAF-AwoZ68lEdSFZDl0bY_rip0Gvozo0ROT4HTAFKVfe7HZGUnyq4hueGxPNqidnfJxM4MI-cRC_GWT-pe4xRDcU5beNDMcNmScLV8HVJQjAefk8VMVDSwim0DvKhLkZFqCvp-0nVJEsGmzuF2AMBx8NgWVYCJu6H9Ojj4qlfzmgeYWpb1ff_z1dw-PfxuJs1tB3wsWJL36rhUN6-ERopOeUl7QTNR1Z1h3'
    },
    {
      id: 'p2',
      title: 'Phân bón hữu cơ vi sinh Humic (5kg)',
      price: '120.000₫',
      token: '40 GOFAM',
      rating: '5.0 (25)',
      isVerified: false,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnRbfarkAWqgCFlzHlWW95D7kjEudiMK_u8lx9vf2EPtyriPoP0n7a-zEsMrkBC1oCQ0Pbedv4rB9syMqbAphrfTPAKju2PiK5KYlrc3xf8Fxr7f1C7Lo7Fjxsy7-svmSssruDiqy6MLA93fm__eLtIEFPkuvlcfWwANpodM5ohD-UJxOML73IgJkiXu97Qf-zkmscCd0fp7jLxDXQESijHK40QhZMcMvLftYjPT68MG_wN6A1KcYOhu7lk-UcQYCjNjNQp6tgzXHb'
    },
    {
      id: 'p3',
      title: 'Phun thuốc bằng Drone - 1 Ha',
      price: '350.000₫',
      token: '100 GOFAM',
      location: 'Đồng Tháp',
      isService: true,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAT3H2ICdIOyFcI4LwPWIWw1atqH32Sb5S_ty9hl3g09Wq8GoEhHfnlEZhKD_Oftq6CMaJi6GIeJ8nnw1kT6g1ry_lympPk5wwjhjncdCMg6sjKmQpnVKGvFgtVWnzLD7voNPxEaYNx2u6XOMX_Mh-kIPaGZSdfkBi7HFsT7oxx-zl8ivZXUcBCuMtaxsIKBEDxO9BH0RRh_B3ay1V46sOKUYfp8yOtY7_Shvod3hBWhZ6R3AYURtcPP2d1Rt9ZY2MODapE5ezrkSDv'
    },
    {
      id: 'p4',
      title: 'Dâu tây Mộc Châu giống Nhật',
      price: '250.000₫',
      unit: '/kg',
      token: '80 GOFAM',
      rating: '4.9 (86)',
      isVerified: true,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaQ1kba7jZljfcTJnkia69ZgePrSzAmCfsprb1AV65AH4FgUau2Y8RQvA5KNYd04832OSXjzY49wQd5cnY0x1-4q20ICY_4r4jMdDNmtozzTXdS_4EWP9xq_1mRuevawj12pLjzZOoZOKmXF_9q2_uFtbw5auqlaGyItw19VgLEsAGG0fAGnwX1EdzOHEj-HIrWaBUURQNtBtwm8v2ygyRKiRDa0qh92G_pfgHhne5chQuZGydUcEH30KNHvyE7F8RyUuhHATocQvH'
    }
  ];

  return (
    <div className="flex flex-col flex-1 animate-in fade-in duration-500 bg-background-light min-h-screen font-sans">
      {/* TOP APP BAR */}
      <header className="sticky top-0 z-50 flex items-center bg-white/95 backdrop-blur-md p-4 justify-between border-b border-gray-100 shrink-0">
        <button 
          onClick={() => navigate(-1)}
          className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-black/5 active:scale-95 transition-all text-slate-900"
        >
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </button>
        <h2 className="text-slate-900 text-lg font-black leading-tight tracking-tight flex-1 text-center font-display uppercase">Chợ GOFAM</h2>
        <div className="flex w-10 items-center justify-end relative">
          <button 
            onClick={() => navigate('/cart')}
            className="flex size-10 items-center justify-center rounded-full hover:bg-black/5 transition-all text-slate-900 active:scale-90"
          >
            <span className="material-symbols-outlined text-[24px]">shopping_cart</span>
          </button>
          <div className="absolute top-1.5 right-0.5 size-2.5 bg-red-500 rounded-full border-2 border-white shadow-sm"></div>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto hide-scrollbar pb-32">
        {/* SEARCH BAR */}
        <div className="px-5 py-4 sticky top-0 z-40 bg-background-light/80 backdrop-blur-sm">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-primary">
              <span className="material-symbols-outlined text-[22px] font-black">search</span>
            </div>
            <input 
              className="block w-full py-3.5 pl-12 pr-4 text-sm font-bold rounded-2xl bg-white border-none shadow-soft ring-1 ring-gray-100 focus:ring-2 focus:ring-primary/40 text-slate-900 placeholder:text-slate-300 transition-all" 
              placeholder="Tìm vật tư, giống, nông sản..." 
            />
          </div>
        </div>

        {/* PROMO BANNER */}
        <div className="px-5 py-2">
          <div className="relative w-full h-44 rounded-[2.5rem] overflow-hidden shadow-deep group">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] group-hover:scale-110" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD3Vjh4HRAt_5NkhzJ5CrvVINDN-WlHUuWvv3AiF2CFfMkzjrFqq8DmPb1FZfFiGOOAyDohxdyrwqaG54dTFqa9xU-GIhRcvJA8yaioaGKTO9zfhJpG2Hlxj4I60uahnXwstN9rKzK9FbwkXR5TJGgacXXs5OgdQYBa-2JHuHSSco-3neP3njyvpHyVVY_bcFRNp3Ade6rFx-SxmfN62RC1br373jSujJxgAquWOtvQ0fYXqzlv5aTenXDoumpycIxaHCTz4q9r4ph4")' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent flex flex-col justify-center px-8">
              <span className="text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-2">Khuyến mãi hot</span>
              <h3 className="text-white text-xl font-black leading-tight w-2/3 mb-3 tracking-tight font-display uppercase">Combo Vật Tư Nông Nghiệp Thông Minh</h3>
              <p className="text-white/70 text-xs font-bold mb-5 tracking-tight">Giảm 20% khi thanh toán bằng GOFAM Token</p>
              <button className="bg-primary hover:bg-primary-dark text-slate-900 w-fit px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-glow active:scale-95 transition-all">
                Xem ngay
              </button>
            </div>
          </div>
        </div>

        {/* CATEGORIES */}
        <div className="px-5 py-6">
          <div className="flex justify-between items-end mb-6">
            <h3 className="text-lg font-black text-slate-900 tracking-tight font-display uppercase">Danh mục</h3>
            <button className="text-primary-dark text-[10px] font-black uppercase tracking-widest hover:underline">Xem tất cả</button>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {categories.map(cat => (
              <div key={cat.id} className="flex flex-col items-center gap-3 cursor-pointer group">
                <div className={`size-16 rounded-[1.8rem] flex items-center justify-center transition-all group-hover:scale-110 group-active:scale-90 shadow-soft border border-black/5 ${cat.color}`}>
                  <span className="material-symbols-outlined text-[32px]">{cat.icon}</span>
                </div>
                <span className="text-[10px] font-black text-center text-slate-500 uppercase tracking-widest leading-tight group-hover:text-slate-900 transition-colors">{cat.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FILTERS */}
        <div className="flex gap-3 px-5 py-2 overflow-x-auto hide-scrollbar snap-x">
          <button className="flex h-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-slate-900 px-6 shadow-glow shadow-primary/30 snap-start border border-primary-dark/10">
            <span className="material-symbols-outlined text-[18px] icon-fill">verified</span>
            <span className="text-[10px] font-black uppercase tracking-widest">Gợi ý cho bạn</span>
          </button>
          {['Bán chạy nhất', 'Giá tốt', 'Token GOFAM', 'Mới nhất'].map(f => (
            <button key={f} className="flex h-10 shrink-0 items-center justify-center px-6 rounded-full bg-white border border-slate-100 text-slate-400 font-black text-[10px] uppercase tracking-widest shadow-soft hover:bg-gray-50 snap-center transition-all">
              {f}
            </button>
          ))}
          <button className="flex h-10 shrink-0 items-center justify-center px-4 rounded-full bg-white border border-slate-100 text-slate-400 shadow-soft">
            <span className="material-symbols-outlined text-[20px]">filter_list</span>
          </button>
        </div>

        {/* PRODUCT LIST */}
        <div className="px-5 py-8">
          <h3 className="text-lg font-black text-slate-900 tracking-tight font-display uppercase mb-6">Sản phẩm nổi bật</h3>
          <div className="grid grid-cols-2 gap-5">
            {products.map((p) => (
              <div 
                key={p.id}
                onClick={() => navigate(`/product/${p.id}`)}
                className="bg-white rounded-[2rem] overflow-hidden shadow-deep border border-gray-50 flex flex-col group cursor-pointer active:scale-[0.98] transition-all"
              >
                <div className="aspect-square bg-gray-100 w-full relative overflow-hidden">
                  <img src={p.image} alt={p.title} className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  {p.discount && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white text-[9px] font-black px-2.5 py-1 rounded-lg shadow-lg uppercase tracking-tighter">
                      {p.discount}
                    </div>
                  )}
                  {p.isService && (
                    <div className="absolute top-3 right-3 bg-blue-500 text-white text-[8px] font-black px-2.5 py-1 rounded-lg shadow-lg uppercase tracking-widest">
                      Dịch vụ
                    </div>
                  )}
                  {p.isVerified && (
                    <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[8px] font-black px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 border border-white/10 uppercase tracking-widest">
                      <span className="material-symbols-outlined text-[14px] text-primary icon-fill">verified</span>
                      Verified
                    </div>
                  )}
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h4 className="text-slate-900 text-[13px] font-black leading-tight tracking-tight line-clamp-2 mb-3 min-h-[2.5em] group-hover:text-primary-dark transition-colors">{p.title}</h4>
                  
                  <div className="mt-auto">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-red-500 font-black text-base tracking-tighter">{p.price}<span className="text-[10px] font-bold ml-0.5">{p.unit}</span></span>
                      {p.oldPrice && <span className="text-slate-300 text-[10px] font-bold line-through">{p.oldPrice}</span>}
                    </div>
                    
                    <div className="flex items-center gap-1.5 bg-primary/5 w-fit px-2.5 py-1 rounded-lg border border-primary/10 mb-4">
                      <span className="material-symbols-outlined text-amber-500 text-[14px] icon-fill">monetization_on</span>
                      <span className="text-primary-dark text-[10px] font-black uppercase tracking-tight">{p.token}</span>
                    </div>

                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-amber-400 text-[16px] icon-fill">star</span>
                        <span className="text-[10px] font-black text-slate-400 uppercase">{p.rating || p.location}</span>
                      </div>
                      <button className="size-10 rounded-xl bg-primary/10 text-primary-dark flex items-center justify-center hover:bg-primary hover:text-slate-900 transition-all shadow-soft border border-primary/10">
                        <span className="material-symbols-outlined text-[20px] icon-fill">
                          {p.isService ? 'calendar_add_on' : 'add_shopping_cart'}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FLOATING ACTION BUTTON */}
      <div className="fixed bottom-10 right-6 z-50">
        <button 
          onClick={() => navigate('/sell')}
          className="flex items-center gap-3 h-16 pl-6 pr-8 rounded-[2rem] bg-primary shadow-glow shadow-primary/40 text-slate-900 font-black text-xs uppercase tracking-widest transition-all hover:scale-105 hover:bg-primary-dark active:scale-95 group border-2 border-white"
        >
          <span className="material-symbols-outlined text-[28px] group-hover:rotate-12 transition-transform font-black">add_business</span>
          Đăng bán
        </button>
      </div>
    </div>
  );
};

export default MarketView;
