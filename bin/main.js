"use strict";

const express = require("express"),
      necessary = require("necessary"),
      cookieParser = require("cookie-parser")();  ///

const oAuthRouter = require("./router/oAuth"),
      restrictedRouter = require("./router/restricted"),
      unrestrictedRouter = require("./router/unrestricted");

const { miscellaneousUtilities } = necessary,
      { onETX } = miscellaneousUtilities,
      { PORT } = process.env;

onETX(process.exit);

const server = express(); ///

server.use(cookieParser);

server.use(oAuthRouter);

server.use(restrictedRouter);

server.use(unrestrictedRouter);

server.listen(PORT);
