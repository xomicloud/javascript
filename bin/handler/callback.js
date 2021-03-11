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
        { code, remember_me } = query,
        rememberMe = !!remember_me,
        callbackPostHeaders = createCallbackPostHeaders(),
        callbackPostParameters = createCallbackPostParameters(code),
        url = AUTHENTICATE_HOST,  ///
        headers = callbackPostHeaders,  ///
        parameters = callbackPostParameters;  ///

  post(url, headers, parameters, (error, json) => {
    const { access_token } = json,
          { SEE_OTHER_303_STATUS_CODE } = constants;

    let Location;

    if (access_token) {
      const { HOME_PAGE_PATH } = paths,
            accessToken = access_token; ///

      Location = HOME_PAGE_PATH; ///

      setAuthenticationCookie(response, accessToken, rememberMe);
    } else {
      const { SIGN_IN_PATH } = paths;

      Location = SIGN_IN_PATH;  ///
    }

    response.setHeader("Location", Location);

    response.status(SEE_OTHER_303_STATUS_CODE);

    response.end("");
  });
}

module.exports = callbackHandler;
