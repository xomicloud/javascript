"use strict";

const uuidv4 = require("uuid/v4");

const constants = require("../constants"),
      encodingUtilities = require("../utilities/encoding");

const { encodeParameters } = encodingUtilities;

function setHTMLHeaders(response) {
  const { TEXT_HTML_CHARSET_UTF_8_CONTENT_TYPE } = constants,
        ContentType = TEXT_HTML_CHARSET_UTF_8_CONTENT_TYPE;  ///

  response.setHeader("Content-Type", ContentType);
}

function setOAuth2AuthorizeHeaders(response) {
  const { CODE_RESPONSE_TYPE, OPEN_ID_SCOPE, CALLBACK_OAUTH_PATH, OAUTH2_AUTHORIZE_URI } = constants,
        { HOST, CLIENT_ID, CLIENT_HOST } = process.env,
        state = uuidv4(), ///
        scope = OPEN_ID_SCOPE,  ///
        client_id = CLIENT_ID,  ///
        redirect_uri = `${HOST}${CALLBACK_OAUTH_PATH}`,  ///
        response_type = CODE_RESPONSE_TYPE, ///
        parameters = {
          "state" : state,
          "scope" : scope,
          "client_id" : client_id,
          "redirect_uri" : redirect_uri,
          "response_type" : response_type
        },
        encodedParameters = encodeParameters(parameters),
        queryString = encodedParameters,  ///
        Location = `${CLIENT_HOST}${OAUTH2_AUTHORIZE_URI}?${queryString}`;

  response.setHeader("Location", Location);
}

function setHomePageRedirectHeaders(response) {
  const { HOME_PAGE_PATH } = constants,
        Location = HOME_PAGE_PATH; ///

  response.setHeader("Location", Location);
}

module.exports = {
  setHTMLHeaders,
  setOAuth2AuthorizeHeaders,
  setHomePageRedirectHeaders
};
