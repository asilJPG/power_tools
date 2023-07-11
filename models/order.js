const sequelize = require("../config/db");

const { DataTypes } = require("sequelize");

const Order = sequelize.define("order", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  client_id: {
    type: DataTypes.INTEGER,
  },
  total_price: {
    type: DataTypes.INTEGER,
  },
  tool: {
    type: DataTypes.STRING,
  },
  period: {
    type: DataTypes.STRING,
  },
});

module.exports = Order;
