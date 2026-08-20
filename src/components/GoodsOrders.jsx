import React, { useState } from 'react';
import { 
  Plus, 
  Search,
  Filter,
  MoreVertical,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const mockOrders = [
  { id: 'ORD-0012', date: '20.08.2026', supplier: 'Essenza', amount: '12 500 000 UZS', status: 'Доставлен' },
  { id: 'ORD-0013', date: '21.08.2026', supplier: 'OKIII Flakon', amount: '3 200 000 UZS', status: 'В пути' },
  { id: 'ORD-0014', date: '22.08.2026', supplier: 'Misk', amount: '8 900 000 UZS', status: 'Создан' },
];

const GoodsOrders = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const getStatusColor = (status) => {
    switch(status) {
      case 'Доставлен': return '#10b981';
      case 'В пути': return '#f59e0b';
      case 'Создан': return '#3b82f6';
      default: return 'var(--text-muted)';
    }
  };

  return (
    <div className="finance-dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Заказы поставщикам</h1>
      </div>

      <div className="dashboard-content" style={{ marginTop: '20px' }}>
        <div className="toolbar" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <div className="search-bar" style={{ position: 'relative', width: '300px' }}>
              <Search size={18} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#999' }} />
              <input 
                type="text" 
                placeholder="Поиск по номеру заказа..." 
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
          </div>

          <button 
            className="btn btn-primary" 
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <Plus size={18} /> Новый заказ
          </button>
        </div>

        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th style={{ width: '40px' }}><input type="checkbox" /></th>
                <th>НОМЕР ЗАКАЗА</th>
                <th>ДАТА СОЗДАНИЯ</th>
                <th>ПОСТАВЩИК</th>
                <th>СУММА</th>
                <th>СТАТУС</th>
                <th style={{ width: '40px' }}></th>
              </tr>
            </thead>
            <tbody>
              {mockOrders.map(order => (
                <tr key={order.id} className="table-row">
                  <td><input type="checkbox" /></td>
                  <td style={{ fontWeight: 500, color: 'var(--primary-color)' }}>{order.id}</td>
                  <td>{order.date}</td>
                  <td>{order.supplier}</td>
                  <td style={{ fontWeight: 500 }}>{order.amount}</td>
                  <td>
                    <span style={{ 
                      padding: '4px 10px', 
                      borderRadius: '100px', 
                      fontSize: '12px', 
                      fontWeight: 500,
                      backgroundColor: `${getStatusColor(order.status)}20`,
                      color: getStatusColor(order.status)
                    }}>
                      {order.status}
                    </span>
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

        <div className="pagination" style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '15px', alignItems: 'center', gap: '15px', color: 'var(--text-muted)', fontSize: '13px' }}>
          <span>1–3 из 3</span>
          <div style={{ display: 'flex', gap: '5px' }}>
            <button className="icon-btn" disabled style={{ padding: '5px', borderRadius: '4px', border: '1px solid var(--border-color)', background: 'transparent', cursor: 'not-allowed', color: 'var(--text-muted)' }}>
              <ChevronLeft size={16} />
            </button>
            <button className="icon-btn" disabled style={{ padding: '5px', borderRadius: '4px', border: '1px solid var(--border-color)', background: 'transparent', cursor: 'not-allowed', color: 'var(--text-muted)' }}>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoodsOrders;
