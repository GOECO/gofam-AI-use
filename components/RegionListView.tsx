
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface RegionItem {
  id: string;
  name: string;
  type: string;
  health: string;
  healthPercent: number;
  tags: string[];
  status: 'active' | 'attention' | 'harvest';
  statusText: string;
  sensors: { icon: string; value: string }[];
  imageUrl: string;
}

const RegionListView: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('Tất cả');

  const regions: RegionItem[] = [
    {
      id: '1',
      name: 'Vườn Rau Thủy Canh',
      type: 'Vườn',
      health: 'Tốt',
      healthPercent: 98,
      tags: ['Rau xà lách', '150 m²', '2.500 cây'],
      status: 'active',
      statusText: 'Đang hoạt động',
      sensors: [
        { icon: 'thermostat', value: '28°C' },
        { icon: 'water_drop', value: '75%' }
      ],
      imageUrl: 'https://images.unsplash.com/photo-1592419044706-39796d40f98c?q=80&w=400&auto=format&fit=crop'
    },
    {
      id: '2',
      name: 'Chuồng Heo Số 2',
      type: 'Chuồng',
      health: 'Khá',
      healthPercent: 75,
      tags: ['Heo thịt', '80 m²', '45 con'],
      status: 'attention',
      statusText: 'Cần chú ý',
      sensors: [
        { icon: 'thermostat', value: '35°C' }
      ],
      imageUrl: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=400&auto=format&fit=crop'
    },
    {
      id: '3',
      name: 'Vườn Xoài Cát',
      type: 'Vườn',
      health: 'Tốt',
      healthPercent: 100,
      tags: ['Cây ăn quả', '2.000 m²', '120 gốc'],
      status: 'harvest',
      statusText: 'Sắp thu hoạch',
      sensors: [
        { icon: 'wb_sunny', value: 'Tốt' }
      ],
      imageUrl: 'https://images.unsplash.com/photo-1591073113125-e46713c829ed?q=80&w=400&auto=format&fit=crop'
    },
    {
      id: '4',
      name: 'Ao Cá Rô Phi',
      type: 'Ao',
      health: 'Tốt',
      healthPercent: 92,
      tags: ['Thủy sản', '500 m²', '5.000 con'],
      status: 'active',
      statusText: 'Đang hoạt động',
      sensors: [
        { icon: 'phishing', value: 'pH 7.5' },
        { icon: 'wifi', value: 'ON' }
      ],
      imageUrl: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?q=80&w=400&auto=format&fit=crop'
    },
    {
      id: '5',
      name: 'Vườn Thanh Long - Lô H1',
      type: 'Ao',
      health: 'Tốt',
      healthPercent: 95,
      tags: ['Thanh Long', '1.000 m²', '500 trụ'],
      status: 'active',
      statusText: 'Đang hoạt động',
      sensors: [
        { icon: 'thermostat', value: '29.5°C' },
        { icon: 'water_drop', value: '70%' },
        { icon: 'science', value: '1.3' }
      ],
      imageUrl: 'https://images.unsplash.com/photo-1527333656061-ca7adf608ae1?q=80&w=400&auto=format&fit=crop'
    }
  ];

  const categories = ['Tất cả', 'Vườn', 'Chuồng', 'Ao'];

  return (
    <div className="flex flex-col flex-1 animate-in fade-in duration-500 bg-background-light dark:bg-background-dark min-h-screen">
      {/* HEADER */}
      <div className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl p-4 flex flex-col gap-4 border-b border-gray-100 dark:border-slate-800 shadow-soft">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Thứ Ba, 24/10</span>
            <span className="text-sm font-black text-slate-900 dark:text-white tracking-tight">Xin chào, Nguyễn Văn Nam</span>
          </div>
          <button className="size-11 rounded-2xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-slate-400 border border-gray-100 dark:border-white/5 hover:bg-white transition-all shadow-inner-soft">
            <span className="material-symbols-outlined text-[24px]">account_circle</span>
          </button>
        </div>

        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight font-display">Danh sách khu vực</h2>
          <button 
            onClick={() => navigate('/add-region')}
            className="flex items-center gap-1.5 bg-primary hover:bg-primary-dark text-slate-900 px-4 py-2 rounded-2xl shadow-glow active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[18px] font-black">add</span>
            <span className="text-[11px] font-black uppercase tracking-widest">Thêm mới</span>
          </button>
        </div>

        <div className="flex gap-3">
          <div className="relative flex-1 group">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-300 group-focus-within:text-primary transition-colors text-[20px]">search</span>
            <input 
              className="w-full h-11 pl-12 pr-4 rounded-2xl border-none bg-gray-50 dark:bg-white/5 group-focus-within:bg-white shadow-inner-soft ring-1 ring-gray-100 dark:ring-white/5 focus:ring-2 focus:ring-primary/40 text-sm font-bold text-slate-800 dark:text-white placeholder:text-slate-300 transition-all" 
              placeholder="Tìm kiếm theo tên, mã..." 
              type="text"
            />
          </div>
          <button className="h-11 w-11 shrink-0 flex items-center justify-center rounded-2xl bg-white dark:bg-slate-800 shadow-soft ring-1 ring-gray-100 dark:ring-white/5 text-slate-500 hover:text-primary active:scale-90 transition-all">
            <span className="material-symbols-outlined text-[20px]">tune</span>
          </button>
        </div>
      </div>

      {/* FILTER TABS */}
      <div className="flex items-center justify-between px-5 py-3 shrink-0">
        <div className="flex gap-2 overflow-x-auto hide-scrollbar flex-1">
          {categories.map((cat) => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`h-9 shrink-0 px-6 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                activeCategory === cat 
                  ? 'bg-[#E6FFEC] text-primary-dark dark:text-primary border border-primary/20 shadow-inner' 
                  : 'bg-white dark:bg-slate-800 text-slate-400 border border-gray-50 dark:border-white/5 hover:bg-gray-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <button className="flex items-center gap-1.5 ml-3 text-slate-400 hover:text-primary transition-colors shrink-0">
          <span className="material-symbols-outlined text-[18px]">sort</span>
          <span className="text-[10px] font-black uppercase tracking-widest">Sắp xếp</span>
        </button>
      </div>

      {/* REGION LIST */}
      <div className="flex-1 px-5 space-y-4 pb-32">
        {regions.map((region) => (
          <Link 
            to={`/region/${region.id}`}
            key={region.id}
            className={`group relative flex gap-4 rounded-[2.5rem] bg-white dark:bg-card-dark p-4 shadow-deep border transition-all hover:border-primary/40 cursor-pointer active:scale-[0.98] ${
              region.status === 'attention' ? 'border-red-50 dark:border-red-900/20' : 'border-gray-50 dark:border-white/5'
            }`}
          >
            <div className="w-28 h-28 shrink-0 rounded-[2rem] overflow-hidden shadow-soft relative">
              <img src={region.imageUrl} alt={region.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            <div className="flex flex-col justify-between flex-1 min-w-0 py-1">
              <div className="flex justify-between items-start gap-2">
                <h3 className="text-slate-900 dark:text-white text-[15px] font-black leading-tight truncate tracking-tight group-hover:text-primary-dark transition-colors">{region.name}</h3>
                <span className={`shrink-0 px-2 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest border ${
                  region.healthPercent >= 90 
                    ? 'bg-green-50 text-green-600 border-green-100' 
                    : 'bg-amber-50 text-amber-600 border-amber-100'
                }`}>
                  {region.healthPercent}% {region.health}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 my-2 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                {region.tags.map((tag, idx) => (
                  <React.Fragment key={idx}>
                    <span>{tag}</span>
                    {idx < region.tags.length - 1 && <span className="size-1 rounded-full bg-slate-200"></span>}
                  </React.Fragment>
                ))}
              </div>

              <div className="flex items-end justify-between mt-auto">
                <div className="flex items-center gap-2">
                  <div className={`relative flex h-2.5 w-2.5 ${region.status === 'active' ? 'block' : 'hidden'}`}>
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                  </div>
                  {region.status === 'attention' && <span className="material-symbols-outlined text-red-500 text-[18px] icon-fill">warning</span>}
                  {region.status === 'harvest' && <span className="material-symbols-outlined text-amber-500 text-[18px] icon-fill">inventory_2</span>}
                  <span className={`text-[10px] font-black uppercase tracking-widest ${
                    region.status === 'active' ? 'text-green-600' : (region.status === 'attention' ? 'text-red-600' : 'text-amber-600')
                  }`}>
                    {region.statusText}
                  </span>
                </div>

                <div className="flex gap-2">
                  {region.sensors.map((sensor, idx) => (
                    <div key={idx} className={`flex items-center gap-1 text-[9px] font-black bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 text-slate-600 dark:text-slate-400 px-2 py-1 rounded-lg shadow-inner-soft ${
                      region.status === 'attention' && sensor.icon === 'thermostat' ? 'bg-red-50 text-red-600 border-red-100' : ''
                    }`}>
                      <span className="material-symbols-outlined text-[14px]">{sensor.icon}</span>
                      {sensor.value}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RegionListView;