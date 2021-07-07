"use strict";

const { parseFile } = require('../utilities/template'),
      { SIGN_OUT_PATH } = require("../paths"),
      { HOME_PAGE_TEMPLATE_FILE_NAME, TEMPLATE_DIRECTORY_PATH } = require("../constants");

function createHomePageHTML() {
  const homePageTemplateFileName = HOME_PAGE_TEMPLATE_FILE_NAME,  ///
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
  const templateFilePath = `${TEMPLATE_DIRECTORY_PATH}/${templateFileName}`,
        content = parseFile(templateFilePath, args);

  return content;
}