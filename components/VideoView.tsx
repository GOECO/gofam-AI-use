
import React, { useState } from 'react';

const VideoView: React.FC = () => {
  const [activeTab, setActiveTab] = useState('tech');

  const videoList = [
    { id: '1', title: 'Hướng dẫn cắt tỉa cà phê hiệu quả', author: 'Kỹ sư Nam', date: '2 ngày trước', views: '1.2k', img: 'https://picsum.photos/seed/p1/400/225' },
    { id: '2', title: 'Phòng trừ rệp sáp trong mùa mưa', author: 'Dr. Farm', date: '5 ngày trước', views: '3.5k', img: 'https://picsum.photos/seed/p2/400/225' },
    { id: '3', title: 'Webinar: Nông nghiệp hữu cơ 4.0', author: 'GOFAM Expert', date: '1 tuần trước', views: '8.2k', img: 'https://picsum.photos/seed/p3/400/225' },
    { id: '4', title: 'Cách lắp đặt hệ thống tưới nhỏ giọt', author: 'Team Kỹ thuật', date: '10 ngày trước', views: '2.1k', img: 'https://picsum.photos/seed/p4/400/225' },
  ];

  return (
    <div className="flex flex-col flex-1 animate-in slide-in-from-right duration-300">
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md px-5 py-4 border-b border-gray-100">
        <h2 className="text-xl font-black text-slate-900 tracking-tight mb-4 uppercase">Thư viện Video</h2>
        <div className="flex bg-gray-100 p-1.5 rounded-2xl gap-2">
          <button 
            onClick={() => setActiveTab('tech')}
            className={`flex-1 py-2.5 text-xs font-black rounded-xl transition-all ${activeTab === 'tech' ? 'bg-white shadow-md text-slate-900' : 'text-slate-500'}`}
          >Kỹ thuật</button>
          <button 
            onClick={() => setActiveTab('live')}
            className={`flex-1 py-2.5 text-xs font-black rounded-xl transition-all ${activeTab === 'live' ? 'bg-white shadow-md text-red-600' : 'text-slate-500'}`}
          >Live</button>
          <button 
            onClick={() => setActiveTab('replay')}
            className={`flex-1 py-2.5 text-xs font-black rounded-xl transition-all ${activeTab === 'replay' ? 'bg-white shadow-md text-slate-900' : 'text-slate-500'}`}
          >Replay</button>
        </div>
      </div>

      <div className="p-5 space-y-6">
        {videoList.map((video) => (
          <div key={video.id} className="group cursor-pointer">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-soft mb-3 border border-gray-100">
              <img src={video.img} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
              <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md text-white text-[10px] font-black px-2 py-1 rounded-lg">15:45</div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="size-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center shadow-2xl">
                  <span className="material-symbols-outlined text-white text-3xl icon-fill">play_arrow</span>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="size-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined">smart_display</span>
              </div>
              <div className="flex-1">
                <h4 className="text-base font-extrabold text-slate-900 line-clamp-2 leading-tight group-hover:text-primary-dark transition-colors">{video.title}</h4>
                <p className="text-xs text-slate-400 font-bold mt-1 uppercase tracking-wider">{video.author} • {video.date} • {video.views} xem</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoView;
