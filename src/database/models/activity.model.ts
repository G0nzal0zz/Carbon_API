import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { User } from './user.model';
import { Type } from './type.model';

@Table({ tableName: 'Activity', timestamps: false })
export class Activity extends Model {
  @PrimaryKey
  @Column({
    autoIncrement: true,
  })
  id: number;

  @Column({
    allowNull: false,
  })
  name: string;

  @Column({
    allowNull: false,
  })
  description: string;

  @Column({
    allowNull: false,
  })
  price: number;

  @ForeignKey(() => User)
  @Column({})
  user_id: number;

  @ForeignKey(() => Type)
  @Column({})
  type_id: number;

  @BelongsTo(() => User, 'user_id')
  owner: User;

  @BelongsTo(() => Type, 'type_id')
  type: Type;
}
