import { 
  Search, 
  User, 
  Plus, 
  ArrowUp, 
  ArrowDown, 
  ArrowRight, 
  ArrowLeft,
  ChevronUp,
  Wallet,
  ArrowLeftRight,
  Clock,
  Briefcase,
  ChevronLeft,
  CreditCard,
  Banknote,
  QrCode,
  Gift
} from 'lucide-react';
import { useState } from 'react';

const SalesNew = () => {
  const [isNewClientOpen, setIsNewClientOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  return (
    <div style={{ display: 'flex', height: '100%', backgroundColor: '#fff', position: 'relative' }}>
      {/* Left Main Area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '24px 32px', borderRight: '1px solid var(--border-color)' }}>
        
        {/* Top Search Bar */}
        <div style={{ display: 'flex', gap: '16px', marginBottom: '32px' }}>
          <div style={{ position: 'relative', flex: 1 }}>
            <div style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}>
              <Search size={18} />
            </div>
            <input 
              type="text" 
              placeholder="Артикул, баркод, наименование" 
              style={{ 
                width: '100%', 
                padding: '12px 16px 12px 48px', 
                borderRadius: '8px', 
                border: '1px solid var(--primary-color)', 
                outline: 'none',
                fontSize: '1rem',
                color: 'var(--text-main)',
                boxShadow: '0 0 0 2px rgba(26, 115, 232, 0.1)'
              }} 
            />
            <div style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
              Нажмите <span style={{ padding: '2px 6px', border: '1px solid var(--border-color)', borderRadius: '4px', backgroundColor: '#f7f9fa' }}>/</span>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="icon-btn" style={{ background: '#f0f4f8', color: 'var(--primary-color)', width: '42px', height: '42px' }}>
              <Wallet size={20} />
            </button>
            <button className="icon-btn" style={{ background: '#f0f4f8', color: 'var(--primary-color)', width: '42px', height: '42px' }}>
              <ArrowLeftRight size={20} />
            </button>
            <button className="icon-btn" style={{ background: '#f0f4f8', color: 'var(--primary-color)', width: '42px', height: '42px' }}>
              <Clock size={20} />
            </button>
            <button className="icon-btn" style={{ background: '#f0f4f8', color: 'var(--primary-color)', width: '42px', height: '42px' }}>
              <Briefcase size={20} />
            </button>
          </div>
        </div>

        {/* Cart Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: '800', margin: 0 }}>Корзина</h1>
            <div style={{ backgroundColor: '#f0f4f8', color: 'var(--text-muted)', padding: '2px 12px', borderRadius: '16px', fontWeight: '600' }}>0</div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginLeft: '16px', backgroundColor: '#f7f9fa', padding: '6px 16px', borderRadius: '24px' }}>
              <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>Оптовые цены</span>
              <div style={{ width: '40px', height: '24px', backgroundColor: '#cbd5e0', borderRadius: '12px', position: 'relative', cursor: 'pointer' }}>
                <div style={{ width: '20px', height: '20px', backgroundColor: '#fff', borderRadius: '50%', position: 'absolute', top: '2px', left: '2px', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }}></div>
              </div>
            </div>
          </div>
          <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#cbd5e0' }}>#000802000246</div>
        </div>

        <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
          <button className="btn btn-primary" style={{ borderRadius: '24px', padding: '8px 16px', fontSize: '0.9rem' }}>
            Все продавцы
          </button>
          <button className="btn" style={{ borderRadius: '24px', padding: '8px', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-color)', border: '1px solid #e2e8f0', background: '#f0f4f8' }}>
            <Plus size={18} />
          </button>
        </div>

        {/* Empty Cart Area */}
        <div style={{ flex: 1, border: '1px solid var(--border-color)', borderRadius: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-muted)', marginBottom: '12px' }}>Корзина пока что пуста</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', textAlign: 'center', maxWidth: '300px', lineHeight: '1.5' }}>
            Нажмите <span style={{ padding: '0 4px', border: '1px solid var(--border-color)', borderRadius: '4px', backgroundColor: '#f7f9fa' }}>/</span> для поиска товаров или отсканируйте товары
          </p>
        </div>

        {/* Bottom Hints */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '24px', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '16px 24px', backgroundColor: '#fdfdfd' }}>
          <div style={{ display: 'flex', gap: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '500' }}>
              Перемещение в корзине 
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px', border: '1px solid var(--border-color)', borderRadius: '4px', background: '#fff' }}><ArrowUp size={12} /></span>
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px', border: '1px solid var(--border-color)', borderRadius: '4px', background: '#fff' }}><ArrowDown size={12} /></span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '500' }}>
              Изменение количества
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px', border: '1px solid var(--border-color)', borderRadius: '4px', background: '#fff' }}><ArrowRight size={12} /></span>
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px', border: '1px solid var(--border-color)', borderRadius: '4px', background: '#fff' }}><ArrowLeft size={12} /></span>
            </div>
          </div>
          <button className="icon-btn" style={{ border: '1px solid var(--border-color)', borderRadius: '50%', width: '32px', height: '32px' }}>
            <ChevronUp size={16} />
          </button>
        </div>
      </div>

      {/* Right Sidebar (Checkout) */}
      <div style={{ width: '380px', backgroundColor: '#f8fafc', display: 'flex', flexDirection: 'column', padding: '32px 24px', overflowY: 'auto' }}>
        
        {/* Client Section */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontWeight: '600', color: 'var(--text-main)', fontSize: '1.05rem' }}>Клиент</span>
              <span style={{ fontSize: '0.75rem', border: '1px solid var(--border-color)', padding: '2px 6px', borderRadius: '4px', color: 'var(--text-muted)', backgroundColor: '#fff' }}>J</span>
            </div>
            <button 
              className="btn btn-primary" 
              style={{ padding: '6px 12px', fontSize: '0.85rem', borderRadius: '6px' }}
              onClick={() => setIsNewClientOpen(true)}
            >
              Создать
            </button>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--primary-color)' }}>
              <User size={18} />
            </div>
            <input 
              type="text" 
              placeholder="Имя или номер клиента" 
              style={{ width: '100%', padding: '14px 16px 14px 44px', borderRadius: '12px', border: 'none', outline: 'none', backgroundColor: '#fff', fontSize: '0.95rem', boxShadow: '0 1px 2px rgba(0,0,0,0.02)' }}
            />
          </div>
        </div>

        {/* Discount Section */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontWeight: '600', color: 'var(--text-main)', fontSize: '1.05rem' }}>Скидка</span>
              <span style={{ fontSize: '0.75rem', border: '1px solid var(--border-color)', padding: '2px 6px', borderRadius: '4px', color: 'var(--text-muted)', backgroundColor: '#fff' }}>K</span>
            </div>
            <span style={{ color: 'var(--primary-color)', fontSize: '0.9rem', fontWeight: '500', cursor: 'pointer' }}>Ввести код</span>
          </div>
          
          <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
            <input type="text" placeholder="Итоговая сумма" style={{ flex: 2, padding: '12px 16px', borderRadius: '12px', border: 'none', outline: 'none', backgroundColor: '#f0f4f8', color: 'var(--text-muted)', textAlign: 'center' }} disabled />
            <input type="text" placeholder="%" style={{ flex: 1, padding: '12px 16px', borderRadius: '12px', border: 'none', outline: 'none', backgroundColor: '#f0f4f8', color: 'var(--text-muted)', textAlign: 'center' }} disabled />
            <div style={{ flex: 1, padding: '12px 16px', borderRadius: '12px', border: '1px solid var(--border-color)', backgroundColor: '#fff', textAlign: 'center', fontWeight: '600', cursor: 'pointer' }}>UZS</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <button className="btn" style={{ background: '#f0f4f8', border: 'none', color: 'var(--text-muted)', fontWeight: '600', padding: '12px' }}>50K</button>
            <button className="btn" style={{ background: '#f0f4f8', border: 'none', color: 'var(--text-muted)', fontWeight: '600', padding: '12px' }}>100K</button>
            <button className="btn" style={{ background: '#f0f4f8', border: 'none', color: 'var(--text-muted)', fontWeight: '600', padding: '12px' }}>500K</button>
            <button className="btn" style={{ background: '#f0f4f8', border: 'none', color: 'var(--text-muted)', fontWeight: '600', padding: '12px' }}>1M</button>
          </div>
        </div>

        <button className="btn" style={{ width: '100%', padding: '14px', borderRadius: '24px', color: 'var(--primary-color)', fontWeight: '600', border: 'none', backgroundColor: '#fff', boxShadow: '0 1px 2px rgba(0,0,0,0.02)', display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: 'auto' }}>
          <Plus size={18} /> Добавить заметку
        </button>

        {/* Totals Section */}
        <div style={{ marginTop: 'auto', paddingTop: '32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
            <span style={{ color: 'var(--text-muted)', fontWeight: '500' }}>Подытог</span>
            <span style={{ fontWeight: '700' }}>120 000 UZS</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
            <span style={{ color: 'var(--text-muted)', fontWeight: '500' }}>Скидка</span>
            <span style={{ fontWeight: '700' }}>0 UZS</span>
          </div>

          <button 
            className="btn btn-primary" 
            style={{ width: '100%', padding: '18px 24px', borderRadius: '16px', border: 'none', fontSize: '1.1rem', fontWeight: '700', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}
            onClick={() => setIsPaymentModalOpen(true)}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              ОПЛАТИТЬ <span style={{ fontSize: '0.8rem', border: '1px solid rgba(255,255,255,0.4)', padding: '2px 6px', borderRadius: '4px' }}>L</span>
            </div>
            <span>120 000 UZS</span>
          </button>

          <button className="btn" style={{ width: '100%', padding: '14px', borderRadius: '16px', color: 'var(--text-muted)', fontWeight: '600', border: 'none', backgroundColor: 'transparent', display: 'flex', justifyContent: 'center', gap: '8px' }}>
            Отложить <span style={{ fontSize: '0.75rem', border: '1px solid var(--border-color)', padding: '2px 6px', borderRadius: '4px' }}>O</span>
          </button>
        </div>

      </div>

      {/* New Client Drawer */}
      {isNewClientOpen && <div className="drawer-overlay" onClick={() => setIsNewClientOpen(false)}></div>}
      <div className={`drawer ${isNewClientOpen ? 'open' : ''}`} style={{ width: '60%', borderTopLeftRadius: '32px', borderBottomLeftRadius: '32px' }}>
        {isNewClientOpen && (
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            
            {/* Drawer Header */}
            <div style={{ padding: '24px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <button 
                  onClick={() => setIsNewClientOpen(false)}
                  style={{ 
                    background: '#f0f4f8', 
                    border: 'none', 
                    width: '36px', 
                    height: '36px', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    cursor: 'pointer',
                    color: 'var(--primary-color)'
                  }}
                >
                  <ChevronLeft size={20} />
                </button>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '700', margin: 0 }}>Новый клиент</h2>
              </div>
              <button className="btn btn-primary" style={{ padding: '10px 24px', borderRadius: '12px', fontSize: '1rem' }}>
                Создать
              </button>
            </div>

            {/* Drawer Body */}
            <div style={{ padding: '16px 32px', overflowY: 'auto', flex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
              
              {/* Name Row */}
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '500' }}>
                    Имя <span style={{ color: 'var(--danger-color)' }}>*</span>
                  </label>
                  <input type="text" placeholder="Введите имя" style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid var(--primary-color)', outline: 'none', fontSize: '1rem', boxShadow: '0 0 0 2px rgba(26, 115, 232, 0.1)' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '500' }}>
                    Фамилия
                  </label>
                  <input type="text" placeholder="Введите фамилию" style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: 'none', background: '#f7f9fa', outline: 'none', fontSize: '1rem' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '500' }}>
                    Отчество
                  </label>
                  <input type="text" placeholder="Введите отчество" style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: 'none', background: '#f7f9fa', outline: 'none', fontSize: '1rem' }} />
                </div>
              </div>

              {/* Birthday and Gender Row */}
              <div style={{ display: 'flex', gap: '32px' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '500' }}>
                    День рождения
                  </label>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <input type="text" placeholder="ДД" style={{ flex: 1, padding: '12px', borderRadius: '12px', border: 'none', background: '#f7f9fa', outline: 'none', fontSize: '1rem', textAlign: 'center' }} />
                    <input type="text" placeholder="ММ" style={{ flex: 1, padding: '12px', borderRadius: '12px', border: 'none', background: '#f7f9fa', outline: 'none', fontSize: '1rem', textAlign: 'center' }} />
                    <input type="text" placeholder="ГГГГ" style={{ flex: 1.5, padding: '12px', borderRadius: '12px', border: 'none', background: '#f7f9fa', outline: 'none', fontSize: '1rem', textAlign: 'center' }} />
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '500' }}>
                    Пол
                  </label>
                  <div style={{ display: 'flex', gap: '8px', background: '#f7f9fa', padding: '4px', borderRadius: '12px' }}>
                    <button style={{ flex: 1, padding: '8px', border: 'none', background: '#fff', borderRadius: '8px', fontWeight: '600', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', cursor: 'pointer' }}>Мужской</button>
                    <button style={{ flex: 1, padding: '8px', border: 'none', background: 'transparent', color: 'var(--text-muted)', fontWeight: '500', cursor: 'pointer' }}>Женский</button>
                  </div>
                </div>
              </div>

              {/* Phone and Card Row */}
              <div style={{ display: 'flex', gap: '32px' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '500' }}>
                    Телефон <span style={{ color: 'var(--danger-color)' }}>*</span>
                  </label>
                  <div style={{ display: 'flex', background: '#f7f9fa', borderRadius: '12px', padding: '4px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px', borderRight: '1px solid var(--border-color)' }}>
                      <span style={{ fontSize: '1.2rem' }}>🇺🇿</span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>▼</span>
                    </div>
                    <input type="text" placeholder="Введите телефоны" style={{ flex: 1, border: 'none', background: 'transparent', outline: 'none', padding: '8px 12px', fontSize: '1rem' }} />
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '500' }}>
                    Карта
                  </label>
                  <button className="btn" style={{ width: '100%', padding: '12px', borderRadius: '12px', border: 'none', background: '#f7f9fa', color: 'var(--primary-color)', fontWeight: '600', display: 'flex', justifyContent: 'center', gap: '8px' }}>
                    <Plus size={18} /> Добавить карту
                  </button>
                </div>
              </div>

              {/* Groups */}
              <div>
                <label style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '500' }}>
                  Группы <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '14px', height: '14px', borderRadius: '50%', background: '#e2e8f0', color: '#fff', fontSize: '0.65rem' }}>?</span>
                </label>
                {/* Group dropdown placeholder if needed */}
              </div>

              {/* Tags */}
              <div>
                <label style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '500' }}>
                  Теги <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '14px', height: '14px', borderRadius: '50%', background: '#e2e8f0', color: '#fff', fontSize: '0.65rem' }}>?</span>
                </label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {['Uzum market', 'Инстаграм', 'Посещение в шоурум (прямое клиент)', 'Таргет', 'Телеграм'].map(tag => (
                    <span key={tag} style={{ padding: '8px 16px', background: '#f0f7ff', color: 'var(--primary-color)', borderRadius: '24px', fontSize: '0.9rem', fontWeight: '500', cursor: 'pointer' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}
      </div>

      {/* Payment Modal Overlay */}
      {isPaymentModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 100,
          padding: '24px'
        }}>
          {/* Modal Container */}
          <div style={{
            backgroundColor: '#f8fafc',
            width: '100%',
            maxWidth: '1200px',
            height: '90vh',
            borderRadius: '24px',
            display: 'flex',
            overflow: 'hidden',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          }}>
            
            {/* Left Side: Receipt Preview */}
            <div style={{ width: '380px', backgroundColor: '#fff', padding: '32px', display: 'flex', justifyContent: 'center', borderRight: '1px solid var(--border-color)', overflowY: 'auto' }}>
              {/* Receipt Paper */}
              <div style={{
                width: '100%',
                maxWidth: '300px',
                backgroundColor: '#fff',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                padding: '24px',
                fontSize: '0.85rem',
                color: '#000',
                fontFamily: 'monospace'
              }}>
                <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>Продажа: #000802000246</div>
                <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>Aromallure</div>
                <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>Дата: 20.08.2026, 15:04:34</div>
                <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>Рабочее время: 09:00 - 18:00</div>
                <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>Продавец: Abdullohxo'ja Xo'jayev</div>
                <div style={{ fontWeight: 'bold', marginBottom: '16px' }}>Кассир: Abdullohxo'ja Xo'jayev</div>
                
                <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>Клиент:</div>
                <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>Контакты:</div>
                <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>ИНН:</div>
                <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>Название юридического лица:</div>
                <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>Адрес:</div>
                <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>Номер клиента:</div>
                <div style={{ fontWeight: 'bold', marginBottom: '24px' }}>Заметка:</div>

                <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>1. Stefano Ricci Royal Eagle Sport</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span>1 г x 120000</span>
                  <span>120 000 UZS</span>
                </div>
                <div style={{ borderBottom: '1px dashed #ccc', margin: '16px 0' }}></div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', marginBottom: '16px' }}>
                  <span>Общее кол-во продуктов</span>
                  <span>1 ед.</span>
                </div>
                <div style={{ borderBottom: '1px dashed #ccc', margin: '16px 0' }}></div>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px', fontWeight: 'bold' }}>
                  <span>Подытог</span>
                  <span>120 000 UZS</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px', fontWeight: 'bold' }}>
                  <span>Итого</span>
                  <span>120 000 UZS</span>
                </div>
                
                {/* Barcode Placeholder */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '32px' }}>
                  <div style={{ width: '100%', height: '60px', background: 'repeating-linear-gradient(90deg, #000 0, #000 2px, transparent 2px, transparent 4px, #000 4px, #000 5px, transparent 5px, transparent 8px, #000 8px, #000 12px, transparent 12px, transparent 14px)' }}></div>
                  <div style={{ marginTop: '12px', fontSize: '0.75rem' }}>Спасибо за вашу покупку!</div>
                </div>
              </div>
            </div>

            {/* Right Side: Payment Controls */}
            <div style={{ flex: 1, padding: '32px', display: 'flex', flexDirection: 'column' }}>
              
              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px' }}>
                <button 
                  className="btn" 
                  onClick={() => setIsPaymentModalOpen(false)}
                  style={{ background: '#f0f4f8', color: 'var(--primary-color)', border: 'none', padding: '10px 20px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600' }}
                >
                  <ChevronLeft size={18} /> Назад <span style={{ fontSize: '0.75rem', border: '1px solid #cbd5e0', padding: '2px 6px', borderRadius: '4px', background: '#fff' }}>B</span>
                </button>
                <button 
                  className="btn" 
                  style={{ background: '#f0f4f8', color: '#a0aec0', border: 'none', padding: '10px 24px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600' }}
                  disabled
                >
                  Оплатить <span style={{ fontSize: '0.75rem', border: '1px solid #e2e8f0', padding: '2px 6px', borderRadius: '4px', background: '#fff' }}>L</span>
                </button>
              </div>

              {/* Totals */}
              <div style={{ display: 'flex', gap: '48px', marginBottom: '48px' }}>
                <div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '1.25rem', fontWeight: '600', marginBottom: '8px' }}>Итого:</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--text-main)' }}>120 000 UZS</div>
                </div>
                <div>
                  <div style={{ color: '#10b981', fontSize: '1.25rem', fontWeight: '600', marginBottom: '8px' }}>К оплате:</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: '800', color: '#10b981' }}>120 000 UZS</div>
                </div>
              </div>

              {/* Payment Methods Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                
                <button style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px', background: '#fff', border: '1px solid var(--border-color)', borderRadius: '12px', cursor: 'pointer' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-main)', fontWeight: '600', fontSize: '1.1rem' }}>
                    <Banknote size={20} color="var(--primary-color)" /> Наличные 
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', border: '1px solid #e2e8f0', padding: '2px 6px', borderRadius: '4px', background: '#f7f9fa' }}>F1</span>
                  </div>
                  <div style={{ color: 'var(--primary-color)' }}>+</div>
                </button>

                <button style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px', background: '#fff', border: '1px solid var(--border-color)', borderRadius: '12px', cursor: 'pointer' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-main)', fontWeight: '600', fontSize: '1.1rem' }}>
                    <CreditCard size={20} color="var(--primary-color)" /> Карта 
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', border: '1px solid #e2e8f0', padding: '2px 6px', borderRadius: '4px', background: '#f7f9fa' }}>F2</span>
                  </div>
                  <div style={{ color: 'var(--primary-color)' }}>+</div>
                </button>

                <button style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px', background: '#fff', border: '1px solid var(--border-color)', borderRadius: '12px', cursor: 'pointer' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-main)', fontWeight: '600', fontSize: '1.1rem' }}>
                    <CreditCard size={20} color="var(--primary-color)" /> Терминал 
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', border: '1px solid #e2e8f0', padding: '2px 6px', borderRadius: '4px', background: '#f7f9fa' }}>F3</span>
                  </div>
                  <div style={{ color: 'var(--primary-color)' }}>+</div>
                </button>

                <button style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px', background: '#fff', border: '1px solid var(--border-color)', borderRadius: '12px', cursor: 'pointer' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-main)', fontWeight: '600', fontSize: '1.1rem' }}>
                    <QrCode size={20} color="var(--primary-color)" /> QR Paynet 
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', border: '1px solid #e2e8f0', padding: '2px 6px', borderRadius: '4px', background: '#f7f9fa' }}>F4</span>
                  </div>
                  <div style={{ color: 'var(--primary-color)' }}>+</div>
                </button>

                <button style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px', background: '#fff', border: '1px solid var(--border-color)', borderRadius: '12px', cursor: 'pointer' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-main)', fontWeight: '600', fontSize: '1.1rem' }}>
                    <Banknote size={20} color="var(--primary-color)" /> В долг 
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', border: '1px solid #e2e8f0', padding: '2px 6px', borderRadius: '4px', background: '#f7f9fa' }}>F5</span>
                  </div>
                  <div style={{ color: 'var(--primary-color)' }}>+</div>
                </button>

                <button style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px', background: '#fff', border: '1px solid var(--border-color)', borderRadius: '12px', cursor: 'pointer' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-main)', fontWeight: '600', fontSize: '1.1rem' }}>
                    <Gift size={20} color="var(--primary-color)" /> Под. карта 
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', border: '1px solid #e2e8f0', padding: '2px 6px', borderRadius: '4px', background: '#f7f9fa' }}>F6</span>
                  </div>
                  <div style={{ color: 'var(--primary-color)' }}>+</div>
                </button>
              </div>

              {/* Bottom Empty Slots Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'repeat(3, 1fr)', gap: '16px', flex: 1 }}>
                <div style={{ background: '#fff', border: '1px solid var(--border-color)', borderRadius: '12px' }}></div>
                <div style={{ background: '#fff', border: '1px solid var(--border-color)', borderRadius: '12px' }}></div>
                <div style={{ background: '#fff', border: '1px solid var(--border-color)', borderRadius: '12px' }}></div>
                <div style={{ background: '#fff', border: '1px solid var(--border-color)', borderRadius: '12px' }}></div>
                <div style={{ background: '#fff', border: '1px solid var(--border-color)', borderRadius: '12px' }}></div>
                <div style={{ background: '#fff', border: '1px solid var(--border-color)', borderRadius: '12px' }}></div>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SalesNew;
