"use strict";

const { api } = require("@xomicloud/xomi");

const options = require("../options");

function googleDriveHPIHandler(request, response, next) {
  api(options, request, response);
}

module.exports = googleDriveHPIHandler;
