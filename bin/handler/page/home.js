"use strict";

const { http, oAuth, cookie } = require("@xomicloud/xomi");

const options = require("../../options"),
      contentUtilities = require("../../utilities/content");

const { createHomePageHTML } = contentUtilities;

function homePageHandler(request, response, next) {
  const authenticationCookiePresent = cookie.isAuthenticationCookiePresent(options, request);

  if (!authenticationCookiePresent) {
    oAuth.redirect(options, response);

    return;
  }

  const homePageHTML = createHomePageHTML(),
        html = homePageHTML;  ///

  http.html(response, html);
}

module.exports = homePageHandler;
