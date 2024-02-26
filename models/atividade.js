'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Atividade extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Atividade.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    dataInicio: DataTypes.DATE,
    dataFim: DataTypes.DATE,
    dataCriacao: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Atividade',
  });
  return Atividade;
};