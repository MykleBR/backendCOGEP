// src/config/database.ts
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('mysql://root:gegkyoyrsr@localhost:3306/dbteste');

export default sequelize;
