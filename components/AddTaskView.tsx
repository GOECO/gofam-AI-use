
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { analyzeTaskImage } from '../services/aiService';

const AddTaskView: React.FC = () => {
  const navigate = useNavigate();
  const [priority, setPriority] = useState('Bình thường');
  const [taskTitle, setTaskTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedImages, setSelectedImages] = useState<{data: string, mime: string}[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      // Fix: Cast Array.from(files) to File[] to avoid 'unknown' type errors for file properties and reader arguments
      (Array.from(files) as File[]).forEach(file => {
        const reader = new FileReader();
        reader.onload = (event) => {
          if (event.target?.result) {
            const base64 = (event.target.result as string).split(',')[1];
            setSelectedImages(prev => [...prev, { data: base64, mime: file.type }]);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeImage = (index: number) => {
    setSelectedImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleAiMagic = async () => {
    if (selectedImages.length === 0) return;
    setIsAiLoading(true);
    
    // Gửi ảnh đầu tiên để AI phân tích và gợi ý thông tin
    const firstImg = selectedImages[0];
    const result = await analyzeTaskImage(firstImg.data, firstImg.mime);
    
    if (result) {
      // Phân tách TITLE: ... | DESC: ... từ phản hồi của Gemini
      const titleMatch = result.match(/TITLE:\s*(.*?)(?=\s*\||DESC:|$)/i);
      const descMatch = result.match(/DESC:\s*(.*)/i);
      
      if (titleMatch) setTaskTitle(titleMatch[1].trim());
      if (descMatch) setDescription(descMatch[1].trim());
    }
    
    setIsAiLoading(false);
  };

  return (
    <div className="flex flex-col flex-1 animate-in slide-in-from-bottom duration-500 bg-background-light min-h-screen">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md px-4 py-4 flex items-center justify-between border-b border-gray-100 shadow-soft shrink-0">
        <button 
          onClick={() => navigate(-1)}
          className="flex size-10 items-center justify-center rounded-full hover:bg-black/5 active:scale-95 transition-all text-slate-900"
        >
          <span className="material-symbols-outlined text-[24px]">close</span>
        </button>
        <div className="flex flex-col items-center">
          <h2 className="text-slate-900 text-lg font-black leading-tight tracking-tight font-display uppercase">Tạo Công Việc</h2>
          <span className="text-[9px] font-black text-primary-dark uppercase tracking-widest">Khu A - Nhà Kính 1</span>
        </div>
        <button className="flex size-10 items-center justify-center rounded-full hover:bg-black/5 active:scale-95 transition-all text-primary-dark font-black text-[10px] uppercase tracking-widest">
          Lưu
        </button>
      </header>

      <div className="flex-1 overflow-y-auto p-6 space-y-8 pb-32">
        {/* ATTACHMENTS SECTION */}
        <div className="space-y-4">
          <div className="flex justify-between items-center px-1">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Hình ảnh đính kèm</label>
            {selectedImages.length > 0 && (
              <button 
                onClick={handleAiMagic}
                disabled={isAiLoading}
                className="flex items-center gap-1.5 bg-primary/10 text-primary-dark px-3 py-1.5 rounded-full border border-primary/20 text-[9px] font-black uppercase tracking-widest shadow-inner transition-all hover:bg-primary/20 active:scale-95 disabled:opacity-50"
              >
                <span className={`material-symbols-outlined text-[16px] ${isAiLoading ? 'animate-spin' : 'icon-fill'}`}>
                  {isAiLoading ? 'progress_activity' : 'auto_awesome'}
                </span>
                {isAiLoading ? 'Đang phân tích...' : 'AI Điền nhanh'}
              </button>
            )}
          </div>
          
          <div className="grid grid-cols-4 gap-3">
            {selectedImages.map((img, index) => (
              <div key={index} className="relative aspect-square rounded-2xl overflow-hidden border border-gray-100 shadow-soft group animate-in zoom-in duration-300">
                <img 
                  src={`data:${img.mime};base64,${img.data}`} 
                  className="w-full h-full object-cover" 
                  alt={`attachment-${index}`} 
                />
                <button 
                  onClick={() => removeImage(index)}
                  className="absolute top-1 right-1 size-7 bg-red-500/90 text-white rounded-lg flex items-center justify-center shadow-lg active:scale-90 transition-transform"
                >
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
              </div>
            ))}
            
            {/* THÊM ẢNH TỪ THƯ VIỆN */}
            <button 
              onClick={() => fileInputRef.current?.click()}
              className="aspect-square rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center gap-1 text-slate-300 hover:border-primary/40 hover:text-primary transition-all bg-white shadow-inner-soft active:scale-95"
            >
              <span className="material-symbols-outlined text-2xl">image</span>
              <span className="text-[7px] font-black uppercase tracking-widest text-center leading-tight">Thư viện</span>
            </button>

            {/* MỞ CAMERA QUÉT AI CHI TIẾT */}
            <button 
              onClick={() => navigate('/scan')}
              className="aspect-square rounded-2xl border-2 border-dashed border-blue-200 flex flex-col items-center justify-center gap-1 text-blue-300 hover:border-blue-400 hover:text-blue-500 transition-all bg-blue-50/30 shadow-inner-soft active:scale-95"
            >
              <span className="material-symbols-outlined text-2xl">qr_code_scanner</span>
              <span className="text-[7px] font-black uppercase tracking-widest text-center leading-tight">Quét AI</span>
            </button>
          </div>
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileChange} 
            className="hidden" 
            accept="image/*" 
            multiple 
          />
          <p className="text-[9px] text-slate-400 italic px-1">* Mẹo: Quét AI chi tiết để phát hiện sâu bệnh và nấm lá chính xác hơn.</p>
        </div>

        {/* TASK NAME */}
        <div className="space-y-3">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Tên công việc</label>
          <input 
            type="text" 
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            placeholder="VD: Phun thuốc phòng nấm..."
            className="w-full h-16 px-6 bg-white rounded-[2rem] border border-gray-100 shadow-soft text-sm font-bold text-slate-900 focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all placeholder:text-slate-300"
          />
        </div>

        {/* ASSIGNEE */}
        <div className="space-y-3">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Người thực hiện</label>
          <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
            {[
              { id: 1, name: 'Tất cả', icon: 'groups' },
              { id: 2, name: 'Nam', img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=100&auto=format&fit=crop' },
              { id: 3, name: 'An', img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop' },
              { id: 4, name: 'Bích', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop' },
            ].map(user => (
              <button key={user.id} className="flex flex-col items-center gap-2 group shrink-0">
                <div className={`size-14 rounded-[1.5rem] border-2 flex items-center justify-center overflow-hidden transition-all ${user.id === 2 ? 'border-primary shadow-glow' : 'border-gray-100'}`}>
                  {user.img ? (
                    <img src={user.img} className="w-full h-full object-cover" alt={user.name} />
                  ) : (
                    <span className="material-symbols-outlined text-slate-400">{user.icon}</span>
                  )}
                </div>
                <span className={`text-[10px] font-black uppercase tracking-widest ${user.id === 2 ? 'text-primary-dark' : 'text-slate-400'}`}>{user.name}</span>
              </button>
            ))}
            <button className="flex flex-col items-center gap-2 group shrink-0">
              <div className="size-14 rounded-[1.5rem] border-2 border-dashed border-gray-200 flex items-center justify-center text-slate-300 hover:border-primary/40 hover:text-primary transition-all">
                <span className="material-symbols-outlined">add</span>
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">Thêm</span>
            </button>
          </div>
        </div>

        {/* PRIORITY */}
        <div className="space-y-3">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Mức độ ưu tiên</label>
          <div className="flex p-1.5 bg-gray-100 rounded-[2rem]">
            {['Thấp', 'Bình thường', 'Khẩn cấp'].map(p => (
              <button 
                key={p}
                onClick={() => setPriority(p)}
                className={`flex-1 py-3 rounded-[1.5rem] text-[10px] font-black uppercase tracking-widest transition-all ${
                  priority === p 
                    ? 'bg-white shadow-md text-slate-900 border border-gray-100' 
                    : 'text-slate-400'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* DATE & TIME */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-3">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Ngày bắt đầu</label>
            <div className="h-14 bg-white rounded-2xl border border-gray-100 shadow-soft flex items-center px-4 gap-3">
              <span className="material-symbols-outlined text-slate-400 text-[20px]">calendar_today</span>
              <span className="text-xs font-bold text-slate-900">24/10/2023</span>
            </div>
          </div>
          <div className="space-y-3">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Thời gian</label>
            <div className="h-14 bg-white rounded-2xl border border-gray-100 shadow-soft flex items-center px-4 gap-3">
              <span className="material-symbols-outlined text-slate-400 text-[20px]">schedule</span>
              <span className="text-xs font-bold text-slate-900">08:00 AM</span>
            </div>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="space-y-3">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Ghi chú chi tiết</label>
          <textarea 
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Nhập mô tả công việc, lưu ý kỹ thuật..."
            className="w-full p-6 bg-white rounded-[2rem] border border-gray-100 shadow-soft text-sm font-bold text-slate-900 focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all placeholder:text-slate-300 resize-none"
          ></textarea>
        </div>
      </div>

      {/* FOOTER BUTTON */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto p-6 bg-white/95 backdrop-blur-xl border-t border-gray-100 flex gap-4 z-50">
        <button 
          onClick={() => navigate(-1)}
          className="flex-1 py-4 px-6 rounded-2xl bg-gray-50 text-slate-400 text-[10px] font-black uppercase tracking-widest hover:bg-gray-100 transition-all"
        >
          Hủy bỏ
        </button>
        <button className="flex-[2] py-4 px-6 rounded-2xl bg-primary text-slate-900 text-[10px] font-black uppercase tracking-widest shadow-glow shadow-primary/30 hover:bg-primary-dark transition-all active:scale-95 border border-primary-dark/10">
          Tạo công việc
        </button>
      </div>
    </div>
  );
};

export default AddTaskView;
