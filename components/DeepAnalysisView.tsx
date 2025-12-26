
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deepAnalysis } from '../services/aiService';

const DeepAnalysisView: React.FC = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [response, setResponse] = useState<any>(null);
  const [tools, setTools] = useState({ search: true, maps: false });

  const handleRun = async () => {
    if (!query.trim()) return;
    setIsThinking(true);
    setResponse(null);

    try {
      const res = await deepAnalysis(query, tools.search, tools.maps);
      setResponse(res);
    } catch (e) {
      alert("Lỗi kết nối Deep Analysis. Vui lòng thử lại.");
    } finally {
      setIsThinking(false);
    }
  };

  return (
    <div className="flex flex-col flex-1 bg-background-light min-h-screen font-sans">
      <header className="p-5 bg-white border-b flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <button onClick={() => navigate('/lab')} className="size-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="font-black uppercase tracking-[0.2em] text-xs text-slate-900">Deep Farm Insights</h1>
        <div className="size-10"></div>
      </header>

      <main className="p-5 space-y-6 pb-32 overflow-y-auto hide-scrollbar">
        {/* Input Panel */}
        <div className="bg-slate-950 rounded-[3rem] p-7 text-white space-y-7 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 size-48 bg-primary/10 rounded-full blur-[60px] -mr-20 -mt-20"></div>
          
          <div className="flex items-center gap-3 text-primary relative z-10">
            <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
              <span className="material-symbols-outlined text-[24px] icon-fill">network_intelligence</span>
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Thinking Engine Activated</span>
          </div>

          <textarea 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-white/5 border-none rounded-2xl p-5 text-sm font-bold placeholder:text-white/20 focus:ring-primary h-36 relative z-10 resize-none leading-relaxed"
            placeholder="Đặt câu hỏi kỹ thuật phức tạp (VD: Phân tích khả năng chịu hạn của giống lúa ST25 trong điều kiện El Nino ĐBSCL...)"
          />

          <div className="flex gap-4 relative z-10">
            <button 
              onClick={() => setTools(t => ({...t, search: !t.search}))}
              className={`flex-1 py-3 px-4 rounded-2xl border-2 flex items-center justify-center gap-3 transition-all ${tools.search ? 'bg-primary/20 border-primary text-primary shadow-glow' : 'bg-white/5 border-white/10 text-white/40'}`}
            >
              <span className="material-symbols-outlined text-[20px]">search</span>
              <span className="text-[10px] font-black uppercase tracking-widest">Search</span>
            </button>
            <button 
              onClick={() => setTools(t => ({...t, maps: !t.maps}))}
              className={`flex-1 py-3 px-4 rounded-2xl border-2 flex items-center justify-center gap-3 transition-all ${tools.maps ? 'bg-blue-500/20 border-blue-500 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)]' : 'bg-white/5 border-white/10 text-white/40'}`}
            >
              <span className="material-symbols-outlined text-[20px]">google_pin</span>
              <span className="text-[10px] font-black uppercase tracking-widest">Maps</span>
            </button>
          </div>

          <button 
            onClick={handleRun}
            disabled={isThinking}
            className="w-full py-5 bg-primary text-slate-950 rounded-2xl font-black uppercase tracking-[0.2em] shadow-glow active:scale-[0.98] disabled:opacity-50 transition-all border border-primary-dark/10 relative z-10"
          >
            {isThinking ? 'Đang suy luận...' : 'Bắt đầu Phân tích'}
          </button>
        </div>

        {/* Loading Indicator */}
        {isThinking && (
          <div className="flex flex-col items-center py-16 gap-5 animate-in fade-in duration-500">
            <div className="relative size-14">
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ping"></div>
              <div className="absolute inset-0 rounded-full border-2 border-primary border-t-transparent animate-spin"></div>
            </div>
            <p className="text-[10px] font-black text-primary-dark uppercase tracking-[0.2em] animate-pulse italic text-center">
              Gemini 3 Pro đang truy xuất dữ liệu & suy luận lập luận...
            </p>
          </div>
        )}

        {/* Results */}
        {response && (
          <div className="animate-in slide-in-from-bottom-6 duration-700 space-y-8">
            <div className="bg-white rounded-[3rem] p-8 shadow-deep border border-gray-50 leading-relaxed text-slate-700 text-sm">
              <div className="mb-6 flex items-center gap-3 text-primary-dark border-b border-gray-50 pb-4">
                <span className="material-symbols-outlined text-[24px]">auto_awesome</span>
                <span className="text-[11px] font-black uppercase tracking-[0.1em]">Báo cáo Phân tích Chuyên sâu</span>
              </div>
              <div className="font-bold space-y-4 whitespace-pre-wrap tracking-tight">
                {response.text}
              </div>
            </div>

            {response.grounding.length > 0 && (
              <div className="space-y-4 animate-in fade-in duration-1000 delay-300">
                <div className="flex items-center gap-3 px-3">
                  <div className="h-px flex-1 bg-gray-200"></div>
                  <h4 className="text-[9px] font-black text-slate-400 uppercase tracking-[0.25em]">Nguồn dữ liệu xác thực</h4>
                  <div className="h-px flex-1 bg-gray-200"></div>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {response.grounding.map((link: any, i: number) => (
                    <a 
                      key={i} 
                      href={link.uri} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-4 bg-white rounded-2xl border border-gray-100 flex items-center gap-4 hover:border-primary hover:shadow-soft transition-all group active:scale-[0.98]"
                    >
                      <div className="size-11 rounded-xl bg-gray-50 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-[20px]">{link.uri.includes('google.com/maps') ? 'google_pin' : 'language'}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[11px] font-black text-slate-900 truncate tracking-tight">{link.title}</p>
                        <p className="text-[9px] text-primary-dark truncate font-bold mt-0.5 opacity-60 italic">{link.uri}</p>
                      </div>
                      <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">arrow_outward</span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Deep Consultation CTA */}
            <div className="px-2 pt-4">
              <button 
                onClick={() => navigate('/contact')}
                className="w-full py-5 bg-slate-900 text-white rounded-[2rem] font-black uppercase tracking-[0.15em] shadow-deep hover:bg-slate-800 transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
              >
                <span className="material-symbols-outlined text-[24px] text-primary">support_agent</span>
                <span>Yêu cầu tư vấn chuyên sâu</span>
              </button>
              <p className="text-center text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-4">
                Kết nối trực tiếp với chuyên gia kỹ thuật GOFAM
              </p>
            </div>
          </div>
        )}

        <div className="h-10"></div>
      </main>
    </div>
  );
};

export default DeepAnalysisView;
