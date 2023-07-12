const sequelize = require("../config/db");

const { DataTypes } = require("sequelize");

const Order = sequelize.define("order", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  total_price: {
    type: DataTypes.INTEGER,
  },
  period: {
    type: DataTypes.STRING,
  },
});
module.exports = Order;
