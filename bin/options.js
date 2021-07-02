"use strict";

const { CLIENT_HOST, CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } = process.env,
      clientId = "1gH9BrXKHcJodD71", ///CLIENT_ID, ///
      clientHost = "http://localhost:8001", ///CLIENT_HOST, ///
      clientSecret = "yv5sHRwIFIlSbOE7bT4D5oSH0ImIMiHk", ///CLIENT_SECRET, ///
      redirectURI = "http://localhost:8080/callback"; ///REDIRECT_URI; ///

module.exports = {
  clientId,
  clientHost,
  clientSecret,
  redirectURI
};
