"use strict";

const constants = require("../../constants"),
      cookieUtilities = require("../../utilities/cookie"),
      contentUtilities = require("../../utilities/content"),
      headersUtilities = require("../../utilities/headers");

const { createHomePageContent } = contentUtilities,
      { setAuthoriseLocationHeader } = headersUtilities,
      { isAuthenticationCookiePresent } = cookieUtilities;

function homePageHandler(request, response, next) {
  const { SEE_OTHER_303_STATUS_CODE } = constants,
        authenticationCookiePresent = isAuthenticationCookiePresent(request),
        signedIn = authenticationCookiePresent;  ///

  if (!signedIn) {
    setAuthoriseLocationHeader(response);

    response.status(SEE_OTHER_303_STATUS_CODE);

    response.end("");

    return;
  }

  const { OK_200_STATUS_CODE, TEXT_HTML_CONTENT_TYPE } = constants,
        homePageContent = createHomePageContent(),
        content = homePageContent;  ///

  response.setHeader("content-type", TEXT_HTML_CONTENT_TYPE);

  response.status(OK_200_STATUS_CODE);

  response.end(content);
}

module.exports = homePageHandler;
