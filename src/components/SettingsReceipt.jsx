import React from 'react';

const SettingsReceipt = () => {
  return (
    <div className="finance-dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Настройка чека</h1>
      </div>
      <div className="dashboard-content">
        <div style={{ maxWidth: '600px', backgroundColor: 'var(--bg-secondary)', padding: '30px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
          <div className="form-group" style={{ marginBottom: '20px' }}>
            <label>ТЕКСТ В ШАПКЕ ЧЕКА</label>
            <textarea className="form-control" rows={3} defaultValue="Добро пожаловать в ESSENZE!"></textarea>
          </div>
          <div className="form-group" style={{ marginBottom: '20px' }}>
            <label>ТЕКСТ В ПОДВАЛЕ ЧЕКА</label>
            <textarea className="form-control" rows={3} defaultValue="Спасибо за покупку! Ждем вас снова."></textarea>
          </div>
          <div className="form-group" style={{ marginBottom: '20px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
              <input type="checkbox" defaultChecked style={{ width: '18px', height: '18px' }} />
              Печатать логотип на чеке
            </label>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '30px' }}>
            <button className="btn btn-primary">Сохранить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsReceipt;
