"use strict";

const { oAuth } = require("@xomicloud/xomi");

const options = require("../options");

function createAccountHandler(request, response, next) {
  const createAccount = true;

  oAuth.redirect(options, response, createAccount);
}

module.exports = createAccountHandler;
