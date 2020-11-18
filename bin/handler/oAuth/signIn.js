"use strict";

const constants = require("../../constants"),
      headersUtilities = require("../../utilities/headers");

const { setOAuth2AuthorizeHeaders } = headersUtilities;

function signInOAuthHandler(request, response, next) {
  const { SEE_OTHER_303_STATUS_CODE } = constants;

  setOAuth2AuthorizeHeaders(response);

  response.status(SEE_OTHER_303_STATUS_CODE);

  response.end("");
}

module.exports = signInOAuthHandler;
