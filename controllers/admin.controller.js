const Admin = require("../models/admin");
const getAdmins = async (ctx) => {
  try {
    const admins = await Admin.findAll();
    ctx.status = 201;
    ctx.body = admins;
  } catch (error) {
    (ctx.status = 500), (cts.body = "Serverda hatolik");
  }
};

const getAdmin = async (ctx) => {
  try {
    const id = await ctx.params.id;
    const admin = await Admin.findAll({ where: { id: id } });
    ctx.status = 201;
    ctx.body = admin;
  } catch (error) {
    ctx.status = 500;
    ctx.body = "Serverda hatolik";
  }
};

const addAdmin = async (ctx) => {
  try {
    const { admin_name, admin_password, admin_email } = ctx.request.body;
    const newAdmin = await Admin.create({
      admin_name,
      admin_password,
      admin_email,
    });
    ctx.status = 201;
    ctx.body = newAdmin;
  } catch (error) {
    ctx.status = 500;
    ctx.body = "serverda hatolik";
  }
};
module.exports = {
  getAdmin,
  getAdmins,
  addAdmin,
};
