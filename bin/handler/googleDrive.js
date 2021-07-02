"use strict";

const { api } = require("@xomicloud/xomi");

const options = require("../options");

function googleDriveHandler(request, response, next) {
  api(options, request, response);
}

module.exports = googleDriveHandler;
