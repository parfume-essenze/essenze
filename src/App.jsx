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

function App() {
  return (
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
            
            {/* Other routes can be added here later */}
            <Route path="*" element={<div style={{padding: 30}}>Page under construction</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
