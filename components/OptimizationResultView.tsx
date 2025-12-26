
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { specializedIrrigationOptimization } from '../services/aiService';

const OptimizationResultView: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isThinking, setIsThinking] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any>(null);

  const mockData = {
    resource: {
       title: 'Tối ưu Tài nguyên',
       score: 72,
       issues: [
         { id: 1, type: 'waste', title: 'Lãng phí nước tưới (Lô B1)', desc: 'Lô B1 đang tưới vượt ngưỡng 15% so với nhu cầu thực tế của cây.', impact: '-1.2tr VND/tháng', action: 'Phân tích Kỹ thuật' },
         { id: 2, type: 'saving', title: 'Cửa sổ năng lượng', desc: 'Giá điện giờ thấp điểm từ 22:00. Hệ thống bơm có thể dời lịch.', impact: '+800k VND/tháng', action: 'Đặt lịch lại' }
       ]
    },
    inventory: {
       title: 'Tối ưu Vật tư',
       score: 85,
       issues: [
         { id: 3, type: 'expiry', title: 'Vật tư sắp hết hạn', desc: '12 chai thuốc BVTV Bio-B sẽ hết hạn trong 30 ngày tới.', impact: '-4.5tr VND rủi ro', action: 'Sử dụng ngay' },
         { id: 4, type: 'stock', title: 'Tồn kho thặng dư', desc: 'NPK 20-20-15 đang tồn 500kg, vượt nhu cầu vụ này.', impact: 'Đọng vốn 15tr', action: 'Đăng bán Chợ' }
       ]
    }
  };

  const data = (mockData as any)[id || 'resource'] || mockData.resource;

  const handleAction = async (issue: any) => {
    if (issue.title.includes('Lô B1')) {
      setIsThinking(true);
      try {
        const result = await specializedIrrigationOptimization('Lô B1', '15%');
        setAnalysisResult(result);
      } catch (e) {
        alert("Lỗi khi kết nối với Thinking Engine.");
      } finally {
        setIsThinking(false);
      }
    } else {
      alert("Hành động: " + issue.action);
    }
  };

  if (isThinking) {
    return (
      <div className="flex flex-col flex-1 items-center justify-center bg-slate-950 text-white h-screen p-10 text-center animate-in fade-in duration-500">
        <div className="relative size-48 mb-10">
          <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ping"></div>
          <div className="absolute inset-4 rounded-full border-2 border-primary/40 animate-[spin_3s_linear_infinite]"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="material-symbols-outlined text-[64px] text-primary icon-fill">psychology</span>
          </div>
        </div>
        <h2 className="text-xl font-black uppercase tracking-widest mb-4">Gemini 3 Pro Thinking...</h2>
        <p className="text-sm text-slate-400 leading-relaxed max-w-xs">AI đang thiết kế lại sơ đồ hệ thống tưới cho Lô B1 dựa trên dữ liệu khí hậu và cảm biến thực tế.</p>
        <div className="mt-8 w-64 h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-primary animate-[shimmer_2s_infinite]"></div>
        </div>
        <style>{`
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-1 animate-in slide-in-from-right duration-500 bg-background-light min-h-screen">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md px-5 py-4 flex items-center justify-between border-b border-gray-100 shadow-soft shrink-0">
        <button onClick={() => analysisResult ? setAnalysisResult(null) : navigate(-1)} className="size-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
          <span className="material-symbols-outlined text-slate-900">arrow_back</span>
        </button>
        <h2 className="text-lg font-black text-slate-900 uppercase tracking-tight font-display">{analysisResult ? 'Đề xuất Kỹ thuật' : data.title}</h2>
        <div className="size-10"></div>
      </header>

      <div className="flex-1 overflow-y-auto hide-scrollbar p-5 space-y-6 pb-32">
        {analysisResult ? (
          <div className="animate-in zoom-in-95 duration-500 space-y-6">
            <div className="bg-white rounded-[2.5rem] p-8 shadow-deep border-2 border-primary/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <span className="material-symbols-outlined text-[120px]">engineering</span>
              </div>
              <div className="flex items-center gap-3 text-primary-dark mb-6 border-b border-gray-50 pb-4">
                <span className="material-symbols-outlined">verified</span>
                <span className="text-[10px] font-black uppercase tracking-widest">Đề xuất tối ưu bởi Gemini 3 Pro</span>
              </div>
              <div className="text-sm text-slate-700 font-bold leading-relaxed whitespace-pre-wrap">
                {analysisResult.text}
              </div>
            </div>

            {analysisResult.grounding.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2">Dữ liệu tham chiếu</h4>
                <div className="grid gap-3">
                  {analysisResult.grounding.map((link: any, i: number) => (
                    <a key={i} href={link.uri} target="_blank" rel="noreferrer" className="p-4 bg-white rounded-2xl border border-gray-100 flex items-center justify-between hover:border-primary transition-all shadow-soft group">
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-black text-slate-900 truncate">{link.title}</p>
                        <p className="text-[9px] text-primary truncate font-bold">{link.uri}</p>
                      </div>
                      <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">open_in_new</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
            
            <button className="w-full bg-slate-900 text-white h-16 rounded-[2rem] font-black uppercase tracking-widest shadow-xl flex items-center justify-center gap-3 active:scale-95 transition-transform">
              <span className="material-symbols-outlined">schedule_send</span>
              Gửi Kế hoạch thi công
            </button>
          </div>
        ) : (
          <>
            <div className="bg-white rounded-[2.5rem] p-8 shadow-deep border border-gray-50 flex flex-col items-center text-center">
              <div className="relative size-32 mb-6">
                  <svg className="size-full rotate-[-90deg]" viewBox="0 0 100 100">
                    <circle className="stroke-gray-50" cx="50" cy="50" fill="none" r="42" strokeWidth="8"></circle>
                    <circle cx="50" cy="50" fill="none" r="42" stroke="#13ec49" strokeDasharray="264" strokeDashoffset={264 - (264 * data.score / 100)} strokeLinecap="round" strokeWidth="8" className="drop-shadow-glow"></circle>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-black text-slate-900 tracking-tighter">{data.score}%</span>
                    <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest">Hiệu quả</span>
                  </div>
              </div>
              <h3 className="text-xl font-black text-slate-900 tracking-tight mb-2">Đã hoàn tất rà soát!</h3>
              <p className="text-xs font-medium text-slate-400 leading-relaxed">Phát hiện <span className="text-primary-dark font-black">{data.issues.length} cơ hội</span> để tối ưu hóa.</p>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Đề xuất xử lý</h4>
              {data.issues.map((issue: any) => (
                  <div key={issue.id} className="bg-white rounded-[2rem] p-6 shadow-soft border border-gray-100 flex flex-col gap-5 relative overflow-hidden group">
                    <div className="flex gap-4">
                        <div className={`size-12 rounded-2xl flex items-center justify-center shrink-0 shadow-inner ${
                          issue.type === 'waste' ? 'bg-red-50 text-red-500' : 'bg-primary/10 text-primary-dark'
                        }`}>
                          <span className="material-symbols-outlined text-[26px]">
                              {issue.type === 'waste' ? 'error' : 'tips_and_updates'}
                          </span>
                        </div>
                        <div className="min-w-0 pr-6">
                          <h5 className="text-base font-black text-slate-900 tracking-tight leading-tight">{issue.title}</h5>
                          <p className="text-[11px] font-bold text-slate-400 mt-1 uppercase tracking-widest">{issue.impact}</p>
                        </div>
                    </div>
                    <div className="bg-gray-50/80 rounded-2xl p-4 border border-gray-100">
                        <p className="text-xs font-medium text-slate-600 leading-relaxed">{issue.desc}</p>
                    </div>
                    <button 
                      onClick={() => handleAction(issue)}
                      className={`w-full h-12 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all active:scale-95 shadow-lg flex items-center justify-center gap-2 ${
                        issue.title.includes('Lô B1') ? 'bg-primary text-slate-900' : 'bg-slate-900 text-white'
                      }`}
                    >
                        {issue.title.includes('Lô B1') && <span className="material-symbols-outlined text-sm">psychology</span>}
                        {issue.action}
                    </button>
                  </div>
              ))}
            </div>
          </>
        )}
      </div>

      {!analysisResult && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-gray-100 p-5 pb-8 shadow-deep max-w-md mx-auto">
          <button className="w-full bg-primary hover:bg-primary-dark text-slate-900 font-black h-16 rounded-2xl shadow-glow transition-all active:scale-[0.98] flex items-center justify-center gap-3 uppercase tracking-[0.15em] border border-primary-dark/10">
              <span className="material-symbols-outlined font-black">check_circle</span>
              Áp dụng tất cả
          </button>
        </div>
      )}
    </div>
  );
};

export default OptimizationResultView;
