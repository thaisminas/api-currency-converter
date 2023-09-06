import { Injectable } from '@nestjs/common';
import {
  InputCreateTransaction,
  OutputCreateTransaction,
} from './../../utils/types/transaction-type';
import UUIDGenerator from '../../domain/identity/UUID-generator';
import { ApiExchangeRates } from '../../infra/api/api-exchange-rates';

@Injectable()
export class GetCurrencyConversionData {
  constructor(private apiExchangeRates: ApiExchangeRates) {}
  async execute(
    currency: InputCreateTransaction,
  ): Promise<OutputCreateTransaction> {
    const data = await this.apiExchangeRates.getRates();
    const conversionRate = data.rates[currency.destinationCurrency];
    const uuid = UUIDGenerator.create();
    return {
      id: uuid,
      userid: currency.userId,
      originCurrency: currency.originCurrency,
      originValue: currency.originValue,
      destinationCurrency: currency.destinationCurrency,
      destinationValue: currency.originValue * conversionRate,
      conversionRate: conversionRate,
    };
  }
}
