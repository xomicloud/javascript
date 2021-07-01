"use strict";

const { api } = require("../../xomi");  ///

const options = require("../options");

function googleDriveHandler(request, response, next) {
  api.googleDrive(options, request, response);
}

module.exports = googleDriveHandler;