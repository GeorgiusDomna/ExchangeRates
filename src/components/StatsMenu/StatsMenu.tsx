import { ChoiceGroup } from '@consta/uikit/ChoiceGroup';

import { ICurrencyData, typeCurrency } from '../../interfaces/ICurrencyData';

import { filterByIndicator } from '../../utils/filterByIndicator';
import { getCurrencyIcon } from '../../utils/getCurrencyIcon';
import { average } from '../../utils/average';

import './statsMenu.css'

interface IStatsMenuProps {
  data: ICurrencyData[];
  currencies: typeCurrency[];
  currCurrency: typeCurrency;
  setCurrCurrency: React.Dispatch<React.SetStateAction<typeCurrency>>;
}

const StatsMenu: React.FC<IStatsMenuProps> = ({
  data,
  currencies,
  currCurrency,
  setCurrCurrency,
}) => {
  const valuesList = filterByIndicator(data, currCurrency).map(
    (el) => el.value
  );

  return (
    <div className="statsMenu">
      <ChoiceGroup
        className="statsMenu_choice"
        value={currCurrency}
        onChange={(event) => setCurrCurrency(event.value)}
        items={currencies}
        getItemLabel={(item: typeCurrency) => getCurrencyIcon(item)}
        multiple={false}
        name="ChoiceGroup"
      />
      <div className="statsMenu_average">
        <div className="statsMenu_average_text">Среднее за период</div>
        <div className="statsMenu_average_value">
          {average(valuesList)}
          <span>₽</span>
        </div>
      </div>
    </div>
  );
};

export default StatsMenu;
