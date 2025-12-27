
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AIChatModal from './AIChatModal';

const HomeView: React.FC = () => {
  const navigate = useNavigate();
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);
  const [aiFilter, setAiFilter] = useState<'all' | 'pending' | 'completed'>('all');
  const [hoveredZone, setHoveredZone] = useState<any>(null);

  // Dữ liệu mẫu mở rộng cho các khu vực trang trại
  const [regions] = useState([
    { 
      id: '1', name: 'Lô Cà Phê A1', type: 'Vườn', status: 'Tốt', color: 'text-primary', 
      icon: 'potted_plant', health: 98, temp: '24.5°C', hum: '78%', ec: '1.2',
      crop: 'Cà phê Robusta', plantedDate: '12/05/2023', lastWatered: '2 giờ trước',
      imageUrl: 'https://images.unsplash.com/photo-1559056191-4917a1195462?q=80&w=400&auto=format&fit=crop',
      mapPos: { top: '25%', left: '20%' }
    },
    { 
      id: '2', name: 'Chuồng Gà B2', type: 'Chuồng', status: 'Ổn định', color: 'text-blue-500', 
      icon: 'pets', health: 92, temp: '28.2°C', hum: '65%', ec: 'N/A',
      crop: 'Gà Ri Thả Vườn', plantedDate: '01/09/2023', lastWatered: 'Hôm qua',
      imageUrl: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=400&auto=format&fit=crop',
      mapPos: { top: '35%', left: '65%' }
    },
    { 
      id: '3', name: 'Lô Mắc Ca C3', type: 'Vườn', status: 'Cần nước', color: 'text-amber-500', 
      icon: 'agriculture', health: 75, temp: '31.5°C', hum: '42%', ec: '1.5',
      crop: 'Mắc ca Úc', plantedDate: '20/02/2023', lastWatered: '6 giờ trước',
      imageUrl: 'https://images.unsplash.com/photo-1444858291040-583b1cb82f98?q=80&w=400&auto=format&fit=crop',
      mapPos: { top: '65%', left: '30%' }
    },
    { 
      id: '4', name: 'Ao Cá Lô D', type: 'Ao', status: 'Tốt', color: 'text-cyan-500', 
      icon: 'phishing', health: 95, temp: '22.8°C', hum: '90%', ec: 'pH 7.2',
      crop: 'Cá Rô Phi', plantedDate: '15/08/2023', lastWatered: 'Đang tưới',
      imageUrl: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?q=80&w=400&auto=format&fit=crop',
      mapPos: { top: '55%', left: '75%' }
    },
    { 
      id: '5', name: 'Vườn Thanh Long - Lô H1', type: 'Ao', status: 'Tốt', color: 'text-pink-500', 
      icon: 'phishing', health: 95, temp: '29.5°C', hum: '70%', ec: '1.3',
      crop: 'Thanh Long Ruột Đỏ', plantedDate: '10/10/2023', lastWatered: '1 giờ trước',
      imageUrl: 'https://images.unsplash.com/photo-1527333656061-ca7adf608ae1?q=80&w=400&auto=format&fit=crop',
      mapPos: { top: '15%', left: '45%' }
    },
  ]);

  const aiInsights = [
    { 
      id: 'ai1', 
      title: 'CÀ PHÊ LÔ A3', 
      status: 'pending', 
      match: 98, 
      time: '14:00', 
      desc: 'Có dấu hiệu <span class="text-red-500">rỉ sắt nhẹ</span> trên lá non. Bác nên kiểm tra và phun thuốc sinh học vào chiều mát nay nhé!',
      icon: 'smart_toy'
    },
    { 
      id: 'ai2', 
      title: 'NHÀ KÍNH LÔ B2', 
      status: 'completed', 
      match: 92, 
      time: 'Hôm qua', 
      desc: 'Nhiệt độ đã được điều chỉnh giảm 2°C theo khuyến nghị. Độ ẩm hiện tại đạt mức 70% lý tưởng.',
      icon: 'check_circle'
    }
  ];

  const latestVideos = [
    { id: 'v1', title: 'Kỹ thuật cắt tỉa cành cà phê giai đoạn nuôi trái', views: '1.2K', time: '2 giờ trước', thumbnail: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?q=80&w=400&auto=format&fit=crop' },
    { id: 'v2', title: 'Phòng trừ rệp sáp bằng chế phẩm sinh học Bio-B', views: '856', time: '5 giờ trước', thumbnail: 'https://images.unsplash.com/photo-1597389880944-214873954a48?q=80&w=400&auto=format&fit=crop' },
    { id: 'v3', title: 'Hướng dẫn lắp đặt hệ thống tưới nhỏ giọt tiết kiệm', views: '2.4K', time: 'Hôm qua', thumbnail: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=400&auto=format&fit=crop' }
  ];

  const filteredInsights = aiInsights.filter(item => {
    if (aiFilter === 'all') return true;
    return item.status === aiFilter;
  });

  const quickActions = [
    { label: 'Video mới', icon: 'add_a_photo', color: 'emerald', route: '/scan' },
    { label: 'AI Trợ lý', icon: 'smart_toy', color: 'blue', action: () => setIsAIChatOpen(true) },
    { label: 'Trang trại', icon: 'agriculture', color: 'orange', route: '/regions' },
    { label: 'Nhận nuôi', icon: 'pets', color: 'purple', route: '/adopt' },
    { label: 'Chợ GOFAM', icon: 'storefront', color: 'rose', route: '/market' },
    { label: 'Thời tiết', icon: 'wb_sunny', color: 'indigo', route: '/weather' },
    { label: 'Phân tích', icon: 'analytics', color: 'fuchsia', route: '/reports' },
    { label: 'Cộng đồng', icon: 'forum', color: 'teal', route: '/community' },
  ];

  const getColorClasses = (color: string) => {
    const map: Record<string, string> = {
      emerald: 'bg-emerald-50 text-emerald-600 border-emerald-100 dark:bg-emerald-950/30 dark:text-emerald-400 dark:border-emerald-900/30',
      blue: 'bg-blue-50 text-blue-600 border-blue-100 dark:bg-blue-950/30 dark:text-blue-400 dark:border-blue-900/30',
      orange: 'bg-orange-50 text-orange-600 border-orange-100 dark:bg-orange-950/30 dark:text-orange-400 dark:border-orange-900/30',
      purple: 'bg-purple-50 text-purple-600 border-purple-100 dark:bg-purple-950/30 dark:text-purple-400 dark:border-purple-900/30',
      rose: 'bg-rose-50 text-rose-600 border-rose-100 dark:bg-rose-950/30 dark:text-rose-400 dark:border-rose-900/30',
      indigo: 'bg-indigo-50 text-indigo-600 border-indigo-100 dark:bg-indigo-950/30 dark:text-indigo-400 dark:border-indigo-900/30',
      fuchsia: 'bg-fuchsia-50 text-fuchsia-600 border-fuchsia-100 dark:bg-fuchsia-950/30 dark:text-fuchsia-400 dark:border-fuchsia-900/30',
      teal: 'bg-teal-50 text-teal-600 border-teal-100 dark:bg-teal-950/30 dark:text-teal-400 dark:border-teal-900/30',
    };
    return map[color] || map.emerald;
  };

  return (
    <div className="flex flex-col flex-1 animate-in fade-in duration-700 bg-white dark:bg-background-dark">
      <AIChatModal isOpen={isAIChatOpen} onClose={() => setIsAIChatOpen(false)} />
      
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-gray-100 dark:border-border-dark px-4 pt-5 pb-5">
        <div className="flex items-center justify-between gap-3">
          <button 
            aria-label="Hồ sơ người dùng" 
            onClick={() => navigate('/profile')}
            className="relative shrink-0 active:scale-95 transition-transform"
          >
            <div className="h-14 w-14 rounded-full bg-surface-light dark:bg-surface-dark overflow-hidden border-2 border-primary/20 shadow-sm">
              <img alt="Portrait" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCH6xT1JxtJAjFU126T-G22k-h0Br79gjsbaBp-HYg2926CfcWp6y1ZV0aSOOWs6IXCLgf_q6sWIsxngsoqouuEGwtJyCLQvmcs4XhTrRp-B9U5O9Z8Ispsi6_Gzx_783F60KVBTXuVZgp0Vr4hzGFPtwJHtNHgoumztTOKBBuAFMwew60ExTd8hrHulNoFioUU0BQVIqzyhzr4rWfGjTJY7ORU_xcXb6ZhidiMO923i3FobN-K_-UAKHq_TYI7bVWnKyIx5e-DuzP0"/>
            </div>
            <div className="absolute bottom-0 right-0 h-4 w-4 bg-primary rounded-full border-2 border-white dark:border-background-dark z-10 shadow-sm"></div>
          </button>
          
          <div className="flex flex-col flex-1 min-w-0 justify-center">
            <h1 className="text-xl font-bold truncate leading-tight flex items-center gap-1 font-display text-slate-900 dark:text-white">
              Xin chào, Bác Ba <span className="animate-pulse">👋</span>
            </h1>
            <button className="flex items-center gap-1 mt-1 text-sm text-text-secondary dark:text-slate-400 font-medium truncate px-2 py-1 rounded-lg border border-gray-100 dark:border-border-dark bg-gray-50 dark:bg-surface-dark w-fit max-w-full">
              <span className="material-symbols-outlined text-[18px] shrink-0 text-primary-dark">location_on</span>
              <span className="truncate">Lâm Đồng</span>
            </button>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* NÚT CAMERA MỚI */}
            <button 
              onClick={() => navigate('/scan')}
              className="h-11 w-11 flex items-center justify-center rounded-full bg-gray-50 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:text-primary transition-all active:scale-90"
              title="Mở Camera AI"
            >
              <span className="material-symbols-outlined text-[26px]">photo_camera</span>
            </button>
            <div className="relative">
              <button onClick={() => navigate('/notifications')} className="h-11 w-11 flex items-center justify-center rounded-full bg-red-50 dark:bg-red-900/20 text-red-500">
                <span className="material-symbols-outlined text-[26px] animate-pulse">warning</span>
              </button>
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full ring-2 ring-white dark:ring-background-dark"></span>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto w-full pb-28 bg-[#fdfdfd] dark:bg-background-dark">
        {/* QUICK ACTIONS GRID */}
        <div className="pt-6 pb-2 px-4">
          <div className="grid grid-cols-4 gap-4 gap-y-6">
            {quickActions.map((action, idx) => (
              <button 
                key={idx}
                onClick={action.route ? () => navigate(action.route) : action.action} 
                className="flex flex-col items-center gap-2.5 group active:scale-90 transition-all"
              >
                <div className={`w-15 h-15 rounded-full flex items-center justify-center shadow-soft border transition-all group-hover:scale-110 group-hover:shadow-deep ${getColorClasses(action.color)}`}>
                  <span className={`material-symbols-outlined text-3xl icon-fill transition-colors`}>{action.icon}</span>
                </div>
                <span className="text-[10px] font-black text-center text-slate-500 dark:text-slate-300 leading-tight uppercase tracking-tight group-hover:text-slate-900 dark:group-hover:text-white">{action.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* PROMINENT AI SCAN BUTTON */}
        <div className="px-4 mt-6">
           <button 
             onClick={() => navigate('/scan')}
             className="w-full h-24 bg-gradient-to-r from-slate-900 to-slate-800 rounded-[2.5rem] flex items-center justify-between px-8 shadow-2xl relative overflow-hidden group active:scale-[0.98] transition-all border border-white/10"
           >
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
             <div className="flex items-center gap-5 relative z-10">
                <div className="size-14 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center shadow-glow">
                   <span className="material-symbols-outlined text-[36px] text-primary icon-fill group-hover:scale-110 transition-transform">photo_camera</span>
                </div>
                <div className="text-left">
                   <h3 className="text-white text-xl font-black uppercase tracking-tight leading-none">Quét AI</h3>
                   <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mt-2">Chẩn đoán bệnh cây trồng ngay</p>
                </div>
             </div>
             <div className="size-10 rounded-full bg-white/10 flex items-center justify-center text-primary relative z-10 group-hover:bg-primary group-hover:text-slate-900 transition-all">
                <span className="material-symbols-outlined font-black">arrow_forward</span>
             </div>
           </button>
        </div>

        {/* INTERACTIVE REAL-TIME FARM MAP */}
        <div className="px-4 mt-10">
          <div className="flex items-center justify-between mb-4 px-1">
            <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase font-display flex items-center gap-2">
              BẢN ĐỒ TRANG TRẠI 📍
            </h2>
            <button 
              onClick={() => navigate('/map')} 
              className="text-primary-dark font-black text-[11px] uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-lg border border-primary/20"
            >
              TOÀN CẢNH
            </button>
          </div>
          
          <div className="relative w-full aspect-[16/11] bg-slate-100 dark:bg-slate-900 rounded-[3rem] overflow-hidden border border-gray-100 dark:border-border-dark shadow-deep group">
            {/* Map Background (Realistic) */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-[10s]"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop")' }}
            ></div>
            <div className="absolute inset-0 bg-black/10"></div>

            {/* Interactive Pins */}
            {regions.map((region) => (
              <button
                key={region.id}
                onMouseEnter={() => setHoveredZone(region)}
                onMouseLeave={() => setHoveredZone(null)}
                onClick={() => navigate(`/region/${region.id}`)}
                className="absolute size-10 -translate-x-1/2 -translate-y-1/2 transition-all active:scale-90 z-20 group/pin"
                style={{ top: region.mapPos.top, left: region.mapPos.left }}
              >
                <div className="relative">
                  <div className={`absolute -inset-3 rounded-full opacity-25 animate-ping group-hover/pin:opacity-50 ${
                    region.status === 'Tốt' ? 'bg-primary' : 'bg-amber-400'
                  }`}></div>
                  <div className={`size-10 rounded-full border-2 border-white shadow-deep flex items-center justify-center transition-all ${
                    hoveredZone?.id === region.id ? 'scale-125 shadow-glow z-30' : 'bg-slate-900/80 backdrop-blur-md'
                  }`}>
                    <span className={`material-symbols-outlined text-[20px] ${region.color} icon-fill`}>
                      {region.icon}
                    </span>
                  </div>
                </div>
              </button>
            ))}

            {/* Hover Tooltip/Info Card */}
            <div className="absolute inset-x-4 bottom-4 z-40 pointer-events-none">
              {hoveredZone ? (
                <div className="bg-slate-950/90 backdrop-blur-xl p-5 rounded-[2rem] border border-white/20 shadow-2xl animate-in slide-in-from-bottom-4 duration-300 pointer-events-auto">
                   <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                           <span className={`material-symbols-outlined text-sm ${hoveredZone.color} icon-fill`}>{hoveredZone.icon}</span>
                           <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">{hoveredZone.name}</p>
                        </div>
                        <h3 className="text-white text-base font-black tracking-tight leading-none uppercase">{hoveredZone.crop}</h3>
                      </div>
                      <div className="text-right">
                         <span className="text-xl font-black text-white tracking-tighter">{hoveredZone.health}%</span>
                         <p className="text-[7px] text-slate-400 font-black uppercase tracking-widest">Sức khỏe</p>
                      </div>
                   </div>

                   <div className="grid grid-cols-3 gap-3">
                      <div className="bg-white/5 rounded-xl p-2.5 border border-white/5 flex flex-col items-center">
                         <span className="material-symbols-outlined text-orange-400 text-[18px]">thermostat</span>
                         <span className="text-[11px] font-black text-white mt-1">{hoveredZone.temp}</span>
                      </div>
                      <div className="bg-white/5 rounded-xl p-2.5 border border-white/5 flex flex-col items-center">
                         <span className="material-symbols-outlined text-blue-400 text-[18px]">water_drop</span>
                         <span className="text-[11px] font-black text-white mt-1">{hoveredZone.hum}</span>
                      </div>
                      <div className="bg-white/5 rounded-xl p-2.5 border border-white/5 flex flex-col items-center">
                         <span className="material-symbols-outlined text-purple-400 text-[18px]">science</span>
                         <span className="text-[11px] font-black text-white mt-1">EC: {hoveredZone.ec}</span>
                      </div>
                   </div>
                   
                   <div className="mt-4 flex items-center gap-3">
                      <div className="h-1.5 flex-1 bg-white/10 rounded-full overflow-hidden shadow-inner">
                         <div 
                           className={`h-full transition-all duration-1000 ${hoveredZone.health > 80 ? 'bg-primary shadow-glow' : 'bg-amber-500'}`} 
                           style={{ width: `${hoveredZone.health}%` }}
                         ></div>
                      </div>
                      <span className={`text-[9px] font-black uppercase tracking-widest ${hoveredZone.status === 'Tốt' ? 'text-primary' : 'text-amber-500'}`}>
                        {hoveredZone.status}
                      </span>
                   </div>
                </div>
              ) : (
                <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-6 py-3 rounded-2xl border border-gray-100 dark:border-white/10 flex items-center justify-between shadow-soft">
                   <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary text-xl animate-pulse">explore</span>
                      <p className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest leading-none">Chạm vào từng vùng để xem dữ liệu cảm biến</p>
                   </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* MY VIRTUAL GARDEN STATUS */}
        <div className="px-4 mt-10">
          <div 
            onClick={() => navigate('/virtual-farm')}
            className="bg-slate-900 rounded-[2.5rem] p-6 text-white relative overflow-hidden shadow-2xl border border-primary/20 cursor-pointer active:scale-[0.98] transition-all group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
            <div className="flex items-center justify-between mb-4 relative z-10">
              <div className="flex items-center gap-3">
                <div className="size-11 rounded-2xl bg-primary/20 flex items-center justify-center text-primary shadow-glow border border-primary/30">
                  <span className="material-symbols-outlined text-2xl icon-fill">potted_plant</span>
                </div>
                <div>
                  <h3 className="text-sm font-black uppercase tracking-widest">Cây đang nhận nuôi</h3>
                  <p className="text-[9px] text-slate-400 uppercase tracking-widest mt-0.5">Giống: Cà chua bi Cherry • 25 ngày tuổi</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-slate-500 group-hover:text-primary transition-colors">arrow_forward_ios</span>
            </div>
            <div className="flex items-center gap-6 relative z-10">
              <div className="flex-1 space-y-2">
                <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-widest">
                  <span className="text-slate-400">Sức khỏe</span>
                  <span className="text-primary">92%</span>
                </div>
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full shadow-glow" style={{ width: '92%' }}></div>
                </div>
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-widest">
                  <span className="text-slate-400">Độ ẩm</span>
                  <span className="text-blue-400">65%</span>
                </div>
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-400 rounded-full shadow-glow" style={{ width: '65%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FARM REGIONS LIST (Detailed Cards) */}
        <div className="px-4 mt-10">
          <div className="flex items-center justify-between mb-6 px-1">
            <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase font-display flex items-center gap-2">
              DANH SÁCH KHU VỰC 🏡
            </h2>
            <button 
              onClick={() => navigate('/regions')} 
              className="text-primary-dark font-black text-[11px] uppercase tracking-widest hover:underline"
            >
              Xem tất cả
            </button>
          </div>
          
          <div className="flex flex-col gap-5">
             {regions.map(r => (
               <div 
                 key={r.id}
                 className="bg-white dark:bg-surface-dark rounded-[2.5rem] overflow-hidden border border-gray-100 dark:border-border-dark shadow-soft group hover:shadow-deep transition-all"
               >
                  <div className="flex gap-4 p-4">
                    {/* Image/Icon Area */}
                    <div className="relative w-28 h-28 shrink-0 overflow-hidden rounded-[2rem] shadow-inner bg-gray-50 border border-gray-100">
                      <img src={r.imageUrl} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={r.name} />
                      <div className="absolute top-2 left-2 bg-white/90 backdrop-blur rounded-lg p-1.5 shadow-sm border border-gray-100">
                         <span className={`material-symbols-outlined text-[18px] icon-fill ${r.color}`}>{r.icon}</span>
                      </div>
                    </div>

                    {/* Info Area */}
                    <div className="flex flex-1 flex-col justify-between py-1 min-w-0">
                      <div className="flex justify-between items-start gap-2">
                         <div className="min-w-0">
                            <h4 className="text-base font-black text-slate-900 dark:text-white uppercase tracking-tight truncate leading-tight">{r.name}</h4>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Phân loại: {r.type}</p>
                         </div>
                         <div className={`shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-[9px] font-black uppercase tracking-widest ${
                           r.status === 'Tốt' ? 'bg-green-50 text-green-600 border-green-100' : 'bg-amber-50 text-amber-600 border-amber-100 animate-pulse'
                         }`}>
                           <span className="size-1.5 rounded-full bg-current"></span>
                           {r.status}
                         </div>
                      </div>

                      <div className="flex items-center gap-4 mt-auto">
                        <div className="flex items-center gap-1.5">
                           <span className="material-symbols-outlined text-slate-300 text-[16px]">thermostat</span>
                           <span className="text-[11px] font-black text-slate-600 dark:text-slate-400">{r.temp}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                           <span className="material-symbols-outlined text-slate-300 text-[16px]">water_drop</span>
                           <span className="text-[11px] font-black text-slate-600 dark:text-slate-400">{r.hum}</span>
                        </div>
                        <button 
                          onClick={() => navigate(`/region/${r.id}`)}
                          className="ml-auto flex items-center justify-center gap-1.5 bg-primary/10 hover:bg-primary text-primary-dark hover:text-slate-900 px-4 py-2 rounded-xl transition-all active:scale-95 border border-primary/20 group/btn"
                        >
                           <span className="text-[9px] font-black uppercase tracking-widest">Chi tiết</span>
                           <span className="material-symbols-outlined text-[16px] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                        </button>
                      </div>
                    </div>
                  </div>
               </div>
             ))}
          </div>
        </div>

        {/* LATEST VIDEOS SECTION */}
        <div className="px-4 mt-12">
          <div className="flex items-center justify-between mb-4 px-1">
            <h2 className="text-lg font-black text-slate-900 dark:text-white uppercase font-display flex items-center gap-2">
              VIDEO KỸ THUẬT MỚI 🎥
            </h2>
            <button className="text-primary-dark font-black text-[10px] uppercase tracking-widest hover:underline">
              Xem tất cả
            </button>
          </div>
          
          <div className="flex gap-5 overflow-x-auto hide-scrollbar pb-4 snap-x">
            {latestVideos.map((video) => (
              <div 
                key={video.id}
                className="snap-start shrink-0 w-64 bg-white dark:bg-surface-dark rounded-[2rem] overflow-hidden border border-gray-100 dark:border-border-dark shadow-soft group hover:shadow-deep active:scale-95 transition-all cursor-pointer"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="size-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-xl opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="material-symbols-outlined text-[24px] icon-fill">play_arrow</span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-[13px] font-black text-slate-900 dark:text-white leading-tight line-clamp-2 h-10 mb-3 tracking-tight">{video.title}</h4>
                  <div className="flex items-center justify-between text-[9px] font-black text-slate-400 uppercase tracking-widest">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">visibility</span>
                      {video.views} lượt xem
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">schedule</span>
                      {video.time}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI ANALYSIS SECTION WITH FILTER */}
        <div className="px-4 mt-12 mb-12">
          <div className="flex flex-col gap-4 mb-5">
            <h2 className="text-lg font-black text-slate-900 dark:text-white uppercase font-display">GỢI Ý RIÊNG - PHÂN TÍCH AI ✨</h2>
            
            <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1">
              {[
                { id: 'all', label: 'Tất cả' },
                { id: 'pending', label: 'Chờ xử lý' },
                { id: 'completed', label: 'Đã hoàn thành' }
              ].map(f => (
                <button 
                  key={f.id}
                  onClick={() => setAiFilter(f.id as any)}
                  className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border shrink-0 ${
                    aiFilter === f.id 
                      ? 'bg-[#E6FFEC] text-primary-dark border-primary shadow-lg' 
                      : 'bg-white dark:bg-slate-800 text-slate-400 border-gray-100 dark:border-slate-700 hover:bg-gray-50'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {filteredInsights.length > 0 ? filteredInsights.map((insight) => (
              <div key={insight.id} className="bg-white dark:bg-surface-dark rounded-[2.5rem] p-6 border border-primary/20 dark:border-border-dark shadow-soft relative overflow-hidden group animate-in slide-in-from-bottom-4 duration-500">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full -mr-4 -mt-4 z-0"></div>
                <div className="flex flex-col gap-5 relative z-10">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">{insight.title}</h3>
                      <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-widest">Phát hiện: {insight.time}</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-2xl font-black text-primary-dark dark:text-primary tracking-tighter">{insight.match}%</span>
                      <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">PHÙ HỢP</span>
                    </div>
                  </div>

                  <div className={`flex items-start gap-4 p-5 rounded-3xl border ${
                    insight.status === 'completed' 
                      ? 'bg-green-50/50 dark:bg-green-900/10 border-green-100 dark:border-green-900/20' 
                      : 'bg-gray-50 dark:bg-background-dark/50 border-gray-100 dark:border-border-dark'
                  }`}>
                    <div className={`size-11 rounded-full flex items-center justify-center shrink-0 shadow-glow ${
                      insight.status === 'completed' ? 'bg-green-500' : 'bg-primary'
                    }`}>
                      <span className="material-symbols-outlined text-white text-[24px] icon-fill">{insight.icon}</span>
                    </div>
                    <p 
                      className={`text-[14px] leading-relaxed font-bold ${
                        insight.status === 'completed' ? 'text-slate-500 dark:text-slate-400 italic' : 'text-slate-700 dark:text-slate-300'
                      }`}
                      dangerouslySetInnerHTML={{ __html: insight.desc }}
                    />
                  </div>

                  {insight.status === 'pending' && (
                    <div className="grid grid-cols-2 gap-4 mt-1">
                      <button className="flex items-center justify-center gap-2 py-4 px-4 bg-primary text-slate-900 rounded-2xl font-black text-[11px] uppercase tracking-widest shadow-glow active:scale-95 transition-all">
                        <span className="material-symbols-outlined text-[18px]">check_circle</span> Đã làm
                      </button>
                      <button onClick={() => navigate('/scan')} className="flex items-center justify-center gap-2 py-4 px-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-gray-100 dark:border-border-dark rounded-2xl font-black text-[11px] uppercase tracking-widest shadow-soft active:scale-95 transition-all">
                        <span className="material-symbols-outlined text-[18px]">add_a_photo</span> Chụp ảnh
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )) : (
              <div className="py-12 flex flex-col items-center justify-center text-center opacity-40">
                <span className="material-symbols-outlined text-[64px] mb-4">search_off</span>
                <p className="text-[10px] font-black uppercase tracking-[0.2em]">Không tìm thấy gợi ý nào</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomeView;