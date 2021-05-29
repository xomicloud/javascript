"use strict";

const { oAuth } = require("../../lib/main"); ///

const options = require("../options");

function createAccountHandler(request, response, next) {
  const createAccount = true;

  oAuth.redirect(options, response, createAccount);
}

module.exports = createAccountHandler;
