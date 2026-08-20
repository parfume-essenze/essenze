import React, { useState } from 'react';
import { X, ChevronDown } from 'lucide-react';

const ClientCreateDrawer = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('main');

  return (
    <>
      {/* Overlay */}
      <div 
        className={`drawer-overlay ${isOpen ? 'open' : ''}`}
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className={`drawer right ${isOpen ? 'open' : ''}`} style={{ width: '800px', maxWidth: '90vw' }}>
        <div className="drawer-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 30px', borderBottom: '1px solid var(--border-color)' }}>
          <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 600 }}>Новый клиент</h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
            <X size={24} />
          </button>
        </div>

        <div className="drawer-content" style={{ padding: 0, display: 'flex', height: 'calc(100vh - 140px)' }}>
          
          {/* Left Sidebar inside drawer */}
          <div style={{ width: '250px', borderRight: '1px solid var(--border-color)', backgroundColor: 'var(--bg-secondary)' }}>
            <div 
              onClick={() => setActiveTab('main')}
              style={{ 
                padding: '15px 30px', 
                cursor: 'pointer',
                borderLeft: activeTab === 'main' ? '3px solid var(--primary-color)' : '3px solid transparent',
                backgroundColor: activeTab === 'main' ? 'var(--bg-primary)' : 'transparent',
                fontWeight: activeTab === 'main' ? 600 : 400,
                color: activeTab === 'main' ? 'var(--primary-color)' : 'var(--text-primary)'
              }}
            >
              Основные
            </div>
            <div 
              onClick={() => setActiveTab('address')}
              style={{ 
                padding: '15px 30px', 
                cursor: 'pointer',
                borderLeft: activeTab === 'address' ? '3px solid var(--primary-color)' : '3px solid transparent',
                backgroundColor: activeTab === 'address' ? 'var(--bg-primary)' : 'transparent',
                fontWeight: activeTab === 'address' ? 600 : 400,
                color: activeTab === 'address' ? 'var(--primary-color)' : 'var(--text-primary)'
              }}
            >
              Адрес
            </div>
            <div 
              onClick={() => setActiveTab('social')}
              style={{ 
                padding: '15px 30px', 
                cursor: 'pointer',
                borderLeft: activeTab === 'social' ? '3px solid var(--primary-color)' : '3px solid transparent',
                backgroundColor: activeTab === 'social' ? 'var(--bg-primary)' : 'transparent',
                fontWeight: activeTab === 'social' ? 600 : 400,
                color: activeTab === 'social' ? 'var(--primary-color)' : 'var(--text-primary)'
              }}
            >
              Социальные сети
            </div>
          </div>

          {/* Form Content */}
          <div style={{ flex: 1, padding: '30px', overflowY: 'auto' }}>
            {activeTab === 'main' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <div className="form-group" style={{ flex: 1 }}>
                    <label>ИМЯ <span style={{color: 'red'}}>*</span></label>
                    <input type="text" className="form-control" placeholder="Иван" />
                  </div>
                  <div className="form-group" style={{ flex: 1 }}>
                    <label>ФАМИЛИЯ</label>
                    <input type="text" className="form-control" placeholder="Иванов" />
                  </div>
                </div>

                <div className="form-group">
                  <label>ОТЧЕСТВО</label>
                  <input type="text" className="form-control" placeholder="Введите отчество" />
                </div>

                <div style={{ display: 'flex', gap: '20px' }}>
                  <div className="form-group" style={{ flex: 1 }}>
                    <label>ДАТА РОЖДЕНИЯ</label>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <input type="text" className="form-control" placeholder="ДД" style={{width: '60px', textAlign: 'center'}} />
                      <input type="text" className="form-control" placeholder="ММ" style={{width: '60px', textAlign: 'center'}} />
                      <input type="text" className="form-control" placeholder="ГГГГ" style={{flex: 1}} />
                    </div>
                  </div>
                  <div className="form-group" style={{ flex: 1 }}>
                    <label>ПОЛ</label>
                    <div style={{ display: 'flex', gap: '10px', marginTop: '5px' }}>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>
                        <input type="radio" name="gender" value="male" /> Мужской
                      </label>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>
                        <input type="radio" name="gender" value="female" /> Женский
                      </label>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label>НОМЕР ТЕЛЕФОНА</label>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ 
                      padding: '10px 15px', 
                      backgroundColor: 'var(--bg-secondary)', 
                      border: '1px solid var(--border-color)', 
                      borderRight: 'none',
                      borderTopLeftRadius: '6px',
                      borderBottomLeftRadius: '6px',
                      color: 'var(--text-muted)'
                    }}>
                      +998
                    </div>
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="90 123 45 67" 
                      style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>ГРУППА КЛИЕНТА</label>
                  <div style={{ position: 'relative' }}>
                    <select className="form-control" style={{ appearance: 'none' }}>
                      <option>По умолчанию (Standard)</option>
                      <option>VIP</option>
                      <option>Family</option>
                    </select>
                    <ChevronDown size={16} style={{ position: 'absolute', right: '15px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--text-muted)' }} />
                  </div>
                </div>

                <div className="form-group">
                  <label>ТЕЛЕГРАМ ID</label>
                  <input type="text" className="form-control" placeholder="Например: 12345678" />
                </div>
              </div>
            )}

            {activeTab === 'address' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <p style={{ color: 'var(--text-muted)' }}>Добавьте адреса для доставки или контактов клиента.</p>
                <button className="btn btn-outline" style={{ display: 'inline-block', width: 'fit-content' }}>
                  + Добавить адрес
                </button>
              </div>
            )}

            {activeTab === 'social' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="form-group">
                  <label>INSTAGRAM</label>
                  <input type="text" className="form-control" placeholder="@username" />
                </div>
                <div className="form-group">
                  <label>FACEBOOK</label>
                  <input type="text" className="form-control" placeholder="Ссылка на профиль" />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="drawer-footer" style={{ padding: '20px 30px', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'flex-end', gap: '15px', backgroundColor: 'var(--bg-primary)' }}>
          <button className="btn btn-outline" onClick={onClose}>Отмена</button>
          <button className="btn btn-primary">Создать клиента</button>
        </div>
      </div>
    </>
  );
};

export default ClientCreateDrawer;
