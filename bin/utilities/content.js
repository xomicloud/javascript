"use strict";

const constants = require("../constants"),
      templateUtilities = require('../utilities/template');

const { parseFile } = templateUtilities;

function createHomePageContent(loggedIn) {
  const { TEMPLATE_DIRECTORY_PATH, HOME_PAGE_TEMPLATE_FILE_NAME } = constants,
          homePageTemplateFilePath = `${TEMPLATE_DIRECTORY_PATH}/${HOME_PAGE_TEMPLATE_FILE_NAME}`,
          homePageLinks = createHomePageLinks(loggedIn),
          links = homePageLinks,  ///
          args = {
            links
          },
          homePageContent = parseFile(homePageTemplateFilePath, args);

  return homePageContent;
}

function createSettingsPageContent() {
  const { HOME_PAGE_PATH, TEMPLATE_DIRECTORY_PATH, SETTINGS_PAGE_TEMPLATE_FILE_NAME } = constants,
        settingsPageTemplateFilePath = `${TEMPLATE_DIRECTORY_PATH}/${SETTINGS_PAGE_TEMPLATE_FILE_NAME}`,
        settingsPageLinks = createSettingsPageLinks(),
        links = settingsPageLinks,  ///
        args = {
          links,
          HOME_PAGE_PATH
        },
        settingsPageContent = parseFile(settingsPageTemplateFilePath, args);

  return settingsPageContent;
}

module.exports = {
  createHomePageContent,
  createSettingsPageContent
};

function createHomePageLinks(loggedIn) {
  const { LOG_OUT_PATH,
          LOG_IN_OAUTH_PATH,
          SETTINGS_PAGE_PATH,
          TEMPLATE_DIRECTORY_PATH,
          LOGGED_IN_LINKS_TEMPLATE_FILE_NAME,
          LOGGED_OUT_LINKS_TEMPLATE_FILE_NAME } = constants,
          homePageLinksTemplateFileName = loggedIn ?
                                          LOGGED_IN_LINKS_TEMPLATE_FILE_NAME :
                                            LOGGED_OUT_LINKS_TEMPLATE_FILE_NAME,
        homePageLinksTemplateFilePath = `${TEMPLATE_DIRECTORY_PATH}/${homePageLinksTemplateFileName}`,
        args = {
          LOG_OUT_PATH,
          LOG_IN_OAUTH_PATH,
          SETTINGS_PAGE_PATH
        },
        homePageLinks = parseFile(homePageLinksTemplateFilePath, args); ///

  return homePageLinks;
}

function createSettingsPageLinks() {
  const { LOG_OUT_PATH, TEMPLATE_DIRECTORY_PATH, SETTINGS_LINKS_TEMPLATE_FILE_NAME } = constants,
        settingsPageLinksTemplateFilePath = `${TEMPLATE_DIRECTORY_PATH}/${SETTINGS_LINKS_TEMPLATE_FILE_NAME}`,
        args = {
          LOG_OUT_PATH
        },
        settingsPageLinks = parseFile(settingsPageLinksTemplateFilePath, args); ///

  return settingsPageLinks;
}
