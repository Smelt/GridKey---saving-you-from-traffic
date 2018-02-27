const   express               = require('express');
const router                = express.Router();
      
var googleMaps            = require('../services/googleMaps.js');
var uber                  = require('../services/uber.js');
        

router.get('/uber', function (req, res) {
  let origin = req.query.origin;
  let destination = req.query.destination;
  uberData(origin,destination);

});

async function uberData(origin, destination){
  console.log(origin + " " + destination);
  let locationObj =  await googleMaps.geoCodeAddress(origin, destination);
  let uberObj = await uber.queryUberAPI(locationObj);
  console.log("Uber obj");
  request(query, function (error, response, body) {
    if (error) {
      handleError(error);
    }
    if (!error && response.statusCode == 200) {
      console.log(uberObj);
      console.log("In send off");
     res.json(uberObj);

    }
    else{
      var results = JSON.parse(body);
    }
  });
}

module.exports = router; 