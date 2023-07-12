const Router = require("@koa/router");
const {
  getAdmins,
  getAdmin,
  addAdmin,
} = require("../controllers/admin.controller");

const router = new Router();

router.get("/", getAdmins);
router.get("/:id", getAdmin);
router.post("/", addAdmin);

module.exports = () => router.routes();
