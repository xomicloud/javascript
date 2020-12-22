"use strict";

const constants = require("../constants"),
      headersUtilities = require("../utilities/headers");

const { setAuthoriseLocationHeader } = headersUtilities;

function signInHandler(request, response, next) {
  const { SEE_OTHER_303_STATUS_CODE } = constants;

  setAuthoriseLocationHeader(response);

  response.status(SEE_OTHER_303_STATUS_CODE);

  response.end("");
}

module.exports = signInHandler;
