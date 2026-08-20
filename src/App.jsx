import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import FinanceDashboard from './components/FinanceDashboard';
import GoodsCatalog from './components/GoodsCatalog';
import GoodsCreate from './components/GoodsCreate';
import SalesNew from './components/SalesNew';
import CashShifts from './components/CashShifts';
import ClientsAll from './components/ClientsAll';

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
            <Route path="/sales" element={<Navigate to="/sales/new" replace />} />
            <Route path="/sales/new" element={<SalesNew />} />
            <Route path="/sales/shifts" element={<CashShifts />} />
            
            <Route path="/clients" element={<Navigate to="/clients/all" replace />} />
            <Route path="/clients/all" element={<ClientsAll />} />
            
            {/* Other routes can be added here later */}
            <Route path="*" element={<div style={{padding: 30}}>Page under construction</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
