import React, { useEffect, useState } from 'react';
import { getExchanges } from './api/documentService';
import { ICurrencyData } from './interfaces/ICurrencyData';

function App() {
  const [currencyList, setCurrencyList] = useState<ICurrencyData[]>([])

  useEffect(() => {
    (async () => {
      const data = await getExchanges();
      data && setCurrencyList(data);
    })();
  }, [])

  return (
    <div className="App">
    </div>
  ) 
}

export default App;
