const ShopT = require("../models/shop_tool");
const getShopTs = async (ctx) => {
  try {
    const shopTs = await ShopT.findAll();
    ctx.status = 201;
    ctx.body = shopTs;
  } catch (error) {
    (ctx.status = 500), (cts.body = "Serverda hatolik");
  }
};

const getShopT = async (ctx) => {
  try {
    const id = await ctx.params.id;
    const shopT = await ShopT.findAll({ where: { id: id } });
    ctx.status = 201;
    ctx.body = shopT;
  } catch (error) {
    ctx.status = 500;
    ctx.body = "Serverda hatolik";
  }
};

const addShopT = async (ctx) => {
  try {
    const { price, shopId, toolId } = ctx.request.body;
    const newShopT = await ShopT.create({
      price,
      shopId,
      toolId,
    });
    ctx.status = 201;
    ctx.body = newShopT;
  } catch (error) {
    ctx.status = 500;
    ctx.body = "serverda hatolik";
  }
};
module.exports = {
  getShopT,
  getShopTs,
  addShopT,
};
