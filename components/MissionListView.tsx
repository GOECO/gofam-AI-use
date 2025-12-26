
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MissionListView: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Hàng ngày');

  const stats = [
    { label: 'Tổng Xu', value: '1,250', trend: '+12%', icon: 'monetization_on', color: 'text-primary' },
    { label: 'GOFAM Token', value: '5.2', unit: 'GOF', icon: 'token', color: 'text-primary' }
  ];

  const activeMissions = [
    {
      id: 1,
      title: 'Cho Gà Ri ăn',
      desc: 'Cho ăn thức ăn tổng hợp để tăng trọng lượng.',
      reward: '+20',
      rewardType: 'coin',
      progress: 33,
      progressText: '1/3 lần',
      icon: 'egg',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5pjcHqbUEQQxcMQrT0xLmUlX0YDQgbN52IQHGUOdwLufbCP6tTfnaCupt3FwI8-0xjNl_OT5TkW1xPK0QeVsLU88RzwRxpVP_xEq-w71beuavcba5TNI6kKvFa2Olik6MJoo0rxODwGbnjo0MFSfGw_SrUmNcaYtzDkPDR5XzktnWMetYTckWK7kgv_MphUrVETNdITa36PF03TcEZ_Ga_IJ6M5bDgUMcN5rxHS6Fq_WrFpw2e2D4LqJUT5pUDZBv5TlRf0cWIqun'
    },
    {
      id: 2,
      title: 'Tưới NPK Lô Cà phê',
      desc: 'Bổ sung dinh dưỡng cho vụ mùa tới.',
      reward: '+0.1',
      rewardType: 'token',
      progress: 0,
      progressText: '0/1 lần',
      icon: 'water_drop',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAemVtC3i-Tc8jvU8J5nN2OEGWMHmSKlt4LcRuKfSGNiaYf8vt2F9Q-9b8wWOYNFnj3Y5DISFqX0WuSxArPw59K2QcjLpoFX-h9O3U9B1yVnE0er7kkAr8dintE98kv3rrnPXTnZtq4nxv6fIPORZ8BIs8PK4xcj6FPoe9CTkAwa4GfBqKfFlrfUmOmqoSpUrYp9oJ0FJcP5kN9oPsmxX7TxQ8FMhuvvZFRmdzdmGsjM6WbwbtkgmvWQHIwTGzbIocLexEgI8m1vpvR'
    },
    {
      id: 3,
      title: 'Quét sâu bệnh AI',
      desc: 'Chụp 3 ảnh lá cây để AI phân tích.',
      reward: '+50',
      rewardType: 'coin',
      progress: 33,
      progressText: '1/3 ảnh',
      icon: 'bug_report',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwDwskm2QcrWDGNt97dQ2BzqIg1IJd_gJcPoadNvRxnHYIYWZoPxyIj9kvr9LjIGxjeILpybyU8SR90i60OumBCFACbC3uHJZVOtb934GGFjQC8w0O_mSbpjLOVCdiOBkfq9iZd-nXp9WMK2gnqvubQEpmr3q8erldN8ReQUh4c0Fq82yQb9G5ZV1-1Ryy0mhYVb8G--c7IfxN8MFn8jEQmqUgkQDj3vWfVFx0tCA5Z_ADkjLb3zDPT2hVTdxBQBfok1cmNap3olr1'
    }
  ];

  const completedMissions = [
    { title: 'Điểm danh hàng ngày', reward: '+5 Xu', icon: 'calendar_today', color: 'text-primary' },
    { title: 'Kiểm tra độ ẩm đất', reward: '+10 Xu', icon: 'water', color: 'text-blue-400' }
  ];

  return (
    <div className="flex flex-col flex-1 bg-background-dark min-h-screen font-display text-white overflow-x-hidden">
      {/* HEADER */}
      <header className="sticky top-0 z-50 flex items-center justify-between bg-background-dark/95 backdrop-blur-md p-4 pb-4 border-b border-border-dark">
        <button 
          onClick={() => navigate(-1)}
          className="flex size-10 items-center justify-center rounded-full hover:bg-white/10 transition-colors"
        >
          <span className="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
        </button>
        <h1 className="text-lg font-black leading-tight tracking-tight flex-1 text-center uppercase">Nhiệm vụ Nông trại</h1>
        <button className="flex size-10 items-center justify-center rounded-full hover:bg-white/10 transition-colors relative">
          <span className="material-symbols-outlined text-2xl">history</span>
          <span className="absolute top-2.5 right-2.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-background-dark animate-pulse"></span>
        </button>
      </header>

      <main className="flex-1 overflow-y-auto pb-32">
        {/* STATS SUMMARY */}
        <div className="px-4 py-6">
          <div className="grid grid-cols-2 gap-3">
            {stats.map((s, i) => (
              <div key={i} className="relative overflow-hidden rounded-2xl bg-surface-dark border border-border-dark p-4 group transition-all hover:border-primary/30">
                <div className="absolute right-0 top-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className={`material-symbols-outlined text-5xl ${s.color} icon-fill`}>{s.icon}</span>
                </div>
                <p className="text-text-secondary text-[10px] font-black uppercase tracking-widest">{s.label}</p>
                <div className="mt-2 flex items-baseline gap-1.5">
                  <span className="text-2xl font-black text-white tracking-tighter">{s.value}</span>
                  {s.trend && <span className="text-primary text-[10px] font-black">{s.trend}</span>}
                  {s.unit && <span className="text-[10px] text-text-secondary font-black uppercase">{s.unit}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TABS */}
        <div className="px-4 pb-6">
          <div className="flex h-12 w-full items-center rounded-2xl bg-surface-dark border border-border-dark p-1 shadow-inner">
            {['Hàng ngày', 'Hàng tuần', 'Đặc biệt'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex h-full flex-1 items-center justify-center rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                  activeTab === tab 
                    ? 'bg-primary text-slate-900 shadow-glow' 
                    : 'text-text-secondary hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* MISSION MAP PREVIEW */}
        <div className="px-4 pb-8">
           <div 
             onClick={() => navigate('/map')}
             className="relative w-full h-48 rounded-[2.5rem] overflow-hidden border border-border-dark shadow-deep group cursor-pointer"
           >
              <div 
                className="absolute inset-0 bg-cover bg-center grayscale-[0.5] opacity-60 group-hover:scale-110 transition-transform duration-[10s]" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAUDYOudDbeazvcDylzsQ8VHOELyC9FWlF3X0pvARgshz2Wavmr4S0O-HORAQ0iljbBmc5oR-OCAtCKIoW8Y_CHsHrK0nPGsnD23q-_RpdYzuN5j49BYaQOSQU-VzvecU7QyGwEd2q3mZ_eN1SoD8Bqg4WHBEdrn3Zu0smfc-zZ2i38io6eepPqRNgancFkSBo0sthgBnYJyJSxHdSFs7Qaj8q5DC2uL5N2pc_ovbzpwDQqIdU95nkwYrYLX3dIK4iibV5h-HeHxKFI")' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
              
              {/* Mission Markers on Map */}
              <div className="absolute top-[30%] left-[20%] animate-bounce">
                 <div className="relative">
                    <div className="absolute -inset-2 bg-primary/30 rounded-full animate-ping"></div>
                    <div className="size-6 rounded-full bg-primary border-2 border-white flex items-center justify-center shadow-glow">
                       <span className="material-symbols-outlined text-[14px] text-slate-900 font-black">egg</span>
                    </div>
                 </div>
              </div>

              <div className="absolute bottom-[40%] right-[30%] animate-bounce [animation-delay:1s]">
                 <div className="relative">
                    <div className="absolute -inset-2 bg-blue-500/30 rounded-full animate-ping"></div>
                    <div className="size-6 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center shadow-glow">
                       <span className="material-symbols-outlined text-[14px] text-white font-black">water_drop</span>
                    </div>
                 </div>
              </div>

              <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 flex items-center gap-2">
                 <div className="size-2 bg-primary rounded-full animate-pulse shadow-glow"></div>
                 <span className="text-[9px] font-black uppercase tracking-widest text-primary">Map Live View</span>
              </div>

              <div className="absolute bottom-5 left-6 right-6 flex justify-between items-end">
                 <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">Vị trí hiện tại</p>
                    <p className="text-sm font-black uppercase tracking-tight">Khu vực A - Lô Cà Phê</p>
                 </div>
                 <button className="size-10 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-primary transition-all">
                    <span className="material-symbols-outlined text-[20px]">open_in_full</span>
                 </button>
              </div>
           </div>
        </div>

        {/* ACTIVE MISSIONS */}
        <div className="flex flex-col gap-4 px-4">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-xs font-black text-white uppercase tracking-[0.2em] flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-lg animate-pulse">bolt</span>
              Đang hoạt động
            </h2>
            <span className="text-[9px] font-black text-text-secondary bg-surface-dark px-3 py-1 rounded-lg border border-border-dark uppercase tracking-widest">3 Nhiệm vụ</span>
          </div>

          {activeMissions.map((m) => (
            <div key={m.id} className="group relative flex overflow-hidden rounded-[2rem] bg-surface-dark border border-border-dark hover:border-primary/50 transition-all duration-300 active:scale-[0.98]">
              {/* Left Image */}
              <div 
                className="w-24 bg-center bg-cover bg-no-repeat shrink-0 relative" 
                style={{ backgroundImage: `url('${m.image}')` }}
              >
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white/90 text-3xl drop-shadow-lg icon-fill">{m.icon}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col justify-between p-4 pl-5">
                <div className="flex justify-between items-start gap-2">
                  <div className="min-w-0">
                    <h3 className="text-sm font-black text-white leading-tight mb-1 truncate uppercase tracking-tight">{m.title}</h3>
                    <p className="text-[10px] text-text-secondary line-clamp-1 font-medium">{m.desc}</p>
                  </div>
                  <div className={`shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded-lg font-black text-[10px] border shadow-inner ${
                    m.rewardType === 'coin' 
                      ? 'bg-primary/10 text-primary border-primary/20' 
                      : 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'
                  }`}>
                    <span>{m.reward}</span>
                    {m.rewardType === 'coin' ? (
                      <span className="material-symbols-outlined text-[14px] icon-fill">monetization_on</span>
                    ) : (
                      <span className="text-[8px] tracking-tighter">GOF</span>
                    )}
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between gap-4">
                  <div className="flex-1 flex flex-col gap-1.5">
                    <div className="flex justify-between text-[8px] font-black text-text-secondary uppercase tracking-[0.1em]">
                      <span>Tiến độ</span>
                      <span className="text-primary">{m.progressText}</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-black/40 shadow-inner overflow-hidden">
                      <div 
                        className="h-full rounded-full bg-primary shadow-glow transition-all duration-1000" 
                        style={{ width: `${m.progress || 5}%` }}
                      ></div>
                    </div>
                  </div>
                  <button className="h-9 min-w-[90px] rounded-xl bg-primary px-4 text-[10px] font-black text-slate-900 hover:bg-white transition-all active:scale-90 shadow-glow uppercase tracking-widest border border-primary-dark/10">
                    Thực hiện
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* COMPLETED MISSIONS */}
        <div className="flex flex-col gap-4 px-4 mt-10">
          <h2 className="text-xs font-black text-white uppercase tracking-[0.2em] flex items-center gap-2 px-1">
            <span className="material-symbols-outlined text-text-secondary text-lg">check_circle</span>
            Đã hoàn thành
          </h2>

          {completedMissions.map((m, i) => (
            <div key={i} className="flex items-center justify-between rounded-[1.5rem] bg-surface-dark/40 border border-border-dark p-4 opacity-70 group hover:opacity-100 transition-all">
              <div className="flex items-center gap-4">
                <div className="flex size-11 items-center justify-center rounded-2xl bg-surface-dark border border-border-dark shadow-inner">
                  <span className={`material-symbols-outlined ${m.color} text-[22px] icon-fill`}>{m.icon}</span>
                </div>
                <div>
                  <h3 className="text-xs font-black text-white line-through decoration-text-secondary/50 uppercase tracking-tight">{m.title}</h3>
                  <p className="text-[9px] text-text-secondary font-bold uppercase tracking-widest mt-0.5">Đã nhận: <span className="text-primary">{m.reward}</span></p>
                </div>
              </div>
              <div className="flex size-8 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                <span className="material-symbols-outlined text-lg font-black">done</span>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* FLOATING ACTION BUTTON */}
      <div className="fixed bottom-28 right-6 z-[60]">
        <button className="group flex h-16 w-16 items-center justify-center rounded-[2rem] bg-primary text-slate-900 shadow-glow hover:scale-110 active:scale-95 transition-all duration-300 border-4 border-background-dark">
          <span className="material-symbols-outlined text-3xl font-black">agriculture</span>
          <div className="absolute right-full mr-4 hidden whitespace-nowrap rounded-xl bg-slate-900 border border-white/10 px-4 py-2 text-[10px] font-black text-white shadow-2xl group-hover:block animate-in slide-in-from-right-2 uppercase tracking-widest">
            Vào Nông trại ảo
          </div>
        </button>
      </div>
    </div>
  );
};

export default MissionListView;
