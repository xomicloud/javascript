"use strict";

const { oAuth } = require("@xomicloud/xomi");

const options = require("../options");

function signInHandler(request, response, next) {
  const createAccount = false;

  oAuth.redirect(options, response, createAccount);
}

module.exports = signInHandler;
