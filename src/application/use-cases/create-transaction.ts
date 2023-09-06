import { Injectable } from '@nestjs/common';
import { GetCurrencyConversionData } from './get-currency-conversion-data';
import { TransactionRepository } from '../../infra/database/repositories/transaction-repository';
import { TransactionDto } from '../dto/TransactionDto';
import UUIDValidator from '../../utils/helper/UUID-validator';
import { isNumber, isString } from '@nestjs/common/utils/shared.utils';
import { UserRepository } from '../../infra/database/repositories/user-repository';
import { Logger } from '../../utils/logger/Logger';
import { InputCreateTransaction, OutputCreateTransaction } from "../../utils/types/transaction-type";

@Injectable()
export class CreateTransaction {
  CURRENCY = ['BRL', 'USD', 'EUR', 'JPY'];
  constructor(
    private transactionRepository: TransactionRepository,
    private userTransaction: UserRepository,
    private calculateValueConvertedCurrency: GetCurrencyConversionData,
    private logger: Logger,
  ) {}
  async execute(
    data: InputCreateTransaction,
  ): Promise<OutputCreateTransaction | boolean> {
    const isValidData = await this.isValidData(data);
    if (!isValidData) {
      this.logger.log(`invalid data`);
      return false;
    }

    const dataTransaction = await this.calculateValueConvertedCurrency.execute(
      data,
    );
    const transaction: TransactionDto = {
      id: dataTransaction.id,
      userId: dataTransaction.userid,
      originCurrency: dataTransaction.originCurrency,
      originValue: dataTransaction.originValue,
      destinationCurrency: dataTransaction.destinationCurrency,
      conversionRateUsed: dataTransaction.conversionRate,
    };
    await this.transactionRepository.create(transaction);

    return dataTransaction;
  }

  private async isValidData(data: InputCreateTransaction): Promise<boolean> {
    if (
      UUIDValidator.uuidValidate(data.userId) ||
      isString(data.originCurrency) ||
      isString(data.destinationCurrency) ||
      isNumber(data.originValue)
    ) {
      if (
        this.CURRENCY.includes(data.originCurrency) &&
        this.CURRENCY.includes(data.destinationCurrency)
      ) {
        return true;
      }
    }

    return false;
  }
}
