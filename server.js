const path = require("path"),
    express = require("express");

const BUILD_DIR = path.join( __dirname, 'build' ),
    PORT = 8080,
    app = express();

//Serving the files on the dist folder
app.use( express.static( BUILD_DIR ) );

//Send index.html when the user access the web
app.get( '*', function ( req, res ) {
  res.sendFile( path.join( BUILD_DIR, 'index.html' ) );
} );

app.listen( PORT );
