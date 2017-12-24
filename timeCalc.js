var moment = require('moment');

//18 hours * 4 (15 minutes a day) from 4:00 am to 10pm;
const incrementsOfDay = 72;


//function generates the 15 minute increments for a day
exports.getWeekDayTimes = function (dayCode) {
  //1 is code for Monday]
  var nextDay = dayCode < moment().weekday() ? moment().weekday(dayCode + 7) : moment().weekday(dayCode);
  //sets the time to 4:00 AM Monday Morning.
  nextDay.set({ h: 4, m: 0, s: 0, ms: 0 });

  var dayTimes = [];
  dayTimes.push(dayTimes);
  //increments value from 4:00 to 22:00 (15 mins * 4)hr * 18 hours
  for (var t = 0; t < incrementsOfDay; t++) {
    dayTimes[t] = nextDay.add(15, 'minutes').clone();
  }

  return dayTimes;
}

//function gets fake time duration for each of the travel Times
exports.getFakeTimes = function (duration, dayTimes) {
  var smallTrafficFactor = duration / 30;
  var largeTrafficFactor = duration / 10;
  var durationTimes = [];

  //initializes the first hour
  for (var i = 0; i < 4; i++) {
    durationTimes.push(duration);
  }
  incrementTime(5, 7, smallTrafficFactor, durationTimes);
  incrementTime(7, 8, largeTrafficFactor, durationTimes);
  incrementTime(8, 9, largeTrafficFactor * -1, durationTimes);
  incrementTime(9, 11, smallTrafficFactor * -1, durationTimes);
  incrementTime(11, 13, smallTrafficFactor, durationTimes);
  incrementTime(13, 15, smallTrafficFactor * -1, durationTimes);
  incrementTime(13, 15, smallTrafficFactor, durationTimes);
  incrementTime(15, 18, largeTrafficFactor, durationTimes);
  incrementTime(18, 20, largeTrafficFactor * -1, durationTimes);
  incrementTime(20, 22, smallTrafficFactor * -1, durationTimes);

  var fullTimeArr = [];
  for (var i = 0; i < dayTimes.length; i++) {
    var time = dayTimes[i];
    var commuteTime = moment.utc(durationTimes[i] * 1000).format('H:mm');
    var commuteSeconds = durationTimes[i];
    var timeFormat = time.format('H:mm');
    fullTimeArr.push({ time: time, commuteTime: commuteTime, timeStr: timeFormat, commuteSeconds: commuteSeconds });
  }

  return fullTimeArr;


}

function incrementTime(startT, endT, factor, durationTimes) {
  var start = (startT - 4) * 4;
  var end = (endT - 4) * 4;

  for (var t = start; t < end; t++) {

    durationTimes[t] = durationTimes[t - 1] + factor;
  }


}
