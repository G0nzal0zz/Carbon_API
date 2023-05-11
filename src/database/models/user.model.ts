/* eslint-disable prettier/prettier */
import { Model, PrimaryKey, HasMany } from 'sequelize-typescript';
import { Column, Table } from 'sequelize-typescript';
import { Activity } from './activity.model';

@Table({ tableName: 'Users', timestamps: false })
export class User extends Model {
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
    unique: true,
  })
  email: string;

  @Column({
    allowNull: false,
  })
  password: string;

  @HasMany(() => Activity, 'user_id')
  activities: Activity[];
}
