"use strict";

const { CLIENT_HOST, CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } = process.env;

const clientId = CLIENT_ID, ///
      clientHost = CLIENT_HOST, ///
      clientSecret = CLIENT_SECRET, ///
      redirectURI = REDIRECT_URI; ///

module.exports = {
  clientId,
  clientHost,
  clientSecret,
  redirectURI
};
