import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Download, 
  Plus, 
  ChevronDown,
  MoreVertical,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import ClientCreateDrawer from './ClientCreateDrawer';

const mockClients = [
  { id: 1, name: 'Ivan Ivanov', phone: '+998 90 123 45 67', balance: '0 UZS', totalSpent: '0 UZS', discount: '0%', lastPurchase: '-', registrationDate: '20.08.2026' },
  { id: 2, name: 'Aziza Aliyeva', phone: '+998 90 987 65 43', balance: '50 000 UZS', totalSpent: '1 200 000 UZS', discount: '5%', lastPurchase: '15.08.2026', registrationDate: '10.01.2026' },
  { id: 3, name: 'Baxrom Soliyev', phone: '+998 99 111 22 33', balance: '0 UZS', totalSpent: '450 000 UZS', discount: '0%', lastPurchase: '01.07.2026', registrationDate: '05.05.2026' },
  { id: 4, name: 'Dilshod Rahmatov', phone: '+998 97 777 88 99', balance: '-100 000 UZS', totalSpent: '3 500 000 UZS', discount: '10%', lastPurchase: '18.08.2026', registrationDate: '12.12.2025' },
  { id: 5, name: 'Nigina Toirova', phone: '+998 93 444 55 66', balance: '20 000 UZS', totalSpent: '890 000 UZS', discount: '3%', lastPurchase: '20.07.2026', registrationDate: '01.03.2026' },
];

const ClientsAll = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isCreateDrawerOpen, setIsCreateDrawerOpen] = useState(false);

  return (
    <div className="finance-dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Все клиенты</h1>
      </div>

      <div className="dashboard-content" style={{ marginTop: '20px' }}>
        <div className="toolbar" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <div className="search-bar" style={{ position: 'relative', width: '300px' }}>
              <Search size={18} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#999' }} />
              <input 
                type="text" 
                placeholder="Поиск клиентов..." 
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

          <div>
            <button 
              className="btn btn-primary" 
              style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
              onClick={() => setIsCreateDrawerOpen(true)}
            >
              <Plus size={18} /> Новый клиент
            </button>
          </div>
        </div>

        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th style={{ width: '40px' }}><input type="checkbox" /></th>
                <th>ИМЯ</th>
                <th>ТЕЛЕФОН</th>
                <th>БАЛАНС</th>
                <th>СУММА ПОКУПОК</th>
                <th>СКИДКА %</th>
                <th>ПОСЛЕДНЯЯ ПОКУПКА</th>
                <th>ДАТА РЕГИСТРАЦИИ</th>
                <th style={{ width: '40px' }}></th>
              </tr>
            </thead>
            <tbody>
              {mockClients.map(client => (
                <tr key={client.id} className="table-row">
                  <td><input type="checkbox" /></td>
                  <td style={{ fontWeight: 500, color: 'var(--primary-color)' }}>{client.name}</td>
                  <td>{client.phone}</td>
                  <td style={{ color: client.balance.includes('-') ? '#ef4444' : client.balance !== '0 UZS' ? '#10b981' : 'inherit' }}>
                    {client.balance}
                  </td>
                  <td>{client.totalSpent}</td>
                  <td>{client.discount}</td>
                  <td>{client.lastPurchase}</td>
                  <td>{client.registrationDate}</td>
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
          <span>1–5 из 5</span>
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

      <ClientCreateDrawer isOpen={isCreateDrawerOpen} onClose={() => setIsCreateDrawerOpen(false)} />
    </div>
  );
};

export default ClientsAll;
