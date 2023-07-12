const Router = require("@koa/router");
const ClientRouter = require("./client.routes");
const AdminRouter = require("./admin.routes");
const ShopRouter = require("./shop.routes");
const OwnerRouter = require("./owner.routes");
const ToolRouter = require("./tool.routes");
const orderRoutes = require("./order.routes");
const ShopTRoutes = require("./shop_tool.routes");

const router = new Router();

router.use("/api/client", ClientRouter());
router.use("/api/admin", AdminRouter());
router.use("/api/shop", ShopRouter());
router.use("/api/owner", OwnerRouter());
router.use("/api/tool", ToolRouter());
router.use("/api/order", orderRoutes());
router.use("/api/shop_t", ShopTRoutes());

module.exports = () => router.routes();
