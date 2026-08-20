import React, { useState } from 'react';
import { Search, Filter, Download, ArrowUpRight, ArrowDownRight, X } from 'lucide-react';

const mockOperations = [
  { id: 1, date: '20.08.2026 10:00', type: 'Внесение', amount: '5 000 000 UZS', comment: 'Размен из банка', employee: 'Admin' },
  { id: 2, date: '19.08.2026 21:00', type: 'Изъятие', amount: '12 500 000 UZS', comment: 'Инкассация', employee: 'Manager' },
  { id: 3, date: '19.08.2026 09:30', type: 'Внесение', amount: '2 000 000 UZS', comment: 'Остаток с прошлого дня', employee: 'Manager' }
];

const OperationModal = ({ isOpen, onClose, type }) => {
  if (!isOpen) return null;

  const isDeposit = type === 'deposit';

  return (
    <>
      <div className="modal-overlay" style={{
        position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
        <div className="modal-content" style={{
          backgroundColor: '#fff', width: '450px', borderRadius: '12px', overflow: 'hidden'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', borderBottom: '1px solid var(--border-color)' }}>
            <h2 style={{ margin: 0, fontSize: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              {isDeposit ? <ArrowUpRight color="#10b981" /> : <ArrowDownRight color="#ef4444" />}
              {isDeposit ? 'Внесение наличных' : 'Изъятие наличных'}
            </h2>
            <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
              <X size={20} />
            </button>
          </div>
          <div style={{ padding: '20px' }}>
            <div className="form-group" style={{ marginBottom: '20px' }}>
              <label>КАССА</label>
              <select className="form-control">
                <option>Основная касса</option>
                <option>Сейф</option>
              </select>
            </div>
            <div className="form-group" style={{ marginBottom: '20px' }}>
              <label>СУММА <span style={{color: 'red'}}>*</span></label>
              <input type="text" className="form-control" placeholder="0 UZS" />
            </div>
            <div className="form-group" style={{ marginBottom: '20px' }}>
              <label>КОММЕНТАРИЙ</label>
              <textarea className="form-control" placeholder="Укажите причину..." rows={3}></textarea>
            </div>
            
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', marginTop: '30px' }}>
              <button className="btn btn-outline" onClick={onClose}>Отмена</button>
              <button className="btn btn-primary" style={{ backgroundColor: isDeposit ? '#10b981' : '#ef4444', borderColor: isDeposit ? '#10b981' : '#ef4444' }}>
                {isDeposit ? 'Внести деньги' : 'Изъять деньги'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const CashOperations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [modalType, setModalType] = useState(null); // 'deposit' or 'withdraw'

  return (
    <div className="finance-dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Кассовые операции</h1>
      </div>

      <div className="dashboard-content" style={{ marginTop: '20px' }}>
        <div className="toolbar" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <div className="search-bar" style={{ position: 'relative', width: '300px' }}>
              <Search size={18} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#999' }} />
              <input 
                type="text" 
                placeholder="Поиск по операциям..." 
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

          <div style={{ display: 'flex', gap: '10px' }}>
            <button 
              className="btn btn-outline" 
              style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ef4444', borderColor: '#ef4444' }}
              onClick={() => setModalType('withdraw')}
            >
              <ArrowDownRight size={18} /> Изъятие
            </button>
            <button 
              className="btn btn-primary" 
              style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: '#10b981', borderColor: '#10b981' }}
              onClick={() => setModalType('deposit')}
            >
              <ArrowUpRight size={18} /> Внесение
            </button>
          </div>
        </div>

        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>ДАТА И ВРЕМЯ</th>
                <th>ТИП ОПЕРАЦИИ</th>
                <th>СУММА</th>
                <th>КОММЕНТАРИЙ</th>
                <th>СОТРУДНИК</th>
              </tr>
            </thead>
            <tbody>
              {mockOperations.map(op => (
                <tr key={op.id} className="table-row">
                  <td>{op.date}</td>
                  <td>
                    <span style={{ 
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      padding: '4px 10px', 
                      borderRadius: '100px', 
                      fontSize: '12px', 
                      fontWeight: 500,
                      backgroundColor: op.type === 'Внесение' ? '#10b98120' : '#ef444420',
                      color: op.type === 'Внесение' ? '#10b981' : '#ef4444'
                    }}>
                      {op.type === 'Внесение' ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                      {op.type}
                    </span>
                  </td>
                  <td style={{ fontWeight: 500 }}>{op.amount}</td>
                  <td style={{ color: 'var(--text-muted)' }}>{op.comment}</td>
                  <td>{op.employee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <OperationModal 
        isOpen={modalType !== null} 
        type={modalType} 
        onClose={() => setModalType(null)} 
      />
    </div>
  );
};

export default CashOperations;
