
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { generateProImage, generateVeoVideo, editFarmImage } from '../services/aiService';

const CreativeStudio: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [prompt, setPrompt] = useState('');
  const [aspectRatio, setAspectRatio] = useState('1:1');
  const [size, setSize] = useState('1K');
  const [mode, setMode] = useState<'gen' | 'edit' | 'video'>('gen');
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [loadingMsg, setLoadingMsg] = useState('');
  const [productTitle, setProductTitle] = useState<string | null>(null);
  
  const [uploadedFile, setUploadedFile] = useState<{ data: string, mime: string } | null>(null);

  useEffect(() => {
    if (location.state) {
      const { prompt: initialPrompt, mode: initialMode, aspectRatio: initialRatio, title } = location.state as any;
      if (initialPrompt) setPrompt(initialPrompt);
      if (initialMode) setMode(initialMode);
      if (initialRatio) setAspectRatio(initialRatio);
      if (title) setProductTitle(title);
      
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const base64 = (reader.result as string).split(',')[1];
      setUploadedFile({ data: base64, mime: file.type });
    };
    reader.readAsDataURL(file);
  };

  const handleAction = async () => {
    if (!prompt.trim()) return;
    
    if (mode === 'video' || mode === 'gen') {
      try {
        const hasKey = await window.aistudio.hasSelectedApiKey();
        if (!hasKey) {
          await window.aistudio.openSelectKey();
        }
      } catch (err) {
        console.error("Key selection failed", err);
      }
    }

    setIsGenerating(true);
    setResult(null);

    try {
      if (mode === 'gen') {
        setLoadingMsg('Nano Banana Pro đang thiết kế hình ảnh...');
        const url = await generateProImage(prompt, aspectRatio, size);
        setResult(url);
      } else if (mode === 'video') {
        const loadingMessages = [
          'Đang khởi tạo Veo 3.1 Engine...',
          'Phân tích kịch bản quảng cáo...',
          'Đang dựng phim (720p - 16:9)...',
          'Tối ưu hóa hiệu ứng hình ảnh...',
          'Đang kết xuất video cuối cùng...'
        ];
        
        let msgIndex = 0;
        const msgInterval = setInterval(() => {
          setLoadingMsg(loadingMessages[msgIndex % loadingMessages.length]);
          msgIndex++;
        }, 5000);

        const url = await generateVeoVideo(prompt, uploadedFile || undefined, aspectRatio === '9:16' ? '9:16' : '16:9');
        clearInterval(msgInterval);
        setResult(url);
      } else {
        if (!uploadedFile) {
          alert("Vui lòng tải ảnh lên để chỉnh sửa.");
          setIsGenerating(false);
          return;
        }
        setLoadingMsg('Gemini Flash đang xử lý yêu cầu chỉnh sửa...');
        const url = await editFarmImage(uploadedFile.data, uploadedFile.mime, prompt);
        setResult(url);
      }
    } catch (e: any) {
      if (e.message?.includes("Requested entity was not found")) {
        alert("Lỗi: Không tìm thấy Key API. Vui lòng chọn lại.");
        await window.aistudio.openSelectKey();
      } else {
        alert("Có lỗi xảy ra: " + (e.message || "Lỗi hệ thống AI"));
      }
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="flex flex-col flex-1 bg-background-light min-h-screen font-sans">
      <header className="p-4 bg-white border-b flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="size-10 flex items-center justify-center rounded-full hover:bg-gray-100">
            <span className="material-symbols-outlined">close</span>
          </button>
          <div>
             <h1 className="text-base font-black uppercase tracking-tight">Creative Studio</h1>
             {productTitle && <p className="text-[8px] font-black text-primary-dark uppercase tracking-widest">Dựng phim: {productTitle}</p>}
          </div>
        </div>
        <div className="size-3 bg-primary rounded-full animate-pulse shadow-glow"></div>
      </header>

      <main className="p-5 space-y-6 pb-32 overflow-y-auto hide-scrollbar">
        {/* Mode Selector */}
        <div className="flex bg-gray-200 p-1.5 rounded-2xl gap-2 shadow-inner">
          {[
            { id: 'gen', label: 'Tạo Ảnh', icon: 'image' },
            { id: 'edit', label: 'Sửa Ảnh', icon: 'edit' },
            { id: 'video', label: 'Dựng Phim', icon: 'videocam' }
          ].map((m) => (
            <button 
              key={m.id} 
              onClick={() => { setMode(m.id as any); setResult(null); }}
              className={`flex-1 py-3 text-[10px] font-black uppercase rounded-xl transition-all flex items-center justify-center gap-2 ${mode === m.id ? 'bg-white shadow-md text-primary-dark' : 'text-slate-400'}`}
            >
              <span className="material-symbols-outlined text-[18px]">{m.icon}</span>
              {m.label}
            </button>
          ))}
        </div>

        {/* Input Form */}
        <div className="space-y-4">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Ý tưởng AI (Prompt)</label>
          <div className="relative">
            <textarea 
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full h-40 p-6 rounded-[2.5rem] bg-white shadow-soft border-gray-100 focus:ring-2 focus:ring-primary focus:border-primary text-sm font-bold placeholder:text-slate-200 leading-relaxed transition-all resize-none"
              placeholder={mode === 'video' ? "Mô tả kịch bản video quảng cáo sản phẩm..." : "Mô tả chi tiết nội dung bạn muốn thực hiện..."}
            />
            {productTitle && (
              <div className="absolute top-4 right-4 bg-primary/10 px-2 py-1 rounded-lg border border-primary/20">
                <span className="text-[8px] font-black text-primary-dark uppercase">Auto-Sync</span>
              </div>
            )}
          </div>
        </div>

        {/* Config Grid */}
        <div className="grid grid-cols-2 gap-4 animate-in slide-in-from-top-4">
          <div className="space-y-3">
            <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest px-1">Tỉ lệ khung hình</label>
            <select value={aspectRatio} onChange={(e) => setAspectRatio(e.target.value)} className="w-full h-12 rounded-xl bg-white border-gray-100 text-xs font-black shadow-soft focus:ring-primary">
              {['1:1', '9:16', '16:9', '4:3', '21:9'].map(r => <option key={r} value={r}>{r}</option>)}
            </select>
          </div>
          <div className="space-y-3">
            <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest px-1">Chất lượng</label>
            <select value={size} onChange={(e) => setSize(e.target.value)} className="w-full h-12 rounded-xl bg-white border-gray-100 text-xs font-black shadow-soft focus:ring-primary">
              {mode === 'video' ? <option value="720p">720p HD</option> : ['1K', '2K', '4K'].map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        </div>

        <button 
          onClick={handleAction}
          disabled={isGenerating || !prompt.trim()}
          className="w-full h-16 bg-primary hover:bg-primary-dark text-slate-900 rounded-[2rem] shadow-glow flex items-center justify-center gap-3 font-black uppercase tracking-widest active:scale-95 disabled:opacity-50 transition-all border border-primary-dark/10"
        >
          <span className="material-symbols-outlined">{isGenerating ? 'hourglass_empty' : 'magic_button'}</span>
          {isGenerating ? 'Đang thực thi...' : 'Kích hoạt Lab AI'}
        </button>

        {isGenerating && (
          <div className="flex flex-col items-center py-10 gap-6 animate-pulse">
            <div className="relative size-20">
              <div className="absolute inset-0 rounded-full border-4 border-primary/20"></div>
              <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
              <div className="absolute inset-4 rounded-full border-2 border-primary/10 animate-[ping_2s_infinite]"></div>
            </div>
            <div className="text-center space-y-2">
              <p className="text-xs font-black text-primary-dark uppercase tracking-[0.2em]">{loadingMsg}</p>
              <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Thời gian dự kiến: 30-60 giây</p>
            </div>
          </div>
        )}

        {result && (
          <div className="animate-in zoom-in duration-500 space-y-6 pt-4">
            <div className="flex items-center justify-between px-1">
               <h3 className="text-xs font-black uppercase text-slate-400 tracking-widest">Kết quả từ Lab AI:</h3>
               <span className="bg-primary/20 text-primary-dark text-[8px] font-black px-2 py-0.5 rounded-lg border border-primary/20 uppercase">Render Hoàn tất</span>
            </div>
            
            <div className="rounded-[3rem] overflow-hidden border-[6px] border-white shadow-deep bg-slate-950 relative aspect-video flex items-center justify-center">
              {mode === 'video' ? (
                <video src={result} controls autoPlay loop className="w-full h-full object-cover" />
              ) : (
                <img src={result} className="w-full h-full object-contain" />
              )}
            </div>

            <div className="flex gap-4">
              <button onClick={() => setResult(null)} className="flex-1 py-4 bg-gray-100 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-gray-200 transition-colors">Bỏ qua</button>
              <a href={result} download="gofam-ad-video" className="flex-[2] py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-3 shadow-lg active:scale-95 transition-transform">
                <span className="material-symbols-outlined text-[20px]">download</span>
                Tải video Marketing
              </a>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default CreativeStudio;
