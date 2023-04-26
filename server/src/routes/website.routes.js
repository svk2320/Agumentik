const express = require("express");
const { GetwebsiteDetails } = require("../controllers/website.controller");

const websiteRouter = express.Router();

websiteRouter.get("/", GetwebsiteDetails);

module.exports = websiteRouter;
