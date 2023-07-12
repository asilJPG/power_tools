const Router = require("@koa/router");
const {
  getShopTs,
  getShopT,
  addShopT,
} = require("../controllers/shop_tool.controller");

const router = new Router();

router.get("/", getShopTs);
router.get("/:id", getShopT);
router.post("/", addShopT);

module.exports = () => router.routes();
