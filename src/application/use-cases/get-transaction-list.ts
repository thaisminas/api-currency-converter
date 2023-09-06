import { Injectable } from '@nestjs/common';
import { TransactionRepository } from '../../infra/database/repositories/transaction-repository';


export type OutputData = {
  id: string;
  userId: string;
  originCurrency: string;
  originValue: number;
  destinationCurrency: string;
  conversionRateUsed: number;
};
@Injectable()
export class GetTransactionList {
  constructor(private transactionRepository: TransactionRepository) {}
  async execute(userId: string): Promise<OutputData[]> {
    return await this.transactionRepository.findTransaction(userId);
  }
}
