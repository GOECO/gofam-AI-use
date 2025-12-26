
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdoptView: React.FC = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('Tất cả');

  const filters = ['Tất cả', 'Cây trồng', 'Vật nuôi', 'Đã nhận nuôi'];

  const projects = [
    {
      id: 'a1',
      title: 'Gói Cà Chua Bi Organic',
      farm: 'GreenFarm Đà Lạt',
      roi: '15%',
      harvestDate: '20/12/23',
      remaining: '12',
      status: 'Sắp thu hoạch',
      statusColor: 'text-orange-500',
      statusBg: 'bg-orange-50',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA977HKZRR-Dag1zgPIkxM20h8bro74MFR7XUoHGMpnKrEkbR0xxOnYfNmN2mc7_m-lOMPyb1C3wzIW9g_RDcccGPmJfkS8AxCS-UASx96O8OlIGipqD_v0DVnheVBPdsm0dL6uK6YIwbdri52a44t1hd58ghMBYMvZRGNmlVG74G4plBAfe0AQnFJbQ00L6PwQIZID29wilaQISn6deq8Fk6UBwft0xhkoIWmLIb65OtfZStF-kJbFfe6S9OlWVG_1z7kMke8ihFgy'
    },
    {
      id: 'a2',
      title: 'Gói Nuôi Gà Ri Thả Vườn',
      farm: 'Trại Gà Hòa Bình',
      roi: '18%',
      harvestDate: '15/01/24',
      remaining: '50',
      status: 'Đang phát triển',
      statusColor: 'text-primary-dark',
      statusBg: 'bg-primary/10',
      icon: 'trending_up',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIZVfptTZdxH44ojjmJluJhbJeQHjHH1ow-0LWz16U7v6RBSCgW_UcBnuubNvFRO3BlxvuRZWY915GiaPiw2LvwO1WffUKhdFx9eUlHl8rf5V-6SzblTrrm-ur5Z86uNX-7KzD3cV1pn8FQ5JIYkh4f7lckDOgJtOK6WMhWTA8pbekvofW0tvRunXv-8qXblPdfc-KfNxMoge0Expwm6dGglvczP767DtwgJ9vdmc1R4gsrDq4dJLHJRBw9UxGZYeruCaCs9k8V5x_'
    },
    {
      id: 'a3',
      title: 'Gói Dưa Lưới Hoàng Gia',
      farm: 'Royal Fruits',
      roi: '22%',
      harvestDate: '01/03/24',
      remaining: '05',
      status: 'Đang mở bán',
      statusColor: 'text-purple-600',
      statusBg: 'bg-purple-50',
      icon: 'fiber_new',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqbQrFCWsuD4GppxCMGHEjd3oPimgCIvAyaNoZs9OEJrOAUo2sdaU82bL_JSvhYfY-fH9pceTnVoLPp2yqBFh9bpZjt2CgvSGlVodXhpEuXWRrIESdLj381hQfeE9Ned4HjPHfMi21nCDHWCETg-RtxFsqdfdLYZoX4FAqNLhxevcD3fAXGcoOtsTfuIXUiyfuwPE5KOzxZ--KZY4t7hn1OguAyPU-_h6W4yaAZvNwlBvPKWDGoGRNhzYvg6D25PbjFyoCtfeRRKN7'
    }
  ];

  return (
    <div className="relative flex flex-col min-h-screen w-full bg-background-light font-sans overflow-x-hidden">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 px-4 py-3 flex items-center justify-between shadow-sm">
        <button onClick={() => navigate(-1)} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-50 active:scale-95 transition-all text-slate-900">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <div className="flex flex-col items-center">
          <h1 className="text-base font-bold font-display tracking-tight text-slate-900 uppercase">Nhận nuôi cây & vật</h1>
          <span className="text-[9px] font-black text-primary-dark tracking-[0.2em] uppercase">Gofam Pro</span>
        </div>
        <button onClick={() => navigate('/notifications')} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-50 active:scale-95 transition-all text-slate-400 relative">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-red-500 border border-white"></span>
        </button>
      </header>

      {/* VIRTUAL FARM BANNER */}
      <div className="px-4 pt-4 pb-2">
        <div 
          onClick={() => navigate('/virtual-farm')}
          className="w-full bg-slate-900 text-white rounded-[2rem] p-5 flex items-center gap-4 shadow-xl active:scale-[0.99] transition-all cursor-pointer group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-900 opacity-50"></div>
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary opacity-20 blur-3xl rounded-full"></div>
          <div className="relative z-10 w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center shrink-0 shadow-inner">
            <span className="material-symbols-outlined icon-fill text-primary text-[28px]">deployed_code</span>
          </div>
          <div className="relative z-10 flex-1">
            <h3 className="text-sm font-black leading-tight mb-1 font-display uppercase tracking-tight">Nông trại ảo của tôi</h3>
            <div className="flex items-center gap-2">
              <span className="flex w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Đang hoạt động • Metaverse</p>
            </div>
          </div>
          <div className="relative z-10">
            <span className="material-symbols-outlined text-white/40 group-hover:text-primary group-hover:translate-x-1 transition-all">arrow_forward_ios</span>
          </div>
        </div>
      </div>

      <main className="flex-1 overflow-y-auto pb-32 px-4 pt-4">
        {/* FILTERS */}
        <div className="flex gap-2 mb-6 overflow-x-auto hide-scrollbar py-1">
          {filters.map(f => (
            <button 
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all active:scale-95 ${
                activeFilter === f 
                  ? 'bg-slate-900 text-white shadow-lg border border-slate-900' 
                  : 'bg-white text-slate-400 border border-gray-100 hover:bg-gray-50'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* PROJECT LIST */}
        <div className="flex flex-col gap-6">
          {projects.map((p) => (
            <article key={p.id} className="bg-white rounded-[2.5rem] border border-gray-50 shadow-soft overflow-hidden group hover:shadow-deep transition-all">
              <div className="relative h-52 w-full overflow-hidden">
                <img alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={p.image} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                <div className="absolute top-4 right-4">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md text-[10px] font-black ${p.statusColor} shadow-sm border border-white/20 uppercase tracking-widest`}>
                    {p.icon ? (
                      <span className="material-symbols-outlined text-[14px] icon-fill">{p.icon}</span>
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse"></span>
                    )}
                    {p.status}
                  </span>
                </div>

                <div className="absolute bottom-5 left-6 text-white">
                  <div className="text-[10px] uppercase font-black tracking-[0.2em] opacity-80 mb-1">{p.farm}</div>
                  <h3 className="text-xl font-black font-display leading-tight tracking-tight uppercase">{p.title}</h3>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-3 gap-4 border-b border-gray-50 pb-6 mb-6">
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">ROI dự kiến</span>
                    <div className="flex items-end gap-1">
                      <span className={`text-xl font-black font-display tracking-tighter ${p.id === 'a1' ? 'text-primary-dark' : (p.id === 'a2' ? 'text-blue-500' : 'text-purple-500')}`}>{p.roi}</span>
                      <span className="text-[9px] text-slate-300 mb-1 font-bold">/vụ</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 border-l border-gray-100 pl-4">
                    <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Thu hoạch</span>
                    <span className="text-xs font-black text-slate-900 tracking-tight font-mono">{p.harvestDate}</span>
                  </div>
                  <div className="flex flex-col gap-1 border-l border-gray-100 pl-4">
                    <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Còn lại</span>
                    <span className="text-xs font-black text-slate-900 uppercase">
                      {p.remaining} <span className="text-[9px] font-bold text-slate-200">gói</span>
                    </span>
                  </div>
                </div>
                
                <button 
                  onClick={() => navigate(`/adopt/${p.id}`)}
                  className="w-full py-4 rounded-2xl bg-primary hover:bg-primary-dark text-slate-900 font-black text-xs uppercase tracking-[0.2em] shadow-glow shadow-primary/30 transition-all flex items-center justify-center gap-3 group/btn active:scale-[0.98] border border-primary-dark/10"
                >
                  Nhận nuôi ngay
                  <span className="material-symbols-outlined text-[20px] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                </button>
              </div>
            </article>
          ))}

          {/* COMPLETED CARD EXAMPLE */}
          <article className="bg-gray-100/50 rounded-[2.5rem] border border-gray-200 overflow-hidden opacity-80">
            <div className="relative h-44 w-full overflow-hidden grayscale">
              <img alt="Completed" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1592419044706-39796d40f98c?q=80&w=400&auto=format&fit=crop" />
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1.5 rounded-xl bg-white/90 text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[14px] icon-fill">check_circle</span> Đã hoàn thành
                </span>
              </div>
              <div className="absolute bottom-5 left-6 text-white">
                <div className="text-[10px] uppercase font-black tracking-widest opacity-60 mb-1">Organic Veggies</div>
                <h3 className="text-xl font-black font-display uppercase tracking-tight">Rau Xà Lách Thủy Canh</h3>
              </div>
            </div>
            <div className="p-6 flex justify-between items-center">
              <div className="flex flex-col">
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">ROI thực tế</span>
                <span className="text-lg font-black text-slate-500 tracking-tighter">12%</span>
              </div>
              <button className="px-6 py-2.5 rounded-xl border border-gray-200 bg-white text-[10px] font-black text-slate-400 uppercase tracking-widest hover:bg-gray-50 transition-colors shadow-soft">
                Xem báo cáo
              </button>
            </div>
          </article>
        </div>
      </main>

      {/* SUPPORT FAB */}
      <button className="fixed bottom-28 right-6 z-[60] group active:scale-90 transition-transform">
        <div className="bg-white p-1 rounded-[2rem] shadow-deep border border-primary/20">
          <div className="bg-primary text-slate-900 h-14 w-14 rounded-2xl flex items-center justify-center relative shadow-glow">
            <span className="material-symbols-outlined text-[32px] font-black">support_agent</span>
            <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white animate-bounce"></span>
          </div>
        </div>
      </button>
    </div>
  );
};

export default AdoptView;
