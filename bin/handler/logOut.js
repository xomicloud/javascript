"use strict";

const constants = require("../constants"),
      cookieUtilities = require("../utilities/cookie"),
      headersUtilities = require("../utilities/headers");

const { removeAccessTokenCookie } = cookieUtilities,
      { setHomePageRedirectHeaders } = headersUtilities;

function logOutHandler(request, response, next) {
  const { SEE_OTHER_303_STATUS_CODE } = constants;

  setHomePageRedirectHeaders(response);

  removeAccessTokenCookie(response);

  response.status(SEE_OTHER_303_STATUS_CODE);

  response.end("");
}

module.exports = logOutHandler;
