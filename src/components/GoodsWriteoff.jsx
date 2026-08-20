import React, { useState, useEffect } from 'react';
import { Plus, Search, MoreVertical } from 'lucide-react';

const GoodsWriteoff = () => {
  const [ops, setOps] = useState([]);
  
  const loadOps = () => {
    fetch('/api/inventory/operations').then(r => r.json()).then(d => setOps(d.filter(o => o.type === 'WRITEOFF'))).catch(console.error);
  };

  useEffect(() => {
    loadOps();
  }, []);

  const handleCreate = async () => {
    const productId = prompt('ID товара (для теста введите ID, например 1):');
    if (!productId) return;
    const qty = prompt('Количество на списание:');
    if (!qty) return;
    
    await fetch('/api/inventory/writeoff', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId: parseInt(productId), quantity: parseInt(qty), reason: 'Брак' })
    });
    loadOps();
  };

  return (
    <div className="finance-dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Списание товаров</h1>
      </div>

      <div className="dashboard-content" style={{ marginTop: '20px' }}>
        <div className="toolbar" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', alignItems: 'center' }}>
          <div className="search-bar" style={{ position: 'relative', width: '300px' }}>
            <Search size={18} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#999' }} />
            <input 
              type="text" 
              placeholder="Поиск списаний..." 
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

          <button className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }} onClick={handleCreate}>
            <Plus size={18} /> Новое списание
          </button>
        </div>

        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>ДАТА</th>
                <th>ПРИЧИНА</th>
                <th>КОЛ-ВО ТОВАРОВ</th>
                <th>ОБЩАЯ СУММА</th>
                <th style={{ width: '40px' }}></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="5" style={{ textAlign: 'center', padding: '30px', color: 'var(--text-muted)' }}>
                  Нет списаний
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GoodsWriteoff;
