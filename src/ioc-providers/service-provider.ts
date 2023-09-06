import { Provider } from '@nestjs/common';
import {
  GetCurrencyConversionData,
  CreateUser,
  GetTransactionList,
  CreateTransaction,
} from '../application/use-cases';
import { ApiExchangeRates } from '../infra/api/api-exchange-rates';
import { Logger } from '../utils/logger/Logger';

export const serviceProviders: Provider[] = [
  GetCurrencyConversionData,
  CreateUser,
  CreateTransaction,
  GetTransactionList,
  ApiExchangeRates,
  Logger,
];
