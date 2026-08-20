import { useState } from 'react';
import { 
  Search,
  Filter,
  Plus,
  Box,
  Image as ImageIcon,
  Settings,
  LayoutGrid,
  List,
  X,
  Calendar,
  ChevronDown,
  ArrowRightCircle,
  Edit,
  Printer
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { catalogData } from '../data/catalogData';

const GoodsCatalog = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  const handleRowClick = (product) => {
    setSelectedProduct(product);
  };

  const closeDrawer = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="page-body" style={{padding: '0'}}>
      <div className="page-header">
        <h1 className="page-title">Каталог</h1>
        <div className="header-actions">
          <span style={{fontSize: '0.9rem', color: 'var(--text-muted)'}}>^ Показать статистику</span>
          <div style={{display: 'flex', gap: '8px', marginLeft: '16px'}}>
            <button className="icon-btn active"><List size={18} /></button>
            <button className="icon-btn"><LayoutGrid size={18} /></button>
          </div>
        </div>
      </div>

      <div style={{padding: '0 32px'}}>
        <div className="tabs-container" style={{marginBottom: '20px'}}>
          <div className="tab active">Все (52.9 K)</div>
          <div className="tab">Активные (52.8 K)</div>
          <div className="tab">Неактивные (107)</div>
          <div className="tab">Малый остаток (0)</div>
          <div className="tab">Нулевой остаток (0)</div>
        </div>

        <div className="actions-bar">
          <div className="search-input" style={{width: '350px'}}>
            <Search size={18} />
            <input type="text" placeholder="Артикул, баркод, наименование" />
          </div>
          <div className="action-buttons">
            <button className="btn">
              <Filter size={16} /> Фильтры
            </button>
            <button className="btn">
              <Box size={16} /> Действия
            </button>
            <button className="btn btn-primary" onClick={() => navigate('/goods/create')}>
              <Plus size={18} /> Создать
            </button>
          </div>
        </div>

        <div className="table-wrapper">
          <table className="data-table catalog-table">
            <thead>
              <tr>
                <th style={{width: '40px'}}><input type="checkbox" /></th>
                <th style={{width: '60px'}}>Фото</th>
                <th>Наименование</th>
                <th>Артикул</th>
                <th>Баркод</th>
                <th>Категория</th>
                <th>Поставщики</th>
                <th style={{width: '40px', textAlign: 'center'}}><Settings size={16} /></th>
              </tr>
            </thead>
            <tbody>
              {catalogData.map((item) => (
                <tr key={item.id} onClick={() => handleRowClick(item)} style={{cursor: 'pointer'}}>
                  <td onClick={e => e.stopPropagation()}><input type="checkbox" /></td>
                  <td>
                    <div className="img-placeholder">
                      <ImageIcon size={16} color="#a0aec0" />
                    </div>
                  </td>
                  <td style={{color: 'var(--primary-color)', fontWeight: '500'}}>{item.name}</td>
                  <td>{item.article}</td>
                  <td>{item.barcode}</td>
                  <td>{item.category}</td>
                  <td>{item.supplier}</td>
                  <td onClick={e => e.stopPropagation()}></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Product Drawer */}
      {selectedProduct && <div className="drawer-overlay" onClick={closeDrawer}></div>}
      <div className={`drawer ${selectedProduct ? 'open' : ''}`}>
        {selectedProduct && (
          <>
            <button className="drawer-close" onClick={closeDrawer}>
              <X size={16} />
            </button>
            
            <div className="drawer-header">
              <div className="img-placeholder" style={{width: '56px', height: '56px', borderRadius: '12px'}}>
                <ImageIcon size={24} color="#a0aec0" />
              </div>
              <div style={{marginTop: '4px'}}>
                <div className="drawer-title">{selectedProduct.name}</div>
                <div className="drawer-subtitle">
                  {selectedProduct.article} / {selectedProduct.barcode} / Товар / 50 000 UZS
                </div>
              </div>
            </div>

            <div className="drawer-body">
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px'}}>
                <h2 style={{fontSize: '1.25rem', fontWeight: '700'}}>История продукта</h2>
                <span style={{color: 'var(--primary-color)', fontSize: '0.9rem', cursor: 'pointer', fontWeight: '500'}}>^ Скрыть фильтры</span>
              </div>

              <div className="history-filter-row">
                <div className="filter-select">
                  <Calendar size={16} color="var(--primary-color)" />
                  <span style={{flex: 1, color: 'var(--text-muted)'}}>Весь период</span>
                </div>
                <div className="filter-select">
                  <div style={{display: 'flex', flexDirection: 'column'}}>
                    <span style={{fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: '1'}}>Действие</span>
                    <span>Все действия</span>
                  </div>
                  <ChevronDown size={16} color="var(--text-muted)" style={{marginLeft: 'auto'}} />
                </div>
                <div className="filter-select">
                  <div style={{display: 'flex', flexDirection: 'column'}}>
                    <span style={{fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: '1'}}>Магазин</span>
                    <span>Все магазины</span>
                  </div>
                  <ChevronDown size={16} color="var(--text-muted)" style={{marginLeft: 'auto'}} />
                </div>
              </div>

              <table className="data-table" style={{marginTop: '0'}}>
                <thead>
                  <tr>
                    <th>Дата</th>
                    <th>Действие</th>
                    <th>Кол-во</th>
                    <th>Магазин</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>19.08.2026<br/><span style={{color: 'var(--text-muted)'}}>16:53:11</span></td>
                    <td style={{color: 'var(--primary-color)', display: 'flex', alignItems: 'center', gap: '4px', height: '57px'}}>
                      Продажа #000801090256 <ArrowRightCircle size={16} />
                    </td>
                    <td>3</td>
                    <td>Aromallure</td>
                  </tr>
                  <tr>
                    <td>17.08.2026<br/><span style={{color: 'var(--text-muted)'}}>21:40:41</span></td>
                    <td style={{color: 'var(--primary-color)', display: 'flex', alignItems: 'center', gap: '4px', height: '57px'}}>
                      Продажа #000801070256 <ArrowRightCircle size={16} />
                    </td>
                    <td>9</td>
                    <td>Aromallure</td>
                  </tr>
                  <tr>
                    <td>16.08.2026<br/><span style={{color: 'var(--text-muted)'}}>20:05:00</span></td>
                    <td style={{color: 'var(--primary-color)', display: 'flex', alignItems: 'center', gap: '4px', height: '57px'}}>
                      Продажа #000801061246 <ArrowRightCircle size={16} />
                    </td>
                    <td>3</td>
                    <td>Aromallure</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="drawer-footer">
              <button className="btn btn-primary" style={{backgroundColor: '#1a73e8'}}>
                <Plus size={18} /> Добавить остатки
              </button>
              <button className="btn btn-primary" style={{backgroundColor: '#1a73e8'}}>
                <Printer size={18} /> Печать ценников
              </button>
              <button className="btn btn-primary" style={{backgroundColor: '#1a73e8'}}>
                <Edit size={18} /> Изменить
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default GoodsCatalog;
