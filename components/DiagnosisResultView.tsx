
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DiagnosisResultView: React.FC = () => {
  const navigate = useNavigate();
  const [openSection, setOpenSection] = useState<string | null>('treatment');

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
        <h2 className="text-[#111813] text-lg font-bold leading-tight tracking-tight flex-1 text-center">Kết quả Chẩn đoán</h2>
        <div className="flex w-12 items-center justify-end">
          <button className="flex size-12 cursor-pointer items-center justify-center rounded-full hover:bg-gray-100 text-[#111813] transition-colors">
            <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>share</span>
          </button>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto hide-scrollbar pb-32">
        {/* HERO IMAGE & AI OVERLAY */}
        <div className="relative w-full aspect-[4/3] bg-gray-200 overflow-hidden group">
          <img 
            alt="Diagnosis Hero" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-zoom-in" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAR-WvbAqLIrAZD44hkCuSYDWA7YDEOt0NIfBs2O37_zVpjkdXfn0lJ-uRTUFPeX0s90FbA3Rdq1E93tzSS8WncRFZEWLYpopbHXOZftctRN8TgEcb0i8f_mX6pfJZV1HKtOzDN0fOaKg_sAhrrglk8S_drnHOgN8MELlbSSzOWmO5K3sdynqgXhMfD4VIAHTtX646ft4QO3iAYrYzmx3v5hVSfBNVETO7VDY-Hp0A8coL9z1uH4qNhAVBCzcjs-Xe-g7lyc2HGokF6" 
          />
          
          {/* AI Overlay Badge */}
          <div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur-md border border-primary/30 rounded-lg px-3 py-2 flex items-center gap-3 shadow-lg">
            <div className="relative flex items-center justify-center size-10">
              <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                <path className="text-gray-600" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="100, 100" strokeWidth="3"></path>
                <path className="text-primary drop-shadow-[0_0_2px_#13ec49]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="97.5, 100" strokeWidth="3"></path>
              </svg>
              <span className="absolute text-[10px] font-bold text-white uppercase">AI</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-300 font-medium uppercase tracking-widest">Độ tin cậy</span>
              <span className="text-lg font-bold text-primary leading-none">97.5%</span>
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
                <h1 className="text-[#111813] text-[28px] font-bold leading-tight tracking-tight">Bệnh Đạo Ôn</h1>
                <p className="text-gray-500 text-sm font-medium italic mt-1 font-body">Magnaporthe grisea</p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full border border-red-200 uppercase tracking-widest">NGUY HIỂM</span>
                <span className="text-xs text-gray-400">ID: #DX-2901</span>
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
              <p className="text-[#111813] text-xl font-bold">Cấp 3/5</p>
              <div className="w-full bg-gray-200 h-1.5 rounded-full mt-2 overflow-hidden">
                <div className="bg-red-500 h-1.5 rounded-full w-[60%] shadow-[0_0_8px_rgba(239,68,68,0.5)] transition-all duration-1000"></div>
              </div>
              <p className="text-xs text-red-600 mt-1 font-medium">Lây lan nhanh</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm flex flex-col gap-1">
              <div className="flex items-center gap-2 text-gray-500 mb-1">
                <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px' }}>update</span>
                <span className="text-xs font-bold uppercase tracking-wider">Giai đoạn</span>
              </div>
              <p className="text-[#111813] text-xl font-bold">Phát tán</p>
              <p className="text-xs text-gray-500 mt-auto pt-2 leading-tight">Bào tử đang phát tán mạnh qua gió</p>
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
                  <p className="text-[#111813] text-sm font-bold leading-normal">Nguyên nhân & Cơ chế</p>
                </div>
                <span className={`material-symbols-outlined text-gray-400 transition-transform ${openSection === 'pathology' ? 'rotate-180' : ''}`} style={{ fontSize: '20px' }}>keyboard_arrow_down</span>
              </button>
              {openSection === 'pathology' && (
                <div className="px-4 pb-4 pt-0 animate-in slide-in-from-top-2 duration-300">
                  <div className="pl-11 border-l-2 border-gray-100 ml-4 space-y-3">
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-bold mb-1">Tác nhân</p>
                      <p className="text-sm text-gray-700 font-body">Nấm <i className="text-primary-dark">Pyricularia oryzae</i> phát triển mạnh trong điều kiện ẩm độ cao, sương mù nhiều.</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-bold mb-1">Điều kiện phát sinh</p>
                      <ul className="list-disc pl-4 text-sm text-gray-700 font-body space-y-1">
                        <li>Bón thừa đạm (N)</li>
                        <li>Nhiệt độ 20-28°C</li>
                        <li>Độ ẩm {'>'} 90%</li>
                      </ul>
                    </div>
                    <button className="inline-flex items-center text-xs font-bold text-blue-600 hover:underline mt-2">
                      Xem CSDL Bệnh học <span className="material-symbols-outlined ml-1" style={{ fontSize: '14px' }}>open_in_new</span>
                    </button>
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
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>timeline</span>
                  </div>
                  <p className="text-[#111813] text-sm font-bold leading-normal">Phác đồ điều trị (Timeline)</p>
                </div>
                <span className={`material-symbols-outlined text-gray-400 transition-transform ${openSection === 'treatment' ? 'rotate-180' : ''}`} style={{ fontSize: '20px' }}>keyboard_arrow_down</span>
              </button>
              {openSection === 'treatment' && (
                <div className="px-4 pb-4 pt-2 animate-in slide-in-from-top-2 duration-300">
                  <div className="space-y-4">
                    {/* Step 1 */}
                    <div className="flex gap-3">
                      <div className="flex flex-col items-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]"></div>
                        <div className="w-0.5 h-full bg-gray-200 my-1"></div>
                      </div>
                      <div className="pb-2 flex-1">
                        <p className="text-xs font-bold text-red-500 mb-0.5">NGAY LẬP TỨC (Ngày 1)</p>
                        <h4 className="text-sm font-bold text-gray-900">Dừng bón phân Đạm</h4>
                        <p className="text-xs text-gray-600 mt-1 font-body">Ngưng toàn bộ phân bón lá và phân đạm. Giữ mực nước ruộng 3-5cm.</p>
                      </div>
                    </div>
                    {/* Step 2 */}
                    <div className="flex gap-3">
                      <div className="flex flex-col items-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-primary border border-background-dark"></div>
                        <div className="w-0.5 h-full bg-gray-200 my-1"></div>
                      </div>
                      <div className="pb-2 flex-1">
                        <p className="text-xs font-bold text-primary-dark mb-0.5">XỬ LÝ THUỐC (Ngày 1-2)</p>
                        <h4 className="text-sm font-bold text-gray-900">Phun thuốc đặc trị</h4>
                        <p className="text-xs text-gray-600 mt-1 font-body">Sử dụng nhóm hoạt chất Tricyclazole hoặc Isoprothiolane. Phun ướt đều tán lá.</p>
                      </div>
                    </div>
                    {/* Step 3 */}
                    <div className="flex gap-3">
                      <div className="flex flex-col items-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-gray-400"></div>
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-bold text-gray-500 mb-0.5">KIỂM TRA (Ngày 5-7)</p>
                        <h4 className="text-sm font-bold text-gray-900">Đánh giá lại</h4>
                        <p className="text-xs text-gray-600 mt-1 font-body">Nếu vết bệnh khô trắng, tiếp tục chăm sóc. Nếu còn lây lan, phun nhắc lại lần 2.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Chemicals Detail */}
            <div className={`rounded-xl border border-gray-200 bg-white overflow-hidden transition-all duration-300 ${openSection === 'chemicals' ? 'ring-1 ring-primary/50' : ''}`}>
              <button 
                onClick={() => toggleSection('chemicals')}
                className="w-full flex cursor-pointer items-center justify-between gap-4 p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>science</span>
                  </div>
                  <p className="text-[#111813] text-sm font-bold leading-normal">Thuốc BVTV & An toàn</p>
                </div>
                <span className={`material-symbols-outlined text-gray-400 transition-transform ${openSection === 'chemicals' ? 'rotate-180' : ''}`} style={{ fontSize: '20px' }}>keyboard_arrow_down</span>
              </button>
              {openSection === 'chemicals' && (
                <div className="p-4 pt-0 animate-in slide-in-from-top-2 duration-300">
                  <div className="bg-gray-50 rounded-lg p-3 border border-gray-100 mb-3 shadow-inner">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="text-sm font-bold text-purple-700 uppercase tracking-tight">Beam 75WP</h5>
                      <span className="text-[10px] bg-purple-200 text-purple-900 px-2 py-0.5 rounded font-black uppercase">Ưu tiên</span>
                    </div>
                    <div className="grid grid-cols-2 gap-y-2 text-xs font-body">
                      <div className="text-gray-500 font-bold uppercase tracking-widest text-[9px]">Hoạt chất:</div>
                      <div className="text-right font-bold text-gray-900">Tricyclazole</div>
                      <div className="text-gray-500 font-bold uppercase tracking-widest text-[9px]">Liều lượng:</div>
                      <div className="text-right font-bold text-gray-900">20-25g / 25L</div>
                      <div className="text-gray-500 font-bold uppercase tracking-widest text-[9px]">Cách ly (PHI):</div>
                      <div className="text-right font-black text-amber-600">14 Ngày</div>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 border border-gray-100 shadow-inner">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="text-sm font-bold text-gray-700 uppercase tracking-tight">Fuji-One 40EC</h5>
                    </div>
                    <div className="grid grid-cols-2 gap-y-2 text-xs font-body">
                      <div className="text-gray-500 font-bold uppercase tracking-widest text-[9px]">Hoạt chất:</div>
                      <div className="text-right font-bold text-gray-900">Isoprothiolane</div>
                      <div className="text-gray-500 font-bold uppercase tracking-widest text-[9px]">Cách ly (PHI):</div>
                      <div className="text-right font-black text-amber-600">10 Ngày</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Compliance Warning */}
          <div className="rounded-xl bg-amber-50 border border-amber-200 p-4 flex gap-3 shadow-sm">
            <span className="material-symbols-outlined text-amber-600 shrink-0" style={{ fontSize: '24px' }}>gavel</span>
            <div className="flex flex-col gap-1">
              <h4 className="text-sm font-bold text-amber-800 uppercase tracking-tight">Cảnh báo Tuân thủ</h4>
              <p className="text-[11px] text-amber-900/70 font-body leading-relaxed">
                Chỉ sử dụng thuốc trong danh mục cho phép. Tuân thủ thời gian cách ly (PHI) trước khi thu hoạch để đảm bảo tiêu chuẩn xuất khẩu.
              </p>
            </div>
          </div>
        </main>

        <div className="h-20"></div> {/* Spacer for fixed footer */}
      </div>

      {/* Action Footer */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-lg border-t border-gray-200 max-w-md mx-auto z-40">
        <div className="grid grid-cols-4 gap-3">
          {/* Primary Action */}
          <button 
            onClick={() => navigate('/add-task')}
            className="col-span-2 bg-primary hover:bg-green-400 text-slate-900 rounded-lg h-12 flex items-center justify-center gap-2 font-black shadow-[0_4px_14px_rgba(19,236,73,0.3)] transition-all active:scale-95 uppercase tracking-widest"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>add_task</span>
            <span className="text-xs">Tạo nhiệm vụ</span>
          </button>
          {/* Secondary Actions */}
          <button className="bg-white border border-gray-200 text-[#111813] rounded-lg h-12 flex flex-col items-center justify-center hover:bg-gray-50 transition-colors group">
            <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors" style={{ fontSize: '20px' }}>book</span>
            <span className="text-[9px] mt-0.5 font-black uppercase tracking-widest">Nhật ký</span>
          </button>
          <button className="bg-white border border-gray-100 text-[#111813] rounded-lg h-12 flex flex-col items-center justify-center hover:bg-gray-50 transition-colors group">
            <span className="material-symbols-outlined text-slate-400 group-hover:text-info transition-colors" style={{ fontSize: '20px' }}>support_agent</span>
            <span className="text-[9px] mt-0.5 font-black uppercase tracking-widest">Chuyên gia</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiagnosisResultView;
