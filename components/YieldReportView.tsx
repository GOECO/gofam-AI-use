
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, ResponsiveContainer, Cell, Tooltip } from 'recharts';

const YieldReportView: React.FC = () => {
  const navigate = useNavigate();
  const [timeUnit, setTimeUnit] = useState('Tháng');

  const yieldData = [
    { name: 'T1', actual: 3.2, plan: 2.8 },
    { name: 'T2', actual: 4.1, plan: 3.5 },
    { name: 'T3', actual: 5.2, plan: 4.2 },
    { name: 'T4', actual: 4.8, plan: 4.0 },
    { name: 'T5', actual: 3.5, plan: 3.2 },
    { name: 'T6', actual: 4.5, plan: 3.8 },
  ];

  return (
    <div className="flex flex-col flex-1 animate-in fade-in duration-500 bg-background-light min-h-screen font-sans">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md px-4 py-4 flex items-center justify-between border-b border-gray-100 shadow-soft shrink-0">
        <button 
          onClick={() => navigate(-1)}
          className="flex size-10 items-center justify-center rounded-full hover:bg-black/5 active:scale-95 transition-all text-slate-900"
        >
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </button>
        <div className="flex flex-col items-center">
          <h2 className="text-slate-900 text-lg font-black leading-tight tracking-tight font-display">Báo cáo Năng suất</h2>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="text-[9px] font-black bg-primary/10 text-primary-dark px-2 py-0.5 rounded border border-primary/20 uppercase tracking-widest">Pro Insights</span>
          </div>
        </div>
        <button className="flex size-10 items-center justify-center rounded-full hover:bg-black/5 active:scale-95 transition-all text-slate-900">
          <span className="material-symbols-outlined text-[24px]">more_vert</span>
        </button>
      </header>

      {/* FILTERS */}
      <div className="px-5 py-4 bg-white border-b border-gray-100 flex items-center gap-3 overflow-x-auto hide-scrollbar shrink-0">
        <button className="size-11 flex items-center justify-center rounded-xl bg-white border border-gray-100 text-slate-400 shadow-soft">
          <span className="material-symbols-outlined text-[20px]">tune</span>
        </button>
        <div className="flex p-1 bg-gray-100 rounded-xl overflow-hidden shadow-inner-soft shrink-0">
          {['Tháng', 'Vụ', 'Năm'].map((unit) => (
            <button 
              key={unit}
              onClick={() => setTimeUnit(unit)}
              className={`px-5 py-2 text-[10px] font-black rounded-lg transition-all uppercase tracking-widest ${
                timeUnit === unit ? 'bg-white text-slate-900 shadow-sm border border-gray-200' : 'text-slate-400'
              }`}
            >
              {unit}
            </button>
          ))}
        </div>
        <button className="h-11 px-4 rounded-xl border border-gray-100 bg-white text-slate-900 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shadow-soft shrink-0">
          Đông Xuân 24
          <span className="material-symbols-outlined text-[16px] text-slate-300">expand_more</span>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto hide-scrollbar pb-32">
        {/* TOTAL YIELD CARD */}
        <div className="p-5">
          <div className="bg-white rounded-[2.5rem] p-6 shadow-deep border border-gray-50 relative overflow-hidden group">
            <div className="flex justify-between items-start relative z-10">
              <div>
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Tổng sản lượng</p>
                <div className="flex items-baseline gap-1.5">
                  <h3 className="text-4xl font-black tracking-tighter text-slate-900">12.5</h3>
                  <span className="text-xs font-black text-slate-300 uppercase tracking-widest">Tấn</span>
                </div>
              </div>
              <div className="text-right">
                <span className="inline-flex items-center gap-1 text-[10px] font-black text-primary-dark bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20 uppercase tracking-widest">
                  <span className="material-symbols-outlined text-[14px]">trending_up</span> +5.2%
                </span>
                <p className="text-[8px] font-black text-slate-300 uppercase tracking-widest mt-2">vs Vụ trước (11.8 Tấn)</p>
              </div>
            </div>
            
            {/* MINI CHART SVG */}
            <div className="h-16 w-full mt-6 opacity-30 group-hover:opacity-60 transition-opacity duration-1000">
              <svg className="w-full h-full text-primary" preserveAspectRatio="none" viewBox="0 0 100 25">
                <path d="M0,25 L0,15 L10,18 L20,12 L30,16 L40,10 L50,14 L60,8 L70,12 L80,5 L90,10 L100,2 L100,25 Z" fill="currentColor" fillOpacity="0.1"></path>
                <path d="M0,15 L10,18 L20,12 L30,16 L40,10 L50,14 L60,8 L70,12 L80,5 L90,10 L100,2" fill="none" stroke="currentColor" strokeWidth="2"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* SECONDARY STATS GRID */}
        <div className="grid grid-cols-2 gap-4 px-5 pb-5">
          <div className="bg-white rounded-[2rem] p-5 shadow-soft border border-gray-50 flex flex-col justify-between h-32">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-500 shadow-inner-soft">
                <span className="material-symbols-outlined text-[20px] icon-fill">paid</span>
              </div>
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Doanh thu</p>
            </div>
            <div className="mt-4">
              <p className="text-2xl font-black text-slate-900 tracking-tight">120 Tr</p>
              <p className="text-[9px] text-primary-dark font-black flex items-center gap-1 uppercase tracking-widest mt-1">
                <span className="material-symbols-outlined text-[12px]">arrow_upward</span> 8.5%
              </p>
            </div>
          </div>
          <div className="bg-white rounded-[2rem] p-5 shadow-soft border border-gray-50 flex flex-col justify-between h-32">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500 shadow-inner-soft">
                <span className="material-symbols-outlined text-[20px] icon-fill">verified</span>
              </div>
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Đạt chuẩn</p>
            </div>
            <div className="mt-4">
              <p className="text-2xl font-black text-slate-900 tracking-tight">85%</p>
              <p className="text-[9px] text-primary-dark font-black flex items-center gap-1 uppercase tracking-widest mt-1">
                <span className="material-symbols-outlined text-[12px]">arrow_upward</span> 1.2%
              </p>
            </div>
          </div>
        </div>

        {/* ANALYSIS CHART SECTION */}
        <div className="px-5 py-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-black text-slate-900 tracking-tight font-display flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-dark">bar_chart</span>
              Biểu đồ Phân tích
            </h2>
            <button className="size-10 flex items-center justify-center rounded-xl bg-white border border-gray-100 text-slate-400 shadow-soft">
              <span className="material-symbols-outlined text-[18px]">download</span>
            </button>
          </div>

          <div className="bg-white rounded-[2.5rem] p-6 shadow-deep border border-gray-50">
            <div className="flex border-b border-gray-50 mb-6 gap-6">
              <button className="text-[10px] font-black text-primary-dark border-b-2 border-primary pb-3 uppercase tracking-widest">Sản lượng (Tấn)</button>
              <button className="text-[10px] font-black text-slate-300 hover:text-slate-500 pb-3 uppercase tracking-widest transition-colors">Tài chính (VND)</button>
            </div>
            
            <div className="h-60 w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={yieldData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 9, fontWeight: 900, fill: '#cbd5e1' }} 
                  />
                  <Tooltip 
                    cursor={{ fill: '#f8fafc' }}
                    contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)', fontSize: '10px', fontWeight: 'bold' }}
                  />
                  <Bar dataKey="plan" fill="#e2e8f0" radius={[4, 4, 0, 0]} barSize={8} />
                  <Bar dataKey="actual" fill="#13ec49" radius={[4, 4, 0, 0]} barSize={12}>
                    {yieldData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 2 ? '#13ec49' : '#13ec49cc'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="flex justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-primary shadow-glow"></div>
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Thực tế</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-slate-200"></div>
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Kế hoạch</span>
              </div>
            </div>
          </div>
        </div>

        {/* FINANCIAL PERFORMANCE */}
        <div className="px-5 py-6">
           <h2 className="text-lg font-black text-slate-900 tracking-tight font-display flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-amber-500">show_chart</span>
            Hiệu quả Tài chính
          </h2>
          <div className="bg-white rounded-[2.5rem] p-7 shadow-deep border border-gray-50 relative overflow-hidden">
             <div className="flex justify-between items-end mb-6">
                <div>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Lợi nhuận ròng</p>
                  <p className="text-3xl font-black text-slate-900 tracking-tight font-display">70.000.000 <span className="text-xs text-slate-300 font-black uppercase tracking-widest ml-1">VND</span></p>
                </div>
                <div className="text-right">
                  <span className="bg-green-500/10 text-green-600 text-[9px] font-black px-3 py-1.5 rounded-lg border border-green-200 uppercase tracking-widest">Margin: 58%</span>
                </div>
             </div>
             
             <div className="relative h-44 w-full">
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 300 100">
                  <path d="M0,80 C50,70 100,50 150,40 S250,20 300,10" fill="none" stroke="#13ec49" strokeWidth="4" strokeLinecap="round"></path>
                  <path d="M0,80 C50,70 100,50 150,40 S250,20 300,10 L300,100 L0,100 Z" fill="url(#gradReport)" fillOpacity="0.1"></path>
                  <path d="M0,90 C50,85 100,80 150,75 S250,70 300,60" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="6,4"></path>
                  <circle cx="150" cy="40" r="4" fill="#13ec49" stroke="white" strokeWidth="2" />
                  <circle cx="300" cy="10" r="4" fill="#13ec49" stroke="white" strokeWidth="2" />
                  <defs>
                    <linearGradient id="gradReport" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#13ec49" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                </svg>
             </div>
             
             <div className="flex justify-between mt-4 text-[9px] font-black text-slate-300 uppercase tracking-widest">
                <span>Tháng 1</span>
                <span>Tháng 3</span>
                <span>Tháng 6</span>
             </div>

             <div className="flex justify-center gap-6 mt-6">
              <div className="flex items-center gap-2">
                <div className="w-4 h-1 rounded-full bg-primary"></div>
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Doanh thu</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-1 rounded-full bg-red-500 opacity-50 border-t-2 border-dashed border-red-600"></div>
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Chi phí</span>
              </div>
            </div>
          </div>
        </div>

        {/* QUALITY CHART & TABLE */}
        <div className="px-5 py-2">
          <h2 className="text-lg font-black text-slate-900 tracking-tight font-display flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-info">pie_chart</span>
            Chất lượng & Chi tiết
          </h2>
          <div className="bg-white rounded-[2.5rem] shadow-deep border border-gray-50 overflow-hidden">
             <div className="p-8 border-b border-gray-50 flex items-center gap-8">
                <div className="relative size-32 shrink-0 rounded-full flex items-center justify-center" style={{ background: 'conic-gradient(#13ec49 0% 70%, #fbbf24 70% 90%, #ef4444 90% 100%)' }}>
                   <div className="absolute inset-5 bg-white rounded-full shadow-inner-soft flex flex-col items-center justify-center border border-gray-100">
                      <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-0.5">Loại A</span>
                      <span className="text-2xl font-black text-primary-dark tracking-tighter">70%</span>
                   </div>
                </div>
                <div className="flex flex-col gap-3 flex-1">
                   {[
                     { label: 'Loại 1', val: '8.75 Tấn', color: 'bg-primary' },
                     { label: 'Loại 2', val: '2.5 Tấn', color: 'bg-yellow-400' },
                     { label: 'Hỏng', val: '1.25 Tấn', color: 'bg-red-500' }
                   ].map((item, idx) => (
                     <div key={idx} className="flex justify-between items-center text-[10px] font-black uppercase tracking-tight">
                        <span className="flex items-center gap-2 text-slate-400">
                           <span className={`size-2 rounded-full ${item.color}`}></span>
                           {item.label}
                        </span>
                        <span className="text-slate-900">{item.val}</span>
                     </div>
                   ))}
                </div>
             </div>

             <div className="w-full">
                <div className="flex items-center justify-between px-6 py-4 bg-gray-50/50 border-b border-gray-100">
                   <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Bảng số liệu chi tiết</span>
                   <span className="text-[10px] font-black text-primary-dark uppercase tracking-widest hover:underline cursor-pointer">Xem tất cả</span>
                </div>
                <table className="w-full text-left">
                   <thead className="text-[9px] font-black text-slate-300 uppercase bg-white border-b border-gray-50">
                      <tr>
                         <th className="px-6 py-4">Kỳ</th>
                         <th className="px-4 py-4 text-right">S.Lượng</th>
                         <th className="px-4 py-4 text-right">D.Thu (Tr)</th>
                         <th className="px-6 py-4 text-center">Đánh giá</th>
                      </tr>
                   </thead>
                   <tbody className="divide-y divide-gray-50">
                      {[
                        { k: 'T1/2024', q: '3.2', r: '35.2', s: 'Tốt', c: 'text-green-600 bg-green-50 border-green-100' },
                        { k: 'T2/2024', q: '4.1', r: '42.8', s: 'Tốt', c: 'text-green-600 bg-green-50 border-green-100' },
                        { k: 'T3/2024', q: '5.2', r: '52.0', s: 'XSắc', c: 'text-blue-600 bg-blue-50 border-blue-100' }
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-gray-50 transition-colors">
                           <td className="px-6 py-4 text-[11px] font-black text-slate-900">{row.k}</td>
                           <td className="px-4 py-4 text-[11px] font-black text-slate-900 text-right">{row.q}</td>
                           <td className="px-4 py-4 text-[11px] font-black text-slate-900 text-right">{row.r}</td>
                           <td className="px-6 py-4 text-center">
                              <span className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest border ${row.c}`}>{row.s}</span>
                           </td>
                        </tr>
                      ))}
                   </tbody>
                </table>
             </div>
          </div>
        </div>

        {/* EXPORT OPTIONS */}
        <div className="px-5 py-8">
           <h2 className="text-lg font-black text-slate-900 tracking-tight font-display mb-4">Xuất báo cáo</h2>
           <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center gap-4 p-5 rounded-[2rem] bg-red-50 border border-red-100 hover:bg-red-100 transition-all active:scale-95 group shadow-soft">
                 <div className="size-12 rounded-2xl bg-white flex items-center justify-center text-red-500 shadow-sm group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[26px] icon-fill">picture_as_pdf</span>
                 </div>
                 <div className="text-left">
                    <p className="text-[11px] font-black text-red-700 uppercase tracking-widest">PDF</p>
                    <p className="text-[9px] font-bold text-red-400 uppercase mt-1">Cho in ấn</p>
                 </div>
              </button>
              <button className="flex items-center gap-4 p-5 rounded-[2rem] bg-green-50 border border-green-100 hover:bg-green-100 transition-all active:scale-95 group shadow-soft">
                 <div className="size-12 rounded-2xl bg-white flex items-center justify-center text-green-600 shadow-sm group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[26px] icon-fill">table_view</span>
                 </div>
                 <div className="text-left">
                    <p className="text-[11px] font-black text-green-700 uppercase tracking-widest">EXCEL</p>
                    <p className="text-[9px] font-bold text-green-400 uppercase mt-1">Phân tích</p>
                 </div>
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default YieldReportView;
