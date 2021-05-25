"use strict";

const paths = require("../paths"),
      request = require("../request"),
      constants = require("../constants"),
      cookieUtilities = require("../utilities/cookie"),
      callbackUtilities = require("../utilities/callback");

const { post } = request,
      { END, DATA } = constants,
      { setAuthenticationCookie } = cookieUtilities,
      { createCallbackPostHeaders, createCallbackPostParameters } = callbackUtilities;

function callbackHandler(request, response, next) {
  const { CLIENT_HOST } = process.env,
        { query } = request,
        { code } = query,
        callbackPostHeaders = createCallbackPostHeaders(),
        callbackPostParameters = createCallbackPostParameters(code),
        host = CLIENT_HOST,  ///
        uri = "/",
        headers = callbackPostHeaders,  ///
        parameters = callbackPostParameters;  ///

  post(host, uri, headers, parameters, (error, remoteResponse) => {
    if (error) {
      const { TEXT_PLAIN_CONTENT_TYPE,
              INTERNAL_SERVER_ERROR_500_MESSAGE,
              INTERNAL_SERVER_ERROR_500_STATUS_CODE } = constants;

      response.setHeader("content-type", TEXT_PLAIN_CONTENT_TYPE);

      response.status(INTERNAL_SERVER_ERROR_500_STATUS_CODE);

      response.end(INTERNAL_SERVER_ERROR_500_MESSAGE);

      return;
    }

    bodyFromResponse(remoteResponse, (body) => {
      let json;

      const jsonString = body;  ///

      try {
        json = JSON.parse(jsonString);
      } catch (error) {
        ///
      }

      let location;

      const { access_token } = json,
            { SEE_OTHER_303_STATUS_CODE } = constants;

      if (access_token) {
        const { HOME_PAGE_PATH } = paths,
              { remember_me } = query,
              accessToken = access_token, ///
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
  });
}

module.exports = callbackHandler;

function bodyFromResponse(response, callback) {
  let body = "";

  response.on(DATA, (data) => {
    body += data;
  });

  response.on(END, () => {
    callback(body);
  });
}
