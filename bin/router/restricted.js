"use strict";

const express = require("express");

const paths = require("../paths"),
      homePageHandler = require("../handler/page/home");

const { HOME_PAGE_PATH } = paths;

const restrictedRouter = express.Router(); ///

restrictedRouter.get(HOME_PAGE_PATH, homePageHandler);

module.exports = restrictedRouter;
