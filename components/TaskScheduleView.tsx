
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TaskScheduleView: React.FC = () => {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'Agenda' | 'Weekly'>('Agenda');
  const [selectedDate, setSelectedDate] = useState(17);
  const [currentTimePos, setCurrentTimePos] = useState(0);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      // Bắt đầu từ 06:00, mỗi giờ 60px (1px/phút)
      const position = (hours - 6) * 60 + minutes; 
      setCurrentTimePos(position);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const days = [
    { label: 'T2', date: 16 },
    { label: 'T3', date: 17, today: true },
    { label: 'T4', date: 18 },
    { label: 'T5', date: 19 },
    { label: 'T6', date: 20 },
    { label: 'T7', date: 21 },
    { label: 'CN', date: 22 },
  ];

  const tasks = [
    {
      id: '1',
      time: '07:00',
      endTime: '08:30',
      title: 'Tưới Nước',
      location: 'Khu A1',
      color: 'bg-blue-500',
      icon: 'water_drop',
      top: 60, 
      height: 90,
      dayIndex: 1 // Thứ 3 (T3)
    },
    {
      id: '2',
      time: '09:00',
      endTime: '10:30',
      title: 'Quét AI',
      location: 'Khu B2',
      color: 'bg-purple-500',
      icon: 'psychology',
      top: 180,
      height: 90,
      dayIndex: 1
    },
    {
      id: '3',
      time: '14:00',
      endTime: '16:00',
      title: 'Thu Hoạch',
      location: 'Nhà Màng 3',
      color: 'bg-red-500',
      icon: 'agriculture',
      top: 480,
      height: 120,
      dayIndex: 1
    },
    {
      id: '4',
      time: '08:00',
      endTime: '10:00',
      title: 'Bón Phân',
      location: 'Lô C1',
      color: 'bg-green-500',
      icon: 'compost',
      top: 120,
      height: 120,
      dayIndex: 2 // Thứ 4
    }
  ];

  const hours = ['06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00'];

  const filteredTasks = tasks.filter(t => {
    const day = days.find(d => d.date === selectedDate);
    const dayIdx = days.indexOf(day!);
    return t.dayIndex === dayIdx;
  });

  const renderAgenda = () => (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {filteredTasks.length > 0 ? filteredTasks.map((task) => (
        <div key={task.id} className="grid grid-cols-[60px_1fr] gap-x-4">
          <div className="flex flex-col items-center pt-3">
            <span className="text-[12px] font-black text-slate-900 tracking-tighter uppercase">{task.time}</span>
            <div className="w-[2px] flex-1 bg-gray-100 my-2 rounded-full"></div>
          </div>
          <div className="group relative flex flex-col gap-4 rounded-[2.2rem] bg-white border border-gray-100 p-5 shadow-soft hover:shadow-deep active:scale-[0.98] transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className={`flex size-12 shrink-0 items-center justify-center rounded-2xl ${task.color} text-white shadow-lg`}>
                <span className="material-symbols-outlined text-[28px] icon-fill">{task.icon}</span>
              </div>
              <div className="min-w-0">
                <h3 className="text-base font-black text-slate-900 leading-tight tracking-tight truncate">{task.title} • {task.location}</h3>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1.5 flex items-center gap-2">
                   <span className="material-symbols-outlined text-[14px]">schedule</span>
                   {task.time} - {task.endTime}
                </p>
              </div>
            </div>
          </div>
        </div>
      )) : (
        <div className="flex flex-col items-center justify-center py-20 opacity-30">
           <span className="material-symbols-outlined text-[64px] mb-4">event_busy</span>
           <p className="text-xs font-black uppercase tracking-widest">Không có lịch trình</p>
        </div>
      )}
    </div>
  );

  const renderWeekly = () => (
    <div className="flex flex-col animate-in zoom-in-95 duration-500 h-[650px] bg-white rounded-[3rem] shadow-deep border border-gray-100 overflow-hidden">
      {/* Grid Header */}
      <div className="grid grid-cols-[60px_1fr] border-b border-gray-100 shrink-0 bg-gray-50/50">
        <div className="border-r border-gray-100 flex items-center justify-center">
          <span className="material-symbols-outlined text-slate-300 text-sm">event</span>
        </div>
        <div className="grid grid-cols-7">
          {days.map((d, i) => (
            <button 
              key={i} 
              onClick={() => setSelectedDate(d.date)}
              className={`flex flex-col items-center py-4 border-r border-gray-100 last:border-r-0 transition-colors ${selectedDate === d.date ? 'bg-primary/10' : ''}`}
            >
              <span className={`text-[9px] font-black uppercase tracking-widest mb-1 ${selectedDate === d.date ? 'text-primary-dark' : 'text-slate-300'}`}>{d.label}</span>
              <span className={`text-sm font-black ${selectedDate === d.date ? 'text-primary-dark scale-110' : 'text-slate-900'}`}>{d.date}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Grid Body */}
      <div className="relative flex-1 overflow-y-auto hide-scrollbar select-none">
        <div className="absolute inset-0 grid grid-cols-[60px_1fr]">
          {/* Hour Labels */}
          <div className="bg-gray-50/20 border-r border-gray-100">
            {hours.map((h, i) => (
              <div key={i} className="h-[120px] flex justify-center pt-2">
                <span className="text-[10px] font-black text-slate-300 font-mono">{h}</span>
              </div>
            ))}
          </div>

          {/* Grid Lines */}
          <div className="relative">
            <div className="absolute inset-0 grid grid-cols-7 pointer-events-none">
              {[...Array(7)].map((_, i) => (
                <div key={i} className="border-r border-gray-50/50 last:border-r-0"></div>
              ))}
            </div>
            {hours.map((_, i) => (
              <div key={i} className="h-[120px] border-b border-gray-50/30 w-full"></div>
            ))}

            {/* Current Time Indicator */}
            {currentTimePos > 0 && currentTimePos < 960 && (
              <div 
                className="absolute left-0 right-0 z-30 flex items-center pointer-events-none"
                style={{ top: `${currentTimePos}px` }}
              >
                <div className="size-2.5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)] -ml-1.5"></div>
                <div className="h-[2px] flex-1 bg-red-500/40"></div>
              </div>
            )}

            {/* Task Blocks */}
            {tasks.map(task => (
              <div 
                key={task.id}
                onClick={() => { setSelectedDate(days[task.dayIndex].date); setViewMode('Agenda'); }}
                className={`absolute rounded-xl ${task.color} p-2 shadow-lg border border-white/20 text-white overflow-hidden active:scale-95 transition-all cursor-pointer z-10 hover:brightness-110`}
                style={{ 
                  top: `${task.top}px`, 
                  height: `${task.height}px`,
                  left: `${(task.dayIndex * 14.28) + 1}%`,
                  width: '12.5%'
                }}
              >
                <div className="flex flex-col h-full">
                  <span className="material-symbols-outlined text-[14px] mb-0.5 icon-fill">{task.icon}</span>
                  <p className="text-[8px] font-black uppercase leading-tight truncate">{task.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative flex flex-col flex-1 bg-background-light min-h-screen font-sans">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md px-4 py-4 border-b border-gray-100 shadow-sm shrink-0">
        <div className="flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="flex size-10 items-center justify-center rounded-full hover:bg-gray-100 transition-all text-slate-900">
            <span className="material-symbols-outlined text-2xl">arrow_back</span>
          </button>
          <div className="flex flex-col items-center">
            <h2 className="text-base font-black leading-tight tracking-tight text-slate-900 uppercase font-display">Lịch Trình Farm</h2>
            <span className="text-[9px] font-black text-primary-dark uppercase tracking-widest">Tháng 10, 2023</span>
          </div>
          <button className="flex size-10 items-center justify-center rounded-full hover:bg-gray-100 transition-all text-slate-900">
            <span className="material-symbols-outlined text-2xl">calendar_month</span>
          </button>
        </div>
      </header>

      {/* VIEW TOGGLE */}
      <div className="bg-white px-5 py-4 shrink-0">
        <div className="flex h-12 w-full items-center rounded-2xl bg-gray-100 p-1.5 shadow-inner">
          <button 
            onClick={() => setViewMode('Agenda')}
            className={`flex-1 h-full rounded-xl text-[11px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${
              viewMode === 'Agenda' ? 'bg-white shadow-lg text-slate-900' : 'text-slate-400'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">list_alt</span>
            Danh sách
          </button>
          <button 
            onClick={() => setViewMode('Weekly')}
            className={`flex-1 h-full rounded-xl text-[11px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${
              viewMode === 'Weekly' ? 'bg-white shadow-lg text-slate-900' : 'text-slate-400'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">grid_view</span>
            Xem Tuần
          </button>
        </div>
      </div>

      {/* DATE SELECTOR (For Agenda View) */}
      {viewMode === 'Agenda' && (
        <div className="bg-white px-5 pb-6 flex gap-3 overflow-x-auto hide-scrollbar shrink-0">
           {days.map((d, i) => (
             <button 
               key={i}
               onClick={() => setSelectedDate(d.date)}
               className={`flex flex-col items-center justify-center min-w-[56px] h-20 rounded-2xl border transition-all ${
                 selectedDate === d.date 
                   ? 'bg-slate-900 border-slate-900 text-white shadow-deep scale-105' 
                   : 'bg-white border-gray-100 text-slate-400 hover:border-primary/40'
               }`}
             >
               <span className="text-[10px] font-black uppercase tracking-widest mb-1">{d.label}</span>
               <span className="text-lg font-black">{d.date}</span>
               {d.today && <div className={`size-1.5 rounded-full mt-1 ${selectedDate === d.date ? 'bg-primary shadow-glow' : 'bg-primary'}`}></div>}
             </button>
           ))}
        </div>
      )}

      <div className="flex-1 overflow-y-auto hide-scrollbar px-5 space-y-6 pb-32 pt-2">
        {viewMode === 'Agenda' ? renderAgenda() : renderWeekly()}
      </div>

      {/* FAB */}
      <div className="fixed bottom-6 right-6 z-[60]">
        <button 
          onClick={() => navigate('/add-task')}
          className="flex size-16 items-center justify-center rounded-[2.2rem] bg-primary text-slate-900 shadow-glow hover:scale-110 active:scale-95 transition-all border-4 border-white dark:border-slate-900"
        >
          <span className="material-symbols-outlined text-[36px] font-black">add</span>
        </button>
      </div>
    </div>
  );
};

export default TaskScheduleView;
