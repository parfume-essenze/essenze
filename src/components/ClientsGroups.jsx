import React, { useState } from 'react';
import { 
  Plus, 
  Search,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  X
} from 'lucide-react';

const mockGroups = [
  { id: 1, name: 'По умолчанию (Standard)', discount: '0%', rules: 'Нет условий', clientCount: 154 },
  { id: 2, name: 'VIP', discount: '10%', rules: 'Сумма покупок > 10 000 000 UZS', clientCount: 12 },
  { id: 3, name: 'Family', discount: '15%', rules: 'Ручное добавление', clientCount: 8 },
  { id: 4, name: 'Gold', discount: '5%', rules: 'Сумма покупок > 5 000 000 UZS', clientCount: 45 },
];

const GroupCreateDrawer = ({ isOpen, onClose }) => {
  return (
    <>
      <div className={`drawer-overlay ${isOpen ? 'open' : ''}`} onClick={onClose} />
      
      <div className={`drawer right ${isOpen ? 'open' : ''}`} style={{ width: '450px' }}>
        <div className="drawer-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 30px', borderBottom: '1px solid var(--border-color)' }}>
          <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 600 }}>Новая группа</h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
            <X size={24} />
          </button>
        </div>

        <div className="drawer-content" style={{ padding: '30px', overflowY: 'auto', height: 'calc(100vh - 140px)' }}>
          <div className="form-group" style={{ marginBottom: '20px' }}>
            <label>НАЗВАНИЕ ГРУППЫ <span style={{color: 'red'}}>*</span></label>
            <input type="text" className="form-control" placeholder="Например: VIP" />
          </div>

          <div className="form-group" style={{ marginBottom: '20px' }}>
            <label>СКИДКА (%)</label>
            <input type="number" className="form-control" placeholder="0" />
            <span style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '5px', display: 'block' }}>
              Размер скидки, который будет применяться для клиентов этой группы.
            </span>
          </div>

          <div className="form-group" style={{ marginBottom: '20px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
              <input type="checkbox" style={{ width: '18px', height: '18px' }} />
              Автоматическое присвоение
            </label>
            <span style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '5px', display: 'block', marginLeft: '28px' }}>
              Клиент будет автоматически добавлен в группу при достижении определенной суммы покупок.
            </span>
          </div>
          
          <div className="form-group" style={{ marginBottom: '20px', paddingLeft: '28px' }}>
             <label>СУММА ПОКУПОК ОТ</label>
             <input type="text" className="form-control" placeholder="0 UZS" />
          </div>

        </div>

        <div className="drawer-footer" style={{ padding: '20px 30px', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'flex-end', gap: '15px', backgroundColor: 'var(--bg-primary)' }}>
          <button className="btn btn-outline" onClick={onClose}>Отмена</button>
          <button className="btn btn-primary">Сохранить</button>
        </div>
      </div>
    </>
  );
}

const ClientsGroups = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isCreateDrawerOpen, setIsCreateDrawerOpen] = useState(false);

  return (
    <div className="finance-dashboard">
      <div className="dashboard-header" style={{ borderBottom: 'none', paddingBottom: '0' }}>
        <h1 className="dashboard-title">Группы и теги</h1>
      </div>

      <div style={{ padding: '0 30px' }}>
        <div style={{ display: 'flex', borderBottom: '1px solid var(--border-color)', marginBottom: '20px' }}>
           <div style={{ padding: '15px 20px', borderBottom: '2px solid var(--primary-color)', color: 'var(--primary-color)', fontWeight: 600, cursor: 'pointer' }}>
             Группы клиентов
           </div>
           <div style={{ padding: '15px 20px', color: 'var(--text-muted)', cursor: 'pointer' }}>
             Теги
           </div>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="toolbar" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', alignItems: 'center' }}>
          <div className="search-bar" style={{ position: 'relative', width: '300px' }}>
            <Search size={18} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#999' }} />
            <input 
              type="text" 
              placeholder="Поиск групп..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 10px 8px 35px',
                borderRadius: '6px',
                border: '1px solid var(--border-color)',
                backgroundColor: 'var(--bg-secondary)',
                outline: 'none',
                color: 'var(--text-primary)'
              }}
            />
          </div>

          <button 
            className="btn btn-primary" 
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            onClick={() => setIsCreateDrawerOpen(true)}
          >
            <Plus size={18} /> Новая группа
          </button>
        </div>

        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th style={{ width: '40px' }}><input type="checkbox" /></th>
                <th>НАЗВАНИЕ</th>
                <th>СКИДКА</th>
                <th>УСЛОВИЯ ПРИСВОЕНИЯ</th>
                <th>КЛИЕНТОВ</th>
                <th style={{ width: '40px' }}></th>
              </tr>
            </thead>
            <tbody>
              {mockGroups.map(group => (
                <tr key={group.id} className="table-row">
                  <td><input type="checkbox" /></td>
                  <td style={{ fontWeight: 500, color: 'var(--primary-color)' }}>{group.name}</td>
                  <td>{group.discount}</td>
                  <td style={{ color: 'var(--text-muted)' }}>{group.rules}</td>
                  <td>{group.clientCount}</td>
                  <td>
                    <button className="icon-btn" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pagination" style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '15px', alignItems: 'center', gap: '15px', color: 'var(--text-muted)', fontSize: '13px' }}>
          <span>1–4 из 4</span>
          <div style={{ display: 'flex', gap: '5px' }}>
            <button className="icon-btn" disabled style={{ padding: '5px', borderRadius: '4px', border: '1px solid var(--border-color)', background: 'transparent', cursor: 'not-allowed', color: 'var(--text-muted)' }}>
              <ChevronLeft size={16} />
            </button>
            <button className="icon-btn" disabled style={{ padding: '5px', borderRadius: '4px', border: '1px solid var(--border-color)', background: 'transparent', cursor: 'not-allowed', color: 'var(--text-muted)' }}>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
      
      <GroupCreateDrawer isOpen={isCreateDrawerOpen} onClose={() => setIsCreateDrawerOpen(false)} />
    </div>
  );
};

export default ClientsGroups;
