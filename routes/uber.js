const   express               = require('express');
const router                = express.Router();
      
var googleMaps            = require('../services/googleMaps.js');
var uber                  = require('../services/uber.js');
        

router.get('/uber', function (req, res) {
  let origin = req.query.origin;
  let destination = req.query.destination;
  uberData(origin,destination, res);

});

async function uberData(origin, destination, res){
  let locationObj =  await googleMaps.geoCodeAddress(origin, destination);
  let uberObj = await uber.queryUberAPI(locationObj);
  res.json(uberObj);
  
}

module.exports = router; 