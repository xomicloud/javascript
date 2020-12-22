"use strict";

const constants = require("../constants"),
      cookieUtilities = require("../utilities/cookie"),
      headersUtilities = require("../utilities/headers");

const { removeAccessTokenCookie } = cookieUtilities,
      { setAuthoriseLocationHeader } = headersUtilities;

function signOutHandler(request, response, next) {
  const { SEE_OTHER_303_STATUS_CODE } = constants;

  removeAccessTokenCookie(response);

  setAuthoriseLocationHeader(response);

  response.status(SEE_OTHER_303_STATUS_CODE);

  response.end("");
}

module.exports = signOutHandler;
