"use strict";

const constants = require("../constants");

function setAuthenticationCookie(response, accessToken, rememberMe) {
  const authenticationCookieName = getAuthenticationCookieName(),
        access_token = accessToken, ///
        json = {
          access_token
        },
        name = authenticationCookieName,  ///
        value = JSON.stringify(json),
        options = getOptions(rememberMe);

  response.cookie(name, value, options);
}

function removeAuthenticationCookie(response) {
  const authenticationCookieNAme = getAuthenticationCookieName(),
        name = authenticationCookieNAme;  ///

  response.clearCookie(name);
}

function isAuthenticationCookiePresent(request) {
  const { cookies } = request,
        authenticationCookieNAme = getAuthenticationCookieName(),
        name = authenticationCookieNAme,  ///
        authenticationCookiePresent = !!cookies[name];

  return authenticationCookiePresent;
}

module.exports = {
  setAuthenticationCookie,
  removeAuthenticationCookie,
  isAuthenticationCookiePresent
};

function getAuthenticationCookieName() {
  const { AUTHENTICATION_COOKIE_NAME_PREFIX } = constants,
        { CLIENT_ID } = process.env,
        authenticationCookieName = `${AUTHENTICATION_COOKIE_NAME_PREFIX}.${CLIENT_ID}`;

  return authenticationCookieName;
}

function getOptions(rememberMe) {
  const options = {},
        { AUTHENTICATION_COOKIE_EXPIRES } = constants;

  if (rememberMe) {
    const expires = AUTHENTICATION_COOKIE_EXPIRES;

    Object.assign(options, {
      expires
    });
  }

  return options;
}
