import React from 'react';

const ClientsLoyalty = () => {
  return (
    <div className="finance-dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Программа лояльности</h1>
      </div>
      <div className="dashboard-content">
        <div style={{ maxWidth: '600px', backgroundColor: 'var(--bg-secondary)', padding: '30px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
          <h2 style={{ fontSize: '18px', marginBottom: '20px' }}>Настройки кэшбека</h2>
          <div className="form-group" style={{ marginBottom: '20px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
              <input type="checkbox" defaultChecked style={{ width: '18px', height: '18px' }} />
              Включить систему кэшбека
            </label>
          </div>
          <div className="form-group" style={{ marginBottom: '20px' }}>
            <label>ПРОЦЕНТ НАЧИСЛЕНИЯ КЭШБЕКА</label>
            <input type="number" className="form-control" defaultValue="5" />
          </div>
          <div className="form-group" style={{ marginBottom: '20px' }}>
            <label>СКОЛЬКО ПРОЦЕНТОВ ПОКУПКИ МОЖНО ОПЛАТИТЬ БАЛЛАМИ?</label>
            <input type="number" className="form-control" defaultValue="50" />
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '30px' }}>
            <button className="btn btn-primary">Сохранить настройки</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsLoyalty;
