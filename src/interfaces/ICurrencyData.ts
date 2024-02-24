export interface ICurrencyData {
  date: string;
  month: string;
  indicator: typeCurrency;
  value: number;
}

export type typeCurrency = 'Курс доллара' | 'Курс евро' | 'Курс юаня';