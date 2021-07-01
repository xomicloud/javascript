# JavaScript Secure Application

## Introduction

This is a JavaScript secure application which can run locally, as an AWS lambda or indeed in many other ways.

Instructions for getting it up and running, which include integrating it with Xomi, can be found in either of the tutorials listed in the related links section at the foot of this readme file.

## Installation

You can clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/xomicloud/javascript-secure-application.git

...and then install the dependencies with [npm](https://www.npmjs.com/) from within the project's root directory:

    npm install

## Usage

Before running you will need to configure the application, which requires a corresponding Xomi client. In order to create one, if you have not done so already then create a Xomi [account](https://account.xomi.cloud/). Once you have an account, follow the wizard for creating a client and when prompted fill in the following values, assuming that you want to run the application locally to begin with:

* **Name** Anything you want. This is for internal display within Xomi only.

* **Display name** Anything you want again. This appears to users on buttons and the like.

* **Host** `http://localhost:8080` is recommended.

* **Redirect URI** `http://localhost:8080/callback` is recommended. Whatever you choose, the port number must match that of the host and the URI must be `/callback` unless you want to change the application to support a different one.

Now create a file to hold the environment variables...

```
touch variables.env
```

...and copy the Xomi client's environment variables into it. Your client can be found in the [clients](https://account.xomi.cloud/clients) section in your Xomi account. Click on the client name and they will appear in a table near the foot of page.

You should also add an environment variable for the port that matches the port number chosen for the host and redirect URI:

```
export PORT=8080
```

Now, from a terminal, export the environment variables...environment

```
source variables.env
```

...and run the application:

```
npm start
```

If all has gone to plan it will be available at http://localhost:8808

Bear in mind that the first time you visit the site you will immediately be redirected to Xomi's authentication site because the site has no user account. You will have to create an account before you can sign in. This account is associated with the client and is entirely separate from your Xomi account.

## Related links

* [npm - Xomi](https://www.npmjs.com/package/@xomicloud/xomi)
* [Xomi Developers - JavaScript Lambda Tutorial](https://developers.xomi.cloud/tutorial/javascript-lambda)
* [Xomi Developers - JavaScript localhost Tutorial](https://developers.xomi.cloud/tutorial/javascript-localhost)
* [Xomi Knowledge base - The Anatomy of a Secure Application](https://developers.xomi.cloud/knowledge-base/anatomy-of-secure-application)

## Contact

* contactus@xomi.cloud
* https://xomi.cloud
