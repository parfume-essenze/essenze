import { 
  ArrowDown, 
  ArrowUp, 
  Repeat, 
  DollarSign,
  Calendar,
  ChevronDown,
  Search,
  Filter,
  Plus
} from 'lucide-react';

const FinanceDashboard = () => {
  return (
    <div className="page-body" style={{padding: '0'}}>
      <div className="page-header">
        <h1 className="page-title">Финансовые транзакции</h1>
        <div className="header-actions">
          <span style={{fontSize: '0.9rem'}}>^ Скрыть статистику</span>
          <div className="btn" style={{color: 'var(--text-muted)'}}>
            <Calendar size={16} />
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: '1.2'}}>
              <span style={{fontSize: '0.7rem'}}>Сегодня</span>
              <span style={{color: 'var(--text-main)'}}>20.08.2026</span>
            </div>
          </div>
        </div>
      </div>

      <div style={{padding: '0 32px'}}>
        <div className="summary-grid">
          {/* Card 1 */}
          <div className="summary-card">
            <div className="summary-icon" style={{backgroundColor: '#e6f0fd'}}>
              <ArrowDown size={24} />
            </div>
            <div className="summary-details">
              <div className="summary-title" style={{fontSize: '1rem', display: 'flex', alignItems: 'center', height: '100%'}}>Сумма<br/>доходов</div>
            </div>
            <div className="summary-amounts">
              <div className="amount-row"><span>Налич.</span> <span className="amount-val">0 UZS / <span style={{color: 'var(--text-muted)'}}>0 USD</span></span></div>
              <div className="amount-row"><span>Безнал.</span> <span className="amount-val">0 UZS / <span style={{color: 'var(--text-muted)'}}>0 USD</span></span></div>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="summary-card">
            <div className="summary-icon" style={{backgroundColor: '#f5f0ff', color: '#8b5cf6'}}>
              <ArrowUp size={24} />
            </div>
            <div className="summary-details">
              <div className="summary-title" style={{fontSize: '1rem'}}>Сумма<br/>расходов</div>
            </div>
            <div className="summary-amounts">
              <div className="amount-row"><span>Налич.</span> <span className="amount-val">0 UZS / <span style={{color: 'var(--text-muted)'}}>0 USD</span></span></div>
              <div className="amount-row"><span>Безнал.</span> <span className="amount-val">0 UZS / <span style={{color: 'var(--text-muted)'}}>0 USD</span></span></div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="summary-card">
            <div className="summary-icon" style={{backgroundColor: '#e6f0fd'}}>
              <Repeat size={24} />
            </div>
            <div className="summary-details">
              <div className="summary-title" style={{fontSize: '1rem'}}>Сумма<br/>перемещений</div>
            </div>
            <div className="summary-amounts">
              <div className="amount-row"><span>Налич.</span> <span className="amount-val">0 UZS / <span style={{color: 'var(--text-muted)'}}>0 USD</span></span></div>
              <div className="amount-row"><span>Безнал.</span> <span className="amount-val">0 UZS / <span style={{color: 'var(--text-muted)'}}>0 USD</span></span></div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="summary-card">
            <div className="summary-icon" style={{backgroundColor: '#e6f0fd'}}>
              <DollarSign size={24} />
            </div>
            <div className="summary-details">
              <div className="summary-title" style={{fontSize: '1rem'}}>Сумма<br/>конвертаций</div>
            </div>
            <div className="summary-amounts">
              <div className="amount-row"><span>Налич.</span> <span className="amount-val">0 UZS / <span style={{color: 'var(--text-muted)'}}>0 USD</span></span></div>
              <div className="amount-row"><span>Безнал.</span> <span className="amount-val">0 UZS / <span style={{color: 'var(--text-muted)'}}>0 USD</span></span></div>
            </div>
          </div>
        </div>

        <div className="tabs-container">
          <div className="tab active">Доходы / Расходы</div>
          <div className="tab">Закрытие смен</div>
          <div className="tab">Перемещения</div>
          <div className="tab">Конвертации</div>
        </div>

        <div className="actions-bar">
          <div className="search-input">
            <Search size={18} />
            <input type="text" placeholder="ID транзакции, пользователь" />
          </div>
          <div className="action-buttons">
            <button className="btn">
              <Filter size={16} /> Фильтры
            </button>
            <button className="btn btn-primary">
              <Plus size={18} /> Добавить
            </button>
          </div>
        </div>

        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Дата</th>
              <th>Дата операции</th>
              <th>Операция</th>
              <th>Тип</th>
              <th>Сумма</th>
              <th>Счет создания</th>
              <th>Счет транзакции</th>
              <th>Категория</th>
              <th>Пользователь</th>
              <th>Ком...</th>
            </tr>
          </thead>
          <tbody>
            {/* Empty state row */}
          </tbody>
        </table>
        
        <div className="empty-state">
          <h3>Финансовые транзакции не найдены</h3>
          <p>Если вы хотите добавить новую финансовую транзакцию...</p>
        </div>
      </div>
    </div>
  );
};

export default FinanceDashboard;
