"use strict";

const express = require("express");

const paths = require("../paths"),
      signInHandler = require("../handler/signIn"),
      callbackHandler = require("../handler/callback"),
      createAccountHandler = require("../handler/createAccount");

const { SIGN_IN_PATH, CALLBACK_PATH, CREATE_ACCOUNT_PATH } = paths;

const unrestrictedRouter = express.Router(); ///

unrestrictedRouter.get(SIGN_IN_PATH, signInHandler);

unrestrictedRouter.get(CALLBACK_PATH, callbackHandler);

unrestrictedRouter.get(CREATE_ACCOUNT_PATH, createAccountHandler);

module.exports = unrestrictedRouter;
