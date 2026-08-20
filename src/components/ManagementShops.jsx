import React from 'react';
import { Plus } from 'lucide-react';

const ManagementShops = () => {
  return (
    <div className="finance-dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Магазины</h1>
      </div>
      <div className="dashboard-content">
        <div className="toolbar" style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
          <button className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Plus size={18} /> Добавить магазин
          </button>
        </div>
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>НАЗВАНИЕ</th>
                <th>АДРЕС</th>
                <th>КАССЫ</th>
                <th>СОТРУДНИКИ</th>
                <th>СТАТУС</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-row">
                <td style={{ fontWeight: 500 }}>Основной магазин</td>
                <td>Ташкент, Юнусабад</td>
                <td>1</td>
                <td>1</td>
                <td><span style={{ color: '#10b981' }}>Открыт</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManagementShops;
