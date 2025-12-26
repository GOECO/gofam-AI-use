
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const AddTaskView: React.FC = () => {
  const navigate = useNavigate();
  const [priority, setPriority] = useState('Bình thường');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages: string[] = [];
      Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onload = (event) => {
          if (event.target?.result) {
            setSelectedImages(prev => [...prev, event.target?.result as string]);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeImage = (index: number) => {
    setSelectedImages(prev => prev.filter((_, i) => i !== index));
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
          <h2 className="text-slate-900 text-lg font-black leading-tight tracking-tight font-display">Tạo Công Việc</h2>
          <span className="text-[9px] font-black text-primary-dark uppercase tracking-widest">Khu A - Nhà Kính 1</span>
        </div>
        <button className="flex size-10 items-center justify-center rounded-full hover:bg-black/5 active:scale-95 transition-all text-primary-dark font-black text-[10px] uppercase tracking-widest">
          Lưu
        </button>
      </header>

      <div className="flex-1 overflow-y-auto p-6 space-y-8">
        {/* TASK NAME */}
        <div className="space-y-3">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Tên công việc</label>
          <input 
            type="text" 
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
            placeholder="Nhập mô tả công việc, lưu ý kỹ thuật..."
            className="w-full p-6 bg-white rounded-[2rem] border border-gray-100 shadow-soft text-sm font-bold text-slate-900 focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all placeholder:text-slate-300 resize-none"
          ></textarea>
        </div>

        {/* ATTACHMENTS */}
        <div className="space-y-3">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Hình ảnh đính kèm</label>
          <div className="grid grid-cols-4 gap-3">
            {selectedImages.map((img, index) => (
              <div key={index} className="relative aspect-square rounded-2xl overflow-hidden border border-gray-100 shadow-soft group">
                <img src={img} className="w-full h-full object-cover" alt={`attachment-${index}`} />
                <button 
                  onClick={() => removeImage(index)}
                  className="absolute top-1 right-1 size-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <span className="material-symbols-outlined text-[16px]">close</span>
                </button>
              </div>
            ))}
            
            <button 
              onClick={() => fileInputRef.current?.click()}
              className="aspect-square rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center gap-1 text-slate-300 hover:border-primary/40 hover:text-primary transition-all bg-white"
            >
              <span className="material-symbols-outlined">add_a_photo</span>
              <span className="text-[8px] font-black uppercase tracking-widest text-center">Tải ảnh</span>
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
        </div>

        <div className="h-20"></div>
      </div>

      {/* FOOTER BUTTON */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto p-6 bg-white/95 backdrop-blur-xl border-t border-gray-100 flex gap-4 z-50">
        <button 
          onClick={() => navigate(-1)}
          className="flex-1 py-4 px-6 rounded-2xl bg-gray-50 text-slate-400 text-[10px] font-black uppercase tracking-widest hover:bg-gray-100 transition-all"
        >
          Hủy bỏ
        </button>
        <button className="flex-[2] py-4 px-6 rounded-2xl bg-primary text-slate-900 text-[10px] font-black uppercase tracking-widest shadow-glow shadow-primary/30 hover:bg-primary-dark transition-all active:scale-95">
          Tạo công việc
        </button>
      </div>
    </div>
  );
};

export default AddTaskView;
