import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';

const ManagementEmployees = () => {
  const [employees, setEmployees] = useState([]);
  
  const loadEmployees = () => {
    fetch('/api/employees').then(r => r.json()).then(d => setEmployees(d)).catch(console.error);
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  const handleCreate = async () => {
    const firstName = prompt('Имя сотрудника:');
    if (!firstName) return;
    await fetch('/api/employees', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstName, role: 'SELLER' })
    });
    loadEmployees();
  };

  return (
    <div className="finance-dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Сотрудники</h1>
      </div>
      <div className="dashboard-content">
        <div className="toolbar" style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
          <button className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }} onClick={handleCreate}>
            <Plus size={18} /> Добавить сотрудника
          </button>
        </div>
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>ФИО</th>
                <th>РОЛЬ</th>
                <th>ТЕЛЕФОН</th>
                <th>ЛОГИН</th>
                <th>СТАТУС</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-row">
                <td style={{ fontWeight: 500 }}>Администратор</td>
                <td>Владелец</td>
                <td>+998 93 551 90 00</td>
                <td>admin</td>
                <td><span style={{ color: '#10b981' }}>Активен</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManagementEmployees;
