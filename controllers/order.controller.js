const Order = require("../models/order");
const getOrders = async (ctx) => {
  try {
    const orders = await Order.findAll();
    ctx.status = 201;
    ctx.body = orders;
  } catch (error) {
    (ctx.status = 500), (cts.body = "Serverda hatolik");
  }
};

const getOrder = async (ctx) => {
  try {
    const id = await ctx.params.id;
    const order = await Order.findAll({ where: { id: id } });
    ctx.status = 201;
    ctx.body = order;
  } catch (error) {
    ctx.status = 500;
    ctx.body = "Serverda hatolik";
  }
};

const addOrder = async (ctx) => {
  try {
    const { order_location, order_name, order_phone_number, ownerId } =
      ctx.request.body;
    const newOrder = await Order.create({
      order_location,
      order_name,
      order_phone_number,
      ownerId,
    });
    ctx.status = 201;
    ctx.body = newOrder;
  } catch (error) {
    ctx.status = 500;
    ctx.body = "serverda hatolik";
  }
};
module.exports = {
  getOrder,
  getOrders,
  addOrder,
};
