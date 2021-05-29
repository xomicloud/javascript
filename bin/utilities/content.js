"use strict";

const paths = require("../paths"),
      constants = require("../constants"),
      templateUtilities = require('../utilities/template');

const { parseFile } = templateUtilities;

function createHomePageHTML() {
  const { SIGN_OUT_PATH } = paths,
        { HOME_PAGE_TEMPLATE_FILE_NAME } = constants,
        homePageTemplateFileName = HOME_PAGE_TEMPLATE_FILE_NAME,  ///
        args = {
          SIGN_OUT_PATH
        },
        homePageHTML = parseTemplateFile(homePageTemplateFileName, args); ///

  return homePageHTML;
}

module.exports = {
  createHomePageHTML
};

function parseTemplateFile(templateFileName, args) {
  const { TEMPLATE_DIRECTORY_PATH } = constants,
        templateFilePath = `${TEMPLATE_DIRECTORY_PATH}/${templateFileName}`,
        content = parseFile(templateFilePath, args);

  return content;
}