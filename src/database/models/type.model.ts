import {
  BelongsTo,
  Column,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Activity } from './activity.model';

@Table({ tableName: 'Activity_Type', timestamps: false })
export class Type extends Model {
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
  min_emission: number;

  @Column({
    allowNull: false,
  })
  max_emission: number;

  @BelongsTo(() => Activity, 'type_id')
  activity: Activity;
}
