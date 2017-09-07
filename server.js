var path = require('path');
var express = require('express');

var environments = require( './environments' );
var minimist = require( 'minimist' );

var options = minimist( process.argv.slice( 2 ) );

var BUILD_DIR = path.join( __dirname, 'build' );

var environment = options.environment || options.e || process.env.NODE_ENV || 'development';

var currentEnvironment = environments[ environment ] || {};

var app = express();

app.use(express.static(BUILD_DIR));
app.set('port', process.env.PORT || 8080);

app.use( function( request, response, next ) {
  response.set( 'Access-Control-Allow-Origin', '*' );
  response.set( 'Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With' );
  response.set( 'Access-Control-Allow-Methods', 'POST, GET, OPTIONS' );

  next();
} );

var server = app.listen(app.get('port'), function() {
  console.log('listening on port ', server.address().port);
});

app.post( '/environment', function( request, response ) {
  response.set( 'Cache-Control', 'no-cache' );
  response.send( currentEnvironment );
} );

app.get( '*', function ( req, res ) {
  res.sendFile( path.join( BUILD_DIR, 'index.html' ) );
} );
