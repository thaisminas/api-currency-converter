import {
  HttpStatus,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { TransactionModel } from '../../../domain/model/transaction-model';
import { TransactionDto } from '../../../application/dto/TransactionDto';
@Injectable()
export class TransactionRepository {
  constructor(
    @Inject('TRANSACTION_REPOSITORY')
    private trasactionRepository: typeof TransactionModel,
  ) {}

  async create(transaction: TransactionDto): Promise<void> {
    try {
      await this.trasactionRepository.create({
        id: transaction.id,
        userId: transaction.userId,
        originCurrency: transaction.originCurrency,
        originValue: transaction.originValue,
        destinationCurrency: transaction.destinationCurrency,
        conversionRateUsed: transaction.conversionRateUsed,
      });
    } catch (err) {
      return err;
    }
  }

  async findTransaction(userId: string): Promise<TransactionModel[]> {
    const transaction = await this.trasactionRepository.findAll({
      where: {
        userId: userId,
      },
    });

    if (transaction === null) {
      throw new NotFoundException({
        statusCode: HttpStatus.NOT_FOUND,
        message: 'not found transaction for user id',
      });
    }

    return transaction;
  }
}
