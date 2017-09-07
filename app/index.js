// File Index

// Require All Javascripts
require.context( './javascripts', true, /^\.\/.*\.js$/).keys().map(
  require.context(
    './javascripts',
    true,
    /^\.\/.*\.js$/
  )
);

// import logo from 'url-loader!./assets/images/campfire.png';
// console.log(logo);
// Require All Images
// require.context( './assets', true, /^\.\/.*\.png$/).keys().map(
//   require.context(
//     './assets',
//     true,
//     /^\.\/.*\.png$/
//   )
// );
// require.context( './styles', true, /^\.\/.*\.scss$/).keys().map(
//   require.context(
//     './styles',
//     true,
//     /^\.\/.*\.scss$/
//   )
// );
// Require All Styles
// require.context( './styles', true, /^\.\/.*\.scss$/).keys().map(
//   require.context(
//     './styles',
//     true,
//     /^\.\/.*\.scss$/
//   )
// );

require( './styles/application.scss' );
