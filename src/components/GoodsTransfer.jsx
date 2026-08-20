import React from 'react';
import { Plus, Search, MoreVertical } from 'lucide-react';

const GoodsTransfer = () => {
  return (
    <div className="finance-dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Трансфер товаров</h1>
      </div>

      <div className="dashboard-content" style={{ marginTop: '20px' }}>
        <div className="toolbar" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', alignItems: 'center' }}>
          <div className="search-bar" style={{ position: 'relative', width: '300px' }}>
            <Search size={18} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#999' }} />
            <input 
              type="text" 
              placeholder="Поиск трансферов..." 
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

          <button className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Plus size={18} /> Новый трансфер
          </button>
        </div>

        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>ДАТА</th>
                <th>ОТКУДА</th>
                <th>КУДА</th>
                <th>СТАТУС</th>
                <th>КОЛ-ВО ТОВАРОВ</th>
                <th style={{ width: '40px' }}></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="6" style={{ textAlign: 'center', padding: '30px', color: 'var(--text-muted)' }}>
                  У вас пока нет перемещений
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GoodsTransfer;
