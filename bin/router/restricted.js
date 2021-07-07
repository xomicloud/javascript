"use strict";

const express = require("express");

const homePageHandler = require("../handler/page/home"),
      googleDriveAPIHandler = require("../handler/api/googleDrive");

const { HOME_PAGE_PATH, GOOGLE_DRIVE_API_PATH } = require("../paths");

const restrictedRouter = express.Router(); ///

restrictedRouter.get(HOME_PAGE_PATH, homePageHandler);

restrictedRouter.get(GOOGLE_DRIVE_API_PATH, googleDriveAPIHandler);

restrictedRouter.post(GOOGLE_DRIVE_API_PATH, googleDriveAPIHandler);

restrictedRouter.delete(GOOGLE_DRIVE_API_PATH, googleDriveAPIHandler);

module.exports = restrictedRouter;
