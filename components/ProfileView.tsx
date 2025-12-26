
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';

const ProfileView: React.FC = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [profileImage, setProfileImage] = useState('https://picsum.photos/seed/user/150/150');

  const chartData = [
    { name: 'T2', value: 40 },
    { name: 'T3', value: 70 },
    { name: 'T4', value: 95 },
    { name: 'T5', value: 85 },
    { name: 'T6', value: 100 },
    { name: 'T7', value: 90 },
    { name: 'CN', value: 20 },
  ];

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setProfileImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col flex-1 animate-in slide-in-from-right duration-300 pb-10">
      <div className="bg-gradient-to-b from-primary/10 to-transparent pt-12 pb-8 flex flex-col items-center">
        <div className="relative mb-4">
          <div className="size-32 rounded-[2.5rem] overflow-hidden border-[6px] border-white shadow-2xl bg-gray-100">
            <img 
              src={profileImage} 
              alt="Profile" 
              className="w-full h-full object-cover transition-all duration-500" 
            />
          </div>
          <button 
            onClick={handleImageClick}
            className="absolute -bottom-2 -right-2 size-10 bg-primary rounded-2xl flex items-center justify-center text-black shadow-lg shadow-primary/20 border-2 border-white active:scale-90 transition-transform group"
          >
            <span className="material-symbols-outlined text-[22px] group-hover:rotate-12 transition-transform">photo_camera</span>
          </button>
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileChange} 
            accept="image/*" 
            className="hidden" 
          />
        </div>
        <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-1">Nguyễn Văn Nam</h2>
        <div className="flex items-center gap-2 bg-slate-900 text-white px-4 py-1.5 rounded-full shadow-lg">
          <span className="material-symbols-outlined text-[18px] text-primary">verified</span>
          <span className="text-xs font-black uppercase tracking-widest">Nông dân Pro</span>
        </div>
      </div>

      <div className="px-5 space-y-6">
        {/* QUICK MENU */}
        <div className="grid grid-cols-2 gap-4">
           <button 
             onClick={() => navigate('/orders')}
             className="bg-white rounded-[2rem] p-6 shadow-soft border border-gray-100 flex flex-col items-center gap-3 active:scale-95 transition-all group"
           >
              <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary-dark group-hover:bg-primary group-hover:text-slate-900 transition-colors">
                 <span className="material-symbols-outlined text-[32px]">shopping_bag</span>
              </div>
              <span className="text-[11px] font-black uppercase tracking-widest text-slate-900">Đơn hàng</span>
           </button>
           <button className="bg-white rounded-[2rem] p-6 shadow-soft border border-gray-100 flex flex-col items-center gap-3 active:scale-95 transition-all group">
              <div className="size-14 rounded-2xl bg-info/10 flex items-center justify-center text-info group-hover:bg-info group-hover:text-white transition-colors">
                 <span className="material-symbols-outlined text-[32px]">payments</span>
              </div>
              <span className="text-[11px] font-black uppercase tracking-widest text-slate-900">Ví GOFAM</span>
           </button>
        </div>

        <div className="bg-white rounded-[2rem] p-6 shadow-soft border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-black text-slate-900 tracking-tight">Chấm công tháng 10</h3>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">24 / 26 ngày hoàn thành</p>
            </div>
            <div className="size-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
              <span className="material-symbols-outlined text-[32px]">calendar_today</span>
            </div>
          </div>
          <div className="h-40 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 800, fill: '#94a3b8'}} />
                <Bar dataKey="value" radius={[6, 6, 6, 6]} barSize={20}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.value > 80 ? '#13ec49' : (entry.value > 50 ? '#fbbf24' : '#f87171')} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-slate-900 text-white rounded-[2rem] p-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 size-40 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
          <div className="flex items-start gap-4 mb-6 relative z-10">
            <div className="size-12 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined text-[28px] icon-fill">auto_awesome</span>
            </div>
            <div>
              <h4 className="text-sm font-black text-primary uppercase tracking-widest mb-1">Gợi ý từ AI</h4>
              <p className="text-sm font-medium leading-relaxed">"Hiệu suất tuần này của bác rất tốt! Hãy duy trì lượng nước tưới như hiện tại cho khu vực A."</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 relative z-10">
            <div className="bg-white/10 rounded-2xl p-4 border border-white/5 flex flex-col justify-between h-32">
              <span className="text-xs font-black text-primary tracking-wider uppercase">Nhiệm vụ</span>
              <div>
                <p className="text-3xl font-black leading-none">15</p>
                <p className="text-[10px] text-white/60 font-bold uppercase mt-1">Hoàn thành</p>
              </div>
            </div>
            <div className="bg-white/10 rounded-2xl p-4 border border-white/5 flex flex-col justify-between h-32">
              <span className="text-xs font-black text-primary tracking-wider uppercase">Hiệu quả</span>
              <div>
                <p className="text-3xl font-black leading-none">98%</p>
                <p className="text-[10px] text-white/60 font-bold uppercase mt-1">Mục tiêu quý</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-6"></div>
    </div>
  );
};

export default ProfileView;
