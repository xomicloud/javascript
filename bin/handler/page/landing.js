"use strict";

const constants = require("../../constants"),
      cookieUtilities = require("../../utilities/cookie"),
      contentUtilities = require("../../utilities/content");

const { createLandingPageContent } = contentUtilities,
      { isAccessTokenCookiePresent } = cookieUtilities;

function landingPageHandler(request, response, next) {
  const { OK_200_STATUS_CODE, TEXT_HTML_CONTENT_TYPE } = constants,
        accessTokenCookiePresent = isAccessTokenCookiePresent(request),
        signedIn = accessTokenCookiePresent,  ///
        landingPageContent = createLandingPageContent(signedIn),
        content = landingPageContent;  ///

  response.setHeader("Content-Type", TEXT_HTML_CONTENT_TYPE);

  response.status(OK_200_STATUS_CODE);

  response.end(content);
}

module.exports = landingPageHandler;
