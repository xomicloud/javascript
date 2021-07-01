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

Before running you will need to configure the application, which requires a corresponding Xomi client. In order to create one, If you have not already done so then create a Xomi [account](https://account.xomi.cloud/). Once you have an account, follow the wizard for creating a client and when prompted fill in the following values, assuming that you want to run the application locally to begin with:

* **Name** Anything you want.

* **Display name** Anything you want again.

* **Host** `http://localhost:8080` is recommended.

* **Redirect URI** `http://localhost:8080/callback` is recommended. Whatever you choose, the port number must match the host and the URI must be `/callback` unless you want to change the application to support a different one.



## Related links

* [npm - Xomi](https://www.npmjs.com/package/@xomicloud/xomi)
* [Xomi Developers - JavaScript Lambda Tutorial](https://developers.xomi.cloud/tutorial/javascript-lambda)
* [Xomi Developers - JavaScript localhost Tutorial](https://developers.xomi.cloud/tutorial/javascript-localhost)
* [Xomi Knowledge base - The Anatomy of a Secure Application](https://developers.xomi.cloud/knowledge-base/anatomy-of-secure-application)

## Contact

* contactus@xomi.cloud
* https://xomi.cloud
