
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const DiagnosisResultView: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openSection, setOpenSection] = useState<string | null>('treatment');
  
  // Dữ liệu mặc định nếu không có dữ liệu truyền qua state
  const defaultData = {
    name: "Bệnh Đạo Ôn",
    severity: 3,
    cause: "Nấm Pyricularia oryzae phát triển mạnh trong điều kiện ẩm độ cao, sương mù nhiều.",
    treatment: "Ngưng bón đạm, phun thuốc đặc trị chứa Tricyclazole hoặc Isoprothiolane."
  };

  const diagnosis = location.state?.result || defaultData;
  const capturedImage = location.state?.image || "https://lh3.googleusercontent.com/aida-public/AB6AXuAR-WvbAqLIrAZD44hkCuSYDWA7YDEOt0NIfBs2O37_zVpjkdXfn0lJ-uRTUFPeX0s90FbA3Rdq1E93tzSS8WncRFZEWLYpopbHXOZftctRN8TgEcb0i8f_mX6pfJZV1HKtOzDN0fOaKg_sAhrrglk8S_drnHOgN8MELlbSSzOWmO5K3sdynqgXhMfD4VIAHTtX646ft4QO3iAYrYzmx3v5hVSfBNVETO7VDY-Hp0A8coL9z1uH4qNhAVBCzcjs-Xe-g7lyc2HGokF6";

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="flex flex-col flex-1 animate-in fade-in duration-500 bg-background-light min-h-screen font-display transition-colors duration-200">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-background-light/95 backdrop-blur-md p-4 pb-2 flex items-center justify-between border-b border-gray-200 shrink-0">
        <button 
          onClick={() => navigate(-1)}
          className="flex size-12 shrink-0 items-center justify-start cursor-pointer transition-transform active:scale-95 text-[#111813]"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>arrow_back</span>
        </button>
        <h2 className="text-[#111813] text-lg font-bold leading-tight tracking-tight flex-1 text-center">Kết quả AI GoFam</h2>
        <div className="flex w-12 items-center justify-end">
          <button className="flex size-12 cursor-pointer items-center justify-center rounded-full hover:bg-gray-100 text-[#111813] transition-colors">
            <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>share</span>
          </button>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto hide-scrollbar pb-32">
        {/* HERO IMAGE & AI OVERLAY */}
        <div className="relative w-full aspect-[4/3] bg-slate-900 overflow-hidden group">
          <img 
            alt="Diagnosis Hero" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-zoom-in" 
            src={capturedImage} 
          />
          
          {/* AI Overlay Badge */}
          <div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur-md border border-primary/30 rounded-lg px-3 py-2 flex items-center gap-3 shadow-lg">
            <div className="relative flex items-center justify-center size-10">
              <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                <path className="text-gray-600" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="100, 100" strokeWidth="3"></path>
                <path className="text-primary drop-shadow-[0_0_2px_#13ec49]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="98, 100" strokeWidth="3"></path>
              </svg>
              <span className="absolute text-[10px] font-bold text-white uppercase">AI</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-300 font-medium uppercase tracking-widest">Độ tin cậy</span>
              <span className="text-lg font-bold text-primary leading-none">98.2%</span>
            </div>
          </div>

          <button className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full p-2 cursor-pointer hover:bg-primary transition-colors text-gray-800 hover:text-black">
            <span className="material-symbols-outlined block" style={{ fontSize: '20px' }}>fullscreen</span>
          </button>
        </div>

        {/* MAIN CONTENT */}
        <main className="flex flex-col p-4 gap-6">
          {/* Title Section */}
          <div className="flex flex-col gap-2">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-[#111813] text-[28px] font-black leading-tight tracking-tight uppercase">{diagnosis.name}</h1>
                <p className="text-gray-500 text-sm font-medium italic mt-1 font-body">Chẩn đoán bởi Gemini 2.5 Flash</p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className={`text-xs font-black px-3 py-1 rounded-full border uppercase tracking-widest ${diagnosis.severity >= 4 ? 'bg-red-100 text-red-700 border-red-200' : 'bg-amber-100 text-amber-700 border-amber-200'}`}>
                  {diagnosis.severity >= 4 ? 'NGUY HIỂM' : 'CẦN CHÚ Ý'}
                </span>
                <span className="text-xs text-gray-400 font-bold uppercase tracking-tighter">Code: AI-LENS</span>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm flex flex-col gap-1 group">
              <div className="flex items-center gap-2 text-gray-500 mb-1">
                <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px' }}>ssid_chart</span>
                <span className="text-xs font-bold uppercase tracking-wider">Mức độ</span>
              </div>
              <p className="text-[#111813] text-xl font-bold">Cấp {diagnosis.severity}/5</p>
              <div className="w-full bg-gray-200 h-1.5 rounded-full mt-2 overflow-hidden">
                <div 
                  className={`h-1.5 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.5)] transition-all duration-1000 ${diagnosis.severity >= 4 ? 'bg-red-500' : 'bg-amber-500'}`} 
                  style={{ width: `${diagnosis.severity * 20}%` }}
                ></div>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm flex flex-col gap-1">
              <div className="flex items-center gap-2 text-gray-500 mb-1">
                <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px' }}>update</span>
                <span className="text-xs font-bold uppercase tracking-wider">Khuyến nghị</span>
              </div>
              <p className="text-[#111813] text-xl font-bold">Xử lý ngay</p>
              <p className="text-xs text-gray-500 mt-auto pt-2 leading-tight">Cần can thiệp trong vòng 24-48h tới.</p>
            </div>
          </div>

          {/* Detailed Accordions */}
          <div className="flex flex-col gap-3">
            {/* Pathology Detail */}
            <div className={`rounded-xl border border-gray-200 bg-white overflow-hidden transition-all duration-300 ${openSection === 'pathology' ? 'ring-1 ring-primary/50' : ''}`}>
              <button 
                onClick={() => toggleSection('pathology')}
                className="w-full flex cursor-pointer items-center justify-between gap-4 p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>biotech</span>
                  </div>
                  <p className="text-[#111813] text-sm font-bold leading-normal">Phân tích chuyên môn</p>
                </div>
                <span className={`material-symbols-outlined text-gray-400 transition-transform ${openSection === 'pathology' ? 'rotate-180' : ''}`} style={{ fontSize: '20px' }}>keyboard_arrow_down</span>
              </button>
              {openSection === 'pathology' && (
                <div className="px-4 pb-4 pt-0 animate-in slide-in-from-top-2 duration-300">
                  <div className="pl-4 border-l-2 border-primary/20 space-y-3 mt-2">
                    <p className="text-sm text-gray-700 font-bold leading-relaxed">{diagnosis.cause}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Treatment Protocol */}
            <div className={`rounded-xl border border-gray-200 bg-white overflow-hidden transition-all duration-300 ${openSection === 'treatment' ? 'ring-1 ring-primary/50' : ''}`}>
              <button 
                onClick={() => toggleSection('treatment')}
                className="w-full flex cursor-pointer items-center justify-between gap-4 p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>science</span>
                  </div>
                  <p className="text-[#111813] text-sm font-bold leading-normal">Giải pháp đề xuất</p>
                </div>
                <span className={`material-symbols-outlined text-gray-400 transition-transform ${openSection === 'treatment' ? 'rotate-180' : ''}`} style={{ fontSize: '20px' }}>keyboard_arrow_down</span>
              </button>
              {openSection === 'treatment' && (
                <div className="px-4 pb-4 pt-2 animate-in slide-in-from-top-2 duration-300">
                   <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 shadow-inner">
                      <p className="text-sm text-slate-800 font-bold leading-relaxed">
                        {diagnosis.treatment}
                      </p>
                   </div>
                </div>
              )}
            </div>
          </div>

          {/* Expert Connection */}
          <div className="rounded-xl bg-primary/5 border border-primary/20 p-4 flex gap-3 shadow-sm group cursor-pointer active:scale-95 transition-all">
            <span className="material-symbols-outlined text-primary-dark shrink-0" style={{ fontSize: '24px' }}>support_agent</span>
            <div className="flex flex-col gap-1">
              <h4 className="text-sm font-black text-primary-dark uppercase tracking-tight">Kết nối chuyên gia ngay</h4>
              <p className="text-[11px] text-slate-500 font-bold leading-relaxed">
                Gửi kết quả này cho bác sĩ cây trồng để nhận tư vấn cụ thể theo vùng miền của bạn.
              </p>
            </div>
            <span className="material-symbols-outlined ml-auto text-primary-dark opacity-40 group-hover:translate-x-1 transition-transform">arrow_forward_ios</span>
          </div>
        </main>
      </div>

      {/* Action Footer */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-lg border-t border-gray-200 max-w-md mx-auto z-40">
        <div className="grid grid-cols-4 gap-3">
          <button 
            onClick={() => navigate('/add-task')}
            className="col-span-2 bg-slate-900 text-white rounded-xl h-12 flex items-center justify-center gap-2 font-black shadow-lg transition-all active:scale-95 uppercase tracking-widest"
          >
            <span className="material-symbols-outlined text-primary" style={{ fontSize: '20px' }}>add_task</span>
            <span className="text-xs">Tạo nhiệm vụ</span>
          </button>
          <button 
             onClick={() => navigate('/community')}
             className="bg-white border border-gray-200 text-[#111813] rounded-xl h-12 flex flex-col items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <span className="material-symbols-outlined text-slate-400" style={{ fontSize: '20px' }}>forum</span>
            <span className="text-[9px] mt-0.5 font-black uppercase tracking-widest">Hỏi nhóm</span>
          </button>
          <button 
             onClick={() => navigate(-1)}
             className="bg-white border border-gray-200 text-[#111813] rounded-xl h-12 flex flex-col items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <span className="material-symbols-outlined text-slate-400" style={{ fontSize: '20px' }}>restart_alt</span>
            <span className="text-[9px] mt-0.5 font-black uppercase tracking-widest">Quét lại</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiagnosisResultView;
