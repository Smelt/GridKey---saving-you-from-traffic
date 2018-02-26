
const   express               = require('express'),
        router                = express.Router(),
        timeTools             = require('../services/timeCalc.js'),
        apiKey = "AIzaSyBjd50qu3kTyuUheWNfjIGUWBHHmH5VH0s";

router.get('/mapdata/:origin/:destination', function (req, res) {
    var origin = req.params.origin;
    var destination = req.params.destination;
    var googleMaps = "https://maps.googleapis.com/maps/api/directions/json?";
    var key = "key=" + apiKey;
    origin = 'origin=' + origin;
    destination = 'destination=' + destination;
    var query = googleMaps + origin + "&" + destination + "&" + key;
  
    request(query, function (error, response, body) {
      if (error) {
        handleError(error);
      }
      if (!error && response.statusCode == 200) {
        var results = JSON.parse(body);
        var duration = results.routes[0].legs[0].duration.text;
        var seconds = results.routes[0].legs[0].duration.value;
        var distance = results.routes[0].legs[0].distance.text;
  
        var dayTimes = timeTools.getWeekDayTimes(1);
        var travelArr = timeTools.getFakeTimes(seconds, dayTimes);
  
        var travelObj = { arr: travelArr, distance: distance, success: true, duration: duration};
        console.log("Sending response " + travelObj.success);
       res.json(travelObj);
      }
  
      else{
        var results = JSON.parse(body);
      }
    });
});

function handleError(error){
    console.log("something went wrong!");
    console.log(error);
}

module.exports = router;
  