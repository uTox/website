module.exports = {
  plugins: [
    require('postcss-import'), // Resolve @import statements
    require('postcss-clean'), // Minifies CSS
    require('postcss-reporter') // Output errors messages & other info
  ]
}
