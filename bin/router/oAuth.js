"use strict";

const express = require("express");

const constants = require("../constants"),
      logInOAuthHandler = require("../handler/oAuth/logIn"),
      callbackOAuthHandler = require("../handler/oAuth/callback");

const { LOG_IN_OAUTH_PATH, CALLBACK_OAUTH_PATH } = constants;

const oAuthRouter = express.Router();

oAuthRouter.get(LOG_IN_OAUTH_PATH, logInOAuthHandler);

oAuthRouter.get(CALLBACK_OAUTH_PATH, callbackOAuthHandler);

module.exports = oAuthRouter;
