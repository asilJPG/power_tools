const Owner = require("../models/owner");
const Shop = require("../models/shop");
const getOwners = async (ctx) => {
  try {
    const owners = await Owner.findAll({ include: Shop });
    ctx.status = 201;
    ctx.body = owners;
  } catch (error) {
    (ctx.status = 500), (cts.body = "Serverda hatolik");
  }
};

const getOwner = async (ctx) => {
  try {
    const id = await ctx.params.id;
    const owner = await Owner.findAll({ where: { id: id } });
    ctx.status = 201;
    ctx.body = owner;
  } catch (error) {
    ctx.status = 500;
    ctx.body = "Serverda hatolik";
  }
};

const addOwner = async (ctx) => {
  try {
    const { owner_name, owner_phone_number } = ctx.request.body;
    const newOwner = await Owner.create({
      owner_name,
      owner_phone_number,
    });
    ctx.status = 201;
    ctx.body = newOwner;
  } catch (error) {
    ctx.status = 500;
    ctx.body = "serverda hatolik";
  }
};
module.exports = {
  getOwner,
  getOwners,
  addOwner,
};
