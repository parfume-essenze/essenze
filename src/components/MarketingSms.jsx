import React from 'react';
import { Plus } from 'lucide-react';

const MarketingSms = () => {
  return (
    <div className="finance-dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">SMS-рассылки</h1>
      </div>
      <div className="dashboard-content">
        <div className="toolbar" style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
          <button className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Plus size={18} /> Создать рассылку
          </button>
        </div>
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>ДАТА ОТПРАВКИ</th>
                <th>НАЗВАНИЕ / ТЕМА</th>
                <th>АУДИТОРИЯ</th>
                <th>ОТПРАВЛЕНО / ДОСТАВЛЕНО</th>
                <th>СТАТУС</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="5" style={{ textAlign: 'center', padding: '30px', color: 'var(--text-muted)' }}>
                  Нет запущенных рассылок
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MarketingSms;
