"use strict";

const express = require("express");

const paths = require("../paths"),
      signInHandler = require("../handler/signIn"),
      callbackHandler = require("../handler/callback"),
      landingPageHandler = require("../handler/page/landing");

const { SIGN_IN_PATH, CALLBACK_PATH, LANDING_PAGE_PATH } = paths;

const unrestrictedRouter = express.Router(); ///

unrestrictedRouter.get(SIGN_IN_PATH, signInHandler);

unrestrictedRouter.get(CALLBACK_PATH, callbackHandler);

unrestrictedRouter.get(LANDING_PAGE_PATH, landingPageHandler);

module.exports = unrestrictedRouter;
