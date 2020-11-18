"use strict";

const express = require("express");

const constants = require("../constants"),
      signInOAuthHandler = require("../handler/oAuth/signIn"),
      callbackOAuthHandler = require("../handler/oAuth/callback");

const { SIGN_IN_OAUTH_PATH, CALLBACK_OAUTH_PATH } = constants;

const oAuthRouter = express.Router();

oAuthRouter.get(SIGN_IN_OAUTH_PATH, signInOAuthHandler);

oAuthRouter.get(CALLBACK_OAUTH_PATH, callbackOAuthHandler);

module.exports = oAuthRouter;
