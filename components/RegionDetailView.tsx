
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AreaChart, Area, LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, ReferenceLine, CartesianGrid } from 'recharts';

const RegionDetailView: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Dữ liệu');
  const [isLive, setIsLive] = useState(true);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);

  const sensorData = [
    { time: '00:00', temp: 19, hum: 82, ec: 1.1 },
    { time: '02:00', temp: 18, hum: 85, ec: 1.1 },
    { time: '04:00', temp: 17.5, hum: 88, ec: 1.15 },
    { time: '06:00', temp: 19, hum: 84, ec: 1.15 },
    { time: '08:00', temp: 22, hum: 68, ec: 1.2 },
    { time: '10:00', temp: 24, hum: 66, ec: 1.2 },
    { time: '12:00', temp: 26, hum: 64, ec: 1.25 },
    { time: '14:00', temp: 25.5, hum: 65, ec: 1.2 },
    { time: '16:00', temp: 24.8, hum: 67, ec: 1.2 },
    { time: '18:00', temp: 23, hum: 72, ec: 1.15 },
    { time: '20:00', temp: 21, hum: 78, ec: 1.1 },
    { time: '22:00', temp: 20, hum: 80, ec: 1.1 },
  ];

  const irrigationLogs = [
    { date: '24/10/2023', time: '06:00', duration: '15 phút', mode: 'Tự động', status: 'Thành công' },
    { date: '23/10/2023', time: '18:00', duration: '20 phút', mode: 'Thủ công', status: 'Thành công' },
    { date: '23/10/2023', time: '06:00', duration: '15 phút', mode: 'Tự động', status: 'Thành công' },
    { date: '22/10/2023', time: '18:00', duration: '20 phút', mode: 'Tự động', status: 'Gián đoạn' },
  ];

  const upcomingSchedules = [
    { time: '18:00', duration: '20 phút', repeat: 'Hàng ngày', active: true },
    { time: '06:00', duration: '15 phút', repeat: 'Hàng ngày', active: true },
  ];

  return (
    <div className="flex flex-col flex-1 animate-in fade-in duration-500 bg-background-light dark:bg-background-dark min-h-screen relative font-sans">
      {/* VIDEO MODAL OVERLAY */}
      {showVideoModal && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in zoom-in duration-300">
          <div className="w-full max-w-lg bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 relative">
            <button 
              onClick={() => setShowVideoModal(false)}
              className="absolute top-6 right-6 z-10 size-10 rounded-full bg-black/50 text-white flex items-center justify-center backdrop-blur-md active:scale-90 transition-transform"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <div className="aspect-video w-full bg-black relative">
              <video src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" controls autoPlay className="w-full h-full object-cover" />
            </div>
            <div className="p-8">
              <h3 className="text-white text-xl font-black uppercase tracking-tight mb-2">Giới thiệu: Nhà kính 1</h3>
              <p className="text-slate-400 text-xs font-medium leading-relaxed">Khám phá quy trình canh tác dâu tây Cherry ứng dụng công nghệ cao tại Khu A.</p>
              <button onClick={() => setShowVideoModal(false)} className="w-full mt-6 py-4 bg-primary text-slate-900 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] shadow-glow">Đóng Video</button>
            </div>
          </div>
        </div>
      )}

      {/* SCHEDULE MODAL */}
      {showScheduleModal && (
        <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-md flex items-end justify-center p-0 animate-in slide-in-from-bottom duration-300">
          <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-t-[3rem] p-8 shadow-2xl border-t border-white/10 relative">
            <div className="w-12 h-1.5 bg-gray-200 dark:bg-slate-700 rounded-full mx-auto mb-8"></div>
            <h3 className="text-slate-900 dark:text-white text-xl font-black uppercase tracking-tight mb-6 text-center">Đặt lịch tưới mới</h3>
            <div className="space-y-6">
               <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Giờ bắt đầu</label>
                  <input type="time" className="w-full h-14 bg-gray-50 dark:bg-slate-800 rounded-2xl border-none px-5 text-sm font-bold text-slate-900 dark:text-white" defaultValue="08:00" />
               </div>
               <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Thời lượng (phút)</label>
                  <input type="number" className="w-full h-14 bg-gray-50 dark:bg-slate-800 rounded-2xl border-none px-5 text-sm font-bold text-slate-900 dark:text-white" defaultValue="15" />
               </div>
               <div className="flex gap-4 pt-4">
                  <button onClick={() => setShowScheduleModal(false)} className="flex-1 py-4 rounded-2xl bg-gray-100 dark:bg-slate-800 text-slate-400 text-[10px] font-black uppercase tracking-widest">Hủy bỏ</button>
                  <button onClick={() => setShowScheduleModal(false)} className="flex-[2] py-4 rounded-2xl bg-primary text-slate-900 text-[10px] font-black uppercase tracking-widest shadow-glow">Lưu lịch trình</button>
               </div>
            </div>
          </div>
        </div>
      )}

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md px-4 py-4 flex items-center justify-between border-b border-gray-100 dark:border-white/5 shadow-soft shrink-0">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 active:scale-95 transition-all text-slate-900 dark:text-white">
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </button>
          <div className="flex flex-col">
            <h1 className="text-slate-900 dark:text-white text-lg font-black leading-tight tracking-tight">Khu A - Nhà Kính 1</h1>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-[9px] uppercase tracking-widest font-black text-primary-dark dark:text-primary">Trực tuyến (5s)</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
           <button onClick={() => navigate('/scan')} className="flex size-11 items-center justify-center rounded-2xl bg-primary text-slate-900 shadow-glow animate-pulse active:scale-90 transition-transform">
             <span className="material-symbols-outlined text-[26px] icon-fill">qr_code_scanner</span>
           </button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto hide-scrollbar pb-32">
        {/* LIVE STREAM SECTION */}
        <div className="p-4">
          <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-deep group bg-slate-900">
            {isLive ? (
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBam35dxtvjXPpzq6MULCpC6gzCVjHhVbtW-HsU4zsuDiil-H_V0b7veP-M4PmzkA--HysazQ1JMpLxGQJqxO3UN44SLM5yufFLySIHsp1rWsGKffuuTeY_Bht5QSGvzajD7RM1iDytJSdHXrefuuUNklFJRX6522PHx00aLAveZnheNYxQjlYN3KQaI1OG9xMeWNK6gyBO5oPO7OYHppUX8L7bLcKvI4q2_ZnDwA_8PKrnyUsfbCSecK-3s2AiGDylS2q-FQugotkg')" }}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-[40%] left-[30%] w-24 h-24 border-2 border-primary rounded-xl animate-pulse flex items-start justify-center">
                   <span className="bg-primary text-slate-900 text-[8px] font-black px-1.5 py-0.5 rounded-b-md uppercase">Healthy Leaf</span>
                </div>
              </div>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-slate-800">
                <span className="material-symbols-outlined text-slate-600 text-6xl">videocam_off</span>
              </div>
            )}
            <div className="absolute top-4 left-4 flex gap-2">
              <div className="bg-red-600 text-white text-[9px] font-black px-3 py-1 rounded-full flex items-center gap-1.5 shadow-lg border border-white/10 animate-pulse">
                <span className="size-1.5 bg-white rounded-full"></span> LIVE
              </div>
            </div>
            <div className="absolute top-4 right-4">
              <button onClick={() => navigate('/scan')} className="flex items-center gap-2 bg-white/20 backdrop-blur-xl border border-white/30 text-white px-4 py-2.5 rounded-2xl shadow-2xl hover:bg-white/30 transition-all active:scale-95 group">
                <span className="material-symbols-outlined text-[20px] icon-fill text-primary">qr_code_scanner</span>
                <span className="text-[10px] font-black uppercase tracking-widest">GOFAM LENS</span>
              </button>
            </div>
            <div className="absolute bottom-4 right-4 flex gap-2">
               <button onClick={() => setIsLive(!isLive)} className="size-10 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white active:scale-90 transition-transform">
                 <span className="material-symbols-outlined text-[20px]">{isLive ? 'pause' : 'play_arrow'}</span>
               </button>
            </div>
          </div>
        </div>

        {/* TAB NAVIGATION */}
        <div className="px-5 mb-6 sticky top-[72px] z-40 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md py-2">
          <div className="flex h-12 w-full items-center p-1.5 rounded-2xl bg-gray-100 dark:bg-white/5 border border-gray-100 dark:border-white/5 shadow-inner-soft overflow-x-auto hide-scrollbar">
            {['Dữ liệu', 'Tưới nước', 'Phân tích', 'Cấu hình'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 min-w-[80px] h-full rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                  activeTab === tab ? 'bg-white dark:bg-slate-800 shadow-md text-slate-900 dark:text-white' : 'text-slate-400'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* MAIN DATA CONTENT */}
        <div className="px-5 space-y-8 animate-in slide-in-from-bottom-4 duration-500">
           {activeTab === 'Dữ liệu' && (
             <>
               <div className="bg-white dark:bg-card-dark rounded-[2.2rem] p-6 shadow-soft border border-gray-100 dark:border-white/5 flex flex-col gap-6">
                  <div className="flex gap-5 items-center">
                    <div className="size-24 rounded-3xl overflow-hidden shadow-inner bg-gray-50 border border-gray-100 shrink-0">
                       <img src="https://images.unsplash.com/photo-1592419044706-39796d40f98c?q=80&w=150&auto=format&fit=crop" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                       <div className="flex justify-between items-start">
                          <h3 className="text-slate-900 dark:text-white font-black text-xl tracking-tight leading-tight">Dâu Tây Cherry</h3>
                          <span className="bg-primary/10 text-primary-dark text-[10px] font-black px-2.5 py-1 rounded-lg uppercase tracking-widest border border-primary/20 shadow-inner">Ngày 45</span>
                       </div>
                       <p className="text-[11px] text-primary-dark font-black uppercase tracking-widest mt-1.5 flex items-center gap-1.5">
                         <span className="size-1.5 bg-primary rounded-full animate-pulse"></span> Giai đoạn: Ra hoa & Đậu quả
                       </p>
                    </div>
                  </div>
               </div>

               <section>
                  <div className="flex items-center justify-between mb-4 px-1">
                     <h2 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-lg">insights</span> Cảm biến Thời gian thực
                     </h2>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white dark:bg-card-dark rounded-[2rem] p-5 shadow-soft border border-gray-100 dark:border-white/5 flex flex-col gap-4">
                         <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-orange-500 text-[20px] icon-fill">thermostat</span>
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Nhiệt độ</span>
                         </div>
                         <p className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter">24.5°C</p>
                      </div>
                      <div className="bg-white dark:bg-card-dark rounded-[2rem] p-5 shadow-soft border border-gray-100 dark:border-white/5 flex flex-col gap-4">
                         <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-blue-500 text-[20px] icon-fill">water_drop</span>
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Độ ẩm</span>
                         </div>
                         <p className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter">65%</p>
                      </div>
                  </div>
               </section>

               <section>
                  <div className="flex items-center justify-between mb-4 px-1">
                     <h2 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest flex items-center gap-2">
                        <span className="material-symbols-outlined text-orange-500 text-lg">history</span> Lịch sử Nhiệt độ (24h)
                     </h2>
                  </div>
                  <div className="bg-white dark:bg-card-dark rounded-[2.5rem] p-6 shadow-deep border border-gray-100 dark:border-white/5 h-64 relative overflow-hidden">
                     <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={sensorData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                           <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(203, 213, 225, 0.2)" />
                           <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 9, fontWeight: 800, fill: '#94a3b8' }} interval={2} />
                           <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 9, fontWeight: 800, fill: '#94a3b8' }} domain={['dataMin - 2', 'dataMax + 2']} />
                           <Tooltip contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)', fontSize: '10px', fontWeight: 'bold', background: 'rgba(15, 23, 16, 0.9)', color: '#fff' }} />
                           <Line type="monotone" dataKey="temp" stroke="#f97316" strokeWidth={4} dot={{ r: 4, fill: '#f97316', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6, strokeWidth: 0 }} />
                        </LineChart>
                     </ResponsiveContainer>
                  </div>
               </section>
             </>
           )}

           {activeTab === 'Tưới nước' && (
             <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8">
                {/* IRRIGATION OVERVIEW */}
                <div className="bg-slate-900 rounded-[2.5rem] p-7 text-white relative overflow-hidden shadow-2xl border border-blue-500/20">
                   <div className="absolute top-0 right-0 size-40 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                   <div className="relative z-10 flex flex-col gap-6">
                      <div className="flex items-center justify-between">
                         <div className="flex items-center gap-3">
                            <div className="size-12 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 shadow-glow border border-blue-500/30">
                               <span className="material-symbols-outlined text-[28px] icon-fill">water_drop</span>
                            </div>
                            <div>
                               <h3 className="text-blue-400 font-black text-sm uppercase tracking-widest leading-none">Hệ thống tưới tự động</h3>
                               <p className="text-[9px] text-slate-400 mt-1 uppercase tracking-widest">Hoạt động dựa trên IoT Sensors</p>
                            </div>
                         </div>
                         <div className="size-4 rounded-full bg-green-500 animate-pulse border-4 border-white/10 shadow-glow"></div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                         <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                            <p className="text-[8px] text-slate-400 uppercase font-black tracking-widest mb-1">Lần tưới tới</p>
                            <p className="text-xl font-black text-white tracking-tight">18:00 <span className="text-[10px] opacity-60">Hôm nay</span></p>
                         </div>
                         <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                            <p className="text-[8px] text-slate-400 uppercase font-black tracking-widest mb-1">Lần tưới gần nhất</p>
                            <p className="text-xl font-black text-white tracking-tight">06:00 <span className="text-[10px] opacity-60">Sáng nay</span></p>
                         </div>
                      </div>

                      <button 
                        onClick={() => setShowScheduleModal(true)}
                        className="w-full h-14 bg-blue-500 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] shadow-lg shadow-blue-500/20 flex items-center justify-center gap-3 active:scale-95 transition-all"
                      >
                         <span className="material-symbols-outlined font-black">calendar_add_on</span> Đặt lịch tưới tự động
                      </button>
                   </div>
                </div>

                {/* UPCOMING SCHEDULES */}
                <section>
                   <div className="flex items-center justify-between mb-4 px-1">
                      <h2 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest flex items-center gap-2">
                         <span className="material-symbols-outlined text-blue-500 text-lg">event_repeat</span> Lịch trình sắp tới
                      </h2>
                   </div>
                   <div className="space-y-3">
                      {upcomingSchedules.map((sch, i) => (
                        <div key={i} className="bg-white dark:bg-card-dark p-5 rounded-[2rem] border border-gray-100 dark:border-white/5 flex items-center justify-between shadow-soft">
                           <div className="flex items-center gap-4">
                              <div className="size-11 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-500">
                                 <span className="material-symbols-outlined text-[24px]">schedule</span>
                              </div>
                              <div>
                                 <p className="text-base font-black text-slate-900 dark:text-white tracking-tight">{sch.time}</p>
                                 <p className="text-[10px] text-slate-400 uppercase font-black">{sch.duration} • {sch.repeat}</p>
                              </div>
                           </div>
                           <div className="flex items-center gap-3">
                              <div className={`w-10 h-6 rounded-full p-1 transition-colors ${sch.active ? 'bg-primary' : 'bg-gray-200'}`}>
                                 <div className={`size-4 bg-white rounded-full transition-transform ${sch.active ? 'translate-x-4' : 'translate-x-0'}`}></div>
                              </div>
                              <button className="size-8 rounded-lg bg-gray-50 dark:bg-slate-800 flex items-center justify-center text-slate-300">
                                 <span className="material-symbols-outlined text-[18px]">more_vert</span>
                              </button>
                           </div>
                        </div>
                      ))}
                   </div>
                </section>

                {/* IRRIGATION LOGS */}
                <section>
                   <div className="flex items-center justify-between mb-4 px-1">
                      <h2 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest flex items-center gap-2">
                         <span className="material-symbols-outlined text-slate-400 text-lg">history</span> Nhật ký tưới (Gần nhất)
                      </h2>
                      <button className="text-[10px] font-black text-primary-dark uppercase tracking-widest">Xem tất cả</button>
                   </div>
                   <div className="bg-white dark:bg-card-dark rounded-[2.5rem] border border-gray-100 dark:border-white/5 overflow-hidden shadow-deep">
                      <table className="w-full text-left">
                         <thead className="bg-gray-50 dark:bg-white/5 border-b border-gray-100 dark:border-white/5 text-[9px] font-black text-slate-400 uppercase tracking-widest">
                            <tr>
                               <th className="px-6 py-4">Thời gian</th>
                               <th className="px-4 py-4">Lượng</th>
                               <th className="px-4 py-4">Chế độ</th>
                               <th className="px-6 py-4 text-right">T.Thái</th>
                            </tr>
                         </thead>
                         <tbody className="divide-y divide-gray-50 dark:divide-white/5">
                            {irrigationLogs.map((log, i) => (
                              <tr key={i} className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                 <td className="px-6 py-4">
                                    <p className="text-[11px] font-black text-slate-900 dark:text-white">{log.time}</p>
                                    <p className="text-[8px] text-slate-400 font-bold uppercase">{log.date}</p>
                                 </td>
                                 <td className="px-4 py-4 text-[11px] font-bold text-slate-600 dark:text-slate-400">{log.duration}</td>
                                 <td className="px-4 py-4 text-[10px] font-black uppercase text-slate-400">{log.mode}</td>
                                 <td className="px-6 py-4 text-right">
                                    <span className={`px-2 py-0.5 rounded text-[8px] font-black uppercase border ${
                                       log.status === 'Thành công' ? 'bg-green-50 text-green-600 border-green-100' : 'bg-red-50 text-red-600 border-red-100'
                                    }`}>
                                       {log.status}
                                    </span>
                                 </td>
                              </tr>
                            ))}
                         </tbody>
                      </table>
                   </div>
                </section>
             </div>
           )}

           {activeTab === 'Phân tích' && (
             <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
                <div className="bg-slate-950 rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-deep border border-primary/20">
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(19,236,73,0.1),transparent_50%)]"></div>
                   <div className="relative z-10 flex flex-col items-center text-center gap-6">
                      <div className="size-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary shadow-glow border border-primary/30 animate-float">
                         <span className="material-symbols-outlined text-[48px] icon-fill">psychology</span>
                      </div>
                      <div>
                         <h3 className="text-xl font-black uppercase tracking-tight mb-2">Trung tâm Phân tích AI</h3>
                         <p className="text-xs text-slate-400 font-medium leading-relaxed px-4">Khám phá sức khỏe cây trồng của bạn bằng công nghệ thị giác máy tính Gemini Nano.</p>
                      </div>
                      <button onClick={() => navigate('/scan')} className="w-full h-16 bg-primary text-slate-900 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-glow flex items-center justify-center gap-3 active:scale-95 transition-all border border-primary-dark/10">
                         <span className="material-symbols-outlined font-black">qr_code_scanner</span> Mở GOFAM LENS
                      </button>
                   </div>
                </div>
             </div>
           )}
        </div>
      </main>

      {/* FIXED BOTTOM ACTION BAR */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/95 dark:bg-background-dark/95 backdrop-blur-xl border-t border-gray-100 dark:border-white/5 p-4 pb-8 flex gap-3 z-[60] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
         <button onClick={() => navigate('/scan')} className="flex-[1.5] h-14 bg-slate-900 dark:bg-primary hover:bg-slate-800 dark:hover:bg-primary-dark text-white dark:text-slate-900 rounded-2xl font-black text-[11px] uppercase tracking-[0.15em] flex items-center justify-center gap-3 transition-all active:scale-[0.98] shadow-glow shadow-primary/20 border border-white/10">
            <span className="material-symbols-outlined text-[24px] icon-fill">qr_code_scanner</span> Chẩn đoán AI
         </button>
         <button onClick={() => navigate('/optimization')} className="flex-1 h-14 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-slate-900 dark:text-white rounded-2xl font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
            <span className="material-symbols-outlined text-[22px]">tune</span> Tối ưu
         </button>
      </div>

      {/* FLOATING ACTION OVERLAY FOR MOBILE (AI LENS SCAN BUTTON) */}
      <div className="fixed bottom-24 right-6 z-[70] flex flex-col gap-4 items-center">
         <button onClick={() => navigate('/scan')} className="size-16 rounded-[2rem] bg-slate-900 text-white flex flex-col items-center justify-center shadow-2xl active:scale-90 transition-transform relative group border-4 border-primary">
           <div className="absolute -inset-1 bg-primary rounded-[2.2rem] animate-ping opacity-20"></div>
           <span className="material-symbols-outlined text-2xl font-black icon-fill text-primary">psychology</span>
           <span className="text-[7px] font-black uppercase tracking-tighter mt-0.5">AI Lens</span>
         </button>
         <button onClick={() => navigate('/add-task')} className="size-12 rounded-[1.5rem] bg-white dark:bg-slate-800 text-slate-900 dark:text-white flex items-center justify-center shadow-lg active:scale-90 transition-transform border border-gray-100 dark:border-white/10">
           <span className="material-symbols-outlined text-2xl font-black">add</span>
         </button>
      </div>
    </div>
  );
};

export default RegionDetailView;
