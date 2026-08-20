import { ChevronLeft, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const GoodsCreate = () => {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', width: '100vw', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div style={{ padding: '24px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button 
            onClick={() => navigate('/goods/catalog')}
            style={{ 
              background: '#f0f4f8', 
              border: 'none', 
              width: '40px', 
              height: '40px', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              cursor: 'pointer',
              color: 'var(--primary-color)'
            }}
          >
            <ChevronLeft size={24} />
          </button>
          <h1 style={{ fontSize: '1.75rem', fontWeight: '700', margin: 0 }}>Новый продукт</h1>
        </div>
        <button className="btn btn-primary" style={{ padding: '10px 24px', fontSize: '1rem', fontWeight: '600' }}>
          Создать
        </button>
      </div>

      {/* Content Layout */}
      <div style={{ display: 'flex', flexGrow: 1, padding: '32px', gap: '48px', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        
        {/* Left Side Menu */}
        <div style={{ width: '220px', flexShrink: 0 }}>
          <div style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', padding: '8px 0', border: '1px solid var(--border-color)' }}>
            <div style={{ padding: '12px 24px', color: 'var(--primary-color)', fontWeight: '600', cursor: 'pointer' }}>Основные</div>
            <div style={{ padding: '12px 24px', color: 'var(--text-muted)', cursor: 'pointer' }}>Цены</div>
            <div style={{ padding: '12px 24px', color: 'var(--text-muted)', cursor: 'pointer' }}>Остатки</div>
            <div style={{ padding: '12px 24px', color: 'var(--text-muted)', cursor: 'pointer' }}>Характеристики</div>
          </div>
        </div>

        {/* Form Content */}
        <div style={{ flexGrow: 1, maxWidth: '800px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '700', margin: 0 }}>Основные</h2>
            <div style={{ flexGrow: 1, height: '1px', borderBottom: '1px dashed var(--border-color)' }}></div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            
            {/* Тип продукта */}
            <div>
              <label style={{ display: 'block', marginBottom: '12px', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '500' }}>
                Тип продукта
              </label>
              <div style={{ display: 'flex', gap: '16px' }}>
                <button className="btn btn-primary" style={{ flex: 1, justifyContent: 'flex-start', padding: '12px 16px' }}>
                  <CheckCircle2 size={18} style={{ marginRight: '8px' }} /> Товар
                </button>
                <div style={{ flex: 1, position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-30px', left: '50%', transform: 'translateX(-50%)', background: '#e2e8f0', color: '#fff', padding: '4px 12px', borderRadius: '12px', fontSize: '0.75rem', whiteSpace: 'nowrap' }}>
                    Продукт, не имеющий остатков
                  </div>
                  <button className="btn" style={{ width: '100%', justifyContent: 'flex-start', padding: '12px 16px', color: 'var(--text-muted)', background: '#f7f9fa', borderColor: 'transparent' }} disabled>
                    <span style={{ width: '18px', height: '18px', borderRadius: '50%', border: '2px solid #cbd5e0', marginRight: '8px' }}></span> Услуга
                  </button>
                </div>
                <button className="btn" style={{ flex: 1, justifyContent: 'flex-start', padding: '12px 16px', color: 'var(--text-main)', background: '#fff' }}>
                  <span style={{ width: '18px', height: '18px', borderRadius: '50%', border: '2px solid #cbd5e0', marginRight: '8px' }}></span> Комплект
                </button>
              </div>
            </div>

            {/* Вариативность продукта */}
            <div>
              <label style={{ display: 'block', marginBottom: '12px', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '500' }}>
                Вариативность продукта
              </label>
              <div style={{ display: 'flex', gap: '16px' }}>
                <button className="btn btn-primary" style={{ flex: 1, justifyContent: 'flex-start', padding: '12px 16px' }}>
                  <CheckCircle2 size={18} style={{ marginRight: '8px' }} /> Простой
                </button>
                <button className="btn" style={{ flex: 1, justifyContent: 'flex-start', padding: '12px 16px', color: 'var(--text-main)', background: '#fff' }}>
                  <span style={{ width: '18px', height: '18px', borderRadius: '50%', border: '2px solid #cbd5e0', marginRight: '8px' }}></span> Вариативный
                </button>
              </div>
            </div>

            {/* Наименование */}
            <div>
              <label style={{ display: 'block', marginBottom: '12px', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '500' }}>
                Наименование <span style={{ color: 'var(--danger-color)' }}>*</span>
              </label>
              <input 
                type="text" 
                placeholder="Введите наименование" 
                style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-color)', background: '#f7f9fa', fontSize: '1rem', outline: 'none' }} 
              />
            </div>

            {/* Артикул & Баркод */}
            <div style={{ display: 'flex', gap: '24px' }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '12px', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '500' }}>
                  Артикул <span style={{ color: 'var(--danger-color)' }}>*</span>
                </label>
                <div style={{ position: 'relative' }}>
                  <input 
                    type="text" 
                    placeholder="Введите артикул" 
                    style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-color)', background: '#f7f9fa', fontSize: '1rem', outline: 'none' }} 
                  />
                  <button style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'var(--primary-color)', fontWeight: '600', cursor: 'pointer' }}>
                    Генерировать
                  </button>
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '12px', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '500' }}>
                  Баркод <span style={{ color: 'var(--danger-color)' }}>*</span>
                </label>
                <div style={{ position: 'relative' }}>
                  <input 
                    type="text" 
                    placeholder="Введите баркод" 
                    style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-color)', background: '#f7f9fa', fontSize: '1rem', outline: 'none' }} 
                  />
                  <button style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'var(--primary-color)', fontWeight: '600', cursor: 'pointer' }}>
                    Генерировать
                  </button>
                </div>
              </div>
            </div>

            {/* Единица измерения */}
            <div>
              <label style={{ display: 'block', marginBottom: '12px', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '500' }}>
                Единица измерения
              </label>
              <input 
                type="text" 
                placeholder="Шт" 
                style={{ width: '50%', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-color)', background: '#f7f9fa', fontSize: '1rem', outline: 'none' }} 
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default GoodsCreate;
