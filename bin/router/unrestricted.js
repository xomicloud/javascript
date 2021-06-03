"use strict";

const express = require("express");

const paths = require("../paths"),
      signInHandler = require("../handler/signIn"),
      signOutHandler = require("../handler/signOut"),
      callbackHandler = require("../handler/callback"),
      createAccountHandler = require("../handler/createAccount");

const { SIGN_IN_PATH, SIGN_OUT_PATH, CALLBACK_PATH, CREATE_ACCOUNT_PATH } = paths;

const unrestrictedRouter = express.Router(); ///

unrestrictedRouter.get(SIGN_IN_PATH, signInHandler);

unrestrictedRouter.get(SIGN_OUT_PATH, signOutHandler);

unrestrictedRouter.get(CALLBACK_PATH, callbackHandler);

unrestrictedRouter.get(CREATE_ACCOUNT_PATH, createAccountHandler);

module.exports = unrestrictedRouter;
