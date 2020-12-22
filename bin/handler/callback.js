"use strict";

const paths = require("../paths"),
      constants = require("../constants"),
      postUtilities = require("../utilities/post"),
      cookieUtilities = require("../utilities/cookie"),
      callbackUtilities = require("../utilities/callback");

const { post } = postUtilities,
      { setAccessTokenCookie } = cookieUtilities,
      { createCallbackPostHeaders, createCallbackPostParameters } = callbackUtilities;

function callbackHandler(request, response, next) {
  const { CLIENT_HOST } = process.env,
        { query } = request,
        { code } = query,
        callbackPostHeaders = createCallbackPostHeaders(),
        callbackPostParameters = createCallbackPostParameters(code),
        url = CLIENT_HOST,  ///
        headers = callbackPostHeaders,  ///
        parameters = callbackPostParameters;  ///

  post(url, headers, parameters, (json) => {
    const { access_token } = json;

    if (access_token) {
      const { ACCOUNT_PAGE_PATH } = paths,
            { SEE_OTHER_303_STATUS_CODE } = constants,
            Location = ACCOUNT_PAGE_PATH; ///

      setAccessTokenCookie(response, access_token);

      response.setHeader("Location", Location);

      response.status(SEE_OTHER_303_STATUS_CODE);

      response.end("");
    } else {
      const { TEXT_PLAIN_CONTENT_TYPE, INTERNAL_SERVER_ERROR_500_MESSAGE, INTERNAL_SERVER_ERROR_500_STATUS_CODE } = constants,
            content = INTERNAL_SERVER_ERROR_500_MESSAGE;  ///

      response.setHeader("Content-Type", TEXT_PLAIN_CONTENT_TYPE);

      response.status(INTERNAL_SERVER_ERROR_500_STATUS_CODE);

      response.end(content);
    }
  });
}

module.exports = callbackHandler;
