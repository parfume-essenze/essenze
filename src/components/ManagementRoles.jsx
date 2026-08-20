import React from 'react';
import { Plus } from 'lucide-react';

const ManagementRoles = () => {
  return (
    <div className="finance-dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Роли и права</h1>
      </div>
      <div className="dashboard-content">
        <div className="toolbar" style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
          <button className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Plus size={18} /> Добавить роль
          </button>
        </div>
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>НАЗВАНИЕ РОЛИ</th>
                <th>ОПИСАНИЕ</th>
                <th>КОЛ-ВО СОТРУДНИКОВ</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-row">
                <td style={{ fontWeight: 500 }}>Владелец</td>
                <td>Полный доступ ко всем функциям системы</td>
                <td>1</td>
              </tr>
              <tr className="table-row">
                <td style={{ fontWeight: 500 }}>Кассир</td>
                <td>Доступ только к модулю продаж и кассе</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManagementRoles;
