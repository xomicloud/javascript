"use strict";

const constants = require("../constants");

function setAuthenticationCookie(response, access_token) {
  const { AUTHENTICATION_COOKIE_NAME } = constants;

  response.cookie(AUTHENTICATION_COOKIE_NAME, access_token);
}

function removeAuthenticationCookie(response) {
  const { AUTHENTICATION_COOKIE_NAME } = constants;

  response.clearCookie(AUTHENTICATION_COOKIE_NAME);
}

function isAuthenticationCookiePresent(request) {
  const { cookies } = request,
        { AUTHENTICATION_COOKIE_NAME } = constants,
        authenticationCookiePresent = !!cookies[AUTHENTICATION_COOKIE_NAME];

  return authenticationCookiePresent;
}

module.exports = {
  setAuthenticationCookie,
  removeAuthenticationCookie,
  isAuthenticationCookiePresent
};
