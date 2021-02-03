# Xomi JavaScript Secure Application

## Introduction

This is a bare bones JavaScript secure application which can run as an AWS lambda or standalone.

## Running as an AWS lambda

There is a tutorial that will show you how to get this application deployed to AWS in a few easy steps on the Xomi developers site:

* [Xomi Developers - JavaScript Lambda Tutorial](https://developers.xomi.cloud/tutorial/javascript-lambda)

## Running standalone

If you want to get this application up and running locally then you will need to integrate it with a Xomi client. Assuming that you have a Xomi account, run the create client wizard from the account home page with these values:

1. **Name:** Anything you like, such as 'lambda-tutorial (localhost)'.
2. **Display name:** Again, anything you like, such as 'Lambda Tutorial'.
3. **Host:** 'http://localhost:8080', assuming you intend to run it on port 8080.
4. **Redirect URI:** 'http://localhost:8080/callback'.

Now click on 'Clients' and then on the name of the client you have just created. Next, copy the environment variables into a file in the root directory. We recommend the name `variables.env` since Git is configured to ignore this. You should also add an environment variable for the port, so that your file looks something like this:

```
export PORT=8080
export CLIENT_ID=wB4G2i2UUonztpCI
export CLIENT_HOST=https://authenticate.xomi.cloud
export CLIENT_SECRET=Uk1dCMCeE46mutwDmFsNxylweHeaOCCN
export REDIRECT_URI=http://localhost:8080/callback
```
Next, open a shell window and run the following command to export the environment variables:

```
source variables.env
```
Finally, install the dependencies with [npm](https://www.npmjs.com/) and run the application on [Node](https://nodejs.org/en/):

```
npm install
node ./bin/main.js
```
It will now be available at the following address:

* http://localhost:8080

Note that the first time you run the application, you will immediately be redirected to Xomi's authentication portal and will have to create a Xomi account. This account is associated with the client you have just created and is entirely separate from your Xomi account.

## Contact

* contactus@xomi.cloud
* https://xomi.cloud
