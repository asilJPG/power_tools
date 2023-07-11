const sequelize = require("../config/db");

const { DataTypes } = require("sequelize");

const Shop_tool = sequelize.define("shop_tool", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  shop_id: {
    type: DataTypes.INTEGER,
  },
  tool_id: {
    type: DataTypes.INTEGER,
  },
  price: {
    type: DataTypes.INTEGER,
  },
});

module.exports = Shop_tool;
