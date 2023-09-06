import { TransactionModel } from '../domain/model/transaction-model';
import { UserModel } from '../domain/model/user-model';

export const providers = [
  {
    provide: 'TRANSACTION_REPOSITORY',
    useValue: TransactionModel,
  },
  {
    provide: 'USER_REPOSITORY',
    useValue: UserModel,
  },
];
