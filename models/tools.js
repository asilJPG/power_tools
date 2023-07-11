const sequelize = require("../config/db");

const { DataTypes } = require("sequelize");

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

module.exports = Tool;
