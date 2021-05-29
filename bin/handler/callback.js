"use strict";

const { http, oAuth, cookie } = require("../../lib/main");  ///

const paths = require("../paths"),
      options = require("../options");

function callbackHandler(request, response, next) {
  const { query } = request,
        { code } = query;

  oAuth.callback(options, code, (error, accessToken) => {
    if (error) {
      http.internalServerError(response, error);

      return;
    }

    let location;

    if (accessToken === null) {
      const { SIGN_IN_PATH } = paths;

      location = SIGN_IN_PATH;  ///
    } else {
      const { HOME_PAGE_PATH } = paths,
            { remember_me } = query,
            rememberMe = !!remember_me;

      location = HOME_PAGE_PATH; ///

      cookie.setAuthenticationCookie(options, response, accessToken, rememberMe);
    }

    http.redirect(response, location)
  });
}

module.exports = callbackHandler;
