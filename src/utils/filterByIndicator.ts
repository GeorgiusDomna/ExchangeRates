import { ICurrencyData, typeCurrency } from '../interfaces/ICurrencyData';

/**
 * Filters the given array of currency data to retrieve entries matching the specified currency type.
 * @param data An array of ICurrencyData objects representing currency data entries.
 * @param currCurrency A value indicating the currency type to filter by.
 * @returns An array containing only the currency data entries that match the specified currency type.
 */
export const filterByIndicator = (
  data: ICurrencyData[],
  currCurrency: typeCurrency
) => {
  return data.filter((el) => el.indicator === currCurrency);
};
