import React from 'react';
import { Plus } from 'lucide-react';

const Financing = () => {
  return (
    <div className="finance-dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Финансирование</h1>
      </div>
      <div className="dashboard-content">
        <div className="toolbar" style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
          <button className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Plus size={18} /> Новое финансирование
          </button>
        </div>
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>ДАТА</th>
                <th>ТИП ФИНАНСИРОВАНИЯ</th>
                <th>СУММА</th>
                <th>ИСТОЧНИК</th>
                <th>СТАТУС</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="5" style={{ textAlign: 'center', padding: '30px', color: 'var(--text-muted)' }}>
                  У вас пока нет записей о финансировании
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Financing;
