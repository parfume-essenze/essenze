import { ChevronLeft, FileText, ArrowRight } from 'lucide-react';

const CashShifts = () => {
  const [shift, setShift] = useState(null);
  
  const loadShift = () => {
    fetch('/api/shifts/current').then(r => r.json()).then(d => setShift(d)).catch(console.error);
  };

  useEffect(() => {
    loadShift();
  }, []);

  const handleAction = async (action) => {
    const balance = action === 'OPEN' ? prompt('Введите начальную сумму:') : prompt('Введите итоговую сумму в кассе:');
    if (balance === null) return;
    
    await fetch('/api/shifts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action, balance: parseFloat(balance) || 0 })
    });
    loadShift();
  };

  const rows = [
    { type: 'Наличные' },
    { type: 'Карта' },
    { type: 'Терминал' },
    { type: 'QR Paynet' },
  ];

  return (
    <div className="page-body" style={{padding: '0', backgroundColor: '#fff', height: '100%'}}>
      <div className="page-header" style={{borderBottom: 'none'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
          <button 
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
          <div>
            <h1 style={{fontSize: '1.75rem', fontWeight: '700', margin: 0, display: 'flex', alignItems: 'center', gap: '12px'}}>
              <div style={{width: '16px', height: '16px', backgroundColor: '#4ade80', borderRadius: '50%'}}></div>
              Касса
            </h1>
            <div style={{color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '4px'}}>
              Aromallure • Открыта с 20.08.2026 11:34:18
            </div>
          </div>
        </div>
        <div style={{display: 'flex', gap: '12px', alignItems: 'center'}}>
          <button className="icon-btn" style={{background: '#f0f4f8', color: 'var(--primary-color)'}}>
            <FileText size={20} />
          </button>
          <button className="btn btn-primary" style={{display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px'}}>
            Закрыть кассу <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <div style={{padding: '0 32px 32px'}}>
        <table className="data-table" style={{borderCollapse: 'separate', borderSpacing: 0}}>
          <thead>
            <tr>
              <th style={{borderBottom: '1px solid var(--border-color)', paddingBottom: '16px', paddingTop: '16px'}}>Тип</th>
              <th style={{borderBottom: '1px solid var(--border-color)', paddingBottom: '16px', paddingTop: '16px'}}>Попало</th>
              <th style={{borderBottom: '1px solid var(--border-color)', paddingBottom: '16px', paddingTop: '16px'}}>Ушло</th>
              <th style={{borderBottom: '1px solid var(--border-color)', paddingBottom: '16px', paddingTop: '16px', borderLeft: '1px solid var(--border-color)', paddingLeft: '24px'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
                  Фактически
                  <button className="btn btn-primary" style={{padding: '4px 12px', fontSize: '0.8rem', borderRadius: '16px'}}>1 USD = 1 UZS</button>
                </div>
              </th>
              <th style={{borderBottom: '1px solid var(--border-color)', paddingBottom: '16px', paddingTop: '16px', borderLeft: '1px solid var(--border-color)', paddingLeft: '24px'}}>Разница</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx}>
                <td style={{color: 'var(--primary-color)', fontWeight: '500', padding: '24px 16px'}}>{row.type}</td>
                <td style={{fontWeight: '600'}}>0 UZS <span style={{color: 'var(--text-muted)'}}>/ 0 USD</span></td>
                <td style={{fontWeight: '600'}}>0 UZS <span style={{color: 'var(--text-muted)'}}>/ 0 USD</span></td>
                <td style={{borderLeft: '1px solid var(--border-color)', paddingLeft: '24px'}}>
                  <div style={{display: 'flex', gap: '12px'}}>
                    <div style={{position: 'relative', flex: 1}}>
                      <input type="text" defaultValue="0" style={{width: '100%', padding: '10px 16px', borderRadius: '12px', border: idx === 0 ? '1px solid var(--primary-color)' : '1px solid var(--border-color)', outline: 'none', background: '#fff', fontSize: '1rem', color: idx === 0 ? 'var(--text-main)' : 'var(--text-muted)'}} />
                      <span style={{position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', fontSize: '0.85rem'}}>UZS</span>
                    </div>
                    <div style={{position: 'relative', flex: 1}}>
                      <input type="text" defaultValue="0" style={{width: '100%', padding: '10px 16px', borderRadius: '12px', border: '1px solid var(--border-color)', outline: 'none', background: '#fff', fontSize: '1rem', color: 'var(--text-muted)'}} />
                      <span style={{position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', fontSize: '0.85rem'}}>USD</span>
                    </div>
                  </div>
                </td>
                <td style={{borderLeft: '1px solid var(--border-color)', paddingLeft: '24px'}}>
                  <div style={{backgroundColor: '#6ee7b7', color: '#065f46', padding: '6px 16px', borderRadius: '16px', display: 'inline-block', fontWeight: '700', textAlign: 'center', minWidth: '100px'}}>
                    0
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr style={{backgroundColor: 'var(--primary-color)'}}>
              <td style={{color: '#fff', fontWeight: '700', fontSize: '1.1rem', textTransform: 'uppercase', borderRadius: '8px 0 0 8px', padding: '16px'}}>ИТОГО</td>
              <td style={{color: '#fff', fontWeight: '600', padding: '16px'}}>0 UZS <span style={{opacity: 0.8}}>/ 0 USD</span></td>
              <td style={{color: '#fff', fontWeight: '600', padding: '16px'}}>0 UZS <span style={{opacity: 0.8}}>/ 0 USD</span></td>
              <td style={{borderLeft: '1px solid rgba(255,255,255,0.2)', paddingLeft: '24px'}}>
                <div style={{display: 'flex', gap: '12px'}}>
                  <div style={{position: 'relative', flex: 1}}>
                    <input type="text" value="0" readOnly style={{width: '100%', padding: '10px 16px', borderRadius: '12px', border: 'none', background: 'rgba(255,255,255,0.1)', outline: 'none', fontSize: '1rem', color: '#fff'}} />
                    <span style={{position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem'}}>UZS</span>
                  </div>
                  <div style={{position: 'relative', flex: 1}}>
                    <input type="text" value="0" readOnly style={{width: '100%', padding: '10px 16px', borderRadius: '12px', border: 'none', background: 'rgba(255,255,255,0.1)', outline: 'none', fontSize: '1rem', color: '#fff'}} />
                    <span style={{position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem'}}>USD</span>
                  </div>
                </div>
              </td>
              <td style={{borderLeft: '1px solid rgba(255,255,255,0.2)', paddingLeft: '24px', borderRadius: '0 8px 8px 0'}}>
                <div style={{backgroundColor: '#6ee7b7', color: '#065f46', padding: '6px 16px', borderRadius: '16px', display: 'inline-block', fontWeight: '700', textAlign: 'center', minWidth: '100px'}}>
                  0
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default CashShifts;
