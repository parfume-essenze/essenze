import React from 'react';
import { Search } from 'lucide-react';

const ClientsDebts = () => {
  return (
    <div className="finance-dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Долги клиентов</h1>
      </div>
      <div className="dashboard-content">
        <div className="toolbar" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', alignItems: 'center' }}>
          <div className="search-bar" style={{ position: 'relative', width: '300px' }}>
            <Search size={18} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#999' }} />
            <input 
              type="text" 
              placeholder="Поиск клиентов с долгом..." 
              style={{ width: '100%', padding: '8px 10px 8px 35px', borderRadius: '6px', border: '1px solid var(--border-color)', outline: 'none' }}
            />
          </div>
        </div>
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>ИМЯ КЛИЕНТА</th>
                <th>ТЕЛЕФОН</th>
                <th>СУММА ДОЛГА</th>
                <th>ДАТА ПОСЛЕДНЕЙ ПОКУПКИ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="4" style={{ textAlign: 'center', padding: '30px', color: 'var(--text-muted)' }}>
                  Нет долгов у клиентов
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ClientsDebts;
