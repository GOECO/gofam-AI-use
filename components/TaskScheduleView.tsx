
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TaskScheduleView: React.FC = () => {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState('Agenda');
  const [activeDate, setActiveDate] = useState(17);
  const [currentTimePos, setCurrentTimePos] = useState(0);

  useEffect(() => {
    // Tính toán vị trí thanh thời gian hiện tại cho view tuần
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      // Giả sử lưới bắt đầu từ 06:00 (100px mỗi 2 giờ, nên 50px mỗi giờ)
      const position = (hours - 6) * 60 + minutes; 
      setCurrentTimePos(position);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const days = [
    { label: 'T2', date: 16 },
    { label: 'T3', date: 17, hasEvent: true, today: true },
    { label: 'T4', date: 18, hasDot: true },
    { label: 'T5', date: 19 },
    { label: 'T6', date: 20, hasPrimaryDot: true },
    { label: 'T7', date: 21, disabled: true },
    { label: 'CN', date: 22, disabled: true },
  ];

  const tasks = [
    {
      id: '1',
      time: '07:00',
      endTime: '08:30',
      title: 'Tưới Nước',
      location: 'Khu A1',
      status: 'done',
      color: 'bg-blue-500',
      icon: 'water_drop',
      top: 60, // Phút tính từ 06:00
      height: 90 // Độ dài phút
    },
    {
      id: '2',
      time: '09:00',
      endTime: '10:30',
      title: 'Scan AI',
      location: 'Khu B2',
      status: 'ongoing',
      color: 'bg-purple-500',
      icon: 'psychology',
      top: 180,
      height: 90
    },
    {
      id: '3',
      time: '14:00',
      endTime: '16:00',
      title: 'Thu Hoạch',
      location: 'Nhà Màng 3',
      status: 'upcoming',
      color: 'bg-red-500',
      icon: 'agriculture',
      top: 480,
      height: 120
    }
  ];

  const hours = ['06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'];

  const renderAgenda = () => (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {tasks.map((task) => (
        <div key={task.id} className="grid grid-cols-[50px_1fr] gap-x-4">
          <div className="flex flex-col items-center pt-3">
            <span className="text-[11px] font-black text-slate-900 tracking-tighter uppercase">{task.time}</span>
          </div>
          <div className="group relative flex flex-col gap-4 rounded-[2.2rem] bg-white border border-gray-50 p-5 shadow-soft hover:shadow-deep active:scale-[0.98] transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className={`flex size-11 shrink-0 items-center justify-center rounded-2xl ${task.color} text-white shadow-glow`}>
                <span className="material-symbols-outlined text-[24px] icon-fill">{task.icon}</span>
              </div>
              <div className="min-w-0">
                <h3 className="text-[15px] font-black text-slate-900 leading-tight tracking-tight truncate">{task.title} {task.location}</h3>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">{task.time} - {task.endTime}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderWeekly = () => (
    <div className="flex flex-col animate-in zoom-in-95 duration-500 h-[600px] bg-white rounded-[2.5rem] shadow-deep border border-gray-50 overflow-hidden">
      {/* Grid Header */}
      <div className="grid grid-cols-[60px_1fr] border-b border-gray-100 shrink-0">
        <div className="bg-gray-50/50 border-r border-gray-100 flex items-center justify-center">
          <span className="material-symbols-outlined text-slate-300 text-sm">schedule</span>
        </div>
        <div className="grid grid-cols-7">
          {days.map((d, i) => (
            <div key={i} className={`flex flex-col items-center py-3 border-r border-gray-50 last:border-r-0 ${d.today ? 'bg-primary/5' : ''}`}>
              <span className={`text-[9px] font-black uppercase tracking-widest mb-0.5 ${d.today ? 'text-primary-dark' : 'text-slate-300'}`}>{d.label}</span>
              <span className={`text-xs font-black ${d.today ? 'text-primary-dark' : 'text-slate-900'}`}>{d.date}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Grid Body */}
      <div className="relative flex-1 overflow-y-auto hide-scrollbar select-none">
        <div className="absolute inset-0 grid grid-cols-[60px_1fr]">
          {/* Hour Labels */}
          <div className="bg-gray-50/30 border-r border-gray-100">
            {hours.map((h, i) => (
              <div key={i} className="h-[120px] flex justify-center pt-2">
                <span className="text-[10px] font-black text-slate-300 font-mono tracking-tighter">{h}</span>
              </div>
            ))}
          </div>

          {/* Grid Lines */}
          <div className="relative">
            <div className="absolute inset-0 grid grid-cols-7 pointer-events-none">
              {[...Array(7)].map((_, i) => (
                <div key={i} className="border-r border-gray-50 last:border-r-0"></div>
              ))}
            </div>
            {hours.map((_, i) => (
              <div key={i} className="h-[120px] border-b border-gray-50/50 w-full"></div>
            ))}

            {/* Current Time Indicator */}
            {currentTimePos > 0 && currentTimePos < 960 && (
              <div 
                className="absolute left-0 right-0 z-20 flex items-center pointer-events-none"
                style={{ top: `${currentTimePos}px` }}
              >
                <div className="size-2 rounded-full bg-red-500 shadow-glow -ml-1"></div>
                <div className="h-[1px] flex-1 bg-red-500/50"></div>
              </div>
            )}

            {/* Task Blocks (Sample placement for active day) */}
            {tasks.map(task => (
              <div 
                key={task.id}
                className={`absolute left-[14.28%] w-[13%] rounded-xl ${task.color} p-2 shadow-lg border border-white/20 text-white overflow-hidden active:scale-95 transition-transform cursor-pointer`}
                style={{ top: `${task.top}px`, height: `${task.height}px` }}
              >
                <div className="flex flex-col h-full">
                  <span className="material-symbols-outlined text-[14px] mb-1">{task.icon}</span>
                  <p className="text-[9px] font-black uppercase leading-tight truncate">{task.title}</p>
                  <p className="text-[7px] font-bold opacity-70 truncate">{task.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative flex flex-col flex-1 bg-background-light min-h-screen font-display">
      {/* HEADER */}
      <header className="sticky top-0 z-50 flex items-center bg-white px-4 py-4 border-b border-gray-100 shadow-soft shrink-0">
        <button onClick={() => navigate(-1)} className="flex size-10 items-center justify-center rounded-full text-slate-900">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="ml-2 flex-1 text-xl font-black leading-tight tracking-tight text-slate-900 uppercase">Lịch Farm</h2>
        <div className="flex items-center gap-2">
          <button className="flex size-10 items-center justify-center rounded-full hover:bg-gray-100 text-slate-900">
            <span className="material-symbols-outlined">tune</span>
          </button>
        </div>
      </header>

      {/* VIEW TOGGLE */}
      <div className="bg-white px-5 pb-4 pt-1 shrink-0">
        <div className="flex h-11 w-full items-center rounded-2xl bg-gray-100 p-1 shadow-inner-soft">
          {['Agenda', 'Tuần'].map((mode) => (
            <button 
              key={mode}
              onClick={() => setViewMode(mode)}
              className={`flex-1 h-full rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${
                viewMode === mode ? 'bg-white shadow-md text-slate-900' : 'text-slate-400'
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto hide-scrollbar px-5 space-y-6 pb-32 pt-2">
        {viewMode === 'Agenda' ? renderAgenda() : renderWeekly()}
      </div>

      {/* FAB */}
      <div className="fixed bottom-6 right-6 z-[60]">
        <button 
          onClick={() => navigate('/add-task')}
          className="flex size-16 items-center justify-center rounded-[2rem] bg-primary text-slate-900 shadow-glow active:scale-95 transition-all border border-primary-dark/10"
        >
          <span className="material-symbols-outlined text-[34px] font-black">add</span>
        </button>
      </div>
    </div>
  );
};

export default TaskScheduleView;
