const Router = require("@koa/router");
const {
  getOwners,
  getOwner,
  addOwner,
} = require("../controllers/owner.controller");

const router = new Router();

router.get("/", getOwners);
router.get("/:id", getOwner);
router.post("/", addOwner);

module.exports = () => router.routes();
