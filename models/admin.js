const sequelize = require("../config/db");

const { DataTypes } = require("sequelize");

const Admin = sequelize.define("admin", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  admin_name: {
    type: DataTypes.STRING(50),
  },
  admin_password: {
    type: DataTypes.STRING(15),
  },
  admin_email: {
    type: DataTypes.STRING,
  },
});

module.exports = Admin;
