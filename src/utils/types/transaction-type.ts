export type OutputTransaction = {
  id: string;
  userId: string;
  originCurrency: string;
  originValue: number;
  destinationCurrency: string;
  conversionRateUsed: number;
};

export type InputTransaction = {
  id: string;
};

export type InputCreateTransaction = {
  userId: string;
  originCurrency: string;
  destinationCurrency: string;
  originValue: number;
};

export type OutputCreateTransaction = {
  id: string;
  userid: string;
  originCurrency: string;
  originValue: number;
  destinationCurrency: string;
  destinationValue: number;
  conversionRate: number;
};
