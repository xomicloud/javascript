"use strict";

function encodeParameters(parameters) {
  let encodedParameters = "";

  const names = Object.keys(parameters);  ///

  names.forEach(function(name) {
    const value = parameters[name],
          encodedName = encodeURIComponent(name),
          encodedValue = encodeURIComponent(value);

    encodedParameters += `${encodedName}=${encodedValue}&`;
  });

  encodedParameters = encodedParameters.replace(/&$/, "");

  return encodedParameters;
}

module.exports = {
  encodeParameters
};
