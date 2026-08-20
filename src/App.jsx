import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import FinanceDashboard from './components/FinanceDashboard';
import GoodsCatalog from './components/GoodsCatalog';
import GoodsCreate from './components/GoodsCreate';
import GoodsImport from './components/GoodsImport';
import GoodsOrders from './components/GoodsOrders';
import GoodsInventory from './components/GoodsInventory';
import GoodsTransfer from './components/GoodsTransfer';
import GoodsRepricing from './components/GoodsRepricing';
import GoodsWriteoff from './components/GoodsWriteoff';
import GoodsSuppliers from './components/GoodsSuppliers';
import SalesNew from './components/SalesNew';
import SalesAll from './components/SalesAll';
import CashShifts from './components/CashShifts';
import CashOperations from './components/CashOperations';
import ClientsAll from './components/ClientsAll';
import ClientsGroups from './components/ClientsGroups';
import ClientsLoyalty from './components/ClientsLoyalty';
import ClientsDebts from './components/ClientsDebts';
import MarketingPromotions from './components/MarketingPromotions';
import MarketingSms from './components/MarketingSms';
import ReportsSales from './components/ReportsSales';
import ReportsGoods from './components/ReportsGoods';
import ReportsEmployees from './components/ReportsEmployees';
import Financing from './components/Financing';
import ManagementEmployees from './components/ManagementEmployees';
import ManagementShops from './components/ManagementShops';
import ManagementRoles from './components/ManagementRoles';
import SettingsGeneral from './components/SettingsGeneral';
import SettingsReceipt from './components/SettingsReceipt';
import SettingsIntegrations from './components/SettingsIntegrations';

function IntroVideo({ onFinish }) {
  const videoRef = useRef(null);
  const [phase, setPhase] = useState('splash'); // 'splash' | 'video' | 'done'
  const [fadeOut, setFadeOut] = useState(false);

  const handleSplashClick = () => {
    setPhase('video');
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.muted = false;
        videoRef.current.volume = 1;
        videoRef.current.play().catch(() => {});
      }
    }, 50);
  };

  const handleEnd = () => {
    setFadeOut(true);
    setTimeout(() => onFinish(), 800);
  };

  const handleSkip = (e) => {
    e.stopPropagation();
    setFadeOut(true);
    setTimeout(() => onFinish(), 800);
  };

  // Splash screen
  if (phase === 'splash') {
    return (
      <div
        onClick={handleSplashClick}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          background: 'radial-gradient(ellipse at center, #0a0a1a 0%, #000 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          userSelect: 'none',
        }}
      >
        {/* Animated glow rings */}
        <div style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.06)',
          animation: 'pulse-ring 3s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.1)',
          animation: 'pulse-ring 3s ease-in-out infinite 0.5s',
        }} />
        <div style={{
          position: 'absolute',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.15)',
          animation: 'pulse-ring 3s ease-in-out infinite 1s',
        }} />

        {/* Logo / Brand */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          zIndex: 1,
        }}>
          <div style={{
            fontSize: '5rem',
            fontWeight: '800',
            letterSpacing: '0.3em',
            color: '#fff',
            textTransform: 'uppercase',
            fontFamily: '"Georgia", serif',
            textShadow: '0 0 60px rgba(255,255,255,0.3)',
          }}>
            ESSENZE
          </div>
          <div style={{
            width: '60px',
            height: '1px',
            background: 'rgba(255,255,255,0.4)',
          }} />
          <div style={{
            fontSize: '0.85rem',
            letterSpacing: '0.4em',
            color: 'rgba(255,255,255,0.5)',
            textTransform: 'uppercase',
          }}>
            Premium Parfumeria
          </div>
        </div>

        {/* Click prompt */}
        <div style={{
          position: 'absolute',
          bottom: '60px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          animation: 'fade-bounce 2s ease-in-out infinite',
        }}>
          <div style={{
            fontSize: '0.8rem',
            letterSpacing: '0.3em',
            color: 'rgba(255,255,255,0.45)',
            textTransform: 'uppercase',
          }}>
            Bosing
          </div>
          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.2rem' }}>↓</div>
        </div>

        <style>{`
          @keyframes pulse-ring {
            0%, 100% { transform: scale(1); opacity: 0.5; }
            50% { transform: scale(1.05); opacity: 1; }
          }
          @keyframes fade-bounce {
            0%, 100% { opacity: 0.4; transform: translateY(0); }
            50% { opacity: 1; transform: translateY(6px); }
          }
        `}</style>
      </div>
    );
  }

  // Video screen
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#000',
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 0.8s ease',
      }}
    >
      <video
        ref={videoRef}
        src="/video.mp4"
        onEnded={handleEnd}
        autoPlay
        playsInline
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
      />
      {/* Skip button */}
      <button
        onClick={handleSkip}
        style={{
          position: 'absolute',
          bottom: '40px',
          right: '48px',
          background: 'rgba(255,255,255,0.15)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255,255,255,0.3)',
          color: '#fff',
          padding: '10px 28px',
          borderRadius: '32px',
          fontSize: '0.95rem',
          fontWeight: '600',
          cursor: 'pointer',
          letterSpacing: '0.5px',
        }}
        onMouseEnter={e => e.target.style.background = 'rgba(255,255,255,0.28)'}
        onMouseLeave={e => e.target.style.background = 'rgba(255,255,255,0.15)'}
      >
        O'tkazib yuborish ›
      </button>
    </div>
  );
}

