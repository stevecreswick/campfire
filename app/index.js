// File Index

// Require All Javascripts
require.context( './javascripts', true, /^\.\/.*\.js$/).keys().map(
  require.context(
    './javascripts',
    true,
    /^\.\/.*\.js$/
  )
);

// Require All Styles
require.context( './styles', true, /^\.\/.*\.scss$/).keys().map(
  require.context(
    './styles',
    true,
    /^\.\/.*\.scss$/
  )
);
