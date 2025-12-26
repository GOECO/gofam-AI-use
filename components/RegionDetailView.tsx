
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip, ReferenceLine } from 'recharts';

const RegionDetailView: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Dữ liệu');
  const [isLive, setIsLive] = useState(true);

  const sensorData = [
    { time: '08:00', temp: 22, hum: 68, ec: 1.1 },
    { time: '09:00', temp: 23, hum: 67, ec: 1.2 },
    { time: '10:00', temp: 24, hum: 66, ec: 1.2 },
    { time: '11:00', temp: 24.5, hum: 65, ec: 1.3 },
    { time: '12:00', temp: 25, hum: 64, ec: 1.25 },
    { time: '13:00', temp: 24.8, hum: 65, ec: 1.2 },
  ];

  const regionTasks = [
    { id: 1, title: 'Châm dinh dưỡng A+B', time: '14:00 Today', priority: 'High', icon: 'science' },
    { id: 2, title: 'Kiểm tra béc tưới số 4', time: '16:30 Today', priority: 'Medium', icon: 'build' },
  ];

  return (
    <div className="flex flex-col flex-1 animate-in fade-in duration-500 bg-background-light dark:bg-background-dark min-h-screen relative font-sans">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md px-4 py-4 flex items-center justify-between border-b border-gray-100 dark:border-white/5 shadow-soft shrink-0">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => navigate(-1)}
            className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 active:scale-95 transition-all text-slate-900 dark:text-white"
          >
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
           <button 
             onClick={() => navigate('/scan')}
             className="flex size-10 items-center justify-center rounded-full bg-primary/20 text-primary-dark dark:text-primary animate-pulse"
             title="Quét AI nhanh"
           >
             <span className="material-symbols-outlined text-[24px] icon-fill">qr_code_scanner</span>
           </button>
           <button className="flex size-10 items-center justify-center rounded-full bg-gray-50 dark:bg-white/5 text-slate-400">
             <span className="material-symbols-outlined text-[20px]">settings</span>
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
                {/* AI Detection Overlay Mockup */}
                <div className="absolute top-[40%] left-[30%] w-24 h-24 border-2 border-primary rounded-xl animate-pulse flex items-start justify-center">
                   <span className="bg-primary text-slate-900 text-[8px] font-black px-1.5 py-0.5 rounded-b-md uppercase">Healthy Leaf</span>
                </div>
                <div className="absolute bottom-[20%] right-[25%] w-16 h-16 border-2 border-amber-400 rounded-xl animate-pulse flex items-start justify-center">
                   <span className="bg-amber-400 text-slate-900 text-[8px] font-black px-1.5 py-0.5 rounded-b-md uppercase">Flower</span>
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
              <div className="bg-slate-900/60 backdrop-blur-md text-white text-[9px] font-black px-3 py-1 rounded-full border border-white/10 uppercase tracking-widest">
                CAM-01 • 1080P
              </div>
            </div>

            <div className="absolute bottom-4 right-4 flex gap-2">
               <button 
                 onClick={() => setIsLive(!isLive)}
                 className="size-10 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white active:scale-90 transition-transform"
               >
                 <span className="material-symbols-outlined text-[20px]">{isLive ? 'pause' : 'play_arrow'}</span>
               </button>
               <button className="size-10 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white active:scale-90 transition-transform">
                 <span className="material-symbols-outlined text-[20px]">fullscreen</span>
               </button>
            </div>
          </div>
        </div>

        {/* TAB NAVIGATION */}
        <div className="px-5 mb-6 sticky top-[72px] z-40 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md py-2">
          <div className="flex h-12 w-full items-center p-1.5 rounded-2xl bg-gray-100 dark:bg-white/5 border border-gray-100 dark:border-white/5 shadow-inner-soft">
            {['Dữ liệu', 'Phân tích', 'Cấu hình'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 h-full rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
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
           {/* CROP SUMMARY CARD - ENHANCED WITH USER REQUESTED DETAILS */}
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
                     <span className="size-1.5 bg-primary rounded-full animate-pulse"></span>
                     Giai đoạn: Ra hoa & Đậu quả
                   </p>
                   <div className="mt-3 flex items-center gap-4">
                      <div className="flex items-center gap-1.5 text-[9px] font-black text-green-600 uppercase">
                         <span className="material-symbols-outlined text-[14px] icon-fill">verified</span> Sức khỏe tốt
                      </div>
                      <div className="flex items-center gap-1.5 text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase">
                         <span className="material-symbols-outlined text-[14px]">calendar_month</span> Xuống giống: 15/10/2024
                      </div>
                   </div>
                </div>
              </div>

              {/* DETAILED INFO GRID */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-50 dark:border-white/5">
                <div className="bg-gray-50 dark:bg-white/5 rounded-2xl p-4 flex flex-col gap-1">
                   <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Năng suất dự kiến</span>
                   <div className="flex items-baseline gap-1">
                      <span className="text-lg font-black text-slate-900 dark:text-white">1.8 - 2.2</span>
                      <span className="text-[10px] text-slate-400 font-bold uppercase">Tấn</span>
                   </div>
                </div>
                <div className="bg-gray-50 dark:bg-white/5 rounded-2xl p-4 flex flex-col gap-1">
                   <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Diện tích canh tác</span>
                   <div className="flex items-baseline gap-1">
                      <span className="text-lg font-black text-slate-900 dark:text-white">500</span>
                      <span className="text-[10px] text-slate-400 font-bold uppercase">m²</span>
                   </div>
                </div>
                <div className="bg-gray-50 dark:bg-white/5 rounded-2xl p-4 flex flex-col gap-1">
                   <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Dự kiến thu hoạch</span>
                   <div className="flex items-baseline gap-1 text-primary-dark dark:text-primary">
                      <span className="text-lg font-black">15/12/2024</span>
                   </div>
                </div>
                <div className="bg-gray-50 dark:bg-white/5 rounded-2xl p-4 flex flex-col gap-1">
                   <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Mật độ trồng</span>
                   <div className="flex items-baseline gap-1">
                      <span className="text-lg font-black text-slate-900 dark:text-white">6</span>
                      <span className="text-[10px] text-slate-400 font-bold uppercase">Cây/m²</span>
                   </div>
                </div>
              </div>
           </div>

           {/* AI QUICK SCAN HUB */}
           <section>
              <div className="bg-slate-900 dark:bg-primary/10 rounded-[2.5rem] p-6 text-white relative overflow-hidden shadow-2xl border border-primary/20 group">
                 <div className="absolute top-0 right-0 size-40 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                 <div className="relative z-10 flex items-center justify-between">
                    <div className="flex-1 pr-4">
                       <h3 className="text-primary font-black text-sm uppercase tracking-widest mb-1.5 flex items-center gap-2">
                          <span className="material-symbols-outlined text-lg icon-fill">qr_code_scanner</span>
                          Trung tâm Chẩn đoán AI
                       </h3>
                       <p className="text-[11px] font-medium text-slate-300 dark:text-slate-400 leading-relaxed">
                          Chụp ảnh hoặc quay video lá dâu tây để AI kiểm tra sâu bệnh và nấm lá ngay lập tức.
                       </p>
                    </div>
                    <button 
                      onClick={() => navigate('/scan')}
                      className="size-16 rounded-[1.8rem] bg-primary text-slate-900 flex items-center justify-center shadow-glow active:scale-90 transition-all border-4 border-white/10 shrink-0"
                    >
                       <span className="material-symbols-outlined text-3xl font-black">add_a_photo</span>
                    </button>
                 </div>
              </div>
           </section>

           {/* SENSOR ANALYTICS */}
           <section>
              <div className="flex items-center justify-between mb-4 px-1">
                 <h2 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-lg">insights</span>
                    Phân tích cảm biến
                 </h2>
                 <button className="text-[10px] font-black text-primary-dark flex items-center gap-1">
                    Cập nhật <span className="material-symbols-outlined text-[14px] animate-spin">sync</span>
                 </button>
              </div>

              <div className="grid grid-cols-1 gap-5">
                 {/* Temperature Detail Chart */}
                 <div className="bg-white dark:bg-card-dark rounded-[2.5rem] p-6 shadow-deep border border-gray-100 dark:border-white/5 relative group overflow-hidden">
                    <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
                       <span className="material-symbols-outlined text-[120px] text-orange-500">thermostat</span>
                    </div>
                    <div className="flex justify-between items-start mb-6">
                       <div className="flex items-center gap-4">
                          <div className="size-12 rounded-2xl bg-orange-50 dark:bg-orange-950/30 flex items-center justify-center text-orange-600 shadow-inner">
                             <span className="material-symbols-outlined text-[28px] icon-fill">thermostat</span>
                          </div>
                          <div>
                             <h4 className="text-slate-900 dark:text-white font-black text-base tracking-tight uppercase">Nhiệt độ không khí</h4>
                             <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">Thời gian thực (Realtime)</p>
                          </div>
                       </div>
                       <div className="text-right">
                          <span className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter">24.5°C</span>
                          <p className="text-[9px] font-black text-green-600 uppercase tracking-widest mt-1">Lý tưởng</p>
                       </div>
                    </div>
                    <div className="h-44 w-full">
                       <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={sensorData}>
                             <defs>
                                <linearGradient id="colorTempRegion" x1="0" y1="0" x2="0" y2="1">
                                   <stop offset="5%" stopColor="#f97316" stopOpacity={0.2}/>
                                   <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                                </linearGradient>
                             </defs>
                             <XAxis dataKey="time" hide />
                             <YAxis hide domain={['dataMin - 2', 'dataMax + 2']} />
                             <Tooltip 
                                contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)', fontSize: '10px', fontWeight: 'bold' }}
                                labelStyle={{ display: 'none' }}
                             />
                             <ReferenceLine y={24} stroke="#13ec49" strokeDasharray="3 3" label={{ position: 'right', value: 'Mục tiêu', fill: '#13ec49', fontSize: 8, fontWeight: 900 }} />
                             <Area type="monotone" dataKey="temp" stroke="#f97316" strokeWidth={4} fillOpacity={1} fill="url(#colorTempRegion)" />
                          </AreaChart>
                       </ResponsiveContainer>
                    </div>
                    <div className="flex justify-between mt-4 px-2">
                       {['08h', '10h', '12h', 'Bây giờ'].map((t, i) => (
                          <span key={i} className="text-[9px] font-black text-slate-300 uppercase tracking-widest">{t}</span>
                       ))}
                    </div>
                 </div>

                 {/* Humidity & EC Grid */}
                 <div className="grid grid-cols-2 gap-5">
                    <div className="bg-white dark:bg-card-dark rounded-[2.5rem] p-6 shadow-soft border border-gray-100 dark:border-white/5 flex flex-col justify-between h-56">
                       <div className="flex items-center gap-3">
                          <div className="size-10 rounded-2xl bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center text-blue-600 shadow-inner">
                             <span className="material-symbols-outlined text-[22px] icon-fill">water_drop</span>
                          </div>
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Độ ẩm</span>
                       </div>
                       <div className="my-4">
                          <div className="flex items-baseline gap-1">
                             <span className="text-3xl font-black text-slate-900 dark:text-white">65%</span>
                             <span className="text-[10px] text-slate-300 font-bold uppercase">RH</span>
                          </div>
                          <div className="mt-2 h-1.5 w-full bg-gray-50 dark:bg-white/5 rounded-full overflow-hidden shadow-inner">
                             <div className="h-full bg-blue-500 rounded-full w-[65%] shadow-glow"></div>
                          </div>
                       </div>
                       <p className="text-[9px] text-slate-400 leading-relaxed font-bold">Thấp hơn 5% so với ngưỡng tiêu chuẩn cho dâu tây.</p>
                    </div>

                    <div className="bg-white dark:bg-card-dark rounded-[2.5rem] p-6 shadow-soft border border-gray-100 dark:border-white/5 flex flex-col justify-between h-56">
                       <div className="flex items-center gap-3">
                          <div className="size-10 rounded-2xl bg-purple-50 dark:bg-purple-950/30 flex items-center justify-center text-purple-600 shadow-inner">
                             <span className="material-symbols-outlined text-[22px] icon-fill">science</span>
                          </div>
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Nồng độ EC</span>
                       </div>
                       <div className="my-4">
                          <div className="flex items-baseline gap-1">
                             <span className="text-3xl font-black text-slate-900 dark:text-white">1.2</span>
                             <span className="text-[10px] text-slate-300 font-bold uppercase">mS/cm</span>
                          </div>
                          <div className="mt-2 h-1.5 w-full bg-gray-50 dark:bg-white/5 rounded-full overflow-hidden shadow-inner">
                             <div className="h-full bg-purple-500 rounded-full w-[80%] shadow-glow"></div>
                          </div>
                       </div>
                       <p className="text-[9px] text-slate-400 leading-relaxed font-bold">Nồng độ dinh dưỡng đang ở mức tối ưu cho ra hoa.</p>
                    </div>
                 </div>
              </div>
           </section>

           {/* UPCOMING TASKS FOR THIS REGION */}
           <section>
              <div className="flex items-center justify-between mb-4 px-1">
                 <h2 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest flex items-center gap-2">
                    <span className="material-symbols-outlined text-amber-500 text-lg">checklist</span>
                    Việc cần làm
                 </h2>
                 <button onClick={() => navigate('/tasks')} className="text-[10px] font-black text-primary-dark uppercase tracking-widest hover:underline">Xem tất cả</button>
              </div>

              <div className="flex flex-col gap-3">
                 {regionTasks.map(task => (
                    <div key={task.id} className="bg-white dark:bg-card-dark rounded-3xl p-4 shadow-soft border border-gray-50 dark:border-white/5 flex items-center justify-between group hover:border-primary/40 transition-all cursor-pointer">
                       <div className="flex items-center gap-4">
                          <div className="size-12 rounded-2xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-all shadow-inner">
                             <span className="material-symbols-outlined text-[24px]">{task.icon}</span>
                          </div>
                          <div>
                             <h4 className="text-slate-900 dark:text-white text-sm font-black tracking-tight">{task.title}</h4>
                             <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">{task.time}</p>
                          </div>
                       </div>
                       <div className="flex items-center gap-3">
                          <span className={`text-[8px] font-black px-2 py-1 rounded-lg uppercase tracking-widest ${
                            task.priority === 'High' ? 'bg-red-50 text-red-500 border border-red-100' : 'bg-blue-50 text-blue-500 border border-blue-100'
                          }`}>
                            {task.priority}
                          </span>
                          <span className="material-symbols-outlined text-slate-200 group-hover:text-primary transition-colors">chevron_right</span>
                       </div>
                    </div>
                 ))}
                 <button 
                   onClick={() => navigate('/add-task')}
                   className="w-full py-4 rounded-3xl border-2 border-dashed border-gray-200 dark:border-white/10 flex items-center justify-center gap-2 text-slate-400 hover:text-primary hover:border-primary/50 transition-all group"
                 >
                    <span className="material-symbols-outlined text-[20px] group-hover:rotate-90 transition-transform">add</span>
                    <span className="text-[10px] font-black uppercase tracking-widest">Thêm nhiệm vụ mới</span>
                 </button>
              </div>
           </section>

           {/* AI INSIGHTS CARD */}
           <section className="pb-10">
              <div className="bg-slate-900 rounded-[3rem] p-8 text-white relative overflow-hidden shadow-2xl border border-primary/20">
                 <div className="absolute top-0 right-0 size-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                 <div className="relative z-10 flex items-start gap-5">
                    <div className="size-14 rounded-2xl bg-primary/20 border border-primary/40 flex items-center justify-center text-primary shadow-glow shrink-0">
                       <span className="material-symbols-outlined text-[32px] icon-fill">auto_awesome</span>
                    </div>
                    <div>
                       <h4 className="text-primary font-black text-base uppercase tracking-widest mb-2">Đề xuất từ Gemini Flash</h4>
                       <p className="text-sm font-medium leading-relaxed text-slate-300">
                          "Dựa trên hình ảnh thực tế và dữ liệu EC (1.2), cây dâu đang phát triển mầm hoa rất tốt. Bác nên <span className="text-primary font-black">duy trì lượng nước tưới</span> ở mức hiện tại nhưng hãy tăng cường <span className="text-primary font-black">ánh sáng bổ sung</span> vào ban đêm (thêm 2h) để kích thích hoa đậu quả đồng loạt."
                       </p>
                       <div className="mt-6 flex gap-3">
                          <button className="flex-1 h-12 bg-primary text-slate-900 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-glow active:scale-95 transition-all">Lên lịch ngay</button>
                          <button 
                            onClick={() => navigate('/live')}
                            className="flex-1 h-12 bg-white/10 backdrop-blur-md text-white rounded-xl font-black text-[10px] uppercase tracking-widest border border-white/20 active:scale-95 transition-all"
                          >Hỏi thêm AI</button>
                       </div>
                    </div>
                 </div>
              </div>
           </section>
        </div>
      </main>

      {/* FIXED BOTTOM ACTION BAR */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/95 dark:bg-background-dark/95 backdrop-blur-xl border-t border-gray-100 dark:border-white/5 p-4 pb-8 flex gap-3 z-[60] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
         <button 
           onClick={() => navigate('/scan')}
           className="flex-[1.5] h-14 bg-slate-900 dark:bg-primary hover:bg-slate-800 dark:hover:bg-primary-dark text-white dark:text-slate-900 rounded-2xl font-black text-[11px] uppercase tracking-[0.15em] flex items-center justify-center gap-3 transition-all active:scale-[0.98] shadow-glow shadow-primary/20 border border-white/10"
         >
            <span className="material-symbols-outlined text-[24px] icon-fill">qr_code_scanner</span>
            Chẩn đoán AI
         </button>
         <button 
           onClick={() => navigate('/optimization')}
           className="flex-1 h-14 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-slate-900 dark:text-white rounded-2xl font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
         >
            <span className="material-symbols-outlined text-[22px]">tune</span>
            Tối ưu
         </button>
      </div>

      {/* FLOATING ACTION OVERLAY FOR MOBILE (ADD BUTTON) */}
      <div className="fixed bottom-24 right-6 z-[70] pointer-events-none">
         <button 
           onClick={() => navigate('/add-task')}
           className="pointer-events-auto size-16 rounded-[2rem] bg-primary text-slate-900 flex items-center justify-center shadow-glow border-4 border-white dark:border-background-dark active:scale-90 transition-transform"
         >
           <span className="material-symbols-outlined text-3xl font-black">add</span>
         </button>
      </div>
    </div>
  );
};

export default RegionDetailView;
