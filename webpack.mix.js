/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

const mix = require('laravel-mix');
// const dotenv = require('dotenv');

mix.setPublicPath('wp-content/themes/onemohrtime/assets') // generate manifest in this directory

  // JavaScript ES6
  .js('wp-content/themes/onemohrtime/src/scripts/app.js', 'js')
  // .extract([
  //   'fancybox',
  //   'jquery',
  // ])

  // SCSS to CSS
  .sass('wp-content/themes/onemohrtime/src/styles/app.scss', 'css')
  // .sourceMaps();

  // Process images + media
  .copyDirectory('wp-content/themes/onemohrtime/src/images', 'wp-content/themes/onemohrtime/assets/img')

  // Live reload browser
  .browserSync({
    watch: true,
    // proxy: process.env.SITE_URL,
    proxy: 'https://onemohrti.ddev.site',
    // files: [
    //   '{*,**/*}.css',
    //   '{*,**/*}.js',
    //   '{*,**/*}.twig'
    // ],
    files: [
      'assets/scripts/*.js',
      'src/scripts/*.js',
      'src/scripts/**/*.js',
      'assets/styles/*.css',
      'src/styles/*.scss',
      'src/styles/**/*.scss',
      'templates/*.twig',
      'templates/**/*.twig'
    ]
  })

  // Additional config
  .minify([
    'wp-content/themes/onemohrtime/assets/js/app.js',
    'wp-content/themes/onemohrtime/assets/css/app.css'
  ]) // create sibling *.min file
  // .disableSuccessNotifications()
  // .version()
  .options({
    // autoprefixer: {
    //   options: {
    //     grid: "autoplace"
    //   }
    // },
    // postCss: [
    //   require('autoprefixer')
    // ],
    processCssUrls: false,
  })
;
