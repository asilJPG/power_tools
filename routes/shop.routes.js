const Router = require("@koa/router");
const {
  getShop,
  getShops,
  addShop,
} = require("../controllers/shop.controller");

const router = new Router();

router.get("/", getShops);
router.get("/:id", getShop);
router.post("/", addShop);

module.exports = () => router.routes();
