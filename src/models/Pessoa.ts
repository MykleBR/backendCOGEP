// src/models/Pessoa.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

interface PessoaAttributes {
  nome: string;
  telefone: string;
  email: string;
  endereco: { rua: string; numero: number };
}

class Pessoa extends Model<PessoaAttributes> {}

Pessoa.init(
  {
    nome: DataTypes.STRING,
    telefone: DataTypes.STRING,
    email: DataTypes.STRING,
    endereco: DataTypes.JSON,
  },
  { sequelize, modelName: 'pessoa' }
);

export default Pessoa;
