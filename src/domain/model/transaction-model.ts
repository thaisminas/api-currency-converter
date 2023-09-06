import {
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
  Model,
} from 'sequelize-typescript';
import { UserModel } from './user-model';

@Table({
  tableName: 'transactions',
})
export class TransactionModel extends Model<TransactionModel> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    primaryKey: true,
    field: 'id',
  })
  id: string;

  @ForeignKey(() => UserModel)
  @Column({
    type: DataType.STRING,
    allowNull: false,
    field: 'user_id',
  })
  userId: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    field: 'origin_currency',
  })
  originCurrency: string;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
    field: 'origin_value',
  })
  originValue: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    field: 'destination_currency',
  })
  destinationCurrency: string;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
    field: 'conversion_rate_used',
  })
  conversionRateUsed: number;

  @BelongsTo(() => UserModel, 'userId')
  user: UserModel;
}
