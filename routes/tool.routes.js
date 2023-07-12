const Router = require("@koa/router");
const {
  getTool,
  getTools,
  addTool,
} = require("../controllers/tool.controller");
const router = new Router();

router.get("/", getTools);
router.get("/:id", getTool);
router.post("/", addTool);

module.exports = () => router.routes();
