import React, { useState, useEffect } from 'react';
import { Filter, Download } from 'lucide-react';

const ReportsSales = () => {
  const [stats, setStats] = useState({ totalRevenue: 0, totalProfit: 0, orderCount: 0 });
  useEffect(() => {
    fetch('/api/reports/sales').then(r => r.json()).then(d => setStats(d)).catch(console.error);
  }, []);
  return (
    <div className="finance-dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Отчет по продажам</h1>
      </div>
      <div className="dashboard-content">
        <div className="toolbar" style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginBottom: '20px' }}>
          <button className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Filter size={16} /> Фильтры
          </button>
          <button className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Download size={16} /> Скачать отчет
          </button>
        </div>
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>ДАТА</th>
                <th>СУММА ПРОДАЖ</th>
                <th>СЕБЕСТОИМОСТЬ</th>
                <th>МАРЖА</th>
                <th>КОЛ-ВО ЧЕКОВ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="5" style={{ textAlign: 'center', padding: '30px', color: 'var(--text-muted)' }}>
                  Нет данных для отображения отчета
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReportsSales;
