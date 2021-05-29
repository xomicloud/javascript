"use strict";

const options = require("../../options"),
      contentUtilities = require("../../utilities/content");

const { http, oAuth, cookie } = require("../../../lib/main"); ///

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
