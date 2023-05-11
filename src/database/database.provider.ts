import { Sequelize } from 'sequelize-typescript';
import { User } from './models/user.model';
import { Activity } from './models/activity.model';
import { Type } from './models/type.model';
import { sequelizeAliases } from './sequelize/sequelize.aliases';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async (): Promise<Sequelize> => {
      const sequelize = new Sequelize(
        process.env.POSTGRES_DB,
        process.env.POSTGRES_USER,
        process.env.POSTGRES_PASSWORD,
        {
          host: 'localhost',
          dialect: 'postgres',
          port: +process.env.DB_PORT,
          operatorsAliases: sequelizeAliases,
        },
      );
      sequelize.addModels([User, Activity, Type]);
      try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log('Connection has been established successfully.');
      } catch (e) {
        console.error(e);
      }
      return sequelize;
    },
  },
];
