
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface InventoryItem {
  id: string;
  name: string;
  code: string;
  supplier: string;
  quantity: number;
  unit: string;
  warehouse: string;
  status: 'stable' | 'low' | 'expired';
  statusText: string;
  expiry: string;
}

const InventoryView: React.FC = () => {
  const navigate = useNavigate();
  const [activeSegment, setActiveSegment] = useState('Tồn kho');
  const [activeCategory, setActiveCategory] = useState('Tất cả');

  const categories = ['Tất cả', 'Phân bón', 'Thuốc BVTV', 'Dụng cụ', 'Giống'];

  const inventoryData: InventoryItem[] = [
    {
      id: '1',
      name: 'Phân NPK 20-20-15',
      code: '#VT-0982',
      supplier: 'VietFarm',
      quantity: 150,
      unit: 'kg',
      warehouse: 'Kho A2',
      status: 'stable',
      statusText: 'Ổn định',
      expiry: '12/2025'
    },
    {
      id: '2',
      name: 'Thuốc trừ sâu BT',
      code: '#VT-1102',
      supplier: 'BioGreen',
      quantity: 5,
      unit: 'lít',
      warehouse: 'Kho B1',
      status: 'low',
      statusText: 'Sắp hết',
      expiry: '06/2024'
    },
    {
      id: '3',
      name: 'Hạt giống Cà Chua',
      code: '#VT-3321',
      supplier: 'SeedCo',
      quantity: 20,
      unit: 'gói',
      warehouse: 'Kho A1',
      status: 'expired',
      statusText: 'Hết hạn',
      expiry: '30/01/2024'
    },
    {
      id: '4',
      name: 'Dây buộc cà chua',
      code: '#VT-5542',
      supplier: 'Local',
      quantity: 1000,
      unit: 'm',
      warehouse: 'Kho C2',
      status: 'stable',
      statusText: 'Ổn định',
      expiry: '--/--'
    },
    {
      id: '5',
      name: 'Vôi bột xử lý',
      code: '#VT-1234',
      supplier: 'LimeVN',
      quantity: 45,
      unit: 'kg',
      warehouse: 'Kho A1',
      status: 'stable',
      statusText: 'Ổn định',
      expiry: '08/2026'
    }
  ];

  const handleItemClick = (id: string) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="flex flex-col flex-1 animate-in fade-in duration-500 bg-background-light min-h-screen font-display">
      {/* HEADER */}
      <header className="sticky top-0 z-50 flex items-center justify-between bg-white/95 backdrop-blur-md px-4 py-3 border-b border-gray-200 shrink-0">
        <button 
          onClick={() => navigate(-1)}
          className="flex size-10 items-center justify-center rounded-full hover:bg-black/5 active:scale-95 transition-all text-slate-900"
        >
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </button>
        <h1 className="text-lg font-black leading-tight tracking-tight flex-1 text-center pr-2 text-slate-900 uppercase">Vật tư & Kho</h1>
        <div className="flex items-center gap-1">
          <button className="flex size-10 items-center justify-center rounded-full hover:bg-black/5 transition-all text-slate-900">
            <span className="material-symbols-outlined text-[24px]">tune</span>
          </button>
          <button className="relative flex size-10 items-center justify-center rounded-full hover:bg-black/5 transition-all text-slate-900">
            <span className="material-symbols-outlined text-[24px]">notifications</span>
            <span className="absolute top-2.5 right-2.5 size-2 bg-red-500 rounded-full border-2 border-white shadow-sm"></span>
          </button>
        </div>
      </header>

      {/* STATS OVERVIEW */}
      <div className="grid grid-cols-3 gap-3 p-4 shrink-0">
        <div className="flex flex-col gap-1 rounded-2xl bg-white border border-gray-100 p-4 shadow-soft hover:border-primary/20 transition-all group">
          <div className="flex items-center gap-1.5 text-slate-400">
            <span className="material-symbols-outlined text-[16px] group-hover:text-primary transition-colors">payments</span>
            <span className="text-[9px] font-black uppercase tracking-widest">Giá trị</span>
          </div>
          <p className="text-lg font-black text-slate-900 tracking-tighter">1.2 Tỷ</p>
        </div>
        
        <div className="flex flex-col gap-1 rounded-2xl bg-white border border-gray-100 p-4 shadow-soft relative overflow-hidden group hover:border-amber-200 transition-all">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500"></div>
          <div className="flex items-center gap-1.5 text-amber-600 pl-1">
            <span className="material-symbols-outlined text-[16px] icon-fill">warning</span>
            <span className="text-[9px] font-black uppercase tracking-widest">Cảnh báo</span>
          </div>
          <p className="text-lg font-black pl-1 text-slate-900 tracking-tighter">5 mục</p>
        </div>

        <div className="flex flex-col gap-1 rounded-2xl bg-white border border-gray-100 p-4 shadow-soft relative overflow-hidden group hover:border-red-200 transition-all">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500"></div>
          <div className="flex items-center gap-1.5 text-red-600 pl-1">
            <span className="material-symbols-outlined text-[16px] icon-fill">event_busy</span>
            <span className="text-[9px] font-black uppercase tracking-widest">Hết hạn</span>
          </div>
          <p className="text-lg font-black pl-1 text-slate-900 tracking-tighter">12 mục</p>
        </div>
      </div>

      {/* SEARCH & SEGMENTED PICKER */}
      <div className="px-4 pb-2 space-y-4 shrink-0">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <span className="material-symbols-outlined text-slate-300 group-focus-within:text-primary transition-colors text-[20px]">search</span>
          </div>
          <input 
            className="block w-full py-3.5 pl-11 pr-4 text-sm font-bold rounded-2xl bg-gray-50 border-none shadow-inner-soft ring-1 ring-gray-100 focus:ring-2 focus:ring-primary/40 text-slate-900 placeholder:text-slate-300 transition-all" 
            placeholder="Tìm kiếm vật tư, mã lô hàng..." 
            type="text"
          />
        </div>

        <div className="flex p-1 gap-1 bg-gray-100 rounded-xl border border-gray-100 shadow-inner-soft">
          {['Tồn kho', 'Lịch sử nhập', 'Lịch sử xuất'].map(seg => (
            <button 
              key={seg}
              onClick={() => setActiveSegment(seg)}
              className={`flex-1 py-2 px-3 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${
                activeSegment === seg ? 'bg-white shadow-md text-slate-900' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              {seg}
            </button>
          ))}
        </div>
      </div>

      {/* CATEGORY CHIPS */}
      <div className="flex gap-2 px-4 py-4 overflow-x-auto hide-scrollbar shrink-0">
        {categories.map(cat => (
          <button 
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`flex shrink-0 items-center gap-1.5 rounded-full px-5 py-2 text-[10px] font-black uppercase tracking-widest transition-all border ${
              activeCategory === cat 
                ? 'bg-primary/20 text-primary-dark border-primary/20 shadow-inner' 
                : 'bg-white text-slate-400 border-gray-100 hover:bg-gray-50'
            }`}
          >
            <span>{cat}</span>
          </button>
        ))}
      </div>

      {/* DATA GRID HEADER */}
      <div className="grid grid-cols-12 gap-2 px-6 py-3 text-[9px] font-black uppercase tracking-widest text-slate-400 border-b border-gray-100 mt-2 bg-gray-50/50 shrink-0">
        <div className="col-span-5">Tên vật tư</div>
        <div className="col-span-3 text-right">Số lượng</div>
        <div className="col-span-4 text-right">Trạng thái</div>
      </div>

      {/* DATA LIST */}
      <div className="flex-1 overflow-y-auto hide-scrollbar pb-32">
        <div className="flex flex-col bg-white">
          {inventoryData.map((item) => (
            <div 
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              className={`group relative grid grid-cols-12 gap-2 p-5 border-b border-gray-50 hover:bg-gray-50 transition-all cursor-pointer active:scale-[0.99] ${
                item.status === 'expired' ? 'bg-red-50/30' : (item.status === 'low' ? 'bg-amber-50/30' : 'bg-white')
              }`}
            >
              <div className="col-span-5 flex flex-col justify-center min-w-0">
                <span className="text-[13px] font-black text-slate-900 leading-tight truncate tracking-tight">{item.name}</span>
                <div className="flex items-center gap-1 mt-1 text-[9px] text-slate-400 font-mono font-black uppercase">
                  <span>{item.code}</span>
                  <span className="size-1 rounded-full bg-slate-200"></span>
                  <span className="truncate">{item.supplier}</span>
                </div>
              </div>
              
              <div className="col-span-3 flex flex-col items-end justify-center">
                <span className={`text-[13px] font-black font-mono tracking-tighter ${
                  item.status === 'expired' ? 'text-slate-400 line-through' : (item.status === 'low' ? 'text-amber-600' : 'text-slate-900')
                }`}>
                  {item.quantity}
                  <span className="text-[10px] ml-1 font-bold text-slate-300 uppercase">{item.unit}</span>
                </span>
                <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">{item.warehouse}</span>
              </div>

              <div className="col-span-4 flex flex-col items-end justify-center gap-1.5">
                <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-tight border ${
                  item.status === 'stable' ? 'bg-green-50 text-green-700 border-green-100' : 
                  (item.status === 'low' ? 'bg-amber-50 text-amber-700 border-amber-100' : 'bg-red-50 text-red-700 border-red-100')
                }`}>
                  {item.status === 'stable' && <span className="size-1.5 rounded-full bg-green-500 shadow-glow"></span>}
                  {item.status === 'low' && <span className="material-symbols-outlined text-[12px] icon-fill">warning</span>}
                  {item.status === 'expired' && <span className="material-symbols-outlined text-[12px] icon-fill">error</span>}
                  {item.statusText}
                </div>
                <span className={`text-[9px] font-black uppercase tracking-widest ${item.status === 'expired' ? 'text-red-500 animate-pulse' : 'text-slate-300'}`}>
                  HSD: {item.expiry}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* STICKY FOOTER ACTIONS */}
      <div className="fixed bottom-0 left-0 right-0 z-[60] bg-white/95 backdrop-blur-xl border-t border-gray-100 px-5 py-4 pb-8 shadow-deep max-w-md mx-auto">
        <div className="flex items-center gap-4">
          <button className="flex h-14 flex-1 items-center justify-center gap-3 rounded-[1.5rem] bg-primary text-slate-900 text-xs font-black uppercase tracking-widest shadow-glow shadow-primary/30 hover:brightness-105 active:scale-95 transition-all border border-primary-dark/10">
            <span className="material-symbols-outlined text-[22px]">download</span>
            Nhập kho
          </button>
          <button className="flex h-14 flex-1 items-center justify-center gap-3 rounded-[1.5rem] border-2 border-gray-100 bg-white text-slate-900 text-xs font-black uppercase tracking-widest hover:bg-gray-50 active:scale-95 transition-all shadow-soft">
            <span className="material-symbols-outlined text-[22px]">upload</span>
            Xuất kho
          </button>
          <button className="flex size-14 items-center justify-center rounded-full bg-slate-900 text-white shadow-deep hover:bg-slate-800 active:scale-90 transition-all shrink-0">
            <span className="material-symbols-outlined text-[28px] font-black">add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InventoryView;
