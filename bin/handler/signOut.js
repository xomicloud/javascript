"use strict";

const constants = require("../constants"),
      cookieUtilities = require("../utilities/cookie"),
      headersUtilities = require("../utilities/headers");

const { removeAuthenticationCookie } = cookieUtilities,
      { setAuthoriseLocationHeader } = headersUtilities;

function signOutHandler(request, response, next) {
  const { SEE_OTHER_303_STATUS_CODE } = constants,
        createAccount = false;

  removeAuthenticationCookie(response);

  setAuthoriseLocationHeader(response, createAccount);

  response.status(SEE_OTHER_303_STATUS_CODE);

  response.end("");
}

module.exports = signOutHandler;
