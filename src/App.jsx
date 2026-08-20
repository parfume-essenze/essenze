import { useState } from 'react';
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
import IntroAnimation from './components/IntroAnimation';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && <IntroAnimation onFinish={() => setShowIntro(false)} />}

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
