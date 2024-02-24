/**
 * Enum defining currency names and their corresponding symbols.
 */
enum Currency {
  'Курс доллара' = '$',
  'Курс евро' = '€',
  'Курс юаня' = '¥',
}

/**
 * Get the currency symbol for a given currency name.
 * @param currency The name of the currency.
 * @returns The corresponding currency symbol.
 */
export const getCurrencyIcon = (currency: keyof typeof Currency): string => {
  return Currency[currency];
};
