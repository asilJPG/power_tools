const sequelize = require("../config/db");

const { DataTypes } = require("sequelize");

const Client = sequelize.define(
  "client",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    client_name: {
      type: DataTypes.STRING(50),
    },
    client_phone_number: {
      type: DataTypes.STRING(15),
    },
    client_email: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  } //не добавляет s в конце названия таблицы
);

module.exports = Client;
