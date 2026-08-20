import React, { useState } from 'react';
import { Plus, Search, MoreVertical, X } from 'lucide-react';

const mockSuppliers = [
  { id: 1, name: 'Essenza', phone: '+998 90 000 00 01', balance: '0 UZS' },
  { id: 2, name: 'OKIII Flakon', phone: '+998 90 000 00 02', balance: '12 500 000 UZS' },
  { id: 3, name: 'Misk', phone: '+998 90 000 00 03', balance: '-500 000 UZS' }
];

const SupplierCreateDrawer = ({ isOpen, onClose }) => {
  return (
    <>
      <div className={`drawer-overlay ${isOpen ? 'open' : ''}`} onClick={onClose} />
      
      <div className={`drawer right ${isOpen ? 'open' : ''}`} style={{ width: '450px' }}>
        <div className="drawer-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 30px', borderBottom: '1px solid var(--border-color)' }}>
          <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 600 }}>Новый поставщик</h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
            <X size={24} />
          </button>
        </div>

        <div className="drawer-content" style={{ padding: '30px', overflowY: 'auto', height: 'calc(100vh - 140px)' }}>
          <div className="form-group" style={{ marginBottom: '20px' }}>
            <label>НАИМЕНОВАНИЕ <span style={{color: 'red'}}>*</span></label>
            <input type="text" className="form-control" placeholder="Название компании или имя" />
          </div>

          <div className="form-group" style={{ marginBottom: '20px' }}>
            <label>НОМЕР ТЕЛЕФОНА</label>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ padding: '10px 15px', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRight: 'none', borderTopLeftRadius: '6px', borderBottomLeftRadius: '6px' }}>
                +998
              </div>
              <input type="text" className="form-control" placeholder="90 123 45 67" style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }} />
            </div>
          </div>
          
          <div className="form-group" style={{ marginBottom: '20px' }}>
            <label>ОПИСАНИЕ / ЗАМЕТКИ</label>
            <textarea className="form-control" placeholder="Дополнительная информация о поставщике" rows={4}></textarea>
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

const GoodsSuppliers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isCreateDrawerOpen, setIsCreateDrawerOpen] = useState(false);

  return (
    <div className="finance-dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Поставщики</h1>
      </div>

      <div className="dashboard-content" style={{ marginTop: '20px' }}>
        <div className="toolbar" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', alignItems: 'center' }}>
          <div className="search-bar" style={{ position: 'relative', width: '300px' }}>
            <Search size={18} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#999' }} />
            <input 
              type="text" 
              placeholder="Поиск поставщика..." 
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
            <Plus size={18} /> Новый поставщик
          </button>
        </div>

        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th style={{ width: '40px' }}><input type="checkbox" /></th>
                <th>ПОСТАВЩИК</th>
                <th>ТЕЛЕФОН</th>
                <th>БАЛАНС ДОЛГА</th>
                <th style={{ width: '40px' }}></th>
              </tr>
            </thead>
            <tbody>
              {mockSuppliers.map(supplier => (
                <tr key={supplier.id} className="table-row">
                  <td><input type="checkbox" /></td>
                  <td style={{ fontWeight: 500, color: 'var(--primary-color)' }}>{supplier.name}</td>
                  <td>{supplier.phone}</td>
                  <td style={{ color: supplier.balance.includes('-') ? '#ef4444' : supplier.balance !== '0 UZS' ? '#10b981' : 'inherit' }}>
                    {supplier.balance}
                  </td>
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
      </div>
      
      <SupplierCreateDrawer isOpen={isCreateDrawerOpen} onClose={() => setIsCreateDrawerOpen(false)} />
    </div>
  );
};

export default GoodsSuppliers;
