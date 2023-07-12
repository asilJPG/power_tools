const Router = require("@koa/router");
const {
  getOrder,
  getOrders,
  addOrder,
} = require("../controllers/order.controller");
const router = new Router();

router.get("/", getOrders);
router.get("/:id", getOrder);
router.post("/", addOrder);

module.exports = () => router.routes();
