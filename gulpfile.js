// Load Gulp
const gulp = require('gulp');
// Load all npm modules that start with `gulp-`
const g = require('gulp-load-plugins')();
// Load Webpack (webpack-stream for gulp compatibility)
const webpack = require('webpack-stream');
// Load BrowserSync (for livereloading w/ device sync)
const browserSync = require('browser-sync');

// `gulp` - Build everything
gulp.task('default', [
  'styles',
  // 'scripts',
  'images',
  'etc'
]);

// `gulp test` - Test everything
gulp.task('test', [
  'test:styles',
  'test:scripts'
]);

// `gulp serve` - Run a development server with auto-rebuilding
gulp.task('serve', () => {
  // Rebuild styles on change in src/styles/
  gulp.watch(['src/styles/**/*'], ['styles']);
  // Rebuild scripts on change in src/scripts/
  gulp.watch(['src/scripts/**/*'], ['scripts']);
  // Rebuild images on change in src/images/
  gulp.watch(['src/images/**/*'], ['images']);
  // Copy over everything that isn't covered by an above task on change in src/
  gulp.watch(['src/**/*', '!src/{styles,scripts,images}/**/*'], ['etc']);

  return browserSync({
    // Options found here: https://browsersync.io/docs/options
    // Open control panel in browser
    open: 'ui',
    // Delay before reloading (milliseconds)
    reloadDelay: 2000,
    // Custom prefix for console.log messages sent by BrowserSync
    logPrefix: 'BrowserSync',
    // Run a development server
    server: {
      // Folder w/ our built files
      baseDir: './dist/',
      // Set to true for directory listings
      directory: false
    },
    // Set to true to use localtunnel.me service
    // tunnel: true
  });
});

// `gulp test:styles` - Check SCSS code for errors (linter & style checker)
gulp.task('test:styles', () =>
  gulp.src(['src/styles/**/*.{scss,sass}'])
    // Lint & style check SCSS code
    // Config located in package.json under "stylelint"
    .pipe(g.stylelint({
      // Output results to CLI
      reporters: [
        {
          formatter: 'string',
          console: true
        }
      ]
    }))
);

// `gulp styles` - Build CSS from SCSS source
gulp.task('styles', ['test:styles'], () =>
  gulp.src(['src/styles/**/*.{scss,sass}'])
    // Start tracking sourcemap data
    .pipe(g.sourcemaps.init())
      // Generate CSS code from SCSS source
      .pipe(g.sass({
        // Generated CSS code should be readable if we disable CSS minification
        outputStyle: 'expanded',
        // Include these paths as shortcuts
        includePaths: [
          // Lets us leave off "node_modules/" when importing Sass from a module
          'node_modules'
        ]
      }))
      // Add vendor prefixed versions of CSS properties
      .pipe(g.autoprefixer({
        // Google's policy is last 2 versions of all major browsers
        browsers: ['last 2 versions']
      }))
      // Minify our generated CSS for a smaller output file
      .pipe(g.cleanCss({
        // Inline file contents when using @import (just like Sass @import)
        processImport: true,
        // Only inline local CSS, ignore remote CSS (e.g. fonts.googleapis.com)
        processImportFrom: ['local'],
        // Lets us leave off "node_modules/" when importing CSS from a module
        relativeTo: 'node_modules'
      }))
    // Write sourcemap to dist/sourcemaps/
    .pipe(g.sourcemaps.write('../sourcemaps/'))
    // Write generated CSS code to dist/styles/
    .pipe(gulp.dest('dist/styles/'))
    // Reload/Inject into the browser
    .pipe(browserSync.stream())
);

// `gulp test:scripts` - Check JS code for errors (linter & style checker)
gulp.task('test:scripts', () =>
  gulp.src(['src/scripts/**/*.js'])
    // Lint & style check JS code
    // Config located in package.json under "xo"
    .pipe(g.xo())
);

// `gulp scripts` - Build plain JS code from ES2017 source
gulp.task('scripts', ['test:scripts'], () =>
  gulp.src(['src/scripts/main.js'])
    // Run Webpack with main.js as the entry point
    .pipe(webpack({
      // Add sourcemap to bundle.js
      devtool: 'inline-source-map',
      output: {
        // Set filename of our JS output
        filename: 'bundle.js'
      }
    }))
    // Read webpack sourcemap and start tracking new sourcemap data
    .pipe(g.sourcemaps.init({loadMaps: true}))
      // Minify our generated JS for a smaller output file
      .pipe(g.uglify())
    // Write sourcemap to dist/sourcemaps/
    .pipe(g.sourcemaps.write('../sourcemaps/'))
    // Write generated JS code to dist/scripts/
    .pipe(gulp.dest('dist/scripts/'))
    // Reload/Inject into the browser
    .pipe(browserSync.stream())
);

// `gulp images` - Build images
gulp.task('images', ['images:webp'], () =>
  gulp.src(['src/images/**/*.{png,jpg,gif,svg}'])
    // Only work on changed images
    .pipe(g.changed('dist/images/'))
    // Compresses (losslessly) PNG, JPG, GIF, & SVG images
    .pipe(g.imagemin())
    // Copy PNG, JPG, GIF, & SVG images to dist/images/
    .pipe(gulp.dest('dist/images/'))
);

// `gulp images:webp` - Build WEBP images
gulp.task('images:webp', () =>
  gulp.src(['src/images/**/*.{png,jpg}'])
    // Only work on changed images
    .pipe(g.changed('dist/images/'))
    // Convert PNG & JPG images to WEBP
    .pipe(g.webp({
      // Compression level (0 fastest, 4 default, 6 slowest)
      method: 6,
      // Encode losslessly
      lossless: true
      // 80% quality of source (when lossless is off)
      // quality: 80,
    }))
    // Write WEBP converted files to dist/images/
    .pipe(gulp.dest('dist/images/'))
);

// `gulp etc` - Copy everything else
gulp.task('etc', () =>
  gulp.src(['src/**/*', '!src/{styles,scripts,images}/**/*'])
    // Only work on changed files
    .pipe(g.changed('dist/'))
    // Output files to the dist folder
    .pipe(gulp.dest('dist/'))
    // Reload/Inject into the browser
    .pipe(browserSync.stream())
);
