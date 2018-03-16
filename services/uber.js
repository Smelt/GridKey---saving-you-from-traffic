const bodyParser = require('body-parser');
const request = require('request');

const url = 'https://api.uber.com/v1.2/estimates/price?';
const authorizationVal = 'Token II2vmpfZJmWbjz6BSCl_0_DoxKNjAm3WKgKoVIuA';


exports.queryUberAPI = async function (locationObj) {
    return new Promise(function (resolve, reject) {
        request({
            headers: {
                'Authorization': authorizationVal
            },
            qs: {
                'start_latitude': locationObj.starting.lat,
                'start_longitude': locationObj.starting.lng,
                'end_latitude': locationObj.ending.lat,
                'end_longitude': locationObj.ending.lng
            },
            uri: url,
            body: '',
            method: 'GET'
        }, function (err, res, body) {
            if (err) {
                reject(err);
            }
            else {
                var results = JSON.parse(body);
                const prices = results.prices;

                //this determines whether uberPool is available in the area.
                var type = 1;
                if(prices[0].localized_display_name === 'uberX'){
                    type = 0;
                }
                
                const low_estimateX = results.prices[type].low_estimate;
                const high_estimateX = results.prices[type].high_estimate;
                const durationX = results.prices[type].duration;
                var uberObjX = {
                    duration: durationX / 60,
                    low_estimate: low_estimateX,
                    high_estimate: high_estimateX,
                    price: (low_estimateX + high_estimateX) / 2
                }
                type++;
                const low_estimateXl = results.prices[type].low_estimate;
                const high_estimateXl = results.prices[type].high_estimate;
                const durationXl = results.prices[type].duration;
                var uberObjXl = {
                    duration: durationXl / 60,
                    low_estimate: low_estimateXl,
                    high_estimate: high_estimateXl,
                    price: (low_estimateXl + high_estimateXl) / 2
                }
                var ubers = {};
                ubers.x = uberObjX;
                ubers.xl = uberObjXl;
                console.log(ubers);
                resolve(ubers);
            }

        });

    })
}