"use strict";

const { http, oAuth, cookie } = require("@xomicloud/xomi");

const options = require("../options");

const { SIGN_IN_PATH, HOME_PAGE_PATH } = require("../paths");

function callbackHandler(request, response, next) {
  const { query } = request,
        { code } = query;

  oAuth.callback(options, code, (error, accessToken) => {
    if (error) {
      http.badGatewayError(response, error);

      return;
    }

    let location;

    if (accessToken === null) {
      location = SIGN_IN_PATH;  ///
    } else {
      const { remember_me } = query,
            rememberMe = !!remember_me;

      location = HOME_PAGE_PATH; ///

      cookie.setAuthenticationCookie(options, response, accessToken, rememberMe);
    }

    http.redirect(response, location)
  });
}

module.exports = callbackHandler;
