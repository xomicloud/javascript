"use strict";

const paths = require("../paths"),
      constants = require("../constants"),
      postUtilities = require("../utilities/post"),
      cookieUtilities = require("../utilities/cookie"),
      callbackUtilities = require("../utilities/callback");

const { post } = postUtilities,
      { setAuthenticationCookie } = cookieUtilities,
      { createCallbackPostHeaders, createCallbackPostParameters } = callbackUtilities;

function callbackHandler(request, response, next) {
  const { AUTHENTICATE_HOST } = process.env,
        { query } = request,
        { code } = query,
        callbackPostHeaders = createCallbackPostHeaders(),
        callbackPostParameters = createCallbackPostParameters(code),
        url = AUTHENTICATE_HOST,  ///
        headers = callbackPostHeaders,  ///
        parameters = callbackPostParameters;  ///

  post(url, headers, parameters, (json) => {
    if (json === null) {
      const { TEXT_PLAIN_CONTENT_TYPE,
              INTERNAL_SERVER_ERROR_500_MESSAGE,
              INTERNAL_SERVER_ERROR_500_STATUS_CODE } = constants;

      response.setHeader("content-type", TEXT_PLAIN_CONTENT_TYPE);

      response.status(INTERNAL_SERVER_ERROR_500_STATUS_CODE);

      response.end(INTERNAL_SERVER_ERROR_500_MESSAGE);

      return;
    }

    let location;

    const { accessToken } = json,
          { SEE_OTHER_303_STATUS_CODE } = constants;

    if (accessToken) {
      const { HOME_PAGE_PATH } = paths,
            { remember_me } = query,
            rememberMe = !!remember_me;

      location = HOME_PAGE_PATH; ///

      setAuthenticationCookie(response, accessToken, rememberMe);
    } else {
      const { SIGN_IN_PATH } = paths;

      location = SIGN_IN_PATH;  ///
    }

    response.setHeader("location", location);

    response.status(SEE_OTHER_303_STATUS_CODE);

    response.end("");
  });
}

module.exports = callbackHandler;
