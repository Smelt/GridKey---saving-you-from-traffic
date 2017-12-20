// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const request = require('request');
// Get our API routes
const api = require('./server/routes/api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));


var apiKey = "AIzaSyBjd50qu3kTyuUheWNfjIGUWBHHmH5VH0s";
// Set our api routes


app.get('/mapdata', function (req, res) {
  console.log('first');
  res.send("Yoo");
});

app.get('/google-time/mapdata', function (req, res) {
  console.log('second');
});


app.get('/mapdata/:origin/:destination', function (req, res) {
  var origin = req.params.origin;
  var destination = req.params.destination;


  var googleMaps = "https://maps.googleapis.com/maps/api/directions/json?";
  var key = "key=" + apiKey;
  origin = 'origin=' + origin;
  destination = 'destination=' + destination;
  var query = googleMaps + origin + "&" + destination + "&" + key;
  request(query, function (error, response, body) {
    if (error) {
      console.log("something went wrong!");
      console.log(error);
    }
    if (!error && response.statusCode == 200) {
      var results = JSON.parse(body);
      var duration = results.routes[0].legs[0].duration.text;
      var time = results.routes[0].legs[0].distance.text;
      var travelTime = {duration: duration, time: time};
      console.log(duration + " " + time + " final");
     res.json(travelTime);
    }

    else{
      var results = JSON.parse(body);
      console.log(results);
      console.log("we hit else stastement");
    }
  });

});

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  console.log("* operator");
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


app.use('/api', api);
/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
