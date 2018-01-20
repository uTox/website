μTox Website
============

[![License][license-image]][license-url]
[![Build Status][build-image]][build-url]
[![#utox on freenode][freenode-image]][freenode-url]

## Getting Started

Steps:

1. Nothing.

The website works as is, no build step required. However, if you want to make changes to the CSS code you will need to follow the setup instructions below.

## Build Requirements
Check that you have node version 8 LTS or higher installed

```shell
$ node -v
  v8.x.x
```

If not, then go to https://nodejs.org to download and install the latest LTS or Stable version of nodejs

Next, Check that you have the latest stable version of yarn installed

```shell
$ yarn -v
  x.x.x
```
You can check which version is the latest stable and download it if you don't have it here: https://yarnpkg.com/en/docs/install

Once nodejs and yarn are installed, run `yarn` inside of the utox/website folder. You should get an output that looks somewhat like this

```shell
$ yarn
  yarn install v1.3.2
  [1/5] Validating package.json...
  [2/5] Resolving packages...
  [3/5] Fetching packages...
  [4/5] Linking dependencies...
  [5/5] Building fresh packages...
  Done in 49.55s.
```

You are now ready to run the build scripts

## Build CSS

Before building the CSS code, run the css linter & format checker (via stylelint. *see .stylelint.yml for more details*) using the following command

```shell
$ yarn test
  yarn run v1.3.2
  $ stylelint "**/!(*.min).css"
  Done in 7.00s.
```

Assuming stylelint doesn't return any errors, you can now run the build command

```shell
$ yarn run build
  yarn run v1.3.2
  $ postcss -c postcss.config.js "public/assets/styles/!(_*|*.min).css" --ext .min.css --dir "public/asse
  ts/styles/"
  √ Finished public/assets/styles/home.css (2.53 s)
  √ Finished public/assets/styles/common.css (3.25 s)
  Done in 9.09s.
```

This should produce a processed `.min.css` version of every css file in `public/assets/styles/` that doesn't begin with `_` or end with `.min.css`.

## Local Development Server

To preview/test out the site on your local development environment run

```shell
$ yarn run serve
  yarn run v1.3.2
  $ browser-sync start --config bs-config.js
  [BrowserSync] Access URLs:
   --------------------------------------
         Local: http://localhost:3000
      External: http://192.168.1.1:3000
   --------------------------------------
            UI: http://localhost:3001
   UI External: http://192.168.1.1:3001
   --------------------------------------
  [BrowserSync] Serving files from: ./public/
```

[license-url]: https://github.com/uTox/website/blob/master/LICENSE
[license-image]: https://img.shields.io/github/license/uTox/website.svg

[build-url]: https://travis-ci.org/uTox/website
[build-image]:https://travis-ci.org/uTox/website.svg?branch=master

[freenode-url]: https://webchat.freenode.net/?channels=%23utox
[freenode-image]: https://img.shields.io/badge/freenode-%23utox-green.svg
