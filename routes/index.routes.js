const Router = require("@koa/router");
const ClientRouter = require("./client.routes");

const router = new Router();

router.use("/api/client", ClientRouter());

module.exports = () => router.routes();
