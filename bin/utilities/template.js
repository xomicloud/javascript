"use strict";

const necessary = require("necessary");

const { templateUtilities } = necessary,
      { parseContent, parseLine } = templateUtilities;

function parseFile(filePath, args) { return templateUtilities.parseFile(filePath, args, /{{(.+?)}}/g); }

module.exports = {
  parseFile,
  parseContent,
  parseLine
};
