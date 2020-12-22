"use strict";

const express = require("express"),
      cookieParser = require("cookie-parser")();  ///

const restrictedRouter = require("./router/restricted"),
      unrestrictedRouter = require("./router/unrestricted");

const app = express(); ///

app.use(cookieParser);

app.use(restrictedRouter);

app.use(unrestrictedRouter);
