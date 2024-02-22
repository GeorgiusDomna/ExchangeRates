import { ICurrencyData } from "../interfaces/ICurrencyData";

const baseUrl = 'https://65d749cc27d9a3bc1d7aa4ec.mockapi.io/api'

/**
 * Retrieves currency exchange rates from the API.
 * 
 * @returns {Promise<ICurrencyData[] | undefined>} A promise that resolves to an array of currency exchange data objects, or undefined if an error occurs.
 * @throws {Error} If the API request fails or returns an error response.
 */
export const getExchanges = async (): Promise<ICurrencyData[] | undefined>  => {
  try {
    const res = await fetch(`${baseUrl}/exchange/currencies`);
    if (!res.ok) {
      throw new Error(`Failed to fetch exchange rates: ${res.status} - ${res.statusText}`);
    }
    return await res.json();
  } catch (error) {
    alert((error as Error).message)
  }
}