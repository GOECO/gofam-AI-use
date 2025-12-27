
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddRegionView: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    type: 'Vườn',
    status: 'Đang hoạt động',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to save the new region would go here
    alert('Đã tạo khu vực mới thành công!');
    navigate('/regions');
  };

  return (
    <div className="flex flex-col flex-1 animate-in slide-in-from-bottom duration-500 bg-background-light dark:bg-background-dark min-h-screen">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-4 py-4 flex items-center justify-between border-b border-gray-100 dark:border-slate-800 shadow-soft shrink-0">
        <button 
          onClick={() => navigate(-1)}
          className="flex size-10 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 active:scale-95 transition-all text-slate-900 dark:text-white"
        >
          <span className="material-symbols-outlined text-[24px]">close</span>
        </button>
        <div className="flex flex-col items-center">
          <h2 className="text-slate-900 dark:text-white text-lg font-black leading-tight tracking-tight font-display uppercase">Thêm Khu Vực</h2>
          <span className="text-[9px] font-black text-primary-dark dark:text-primary uppercase tracking-widest">Thiết lập trang trại</span>
        </div>
        <button 
          onClick={handleSubmit}
          className="flex size-10 items-center justify-center rounded-full hover:bg-black/5 active:scale-95 transition-all text-primary-dark font-black text-[10px] uppercase tracking-widest"
        >
          Lưu
        </button>
      </header>

      <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-8 pb-32">
        {/* REGION NAME */}
        <div className="space-y-3">
          <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest px-1">Tên khu vực</label>
          <input 
            type="text" 
            required
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            placeholder="VD: Nhà kính Dâu tây Lô A1..."
            className="w-full h-16 px-6 bg-white dark:bg-card-dark rounded-[2rem] border border-gray-100 dark:border-white/5 shadow-soft text-sm font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all placeholder:text-slate-300"
          />
        </div>

        {/* REGION TYPE */}
        <div className="space-y-3">
          <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest px-1">Loại hình</label>
          <div className="grid grid-cols-2 gap-3">
            {['Vườn', 'Chuồng', 'Ao', 'Nhà kính'].map(type => (
              <button
                key={type}
                type="button"
                onClick={() => setFormData({...formData, type})}
                className={`h-14 rounded-2xl border-2 flex items-center justify-center gap-2 transition-all ${
                  formData.type === type 
                    ? 'bg-primary/10 border-primary text-primary-dark dark:text-primary shadow-glow shadow-primary/20' 
                    : 'bg-white dark:bg-card-dark border-gray-50 dark:border-white/5 text-slate-400'
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">
                  {type === 'Vườn' ? 'potted_plant' : type === 'Chuồng' ? 'pets' : type === 'Ao' ? 'phishing' : 'home_work'}
                </span>
                <span className="text-xs font-black uppercase tracking-widest">{type}</span>
              </button>
            ))}
          </div>
        </div>

        {/* INITIAL STATUS */}
        <div className="space-y-3">
          <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest px-1">Trạng thái ban đầu</label>
          <div className="flex p-1.5 bg-gray-100 dark:bg-white/5 rounded-[2rem]">
            {['Đang hoạt động', 'Cần chú ý', 'Sắp thu hoạch'].map(s => (
              <button 
                key={s}
                type="button"
                onClick={() => setFormData({...formData, status: s})}
                className={`flex-1 py-3 rounded-[1.5rem] text-[9px] font-black uppercase tracking-widest transition-all ${
                  formData.status === s 
                    ? 'bg-white dark:bg-slate-800 shadow-md text-slate-900 dark:text-white border border-gray-100 dark:border-white/5' 
                    : 'text-slate-400'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="space-y-3">
          <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest px-1">Mô tả thêm (Tùy chọn)</label>
          <textarea 
            rows={4}
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            placeholder="Mô tả giống cây, diện tích, lưu ý đặc biệt..."
            className="w-full p-6 bg-white dark:bg-card-dark rounded-[2rem] border border-gray-100 dark:border-white/5 shadow-soft text-sm font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all placeholder:text-slate-300 dark:placeholder:text-slate-600 resize-none"
          ></textarea>
        </div>
      </form>

      {/* FOOTER BUTTON */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto p-6 bg-white/95 dark:bg-background-dark/95 backdrop-blur-xl border-t border-gray-100 dark:border-white/5 flex gap-4 z-50">
        <button 
          type="button"
          onClick={() => navigate(-1)}
          className="flex-1 py-4 px-6 rounded-2xl bg-gray-50 dark:bg-white/5 text-slate-400 text-[10px] font-black uppercase tracking-widest hover:bg-gray-100 transition-all"
        >
          Hủy bỏ
        </button>
        <button 
          onClick={handleSubmit}
          className="flex-[2] py-4 px-6 rounded-2xl bg-primary text-slate-900 text-[10px] font-black uppercase tracking-widest shadow-glow shadow-primary/30 hover:bg-primary-dark transition-all active:scale-95 border border-primary-dark/10"
        >
          Xác nhận tạo
        </button>
      </div>
    </div>
  );
};

export default AddRegionView;
