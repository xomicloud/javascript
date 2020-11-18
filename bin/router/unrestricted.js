"use strict";

const express = require("express");

const constants = require("../constants"),
      signOutHandler = require("../handler/signOut"),
      homePageHandler = require("../handler/page/home");

const { SIGN_OUT_PATH, HOME_PAGE_PATH } = constants;

const unrestrictedRouter = express.Router(); ///

unrestrictedRouter.get(SIGN_OUT_PATH, signOutHandler);

unrestrictedRouter.get(HOME_PAGE_PATH, homePageHandler);

module.exports = unrestrictedRouter;
