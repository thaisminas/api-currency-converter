export type OutputApiExchangeRate = {
  success: string;
  timestamp: number;
  base: string;
  date: string;
  rates: Rates;
};

type Rates = {
  BRL: string;
  USD: string;
  EUR: string;
  JPY: string;
};
