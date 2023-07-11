const Client = require("../models/client");
const getClients = async (ctx) => {
  try {
    const clients = await Client.findAll();
    ctx.status = 201;
    ctx.body = clients;
  } catch (error) {
    (ctx.status = 500), (cts.body = "Serverda hatolik");
  }
};

const getClient = async (ctx) => {
  try {
    const id = await ctx.params.id;
    const client = await Client.findAll({ where: { id: id } });
    ctx.status = 201;
    ctx.body = client;
  } catch (error) {
    ctx.status = 500;
    ctx.body = "Serverda hatolik";
  }
};

const addClient = async (ctx) => {
  try {
    const { client_name, client_phone_number } = ctx.request.body;
    const newClient = await Client.create({ client_name, client_phone_number });
    ctx.status = 201;
    ctx.body = newClient;
  } catch (error) {
    ctx.status = 500;
    ctx.body = "Serverda hatolik";
  }
};

module.exports = {
  getClient,
  getClients,
  addClient,
};
