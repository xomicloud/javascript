"use strict";

const express = require("express");

const paths = require("../paths"),
      signOutHandler = require("../handler/signOut"),
      accountPageHandler = require("../handler/page/account");

const { SIGN_OUT_PATH, ACCOUNT_PAGE_PATH } = paths;

const restrictedRouter = express.Router(); ///

restrictedRouter.get(SIGN_OUT_PATH, signOutHandler);

restrictedRouter.get(ACCOUNT_PAGE_PATH, accountPageHandler);

module.exports = restrictedRouter;
