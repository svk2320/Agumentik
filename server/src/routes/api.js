const express = require("express");

const adminRouter = require("./admin-panel.routes");
const websiteRouter = require("./website.routes");

const router = express.Router();

router.use("/admin", adminRouter);
router.use("/", websiteRouter);

module.exports = router;