function App() {
  const [showIntro, setShowIntro] = useState(true);


  return (
    <>
      {showIntro && <IntroVideo onFinish={() => setShowIntro(false)} />}
      <Router>
        <div id="app-layout" style={{ display: 'flex', height: '100vh', width: '100vw' }}>
          <Sidebar />
          <main className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/finance" replace />} />
            <Route path="/finance" element={<FinanceDashboard />} />
            <Route path="/goods" element={<Navigate to="/goods/catalog" replace />} />
            <Route path="/goods/catalog" element={<GoodsCatalog />} />
            <Route path="/goods/create" element={<GoodsCreate />} />
            <Route path="/goods/import" element={<GoodsImport />} />
            <Route path="/goods/orders" element={<GoodsOrders />} />
            <Route path="/goods/inventory" element={<GoodsInventory />} />
            <Route path="/goods/transfer" element={<GoodsTransfer />} />
            <Route path="/goods/repricing" element={<GoodsRepricing />} />
            <Route path="/goods/writeoff" element={<GoodsWriteoff />} />
            <Route path="/goods/suppliers" element={<GoodsSuppliers />} />
            
            <Route path="/sales" element={<Navigate to="/sales/new" replace />} />
            <Route path="/sales/new" element={<SalesNew />} />
            <Route path="/sales/all" element={<SalesAll />} />
            <Route path="/sales/shifts" element={<CashShifts />} />
            <Route path="/sales/operations" element={<CashOperations />} />
            
            <Route path="/clients" element={<Navigate to="/clients/all" replace />} />
            <Route path="/clients/all" element={<ClientsAll />} />
            <Route path="/clients/groups" element={<ClientsGroups />} />
            <Route path="/clients/loyalty" element={<ClientsLoyalty />} />
            <Route path="/clients/debts" element={<ClientsDebts />} />

            <Route path="/marketing" element={<Navigate to="/marketing/promotions" replace />} />
            <Route path="/marketing/promotions" element={<MarketingPromotions />} />
            <Route path="/marketing/sms" element={<MarketingSms />} />

            <Route path="/reports" element={<Navigate to="/reports/sales" replace />} />
            <Route path="/reports/sales" element={<ReportsSales />} />
            <Route path="/reports/goods" element={<ReportsGoods />} />
            <Route path="/reports/employees" element={<ReportsEmployees />} />

            <Route path="/financing" element={<Navigate to="/financing/manage" replace />} />
            <Route path="/financing/manage" element={<Financing />} />

            <Route path="/management" element={<Navigate to="/management/employees" replace />} />
            <Route path="/management/employees" element={<ManagementEmployees />} />
            <Route path="/management/shops" element={<ManagementShops />} />
            <Route path="/management/roles" element={<ManagementRoles />} />

            <Route path="/settings" element={<Navigate to="/settings/general" replace />} />
            <Route path="/settings/general" element={<SettingsGeneral />} />
            <Route path="/settings/receipt" element={<SettingsReceipt />} />
            <Route path="/settings/integrations" element={<SettingsIntegrations />} />
            
            {/* Other routes can be added here later */}
            <Route path="*" element={<div style={{padding: 30}}>Page under construction</div>} />
          </Routes>
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;
