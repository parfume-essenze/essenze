import React, { useState } from 'react';
import { Search, Filter, Download, MoreVertical, Eye } from 'lucide-react';

const mockSales = [
  { id: '10042', date: '20.08.2026 14:30', cashier: 'Admin', client: 'Ivan Ivanov', total: '1 250 000 UZS', status: 'Оплачен', paymentType: 'Терминал' },
  { id: '10043', date: '20.08.2026 15:15', cashier: 'Manager', client: 'Aziza Aliyeva', total: '450 000 UZS', status: 'Оплачен', paymentType: 'Наличные' },
  { id: '10044', date: '20.08.2026 16:00', cashier: 'Admin', client: 'Гость', total: '2 100 000 UZS', status: 'Возврат', paymentType: 'Смешанная' },
  { id: '10045', date: '20.08.2026 16:45', cashier: 'Manager', client: 'Dilshod Rahmatov', total: '80 000 UZS', status: 'Оплачен', paymentType: 'Наличные' },
];

const SalesAll = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const getStatusColor = (status) => {
    switch(status) {
      case 'Оплачен': return '#10b981';
      case 'Отложен': return '#f59e0b';
      case 'Возврат': return '#ef4444';
      default: return 'var(--text-muted)';
    }
  };

  return (
    <div className="finance-dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Все продажи</h1>
      </div>

      <div className="dashboard-content" style={{ marginTop: '20px' }}>
        <div className="toolbar" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <div className="search-bar" style={{ position: 'relative', width: '300px' }}>
              <Search size={18} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#999' }} />
              <input 
                type="text" 
                placeholder="Поиск по номеру чека или клиенту..." 
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
            
            <button className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Filter size={16} /> Фильтры
            </button>
            <button className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Download size={16} /> Экспорт
            </button>
          </div>
        </div>

        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th style={{ width: '40px' }}><input type="checkbox" /></th>
                <th>ЧЕК №</th>
                <th>ДАТА И ВРЕМЯ</th>
                <th>КАССИР</th>
                <th>КЛИЕНТ</th>
                <th>СУММА</th>
                <th>ТИП ОПЛАТЫ</th>
                <th>СТАТУС</th>
                <th style={{ width: '40px' }}></th>
              </tr>
            </thead>
            <tbody>
              {mockSales.map(sale => (
                <tr key={sale.id} className="table-row">
                  <td><input type="checkbox" /></td>
                  <td style={{ fontWeight: 500, color: 'var(--primary-color)' }}>{sale.id}</td>
                  <td>{sale.date}</td>
                  <td>{sale.cashier}</td>
                  <td>{sale.client}</td>
                  <td style={{ fontWeight: 500 }}>{sale.total}</td>
                  <td>{sale.paymentType}</td>
                  <td>
                    <span style={{ 
                      padding: '4px 10px', 
                      borderRadius: '100px', 
                      fontSize: '12px', 
                      fontWeight: 500,
                      backgroundColor: `${getStatusColor(sale.status)}20`,
                      color: getStatusColor(sale.status)
                    }}>
                      {sale.status}
                    </span>
                  </td>
                  <td>
                    <button className="icon-btn" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
                      <Eye size={16} />
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

export default SalesAll;
