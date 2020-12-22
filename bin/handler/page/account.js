"use strict";

const constants = require("../../constants"),
      cookieUtilities = require("../../utilities/cookie"),
      contentUtilities = require("../../utilities/content"),
      headersUtilities = require("../../utilities/headers");

const { createAccountPageContent } = contentUtilities,
      { isAccessTokenCookiePresent } = cookieUtilities,
      { setAuthoriseLocationHeader } = headersUtilities;

function accountPageHandler(request, response, next) {
  const { SEE_OTHER_303_STATUS_CODE } = constants,
        accessTokenCookiePresent = isAccessTokenCookiePresent(request),
        signedIn = accessTokenCookiePresent;  ///

  if (!signedIn) {
    setAuthoriseLocationHeader(response);

    response.status(SEE_OTHER_303_STATUS_CODE);

    response.end("");

    return;
  }

  const { OK_200_STATUS_CODE, TEXT_HTML_CONTENT_TYPE } = constants,
        accountPageContent = createAccountPageContent(),
        content = accountPageContent;  ///

  response.setHeader("Content-Type", TEXT_HTML_CONTENT_TYPE);

  response.status(OK_200_STATUS_CODE);

  response.end(content);
}

module.exports = accountPageHandler;
