"use strict";

const paths = require("../paths"),
      constants = require("../constants"),
      templateUtilities = require('../utilities/template');

const { parseFile } = templateUtilities;

function createLandingPageContent(signedIn) {
  const { SIGN_IN_PATH, SIGN_OUT_PATH, ACCOUNT_PAGE_PATH } = paths,
        { LANDING_PAGE_SIGNED_IN_TEMPLATE_FILE_NAME, LANDING_PAGE_SIGNED_OUT_TEMPLATE_FILE_NAME } = constants,
        landingPageTemplateFileName = signedIn ?
                                        LANDING_PAGE_SIGNED_IN_TEMPLATE_FILE_NAME :
                                          LANDING_PAGE_SIGNED_OUT_TEMPLATE_FILE_NAME,
        args = {
          SIGN_IN_PATH,
          SIGN_OUT_PATH,
          ACCOUNT_PAGE_PATH
        },
        landingPageContent = parseTemplateFile(landingPageTemplateFileName, args);

  return landingPageContent;
}

function createAccountPageContent() {
  const { SIGN_OUT_PATH, LANDING_PAGE_PATH } = paths,
        { ACCOUNT_PAGE_TEMPLATE_FILE_NAME } = constants,
        accountPageTemplateFileName = ACCOUNT_PAGE_TEMPLATE_FILE_NAME,  ///
        args = {
          SIGN_OUT_PATH,
          LANDING_PAGE_PATH
        },
        accountPageContent = parseTemplateFile(accountPageTemplateFileName, args);

  return accountPageContent;
}

module.exports = {
  createLandingPageContent,
  createAccountPageContent
};

function parseTemplateFile(templateFileName, args) {
  const { TEMPLATE_DIRECTORY_PATH } = constants,
        templateFilePath = `${TEMPLATE_DIRECTORY_PATH}/${templateFileName}`,
        content = parseFile(templateFilePath, args);

  return content;
}