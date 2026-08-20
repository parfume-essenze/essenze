import React from 'react';
import { UploadCloud, Download, FileText } from 'lucide-react';

const GoodsImport = () => {
  return (
    <div className="finance-dashboard">
      <div className="dashboard-header" style={{ paddingBottom: '20px' }}>
        <h1 className="dashboard-title">Импорт товаров</h1>
      </div>

      <div className="dashboard-content" style={{ display: 'flex', flexDirection: 'column', gap: '30px', maxWidth: '800px', margin: '0 auto', marginTop: '40px' }}>
        
        <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '30px', borderRadius: '12px', border: '1px solid var(--border-color)', textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '15px' }}>
            <div style={{ backgroundColor: 'var(--bg-primary)', padding: '15px', borderRadius: '50%', color: 'var(--primary-color)' }}>
              <UploadCloud size={40} />
            </div>
          </div>
          <h2 style={{ margin: '0 0 10px 0', fontSize: '18px' }}>Загрузите файл с товарами</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '20px', fontSize: '14px' }}>
            Поддерживаемые форматы: .xlsx, .csv. Максимальный размер файла 10 MB.
          </p>
          <button className="btn btn-primary" style={{ padding: '10px 24px' }}>
            Выбрать файл
          </button>
        </div>

        <div style={{ padding: '20px', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
          <h3 style={{ margin: '0 0 15px 0', fontSize: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FileText size={18} color="var(--primary-color)" /> Инструкция по импорту
          </h3>
          <ul style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.6', margin: 0, paddingLeft: '20px' }}>
            <li>Скачайте шаблон файла по кнопке ниже.</li>
            <li>Заполните его вашими товарами, следуя подсказкам в заголовках столбцов.</li>
            <li>Штрих-код должен быть уникальным для каждого товара.</li>
            <li>Не изменяйте названия столбцов и их порядок.</li>
            <li>Сохраните файл и загрузите его в зону выше.</li>
          </ul>
          <div style={{ marginTop: '20px' }}>
            <button className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Download size={16} /> Скачать шаблон Excel
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default GoodsImport;
