"use strict";

const constants = require("../../constants"),
      cookieUtilities = require("../../utilities/cookie"),
      contentUtilities = require("../../utilities/content"),
      headersUtilities = require("../../utilities/headers");

const { setHTMLHeaders } = headersUtilities,
      { createHomePageContent } = contentUtilities,
      { isAccessTokenCookiePresent } = cookieUtilities;

function homePageHandler(request, response, next) {
  const { OK_200_STATUS_CODE } = constants,
        accessTokenCookiePresent = isAccessTokenCookiePresent(request),
        loggedIn = accessTokenCookiePresent,  ///
        homePageContent = createHomePageContent(loggedIn),
        content = homePageContent;  ///

  setHTMLHeaders(response);

  response.status(OK_200_STATUS_CODE);

  response.end(content);
}

module.exports = homePageHandler;
