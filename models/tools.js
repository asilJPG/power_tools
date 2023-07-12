const sequelize = require("../config/db");

const { DataTypes } = require("sequelize");
const Shop_tool = require("./shop_tool");

const Tool = sequelize.define("tool", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  tool_name: {
    type: DataTypes.STRING(50),
  },
});
Shop_tool.belongsTo(Tool);
module.exports = Tool;
