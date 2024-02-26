// src/models/Atividade.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

interface AtividadeAttributes {
  nome: string;
  descricao: string;
  dataInicio: Date;
  dataFim: Date;
  dataCriacao: Date;
}

class Atividade extends Model<AtividadeAttributes> {}

Atividade.init(
  {
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    dataInicio: DataTypes.DATE,
    dataFim: DataTypes.DATE,
    dataCriacao: DataTypes.DATE,
  },
  { sequelize, modelName: 'atividade' }
);

export default Atividade;
