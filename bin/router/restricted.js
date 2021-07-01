"use strict";

const express = require("express");

const paths = require("../paths"),
      homePageHandler = require("../handler/page/home"),
      googleDriveHandler = require("../handler/googleDrive");

const { HOME_PAGE_PATH, GOOGLE_DRIVE_PATH } = paths;

const restrictedRouter = express.Router(); ///

restrictedRouter.get(HOME_PAGE_PATH, homePageHandler);

restrictedRouter.get(GOOGLE_DRIVE_PATH, googleDriveHandler);
restrictedRouter.post(GOOGLE_DRIVE_PATH, googleDriveHandler);
restrictedRouter.delete(GOOGLE_DRIVE_PATH, googleDriveHandler);

module.exports = restrictedRouter;
