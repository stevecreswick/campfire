var path = require('path');
var express = require('express');

var environments = require( './environments' );
var minimist = require( 'minimist' );

var options = minimist( process.argv.slice( 2 ) );

var BUILD_DIR = path.join( __dirname, 'build' );

var environment = options.environment || options.e || process.env.NODE_ENV || 'staging';

var currentEnvironment = environments[ environment ];

console.log(currentEnvironment);

var app = express();

app.use(express.static(BUILD_DIR));
app.set('port', process.env.PORT || 8080);

var server = app.listen(app.get('port'), function() {
  console.log('listening on port ', server.address().port);
});

app.post( '/environment', function( request, response ) {
  response.set( 'Cache-Control', 'no-cache' );
  response.send( ENV_OBJECT );
} );

//Send index.html when the user access the web

app.get( '*', function ( req, res ) {
  res.sendFile( path.join( BUILD_DIR, 'index.html' ) );
} );
