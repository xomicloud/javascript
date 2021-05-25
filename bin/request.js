"use strict";

const http = require("http"),
      https = require("https");

const { Readable } = require("stream"),
      { arrayUtilities } = require("necessary");

const { POST, COLON, ERROR, CONTENT_TYPE, CONTENT_LENGTH, APPLICATION_X_WWW_FORM_ENCODED_CONTENT_TYPE } = require("./constants");

const { second } = arrayUtilities;

function get(host, uri, callback) {
  const secure = secureFromHost(host),
        url = `${host}${uri}`,
        get = secure ?
                https.get :
                  http.get;

  const request = get(url, (response) => {
    const error = null;

    callback(error, response);
  });

  request.on(ERROR, (error) => {
    const response = null;

    callback(error, response);
  });

  return request;
}

function post(host, uri, headers, parameters, callback) {
  let content = null;

  if (callback === undefined) {
    callback = parameters;  ///
  } else {
    const queryString = queryStringFromParameters(parameters);

    content = queryString;  ///

    const contentType = APPLICATION_X_WWW_FORM_ENCODED_CONTENT_TYPE,
          contentLength = content.length;

    overwriteContentType(headers, contentType);
    overwriteContentLength(headers, contentLength);
  }

  const hostname = hostnameFromHost(host),
        secure = secureFromHost(host),
        port = portFromHostAndSecure(host, secure),
        method = POST,
        path = uri, ///
        options = {
          hostname,
          headers,
          method,
          port,
          path
        },
        post = secure ?
                 https.request : ///
                   http.request; ///

  const request = post(options, (response) => {
          const error = null;

          callback(error, response);
        });

  request.on(ERROR, (error) => {
    const response = null;

    callback(error, response);
  });

  if (content !== null) {
    const readable = Readable.from(content);

    readable.pipe(request);
  }

  return request;
}

module.exports = {
  get,
  post
};

function overwrite(headers, name, value) {
  const ownPropertyNames = Object.getOwnPropertyNames(headers),
        lowerCaseName = name.toLowerCase(),
        overwritten = ownPropertyNames.some((ownPropertyName) => {
          const lowerCaseOwnPropertyName = ownPropertyName.toLowerCase();

          if (lowerCaseOwnPropertyName === lowerCaseName) {
            headers[ownPropertyName] = value;

            return true;
          }
        });

  if (!overwritten) {
    headers[name] = value;
  }
}

function overwriteContentType(headers, contentType) {
  const name = CONTENT_TYPE,  ///
        value = contentType;  ///

  overwrite(headers, name, value);
}

function overwriteContentLength(headers, contentLength) {
  const name = CONTENT_LENGTH,  ///
        value = contentLength;  ///

  overwrite(headers, name, value);
}

function secureFromHost(host) {
  const secure = /^https:\/\//.test(host);

  return secure;
}

function hostnameFromHost(host) {
  const matches = host.match(/^https?:\/\/([^:\/]+)/),
        secondMatch = second(matches),
        hostname = secondMatch; ///

  return hostname;
}

function portFromHostAndSecure(host, secure) {
  let port;

  const matches = host.match(/^https?:\/\/([^\/]+)/),
        secondMatch = second(matches),
        index = secondMatch.indexOf(COLON);

  if (index === -1) {
    port = secure ? 443 : 80; ///
  } else {
    const start = index + 1,
          portString = secondMatch.substring(start);

    port = Number(portString);
  }

  return port;
}

function queryStringFromParameters(parameters) {
  const names = Object.keys(parameters),
        namesLength = names.length,
        lastIndex = namesLength - 1,
        queryString = names.reduce((queryString, name, index) => {
          const value = parameters[name],
                encodedName = encodeURIComponent(name),
                encodedValue = encodeURIComponent(value),
                ampersandOrNothing = (index !== lastIndex) ? "&" : "";

          queryString += `${encodedName}=${encodedValue}${ampersandOrNothing}`;

          return queryString;
        }, "");

  return queryString;
}
