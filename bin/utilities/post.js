"use strict";

const request = require("request");

const constants = require("../constants");

function post(url, headers, parameters, callback) {
  const { POST_METHOD } = constants,
        method = POST_METHOD,  ///
        form = parameters,  ///
        options = {
          method,
          url,
          form,
          headers
        };

  request(options, (error, response) => {
    let json;

    if (error) {
      json = null;
    } else {
      const { body } = response,
            jsonString = body;  ///

      json = JSON.parse(jsonString);
    }

    callback(json);
  });
}

module.exports = {
  post
};
