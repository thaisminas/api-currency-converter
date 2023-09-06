import { Model, Table, Column, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'users',
})
export class UserModel extends Model<UserModel> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    primaryKey: true,
  })
  id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: string;
}
