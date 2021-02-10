"use strict";

const constants = require("../constants"),

      headersUtilities = require("../utilities/headers");

const { setAuthoriseLocationHeader } = headersUtilities;


function createAccountHandler(request, response, next) {
  const { SEE_OTHER_303_STATUS_CODE } = constants,
        createAccount = true;



  setAuthoriseLocationHeader(response, createAccount);

  response.status(SEE_OTHER_303_STATUS_CODE);

  response.end("");
}

module.exports = createAccountHandler;
