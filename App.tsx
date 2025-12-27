
import React from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import HomeView from './components/HomeView';
import MapView from './components/MapView';
import CommunityView from './components/CommunityView';
import ContactView from './components/ContactView';
import ProfileView from './components/ProfileView';
import TimeAttendanceView from './components/TimeAttendanceView';
import AIScanView from './components/AIScanView';
import NotificationView from './components/NotificationView';
import RegionListView from './components/RegionListView';
import FarmingLogView from './components/FarmingLogView';
import InventoryView from './components/InventoryView';
import WeatherView from './components/WeatherView';
import YieldReportView from './components/YieldReportView';
import InvestmentView from './components/InvestmentView';
import RegionDetailView from './components/RegionDetailView';
import AddTaskView from './components/AddTaskView';
import DiagnosisResultView from './components/DiagnosisResultView';
import TaskScheduleView from './components/TaskScheduleView';
import VirtualFarmView from './components/VirtualFarmView';
import ProductDetailView from './components/ProductDetailView';
import MarketView from './components/MarketView';
import CheckoutView from './components/CheckoutView';
import SellProductView from './components/SellProductView';
import CartView from './components/CartView';
import OrderManagementView from './components/OrderManagementView';
import OrderDetailView from './components/OrderDetailView';
import OptimizationView from './components/OptimizationView';
import OptimizationResultView from './components/OptimizationResultView';
import AILabView from './components/AILabView';
import CreativeStudio from './components/CreativeStudio';
import LiveConversation from './components/LiveConversation';
import DeepAnalysisView from './components/DeepAnalysisView';
import AdoptView from './components/AdoptView';
import AdoptDetailView from './components/AdoptDetailView';
import MissionListView from './components/MissionListView';
import AddRegionView from './components/AddRegionView';

const BottomNav: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  // Danh sách các route sẽ ẩn thanh điều hướng dưới cùng
  const hideNav = path === '/scan' || 
                  path.startsWith('/region/') || 
                  path === '/add-task' || 
                  path === '/add-region' ||
                  path.startsWith('/diagnosis/') || 
                  path === '/tasks' || 
                  path === '/inventory' || 
                  path.startsWith('/product/') || 
                  path === '/checkout' || 
                  path === '/sell' || 
                  path === '/cart' || 
                  path === '/orders' || 
                  path.startsWith('/order/') || 
                  path === '/optimization' || 
                  path.startsWith('/optimization-result') || 
                  path === '/studio' || 
                  path === '/live' || 
                  path === '/analysis' || 
                  path.startsWith('/adopt/') ||
                  path === '/missions';

  if (hideNav) return null;

  const navItems = [
    { path: '/', label: 'Trang chủ', icon: 'home' },
    { path: '/adopt', label: 'Nhận nuôi', icon: 'spa' },
    { path: '/scan', label: 'Quét AI', icon: 'qr_code_scanner', center: true },
    { path: '/market', label: 'Chợ GOFAM', icon: 'storefront' },
    { path: '/profile', label: 'Cá nhân', icon: 'person' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-gray-100 dark:border-slate-800 flex items-center justify-around px-2 pb-8 pt-3 shadow-[0_-10px_40px_rgba(0,0,0,0.06)] max-w-md mx-auto">
      {navItems.map((item) => {
        // Cải thiện logic isActive để nhận diện chính xác các route con (trừ trang chủ '/')
        const isActive = item.path === '/' ? path === '/' : path.startsWith(item.path);
        
        if (item.center) {
          return (
            <div key={item.path} className="flex items-center justify-center -mt-12">
              <Link 
                to={item.path} 
                className="size-16 rounded-[2.2rem] bg-primary flex items-center justify-center text-slate-900 shadow-glow shadow-primary/40 border-4 border-white dark:border-slate-900 active:scale-90 transition-all group"
              >
                <span className="material-symbols-outlined text-[32px] icon-fill group-hover:scale-110 transition-transform">{item.icon}</span>
              </Link>
            </div>
          );
        }

        return (
          <Link 
            key={item.path}
            to={item.path} 
            className={`flex flex-col items-center gap-1 min-w-[64px] transition-all ${isActive ? 'text-primary-dark dark:text-primary scale-105' : 'text-slate-400 hover:text-slate-600'}`}
          >
            <span className={`material-symbols-outlined text-[26px] ${isActive ? 'icon-fill' : ''}`}>{item.icon}</span>
            <span className={`text-[10px] font-black uppercase tracking-tighter ${isActive ? 'opacity-100' : 'opacity-60'}`}>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="max-w-md mx-auto bg-white dark:bg-slate-950 min-h-screen relative flex flex-col shadow-2xl overflow-x-hidden">
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/map" element={<MapView />} />
          <Route path="/community" element={<CommunityView />} />
          <Route path="/contact" element={<ContactView />} />
          <Route path="/profile" element={<ProfileView />} />
          <Route path="/attendance" element={<TimeAttendanceView />} />
          <Route path="/scan" element={<AIScanView />} />
          <Route path="/notifications" element={<NotificationView />} />
          <Route path="/regions" element={<RegionListView />} />
          <Route path="/region/:id" element={<RegionDetailView />} />
          <Route path="/add-region" element={<AddRegionView />} />
          <Route path="/diagnosis/:id" element={<DiagnosisResultView />} />
          <Route path="/logs" element={<FarmingLogView />} />
          <Route path="/inventory" element={<InventoryView />} />
          <Route path="/weather" element={<WeatherView />} />
          <Route path="/reports" element={<YieldReportView />} />
          <Route path="/investment" element={<InvestmentView />} />
          <Route path="/add-task" element={<AddTaskView />} />
          <Route path="/tasks" element={<TaskScheduleView />} />
          <Route path="/virtual-farm" element={<VirtualFarmView />} />
          <Route path="/product/:id" element={<ProductDetailView />} />
          <Route path="/market" element={<MarketView />} />
          <Route path="/checkout" element={<CheckoutView />} />
          <Route path="/sell" element={<SellProductView />} />
          <Route path="/cart" element={<CartView />} />
          <Route path="/orders" element={<OrderManagementView />} />
          <Route path="/order/:id" element={<OrderDetailView />} />
          <Route path="/optimization" element={<OptimizationView />} />
          <Route path="/optimization-result/:id" element={<OptimizationResultView />} />
          <Route path="/lab" element={<AILabView />} />
          <Route path="/studio" element={<CreativeStudio />} />
          <Route path="/live" element={<LiveConversation />} />
          <Route path="/analysis" element={<DeepAnalysisView />} />
          <Route path="/adopt" element={<AdoptView />} />
          <Route path="/adopt/:id" element={<AdoptDetailView />} />
          <Route path="/missions" element={<MissionListView />} />
        </Routes>
        <BottomNav />
      </div>
    </HashRouter>
  );
};

export default App;
