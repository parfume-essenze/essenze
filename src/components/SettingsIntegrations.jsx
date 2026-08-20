import React from 'react';

const SettingsIntegrations = () => {
  return (
    <div className="finance-dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Интеграции</h1>
      </div>
      <div className="dashboard-content">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
          
          <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '20px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
            <h3 style={{ margin: '0 0 10px 0' }}>Telegram Bot</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '15px' }}>Уведомления о продажах и отчеты прямо в Telegram.</p>
            <button className="btn btn-outline" style={{ width: '100%' }}>Подключить</button>
          </div>

          <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '20px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
            <h3 style={{ margin: '0 0 10px 0' }}>Payme / Click</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '15px' }}>Интеграция с платежными системами для приема оплат.</p>
            <button className="btn btn-outline" style={{ width: '100%' }}>Настроить</button>
          </div>

          <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '20px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
            <h3 style={{ margin: '0 0 10px 0' }}>SMS Шлюз</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '15px' }}>Отправка SMS-сообщений клиентам через провайдера.</p>
            <button className="btn btn-outline" style={{ width: '100%' }}>Настроить</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SettingsIntegrations;
