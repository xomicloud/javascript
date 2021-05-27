"use strict";

const { httpUtilities } = require("necessary");

const constants = require("../constants");

const { queryStringFromParameters } = httpUtilities;

function createHeaders(content) {
  const { APPLICATION_JSON_CONTENT_TYPE, APPLICATION_X_WWW_FORM_ENCODED_CONTENT_TYPE } = constants,
        { CLIENT_ID, CLIENT_SECRET } = process.env,
        digest = `${CLIENT_ID}:${CLIENT_SECRET}`,
        encodedDigest = Buffer.from(digest).toString("base64"),  ///
        accept = APPLICATION_JSON_CONTENT_TYPE,  ///
        contentType = APPLICATION_X_WWW_FORM_ENCODED_CONTENT_TYPE, ///
        contentLength = content.length,
        authorization = `Basic ${encodedDigest}`,
        createHeaders = {
          "accept" : accept,
          "content-type" : contentType,
          "content-length" : contentLength,
          "authorization" : authorization
        };

  return createHeaders;
}

function createContent(code) {
  const parameters = createParameters(code),
        queryString = queryStringFromParameters(parameters),
        content = queryString;  ///

  return content;
}

module.exports = {
  createHeaders,
  createContent
};

function createParameters(code) {
  const { REDIRECT_URI } = process.env,
        { AUTHORIZATION_CODE_GRANT_TYPE } = constants,
        grant_type = AUTHORIZATION_CODE_GRANT_TYPE,  ///
        redirect_uri = REDIRECT_URI,  ///
        parameters = {
          "code" : code,
          "grant_type" : grant_type,
          "redirect_uri" : redirect_uri
        };

  return parameters;
}
