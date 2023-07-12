const sequelize = require("../config/db");

const { DataTypes } = require("sequelize");
const Shop_tool = require("./shop_tool");
const Shop = sequelize.define("shop", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  shop_location: {
    type: DataTypes.STRING(50),
  },
  shop_name: {
    type: DataTypes.STRING(15),
  },
  shop_phone_number: {
    type: DataTypes.STRING,
  },
});
Shop_tool.belongsTo(Shop);
module.exports = Shop;
