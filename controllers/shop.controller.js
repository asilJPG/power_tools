const Owner = require("../models/owner");
const Shop = require("../models/shop");
const getShops = async (ctx) => {
  try {
    const shops = await Shop.findAll({ include: Owner });
    ctx.status = 201;
    ctx.body = shops;
  } catch (error) {
    (ctx.status = 500), (cts.body = "Serverda hatolik");
  }
};

const getShop = async (ctx) => {
  try {
    const id = await ctx.params.id;
    const shop = await Shop.findAll({ where: { id: id } });
    ctx.status = 201;
    ctx.body = shop;
  } catch (error) {
    ctx.status = 500;
    ctx.body = "Serverda hatolik";
  }
};

const addShop = async (ctx) => {
  try {
    const { shop_location, shop_name, shop_phone_number, ownerId } =
      ctx.request.body;
    const newShop = await Shop.create({
      shop_location,
      shop_name,
      shop_phone_number,
      ownerId,
    });
    ctx.status = 201;
    ctx.body = newShop;
  } catch (error) {
    ctx.status = 500;
    ctx.body = "serverda hatolik";
  }
};
module.exports = {
  getShop,
  getShops,
  addShop,
};
