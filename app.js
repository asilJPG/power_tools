const Koa = require("koa");
const config = require("config");
const bodyParser = require("koa-bodyparser");
const cors = require("koa-cors");
const Router = require("@koa/router");
const MainRouter = require("./routes/index.routes");
const serve = require("koa-static");
const sequelize = require("./config/db");
const Client = require("./models/client");

const port = config.get("PORT") || 3000;
const app = new Koa();

app.use(serve(__dirname + "/static/img"));
app.use(bodyParser());
// app.use(cors());
app.use(MainRouter());

// app.use((ctx) => {
//   //   console.log(ctx);
//   //   console.log(ctx.req);
//   //   // console.log(ctx.res, "544654");

//   ctx.body = "salom KOA"; // = res.send({message:""})
// });

const start = async () => {
  try {
    await sequelize.authenticate();
    await Client.sync({ alter: true }); //alter: true обновляет бд и применяет изменения автомотический
    app.listen(port, () => {
      console.log(`server actinve in ${port} port`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
