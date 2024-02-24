import { useEffect, useState } from 'react';

import Charts from './components/Charts/Charts';
import StatsMenu from './components/StatsMenu/StatsMenu';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';

import { ICurrencyData, typeCurrency } from './interfaces/ICurrencyData';

import { getExchanges } from './api/documentService';
import { filterByIndicator } from './utils/filterByIndicator';

import './App.css';

const currencies: typeCurrency[] = ['Курс доллара', 'Курс евро', 'Курс юаня'];

function App() {
  const [data, setData] = useState<ICurrencyData[]>([]);
  const [currCurrency, setCurrCurrency] = useState<typeCurrency>(currencies[0]);

  useEffect(() => {
    (async () => {
      const res = await getExchanges();
      res && setData(res);
    })();
  }, []);

  const datesList = filterByIndicator(data, currCurrency);

  return (
    <Theme className="app" preset={presetGpnDefault}>
      <Charts data={datesList} currCurrency={currCurrency} />
      <StatsMenu
        data={data}
        currencies={currencies}
        currCurrency={currCurrency}
        setCurrCurrency={setCurrCurrency}
      />
    </Theme>
  );
}

export default App;
