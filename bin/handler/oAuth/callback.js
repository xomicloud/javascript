"use strict";

const constants = require("../../constants"),
      postUtilities = require("../../utilities/post"),
      cookieUtilities = require("../../utilities/cookie"),
      headersUtilities = require("../../utilities/headers"),
      callbackUtilities = require("../../utilities/callback");

const { post } = postUtilities,
      { setAccessTokenCookie } = cookieUtilities,
      { setHomePageRedirectHeaders } = headersUtilities,
      { createCallbackPostHeaders, createCallbackPostParameters } = callbackUtilities;

function callbackOAuthHandler(request, response, next) {
  const { SEE_OTHER_303_STATUS_CODE, OAUTH2_TOKEN_URI } = constants,
        { CLIENT_HOST } = process.env,
        { query } = request,
        { code } = query,
        callbackPostHeaders = createCallbackPostHeaders(),
        callbackPostParameters = createCallbackPostParameters(code),
        url = `${CLIENT_HOST}${OAUTH2_TOKEN_URI}`,
        headers = callbackPostHeaders,  ///
        parameters = callbackPostParameters;  ///

  post(url, headers, parameters, (json) => {
    const { access_token } = json;

    setHomePageRedirectHeaders(response);

    setAccessTokenCookie(response, access_token);

    response.status(SEE_OTHER_303_STATUS_CODE);

    response.end("");
  });
}

module.exports = callbackOAuthHandler;
