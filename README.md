uTox.org
=======

[![License][license-img]][license-url]
[![Open Issues][issues-img]][issues-url]
[![Maintenance](https://img.shields.io/maintenance/yes/2016.svg)][graph-url]
<!-- [![Version][version-img]][version-url] -->

## Quick Start
1. Install the requirements
  + NodeJS (version 6 LTS or newer) -> https://nodejs.org
  + *Optional:* Gulp (globally) -> `npm install -g gulp-cli`
2. Run `npm install` to install devDependencies for Gulp to work
3. Run `npm run build` to build the project for the first time
4. Run `npm run serve` to start a development server that will rebuild your CSS & JS on changes and inject the changes into your browser

See the "Gulp" section of the documentation below for details on the build process

## Usage
+ [Gulp](#gulp)
+ [HTML](#html)
+ [CSS](#css)
+ [Javascript](#javascript)
+ [Images](#images)
+ [Everything else](#everything-else)

### Gulp
[Gulp](https://github.com/gulpjs/gulp) is a simple but powerful front-end build tool with plugins available for most developer work flows.

gulpfile.js is well commented so you can easily figure out what each Gulp task does as well as customize it to your liking.

`npm run build` or `gulp`
  + Runs all tasks (`test:styles`, `styles`, `test:scripts`, `scripts`, `images`, `etc`) except for `serve`

`npm test` or `gulp test`
  + Runs `test:styles` & `test:scripts`

`npm run serve` or `gulp serve`
  + Starts a web server using BrowserSync for local development
  + Runs tasks when files in `src` are changed (e.g. `gulp styles` when files in `src/styles/` are modified)

`npm run test:styles` or `gulp test:styles`
  + Checks your scss/sass code with [stylelint](http://stylelint.io) (using the stylelint-config-standard & [RSCSS](http://rscss.io))

`npm run styles` or `gulp styles`
  + Builds your scss/sass to plain css
  + Runs [autoprefixer]() (set to support the last 2 browser versions (google's policy))
  + Minifies your css for a smaller file size
  + Creates sourcemaps
  + Outputs CSS files to the `dist` folder

`npm run test:scripts` or `gulp test:scripts`
  + Checks your Javascript code with the [XO linter](https://github.com/sindresorhus/xo)

`npm run scripts` or `gulp scripts`
  + Uses [webpack](https://webpack.github.io/docs/)
  + Minifies your Javascript code for a smaller file size
  + Creates sourcemaps
  + Outputs Javascript files to the `dist` folder

`npm run images:webp` or `gulp images:webp`
  + Converts PNG & JPG files to WEBP
  + Outputs WEBP files to the `dist` folder

`npm run images` or `gulp images`
  + Compresses PNG, JPG, GIF, and SVG files
  + Outputs image files to the `dist` folder

`npm run etc` or `gulp etc`
  + Copies all other files to `dist` folder

### HTML
[To Do]

### CSS
Uses [RSCSS](http://rscss.io/) & [ITCSS Structure](https://speakerdeck.com/dafed/managing-css-projects-with-itcss#49)

[To Do]

### Javascript
[To Do]

### Images
[To Do]

### Everything else
[To Do]


[license-url]: https://github.com/uTox/uTox.org/blob/master/LICENSE
[license-img]: https://img.shields.io/github/license/uTox/uTox.org.svg

[version-url]: https://github.com/uTox/uTox.org/releases
[version-img]: https://img.shields.io/github/release/uTox/uTox.org.svg

[issues-url]: https://github.com/uTox/uTox.org/issues
[issues-img]: https://img.shields.io/github/issues/uTox/uTox.org.svg

[graph-url]: https://github.com/uTox/uTox.org/graphs/contributors
