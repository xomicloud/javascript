"use strict";

const constants = require("../constants"),
      encodingUtilities = require("../utilities/encoding");

const { encodeParameters } = encodingUtilities;

function setAuthoriseLocationHeader(response) {
  const { CLIENT_ID, CLIENT_HOST, REDIRECT_URI } = process.env,
        { CODE_RESPONSE_TYPE, OPEN_ID_SCOPE, EMPTY_STATE } = constants,
        state = EMPTY_STATE, ///
        scope = OPEN_ID_SCOPE,  ///
        client_id = CLIENT_ID,  ///
        redirect_uri = REDIRECT_URI,  ///
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
        Location = `${CLIENT_HOST}?${queryString}`;

  response.setHeader("Location", Location);
}

module.exports = {
  setAuthoriseLocationHeader
};
