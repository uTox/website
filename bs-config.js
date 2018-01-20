
/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */
module.exports = {
  // Open control panel in browser
  open: 'ui',
  // Delay before reloading (milliseconds)
  reloadDelay: 2000,
  // Custom prefix for console.log messages sent by BrowserSync
  logPrefix: 'BrowserSync',
  // Run a development server
  server: {
    // Folder w/ our built files
    baseDir: './public/',
    // Set to true for directory listings
    directory: false
  },
  // Set to true to use localtunnel.me service
  tunnel: false
}
