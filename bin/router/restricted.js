"use strict";

const express = require("express");

const constants = require("../constants"),
      settingsPageHandler = require("../handler/page/settings");

const { SETTINGS_PAGE_PATH } = constants;

const restrictedRouter = express.Router(); ///

restrictedRouter.get(SETTINGS_PAGE_PATH, settingsPageHandler);

module.exports = restrictedRouter;
