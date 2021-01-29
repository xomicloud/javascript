"use strict";

const express = require("express");

const paths = require("../paths"),
      signOutHandler = require("../handler/signOut"),
      homePageHandler = require("../handler/page/home");

const { SIGN_OUT_PATH, HOME_PAGE_PATH } = paths;

const restrictedRouter = express.Router(); ///

restrictedRouter.get(SIGN_OUT_PATH, signOutHandler);

restrictedRouter.get(HOME_PAGE_PATH, homePageHandler);

module.exports = restrictedRouter;
