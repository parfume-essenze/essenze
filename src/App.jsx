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
  const [fadeOut, setFadeOut] = useState(false);
  const [muted, setMuted] = useState(true);
  const [started, setStarted] = useState(false);

  const handleEnd = () => {
    setFadeOut(true);
    setTimeout(() => onFinish(), 800);
  };

  const handleSkip = () => {
    setFadeOut(true);
    setTimeout(() => onFinish(), 800);
  };

  // Try to unmute and play with sound on first user interaction
  const handleUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      setMuted(false);
    }
  };

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.muted = true;
    const playPromise = vid.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setStarted(true))
        .catch(() => {
          // If autoplay blocked even muted, show a play button
          setStarted(false);
        });
    }
  }, []);

  const handleOverlayClick = () => {
    const vid = videoRef.current;
    if (!vid) return;
    if (!started) {
      vid.play().then(() => setStarted(true)).catch(() => {});
    }
    // Try to unmute on click
    try {
      vid.muted = false;
      setMuted(false);
    } catch(e) {}
  };

  return (
    <div
      onClick={handleOverlayClick}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 0.8s ease',
      }}
    >
      <video
        ref={videoRef}
        src="/video.mp4"
        onEnded={handleEnd}
        autoPlay
        muted
        playsInline
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          pointerEvents: 'none',
        }}
      />

      {/* Sound toggle hint */}
      {muted && started && (
        <div
          style={{
            position: 'absolute',
            top: '32px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(0,0,0,0.55)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.2)',
            color: '#fff',
            padding: '8px 22px',
            borderRadius: '32px',
            fontSize: '0.88rem',
            fontWeight: '500',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          🔇 Ovozni yoqish uchun ekranga bosing
        </div>
      )}

      {/* Not started: big play button */}
      {!started && (
        <div style={{
          position: 'absolute',
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.2)',
          backdropFilter: 'blur(12px)',
          border: '2px solid rgba(255,255,255,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2rem',
        }}>
          ▶
        </div>
      )}

      {/* Skip button */}
      <button
        onClick={e => { e.stopPropagation(); handleSkip(); }}
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
          transition: 'background 0.2s',
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
