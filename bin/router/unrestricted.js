"use strict";

const express = require("express");

const constants = require("../constants"),
      logOutHandler = require("../handler/logOut"),
      homePageHandler = require("../handler/page/home");

const { LOG_OUT_PATH, HOME_PAGE_PATH } = constants;

const unrestrictedRouter = express.Router(); ///

unrestrictedRouter.get(LOG_OUT_PATH, logOutHandler);

unrestrictedRouter.get(HOME_PAGE_PATH, homePageHandler);

module.exports = unrestrictedRouter;
