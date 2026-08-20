import React from 'react';
import { Play, MoreVertical } from 'lucide-react';

const mockInventory = [
  { id: 'INV-001', date: '15.08.2026', status: 'Завершен', responsible: 'Admin', difference: '-2 500 000 UZS' },
  { id: 'INV-002', date: '20.08.2026', status: 'В процессе', responsible: 'Manager', difference: '0 UZS' }
];

const GoodsInventory = () => {
  return (
    <div className="finance-dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Инвентаризация</h1>
      </div>

      <div className="dashboard-content" style={{ marginTop: '20px' }}>
        <div className="toolbar" style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
          <button className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Play size={18} /> Начать инвентаризацию
          </button>
        </div>

        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>НОМЕР</th>
                <th>ДАТА НАЧАЛА</th>
                <th>СТАТУС</th>
                <th>ОТВЕТСТВЕННЫЙ</th>
                <th>РАЗНИЦА В СУММЕ</th>
                <th style={{ width: '40px' }}></th>
              </tr>
            </thead>
            <tbody>
              {mockInventory.map(item => (
                <tr key={item.id} className="table-row">
                  <td style={{ fontWeight: 500, color: 'var(--primary-color)' }}>{item.id}</td>
                  <td>{item.date}</td>
                  <td>
                    <span style={{ 
                      padding: '4px 10px', 
                      borderRadius: '100px', 
                      fontSize: '12px', 
                      fontWeight: 500,
                      backgroundColor: item.status === 'Завершен' ? '#10b98120' : '#f59e0b20',
                      color: item.status === 'Завершен' ? '#10b981' : '#f59e0b'
                    }}>
                      {item.status}
                    </span>
                  </td>
                  <td>{item.responsible}</td>
                  <td style={{ color: item.difference.includes('-') ? '#ef4444' : 'inherit' }}>
                    {item.difference}
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
    </div>
  );
};

export default GoodsInventory;
