
// Get dependencies
const express             = require('express'),
      app                 = express();
      path                = require('path'),
      http                = require('http'),
      bodyParser          = require('body-parser'),
      request             = require('request');
// Get our API routes
const mapsRoutes          = require('./routes/maps'),
      uberRoutes          = require('./routes/uber'),
      indexRoutes         = require('./routes/index');

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

//app routes setup
app.use(mapsRoutes);
app.use(uberRoutes);
app.use(indexRoutes);
//added useless comment
/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '8080';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
