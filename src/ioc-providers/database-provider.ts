
import { UserModel } from '../domain/model/user-model';
import { TransactionModel } from '../domain/model/transaction-model';
import { Sequelize } from "sequelize-typescript";

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: '127.0.0.1',
        port: 5444,
        username: 'root',
        password: 'root',
        database: 'currency_converter',
      });
      sequelize.addModels([TransactionModel, UserModel]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
