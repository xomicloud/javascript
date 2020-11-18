"use strict";

const constants = require("../constants");

function createCallbackPostHeaders() {
  const { APPLICATION_JSON_CONTENT_TYPE, APPLICATION_X_WWW_FORM_ENCODED_CONTENT_TYPE } = constants,
        { CLIENT_ID, CLIENT_SECRET } = process.env,
        digest = `${CLIENT_ID}:${CLIENT_SECRET}`,
        encodedDigest = Buffer.from(digest).toString("base64"),  ///
        Accept = APPLICATION_JSON_CONTENT_TYPE,  ///
        ContentType = APPLICATION_X_WWW_FORM_ENCODED_CONTENT_TYPE, ///
        Authorization = `Basic ${encodedDigest}`,
        callbackPostHeaders = {
          "Accept" : Accept,
          "Content-Type" : ContentType,
          "Authorization" : Authorization
        };

  return callbackPostHeaders;
}

function createCallbackPostParameters(code) {
  const { CALLBACK_OAUTH_PATH, AUTHORIZATION_CODE_GRANT_TYPE } = constants,
        { HOST } = process.env,
        grant_type = AUTHORIZATION_CODE_GRANT_TYPE,  ///
        redirect_uri = `${HOST}${CALLBACK_OAUTH_PATH}`,  ///
        callbackPostParameters = {
          "code" : code,
          "grant_type" : grant_type,
          "redirect_uri" : redirect_uri
        };

  return callbackPostParameters;
}

module.exports = {
  createCallbackPostHeaders,
  createCallbackPostParameters
};
