const sequelize = require("../config/db");

const { DataTypes } = require("sequelize");
const Order = require("./order");
const Shop_tool = sequelize.define("shop_tool", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  price: {
    type: DataTypes.INTEGER,
  },
});
Order.belongsTo(Shop_tool);

module.exports = Shop_tool;
