import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { 
  Package, 
  ShoppingCart, 
  Users, 
  Megaphone, 
  PieChart, 
  FileText, 
  Briefcase, 
  Layers, 
  Settings,
  HelpCircle,
  ChevronLeft
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const isGoodsSection = location.pathname.startsWith('/goods');
  const isSalesSection = location.pathname.startsWith('/sales');

  if (location.pathname === '/goods/create') {
    return null;
  }

  const mainMenu = [
    { name: 'Товары', icon: <Package size={18} />, path: '/goods' },
    { name: 'Продажи', icon: <ShoppingCart size={18} />, path: '/sales' },
    { name: 'Клиенты', icon: <Users size={18} />, path: '/clients' },
    { name: 'Маркетинг', icon: <Megaphone size={18} />, path: '/marketing' },
    { name: 'Отчеты', icon: <PieChart size={18} />, path: '/reports' },
    { name: 'Финансы', icon: <FileText size={18} />, path: '/finance' },
    { name: 'Финансирование', icon: <Briefcase size={18} />, path: '/financing' },
    { name: 'Управление', icon: <Layers size={18} />, path: '/management' },
    { name: 'Настройки', icon: <Settings size={18} />, path: '/settings' },
  ];

  const goodsMenu = [
    { name: 'Каталог', path: '/goods/catalog' },
    { name: 'Импорт', path: '/goods/import' },
    { name: 'Заказы', path: '/goods/orders' },
    { name: 'Инвентаризация', path: '/goods/inventory' },
    { name: 'Трансфер', path: '/goods/transfer' },
    { name: 'Переоценка', path: '/goods/repricing' },
    { name: 'Списание', path: '/goods/writeoff' },
    { name: 'Поставщики', path: '/goods/suppliers' },
  ];

  const salesMenu = [
    { name: 'Новая продажа', path: '/sales/new' },
    { name: 'Все продажи', path: '/sales/all' },
    { name: 'Кассовые смены', path: '/sales/shifts' },
    { name: 'Кассовые операции', path: '/sales/operations' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="brand">
          <div className="brand-icon">E</div>
          <span>E S S E N Z E</span>
        </div>
        <div style={{color: 'var(--text-muted)', cursor: 'pointer'}}>«</div>
      </div>
      
      <nav className="sidebar-nav">
        {isGoodsSection ? (
          <>
            <div 
              className="nav-item back-btn" 
              onClick={() => navigate('/finance')}
              style={{ color: 'var(--text-muted)' }}
            >
              <div className="nav-item-left">
                <span className="nav-icon"><ChevronLeft size={18} /></span>
                Товары
              </div>
            </div>
            
            <div className="submenu">
              {goodsMenu.map((item, index) => (
                <NavLink 
                  to={item.path} 
                  key={index}
                  className={({ isActive }) => isActive ? 'submenu-item active' : 'submenu-item'}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </>
        ) : isSalesSection ? (
          <>
            <div 
              className="nav-item back-btn" 
              onClick={() => navigate('/finance')}
              style={{ color: 'var(--text-muted)' }}
            >
              <div className="nav-item-left">
                <span className="nav-icon"><ChevronLeft size={18} /></span>
                Продажи
              </div>
            </div>
            
            <div className="submenu">
              {salesMenu.map((item, index) => (
                <NavLink 
                  to={item.path} 
                  key={index}
                  className={({ isActive }) => isActive ? 'submenu-item active' : 'submenu-item'}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </>
        ) : (
          mainMenu.map((item, index) => (
            <NavLink 
              to={item.path} 
              key={index}
              className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
            >
              <div className="nav-item-left">
                <span className="nav-icon">{item.icon}</span>
                {item.name}
              </div>
              <span style={{color: 'var(--border-color)'}}>›</span>
            </NavLink>
          ))
        )}
      </nav>

      <div className="sidebar-footer">
        <div className="user-profile" style={{marginBottom: '20px'}}>
          <div className="avatar">AX</div>
          <div className="user-info">
            <span className="user-name">Abdulloho'ja X.</span>
            <span className="user-role">Aromallure</span>
          </div>
        </div>
        
        <div style={{
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px', 
          color: 'var(--text-muted)', 
          fontSize: '0.85rem',
          cursor: 'pointer',
          padding: '10px 0'
        }}>
          <HelpCircle size={16} />
          Написать в поддержку
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
