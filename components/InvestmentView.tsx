
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InvestmentView: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('crops');

  const hotInvestment = [
    {
      id: '1',
      title: 'Cà Chua Bi Organic',
      farm: 'GreenFarm Đà Lạt',
      roi: '15%',
      expectedProfit: '300k - 450k ₫',
      progress: 85,
      term: '45 Ngày',
      risk: 'Thấp',
      image: 'https://images.unsplash.com/photo-1592419044706-39796d40f98c?q=80&w=400&auto=format&fit=crop',
      label: 'HOT'
    },
    {
      id: '2',
      title: 'Dưa Lưới Hoàng Gia',
      farm: 'Royal Fruits',
      roi: '22%',
      expectedProfit: '1.1tr - 1.5tr ₫',
      progress: 32,
      term: '90 Ngày',
      risk: 'Trung bình',
      image: 'https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?q=80&w=400&auto=format&fit=crop',
      label: 'MỚI'
    }
  ];

  const availableList = [
    {
      id: 'a1',
      title: 'Rau Xà Lách Thủy Canh',
      code: 'XL-054',
      roi: '12%',
      term: '45 Ngày',
      minCapital: '2.0 Triệu',
      expectedGain: '~240k',
      risk: 'Thấp',
      tags: ['VietGAP'],
      nextCare: 'Bơm dinh dưỡng (Tự động)',
      image: 'https://images.unsplash.com/photo-1546852199-217e7142d44b?q=80&w=200&auto=format&fit=crop'
    },
    {
      id: 'a2',
      title: 'Gà Thả Vườn',
      code: 'GA-112',
      roi: '18%',
      term: '4 Tháng',
      minCapital: '5.0 Triệu',
      expectedGain: '~900k',
      risk: 'Trung bình',
      tags: ['Organic'],
      nextCare: 'Tiêm phòng đợt 2 (12/10)',
      image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=200&auto=format&fit=crop'
    }
  ];

  return (
    <div className="flex flex-col flex-1 animate-in fade-in duration-500 bg-background-light min-h-screen">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white px-4 pt-5 pb-3 flex items-center justify-between border-b border-gray-100 shadow-sm">
        <button 
          onClick={() => navigate(-1)}
          className="flex size-10 items-center justify-center rounded-full hover:bg-black/5 active:scale-95 transition-all text-slate-900"
        >
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </button>
        <div className="flex flex-col items-center">
          <h2 className="text-slate-900 text-lg font-black leading-tight tracking-tight font-display">Gói Đầu Tư</h2>
          <span className="text-[9px] font-black text-primary-dark uppercase tracking-widest">Pro Farming</span>
        </div>
        <button className="flex size-10 items-center justify-center rounded-full hover:bg-black/5 active:scale-95 transition-all text-slate-400">
          <span className="material-symbols-outlined text-[24px]">history</span>
        </button>
      </header>

      <div className="flex-1 overflow-y-auto hide-scrollbar pb-32">
        {/* TAB SELECTOR */}
        <div className="bg-white px-5 py-3 sticky top-16 z-40 border-b border-gray-50 flex gap-2">
           <div className="flex p-1 bg-gray-100 rounded-2xl w-full">
              <button 
                onClick={() => setActiveTab('crops')}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                  activeTab === 'crops' ? 'bg-white shadow-md text-slate-900' : 'text-slate-400'
                }`}
              >
                <span className={`material-symbols-outlined text-[18px] ${activeTab === 'crops' ? 'text-primary icon-fill' : ''}`}>potted_plant</span>
                Cây trồng
              </button>
              <button 
                onClick={() => setActiveTab('livestock')}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                  activeTab === 'livestock' ? 'bg-white shadow-md text-slate-900' : 'text-slate-400'
                }`}
              >
                <span className={`material-symbols-outlined text-[18px] ${activeTab === 'livestock' ? 'text-primary icon-fill' : ''}`}>pets</span>
                Vật nuôi
              </button>
           </div>
           <button className="size-12 shrink-0 bg-gray-100 rounded-2xl flex items-center justify-center text-slate-400">
              <span className="material-symbols-outlined">filter_list</span>
           </button>
        </div>

        {/* HIGH ROI OPPORTUNITIES */}
        <div className="py-6">
          <div className="px-6 mb-5 flex items-center gap-2">
            <span className="material-symbols-outlined text-orange-500 icon-fill">trending_up</span>
            <h3 className="text-lg font-black text-slate-900 tracking-tight font-display uppercase">Cơ hội ROI cao</h3>
          </div>
          
          <div className="flex gap-5 overflow-x-auto px-6 pb-4 hide-scrollbar snap-x">
            {hotInvestment.map((item) => (
              <div key={item.id} className="flex-none w-80 snap-center bg-white rounded-[2.5rem] shadow-deep border border-gray-100 overflow-hidden relative group">
                <div className="absolute top-4 left-4 flex gap-2 z-10">
                  <span className={`text-[8px] font-black px-2.5 py-1 rounded-lg backdrop-blur-md shadow-sm uppercase tracking-widest ${
                    item.label === 'HOT' ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'
                  }`}>{item.label}</span>
                  <span className="bg-black/40 text-white text-[8px] font-black px-2.5 py-1 rounded-lg backdrop-blur-md border border-white/10 uppercase tracking-widest">Rủi ro: {item.risk}</span>
                </div>
                
                <div className="h-44 w-full relative overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  <div className="absolute top-4 right-4 bg-primary text-slate-900 flex flex-col items-center justify-center size-14 rounded-2xl shadow-glow border-2 border-white">
                    <span className="text-[9px] font-black leading-none mt-1 uppercase">ROI</span>
                    <span className="text-xl font-black leading-none tracking-tighter">{item.roi}</span>
                  </div>

                  <div className="absolute bottom-4 left-5 right-5 text-white">
                    <div className="flex justify-between items-end">
                      <div>
                        <h4 className="text-lg font-black leading-tight tracking-tight">{item.title}</h4>
                        <p className="text-[10px] font-bold text-white/70 uppercase tracking-widest mt-1">Vườn: {item.farm}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[8px] text-white/50 uppercase font-black tracking-widest mb-1">Lợi nhuận dự kiến</p>
                        <p className="text-base font-black text-primary tracking-tighter">{item.expectedProfit}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Tiến độ gọi vốn</span>
                        <span className="text-[10px] font-black text-slate-900">{item.progress}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                        <div className="h-full bg-primary rounded-full transition-all duration-1000 shadow-glow" style={{ width: `${item.progress}%` }}></div>
                      </div>
                    </div>
                    <div className="shrink-0 text-right">
                      <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest block mb-0.5">Kỳ hạn</span>
                      <span className="text-xs font-black text-slate-900 uppercase">{item.term}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button className="py-3 text-[10px] font-black text-slate-400 border border-gray-100 rounded-2xl hover:bg-gray-50 uppercase tracking-widest active:scale-95 transition-all">Chi tiết</button>
                    <button className="py-3 text-[10px] font-black text-slate-900 bg-primary rounded-2xl shadow-glow uppercase tracking-widest hover:bg-primary-dark active:scale-95 transition-all">Đầu tư ngay</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AVAILABLE LIST */}
        <div className="px-6">
          <div className="flex justify-between items-end mb-6">
            <h3 className="text-lg font-black text-slate-900 tracking-tight font-display uppercase">Danh sách khả dụng</h3>
            <button className="flex items-center gap-1 text-[10px] text-primary-dark font-black uppercase tracking-widest">
              Sắp xếp: ROI cao nhất
              <span className="material-symbols-outlined text-[16px]">sort</span>
            </button>
          </div>

          <div className="space-y-6">
            {availableList.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-[2.5rem] p-6 shadow-deep border border-gray-50 transition-all hover:border-primary/20">
                <div className="flex justify-between items-start mb-5">
                  <div className="flex gap-4">
                    <div className="size-16 rounded-2xl bg-cover bg-center shadow-inner border border-gray-100 shrink-0" style={{ backgroundImage: `url(${pkg.image})` }}></div>
                    <div>
                      <h4 className="text-base font-black text-slate-900 tracking-tight leading-tight">{pkg.title}</h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {pkg.tags.map(tag => (
                          <span key={tag} className="bg-primary/10 text-primary-dark text-[8px] font-black px-2 py-0.5 rounded-lg border border-primary/20 uppercase tracking-widest">{tag}</span>
                        ))}
                        <span className="bg-gray-50 text-slate-400 text-[8px] font-black px-2 py-0.5 rounded-lg border border-gray-100 uppercase tracking-widest">Code: {pkg.code}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="bg-green-50 text-green-600 text-[8px] font-black px-2.5 py-1 rounded-lg border border-green-100 uppercase tracking-widest inline-block mb-1.5">Rủi ro: {pkg.risk}</span>
                    <div className="text-primary-dark font-black text-2xl tracking-tighter leading-none">{pkg.roi}</div>
                    <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest">ROI / Chu kỳ</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-1 bg-gray-50/50 rounded-[1.5rem] p-4 mb-5 border border-gray-100">
                  <div className="flex flex-col gap-1 border-r border-gray-100">
                    <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest">Kỳ hạn</span>
                    <span className="text-[11px] font-black text-slate-900 uppercase">{pkg.term}</span>
                  </div>
                  <div className="flex flex-col gap-1 border-r border-gray-100 px-3">
                    <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest">Vốn min</span>
                    <span className="text-[11px] font-black text-slate-900 uppercase">{pkg.minCapital}</span>
                  </div>
                  <div className="flex flex-col gap-1 pl-3">
                    <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest">Lợi nhuận/Gói</span>
                    <span className="text-[11px] font-black text-primary-dark uppercase">{pkg.expectedGain}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-5 px-1">
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded-xl bg-info/10 flex items-center justify-center text-info">
                       <span className="material-symbols-outlined text-[18px]">water_drop</span>
                    </div>
                    <div>
                      <p className="text-[8px] font-black text-slate-300 uppercase tracking-widest">Lịch trình kế tiếp</p>
                      <p className="text-[11px] font-black text-slate-800 truncate">{pkg.nextCare}</p>
                    </div>
                  </div>
                  <div className="h-8 w-20 opacity-40">
                    <svg className="w-full h-full stroke-primary fill-none stroke-2" viewBox="0 0 80 30">
                      <path d="M0 25 Q 10 25 20 20 T 40 15 T 60 10 T 80 5" strokeLinecap="round"></path>
                    </svg>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 py-3.5 rounded-2xl border border-gray-100 text-[10px] font-black text-slate-400 uppercase tracking-widest hover:bg-gray-50 transition-all">Xem chi tiết</button>
                  <button className="flex-1 py-3.5 rounded-2xl bg-primary text-slate-900 text-[10px] font-black uppercase tracking-widest shadow-glow hover:bg-primary-dark transition-all flex items-center justify-center gap-2">
                    Đăng ký ngay
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            ))}

            {/* SOLD OUT ITEM EXAMPLE */}
            <div className="bg-white rounded-[2.5rem] p-6 border border-gray-50 opacity-60 grayscale relative">
               <div className="absolute inset-0 z-10 flex items-center justify-center">
                  <div className="bg-slate-900/80 backdrop-blur-md text-white px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest shadow-2xl">Đã hết suất đầu tư</div>
               </div>
               <div className="flex justify-between items-start mb-5">
                  <div className="flex gap-4">
                    <div className="size-16 rounded-2xl bg-slate-200 shrink-0"></div>
                    <div>
                      <h4 className="text-base font-black text-slate-900">Cà Tím Nhật Bản</h4>
                      <div className="flex gap-2 mt-2">
                        <span className="bg-gray-100 text-slate-400 text-[8px] font-black px-2 py-0.5 rounded-lg border border-gray-200 uppercase tracking-widest">GlobalGAP</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-slate-400 font-black text-2xl tracking-tighter">14%</div>
                  </div>
               </div>
               <button className="w-full py-3.5 rounded-2xl border border-gray-100 text-[10px] font-black text-slate-300 uppercase tracking-widest">Nhận thông báo khi có suất mới</button>
            </div>
          </div>
        </div>
      </div>

      {/* FLOATING ACTION OVERLAY */}
      <div className="fixed bottom-28 right-6 z-40">
        <button className="size-16 rounded-[2rem] bg-white border-2 border-primary shadow-glow flex items-center justify-center text-primary-dark group hover:scale-105 transition-all">
          <div className="bg-primary text-slate-900 size-12 rounded-2xl flex items-center justify-center relative">
            <span className="material-symbols-outlined icon-fill">analytics</span>
            <span className="absolute -top-1 -right-1 size-4 bg-red-500 text-[8px] text-white font-black rounded-full flex items-center justify-center border-2 border-white animate-pulse">!</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default InvestmentView;
