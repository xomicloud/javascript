"use strict";

const constants = require("../../constants"),
      cookieUtilities = require("../../utilities/cookie"),
      contentUtilities = require("../../utilities/content"),
      headersUtilities = require("../../utilities/headers");

const { createSettingsPageContent } = contentUtilities,
      { isAccessTokenCookiePresent } = cookieUtilities,
      { setHTMLHeaders, setHomePageRedirectHeaders } = headersUtilities;

function settingsPageHandler(request, response, next) {
  const { SEE_OTHER_303_STATUS_CODE } = constants,
        accessTokenCookiePresent = isAccessTokenCookiePresent(request),
        loggedIn = accessTokenCookiePresent;  ///

  if (!loggedIn) {
    setHomePageRedirectHeaders(response);

    response.status(SEE_OTHER_303_STATUS_CODE);

    response.end("");

    return;
  }

  const { OK_200_STATUS_CODE } = constants,
        settingsPageContent = createSettingsPageContent(),
        content = settingsPageContent;  ///

  setHTMLHeaders(response);

  response.status(OK_200_STATUS_CODE);

  response.end(content);
}

module.exports = settingsPageHandler;
