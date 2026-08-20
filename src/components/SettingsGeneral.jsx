import React from 'react';

const SettingsGeneral = () => {
  return (
    <div className="finance-dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Общие настройки</h1>
      </div>
      <div className="dashboard-content">
        <div style={{ maxWidth: '600px', backgroundColor: 'var(--bg-secondary)', padding: '30px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
          <div className="form-group" style={{ marginBottom: '20px' }}>
            <label>НАЗВАНИЕ КОМПАНИИ</label>
            <input type="text" className="form-control" defaultValue="ESSENZE" />
          </div>
          <div className="form-group" style={{ marginBottom: '20px' }}>
            <label>ВАЛЮТА ПО УМОЛЧАНИЮ</label>
            <select className="form-control">
              <option>UZS (Узбекский сум)</option>
              <option>USD (Доллар США)</option>
            </select>
          </div>
          <div className="form-group" style={{ marginBottom: '20px' }}>
            <label>ЧАСОВОЙ ПОЯС</label>
            <select className="form-control">
              <option>Asia/Tashkent (UTC+5)</option>
            </select>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '30px' }}>
            <button className="btn btn-primary">Сохранить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsGeneral;
