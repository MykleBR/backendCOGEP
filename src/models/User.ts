// src/models/User.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import bcrypt from 'bcrypt';

class User extends Model {
  public id!: number;
  public username!: string;
  public password!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  // Adicione o método de comparação de senha
  public async comparePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
}

User.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize, modelName: 'user' }
);

export default User;
