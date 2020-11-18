"use strict";

const constants = require("../constants");

function setAccessTokenCookie(response, access_token) {
  const { ACCESS_TOKEN_COOKIE_NAME } = constants;

  response.cookie(ACCESS_TOKEN_COOKIE_NAME, access_token);
}

function removeAccessTokenCookie(response) {
  const { ACCESS_TOKEN_COOKIE_NAME } = constants;

  response.clearCookie(ACCESS_TOKEN_COOKIE_NAME);
}

function isAccessTokenCookiePresent(request) {
  const access_token = getAccessTokenFromCookie(request),
        accessTokenCookiePresent = !!access_token;

  return accessTokenCookiePresent;
}

module.exports = {
  setAccessTokenCookie,
  removeAccessTokenCookie,
  isAccessTokenCookiePresent
};

function getAccessTokenFromCookie(request) {
  const { cookies } = request,
        { access_token } = cookies;

  return access_token;
}
