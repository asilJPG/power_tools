const Tool = require("../models/tools");
const getTools = async (ctx) => {
  try {
    const tools = await Tool.findAll();
    ctx.status = 201;
    ctx.body = tools;
  } catch (error) {
    (ctx.status = 500), (cts.body = "Serverda hatolik");
  }
};

const getTool = async (ctx) => {
  try {
    const id = await ctx.params.id;
    const tool = await Tool.findAll({ where: { id: id } });
    ctx.status = 201;
    ctx.body = tool;
  } catch (error) {
    ctx.status = 500;
    ctx.body = "Serverda hatolik";
  }
};

const addTool = async (ctx) => {
  try {
    const { tool_name } = ctx.request.body;
    const newTool = await Tool.create({
      tool_name,
    });
    ctx.status = 201;
    ctx.body = newTool;
  } catch (error) {
    ctx.status = 500;
    ctx.body = "serverda hatolik";
  }
};
module.exports = {
  getTool,
  getTools,
  addTool,
};
