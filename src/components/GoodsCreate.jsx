import { useState, useEffect } from 'react';
import { ChevronLeft, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const GoodsCreate = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    sku: '',
    barcode: '',
    price: '',
    costPrice: '',
    stock: '',
    categoryId: ''
  });

  useEffect(() => {
    fetch('/api/categories')
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error(err));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGenerateStr = (field) => {
    const randomStr = Math.floor(10000000 + Math.random() * 90000000).toString();
    setFormData({ ...formData, [field]: randomStr });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.sku) {
      alert('Пожалуйста, заполните обязательные поля (Наименование и Артикул)');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        navigate('/goods/catalog');
      } else {
        alert('Ошибка при создании товара');
      }
    } catch (error) {
      console.error(error);
      alert('Сетевая ошибка');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', width: '100vw', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div style={{ padding: '24px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button 
            onClick={() => navigate('/goods/catalog')}
            style={{ 
              background: '#f0f4f8', border: 'none', width: '40px', height: '40px', borderRadius: '50%', 
              display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--primary-color)'
            }}
          >
            <ChevronLeft size={24} />
          </button>
          <h1 style={{ fontSize: '1.75rem', fontWeight: '700', margin: 0 }}>Новый продукт</h1>
        </div>
        <button className="btn btn-primary" style={{ padding: '10px 24px', fontSize: '1rem', fontWeight: '600' }} onClick={handleSubmit} disabled={isLoading}>
          {isLoading ? 'Сохранение...' : 'Создать'}
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
          </div>
        </div>

        {/* Form Content */}
        <div style={{ flexGrow: 1, maxWidth: '800px', paddingBottom: '100px' }}>
          
          {/* ОСНОВНЫЕ */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '700', margin: 0 }}>Основные</h2>
            <div style={{ flexGrow: 1, height: '1px', borderBottom: '1px dashed var(--border-color)' }}></div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginBottom: '48px' }}>
            {/* Наименование */}
            <div>
              <label style={{ display: 'block', marginBottom: '12px', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '500' }}>
                Наименование <span style={{ color: 'var(--danger-color)' }}>*</span>
              </label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Введите наименование" style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-color)', background: '#f7f9fa', fontSize: '1rem', outline: 'none' }} />
            </div>

            {/* Категория */}
            <div>
              <label style={{ display: 'block', marginBottom: '12px', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '500' }}>Категория</label>
              <select name="categoryId" value={formData.categoryId} onChange={handleChange} style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-color)', background: '#f7f9fa', fontSize: '1rem', outline: 'none' }}>
                <option value="">Выберите категорию</option>
                {categories.map(c => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>

            {/* Артикул & Баркод */}
            <div style={{ display: 'flex', gap: '24px' }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '12px', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '500' }}>
                  Артикул <span style={{ color: 'var(--danger-color)' }}>*</span>
                </label>
                <div style={{ position: 'relative' }}>
                  <input type="text" name="sku" value={formData.sku} onChange={handleChange} placeholder="Введите артикул" style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-color)', background: '#f7f9fa', fontSize: '1rem', outline: 'none' }} />
                  <button onClick={() => handleGenerateStr('sku')} style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'var(--primary-color)', fontWeight: '600', cursor: 'pointer' }}>Генерировать</button>
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '12px', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '500' }}>Баркод</label>
                <div style={{ position: 'relative' }}>
                  <input type="text" name="barcode" value={formData.barcode} onChange={handleChange} placeholder="Введите баркод" style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-color)', background: '#f7f9fa', fontSize: '1rem', outline: 'none' }} />
                  <button onClick={() => handleGenerateStr('barcode')} style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'var(--primary-color)', fontWeight: '600', cursor: 'pointer' }}>Генерировать</button>
                </div>
              </div>
            </div>
          </div>

          {/* ЦЕНЫ */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '700', margin: 0 }}>Цены</h2>
            <div style={{ flexGrow: 1, height: '1px', borderBottom: '1px dashed var(--border-color)' }}></div>
          </div>

          <div style={{ display: 'flex', gap: '24px', marginBottom: '48px' }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '12px', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '500' }}>Цена продажи</label>
              <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="0" style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-color)', background: '#f7f9fa', fontSize: '1rem', outline: 'none' }} />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '12px', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '500' }}>Себестоимость</label>
              <input type="number" name="costPrice" value={formData.costPrice} onChange={handleChange} placeholder="0" style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-color)', background: '#f7f9fa', fontSize: '1rem', outline: 'none' }} />
            </div>
          </div>

          {/* ОСТАТКИ */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '700', margin: 0 }}>Остатки (Начальный запас)</h2>
            <div style={{ flexGrow: 1, height: '1px', borderBottom: '1px dashed var(--border-color)' }}></div>
          </div>

          <div style={{ display: 'flex', gap: '24px', marginBottom: '48px' }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '12px', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '500' }}>Количество на складе</label>
              <input type="number" name="stock" value={formData.stock} onChange={handleChange} placeholder="0" style={{ width: '50%', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-color)', background: '#f7f9fa', fontSize: '1rem', outline: 'none' }} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default GoodsCreate;
