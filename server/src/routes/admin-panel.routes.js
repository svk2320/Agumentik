const express = require("express");
const { updateSocialMediaLinks } = require("../controllers/admin.controller");

const adminRouter = express.Router();

adminRouter.patch("/socialMediaLinks", updateSocialMediaLinks);

module.exports = adminRouter;
