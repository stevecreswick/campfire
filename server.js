var path = require('path');
var express = require('express');

var BUILD_DIR = path.join( __dirname, 'build' );

var app = express();

app.use(express.static(BUILD_DIR));
app.set('port', process.env.PORT || 8080);

var server = app.listen(app.get('port'), function() {
  console.log('listening on port ', server.address().port);
});

//Send index.html when the user access the web
app.get( '*', function ( req, res ) {
  res.sendFile( path.join( BUILD_DIR, 'index.html' ) );
} );
