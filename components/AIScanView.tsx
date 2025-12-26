
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AIScanView: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-full flex flex-col bg-black font-lexend overflow-hidden select-none">
      {/* Viewfinder Background (Mock) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center" 
        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBZdOolFKGjgoBOeBqYPCj9IZcMoNhNZ-_-2LXMhhlTjAbwhWrDLCtn5_Jl42laJaDicV6AnOM_Vx_1VRnLEwJ6-DMYp8J-A4yTqF-uub9oMR8Ts2Cy1QpxZCtowuzbaYryBGQ-7ccIQZqvMmhwh3DZcPqtREhgO5Ovi2hp0OL7Iq4-QPtQN8_uDUAJo-dfcLANl-AY77KHQjiE67NP6Yqc0v3rIm-1pXPmsldORe8k7D7Tr-nL7b9q3fNaPldIoN8bdripiE9cXUId")' }}
      >
        {/* Rule of Thirds Grid */}
        <div className="absolute inset-0 z-0 pointer-events-none grid grid-cols-3 grid-rows-3 opacity-20">
          <div className="border-r border-b border-white"></div>
          <div className="border-r border-b border-white"></div>
          <div className="border-b border-white"></div>
          <div className="border-r border-b border-white"></div>
          <div className="border-r border-b border-white"></div>
          <div className="border-b border-white"></div>
          <div className="border-r border-white"></div>
          <div className="border-r border-white"></div>
          <div></div>
        </div>
      </div>

      {/* TOP OVERLAY */}
      <div className="relative z-20 flex flex-col w-full pt-12 pb-2 bg-gradient-to-b from-white via-white/80 to-transparent">
        <div className="flex items-center justify-between px-4 mb-4">
          <button 
            onClick={() => navigate(-1)}
            className="flex size-10 items-center justify-center rounded-full bg-white/80 backdrop-blur-md text-gray-900 hover:bg-white transition-colors border border-gray-200 shadow-sm"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 px-4 py-1.5 bg-white/80 backdrop-blur-md rounded-full border border-gray-200 shadow-sm">
              <span className="text-gray-900 text-xs font-black tracking-widest uppercase">GOFAM PRO</span>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
            </div>
          </div>
          <button className="flex size-10 items-center justify-center rounded-full bg-white/80 backdrop-blur-md text-gray-900 hover:bg-white transition-colors border border-gray-200 shadow-sm">
            <span className="material-symbols-outlined text-2xl">settings</span>
          </button>
        </div>

        {/* Camera Info Bar */}
        <div className="flex justify-between px-6 py-2 text-[10px] font-mono text-gray-600 tracking-tight uppercase">
          <div className="flex gap-4 items-center">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">iso</span> 
              <span className="text-gray-900 font-bold">400</span>
            </span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">shutter_speed</span> 
              <span className="text-gray-900 font-bold">1/250</span>
            </span>
            <span className="flex items-center gap-1 font-sans">ƒ <span className="text-gray-900 font-black">1.8</span></span>
          </div>
          <div className="flex gap-4 items-center">
            <span className="bg-gray-200 px-1.5 py-0.5 rounded text-gray-900 font-black border border-gray-300">RAW</span>
            <span className="flex items-center gap-1">EV <span className="text-primary-dark font-black">+0.3</span></span>
          </div>
        </div>
      </div>

      {/* CENTER SCANNING AREA */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center w-full px-6">
        {/* Brightness Slider Mock */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 h-48 w-8 flex flex-col items-center justify-between py-2 z-30">
          <span className="material-symbols-outlined text-amber-500 text-sm icon-fill">wb_sunny</span>
          <div className="relative w-1 h-32 bg-gray-200/60 rounded-full backdrop-blur-sm">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-md border border-gray-300 cursor-pointer"></div>
          </div>
          <span className="material-symbols-outlined text-gray-400 text-sm">wb_sunny</span>
        </div>

        {/* Target Frame */}
        <div className="relative w-72 h-72 border border-white/40 rounded-[2.5rem] overflow-hidden backdrop-blur-[1px] shadow-sm">
          {/* Corner Decorations */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-primary rounded-tl-xl shadow-sm"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-primary rounded-tr-xl shadow-sm"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-primary rounded-bl-xl shadow-sm"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-primary rounded-br-xl shadow-sm"></div>
          
          {/* Animated Scanner Line */}
          <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_15px_rgba(19,236,73,1)] scanner-line"></div>
          
          {/* Detection Points Mock */}
          <div className="absolute top-1/3 left-1/3 w-3 h-3 border-2 border-primary rounded-full opacity-60 bg-primary/20 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/3 w-4 h-4 border-2 border-amber-400 rounded-full opacity-60 bg-amber-400/20 animate-pulse delay-700"></div>
          
          {/* Center Crosshair */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 opacity-80 pointer-events-none">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white shadow-sm"></div>
            <div className="absolute top-0 left-1/2 h-full w-[1px] bg-white shadow-sm"></div>
          </div>
        </div>

        {/* STATUS HUD */}
        <div className="mt-8 w-full max-w-xs bg-white/90 backdrop-blur-xl rounded-3xl p-4 border border-white/60 flex justify-between items-center shadow-xl ring-1 ring-black/5">
          <div className="flex flex-col items-center gap-1 flex-1">
            <span className="material-symbols-outlined text-amber-500 text-xl icon-fill">light_mode</span>
            <span className="text-[8px] text-slate-400 font-black uppercase tracking-widest">Ánh sáng</span>
            <span className="text-[10px] font-black text-slate-900">Tốt</span>
          </div>
          <div className="w-[1px] h-8 bg-gray-100"></div>
          <div className="flex flex-col items-center gap-1 flex-1">
            <span className="material-symbols-outlined text-green-600 text-xl icon-fill">fit_screen</span>
            <span className="text-[8px] text-slate-400 font-black uppercase tracking-widest">Khoảng cách</span>
            <span className="text-[10px] font-black text-slate-900">10-15cm</span>
          </div>
          <div className="w-[1px] h-8 bg-gray-100"></div>
          <div className="flex flex-col items-center gap-1 flex-1">
            <span className="material-symbols-outlined text-blue-500 text-xl icon-fill">view_in_ar</span>
            <span className="text-[8px] text-slate-400 font-black uppercase tracking-widest">Góc chụp</span>
            <span className="text-[10px] font-black text-slate-900">Trực diện</span>
          </div>
        </div>
      </div>

      {/* BOTTOM OVERLAY */}
      <div className="relative z-20 pb-12 pt-4 bg-gradient-to-t from-white via-white/95 to-transparent flex flex-col items-center">
        {/* Mode Selector (Macro/1x/Wide) */}
        <div className="flex bg-gray-200/40 backdrop-blur-md rounded-full p-1 border border-white/60 shadow-inner-soft mb-8">
          <button className="px-6 py-2 rounded-full text-[10px] font-black text-primary-dark bg-white shadow-md uppercase tracking-widest">MACRO</button>
          <button className="px-6 py-2 rounded-full text-[10px] font-black text-slate-400 hover:text-slate-900 uppercase tracking-widest transition-colors">1x</button>
          <button className="px-6 py-2 rounded-full text-[10px] font-black text-slate-400 hover:text-slate-900 uppercase tracking-widest transition-colors">WIDE</button>
        </div>

        {/* Scrollable Categories */}
        <div className="flex justify-center gap-8 mb-8 overflow-hidden text-[11px] font-black uppercase tracking-[0.2em]">
          <button className="text-slate-300 hover:text-slate-500 transition-colors">VIDEO</button>
          <button className="text-primary-dark drop-shadow-sm border-b-2 border-primary pb-1">AI SCAN</button>
          <button className="text-slate-300 hover:text-slate-500 transition-colors">PHOTO</button>
          <button className="text-slate-300 hover:text-slate-500 transition-colors">PORTRAIT</button>
        </div>

        {/* SHUTTER AREA */}
        <div className="flex items-center justify-between w-full px-12">
          {/* Gallery Preview */}
          <button className="flex size-14 items-center justify-center rounded-2xl bg-gray-100 border-2 border-white overflow-hidden transition-all active:scale-90 group shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1597389880944-214873954a48?q=80&w=100&auto=format&fit=crop" 
              alt="Last shot" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </button>

          {/* Shutter Button */}
          <button className="group relative flex items-center justify-center size-24 rounded-full border-[6px] border-slate-200 bg-transparent transition-all active:scale-90">
            <div className="absolute inset-0 rounded-full border border-white"></div>
            <div className="size-16 rounded-full bg-white border border-gray-100 group-hover:bg-gray-50 transition-colors duration-200 shadow-xl flex items-center justify-center">
               <div className="size-14 rounded-full border-2 border-primary/20 bg-primary/5"></div>
            </div>
          </button>

          {/* Camera Switch */}
          <button className="flex size-14 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm text-slate-800 hover:bg-white border border-gray-100 transition-all active:rotate-180 duration-500 shadow-lg">
            <span className="material-symbols-outlined text-[28px]">cameraswitch</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIScanView;
