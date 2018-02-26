const moment = require('moment');

//18 hours * 4 (15 minutes a day) from 4:00 am to 10pm;
const incrementsOfDay = 72;


//function generates the 15 minute increments for a day
exports.getWeekDayTimes = function (dayCode) {
  //1 is code for Monday]
  var nextDay = dayCode < moment().weekday() ? moment().weekday(dayCode + 7) : moment().weekday(dayCode);
  //sets the time to 4:00 AM Monday Morning.
  nextDay.set({ h: 4, m: 0, s: 0, ms: 0 });
  var dayTimes = [];
  dayTimes.push(nextDay.clone());
  //increments value from 4:00 to 22:00 (15 mins * 4)hr * 18 hours
  for (var t = 1; t < incrementsOfDay; t++) {
    dayTimes[t] = nextDay.add(15, 'minutes').clone();
  }

  return dayTimes;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

//function gets fake time duration for each of the travel Times
exports.getFakeTimes = function (duration, dayTimes) {
  let qs = getRandomIntInclusive(5,20);
  let ls = getRandomIntInclusive(15,45);
  var smallTrafficFactor = duration / qs;
  var largeTrafficFactor = duration / ls;
  var durationTimes = [];

  //initializes the first hour
  for (var i = 0; i < 4; i++) {
    durationTimes.push(duration);
  }
  incrementTime(5, 7, smallTrafficFactor, durationTimes);
  incrementTime(7, 8, largeTrafficFactor, durationTimes);
  incrementTime(7, 8, largeTrafficFactor/2, durationTimes);
  decrementTime(8, 9, largeTrafficFactor/2 , durationTimes);
  decrementTime(9, 11, smallTrafficFactor/2 , durationTimes);
  decrementTime(11, 13, smallTrafficFactor/3, durationTimes);
  decrementTime(13, 15, smallTrafficFactor/8 , durationTimes);
  incrementTime(15, 16, largeTrafficFactor, durationTimes);
  incrementTime(16, 17, smallTrafficFactor, durationTimes);
  decrementTime(17, 19, largeTrafficFactor/2, durationTimes);
  decrementTime(19, 22, smallTrafficFactor/3, durationTimes);

  var fullTimeArr = [];
  for (var i = 0; i < dayTimes.length; i++) {

    var time = dayTimes[i];
    var commuteTime = moment.utc(durationTimes[i] * 1000).format('H:mm');
    var commuteSeconds = durationTimes[i];
    var commuteMinutes = Math.floor(durationTimes[i]/60);
   // console.log(commuteMinutes);
    var timeFormat = time.format('H:mm');
    fullTimeArr.push({ time: time, commuteTime: commuteTime, timeStr: timeFormat, commuteSeconds: commuteSeconds, commuteMinutes: commuteMinutes });
   // console.log(durationTimes[i] + " " + i);
  }

  for(var i = 0; i < durationTimes.length; i += 4){
  //  console.log( ((i + 1) /4 + 4) + ":00 " + fullTimeArr[i].commuteMinutes);
  }
  return fullTimeArr;


}

function incrementTime(startT, endT, factor, durationTimes) {
  var start = (startT - 4) * 4;
  var end = (endT - 4) * 4;
  let duration = durationTimes[0];
  for (var t = start; t < end; t++) {
    let ls = getRandomIntInclusive(-duration/2, duration/2) * .1;
    durationTimes[t] = durationTimes[t - 1] + factor + ls;
  }


}

function decrementTime(startT, endT, factor, durationTimes) {
  var start = (startT - 4) * 4;
  var end = (endT - 4) * 4;
  let duration = durationTimes[0];
  for (var t = start; t < end; t++) {
    let ls = getRandomIntInclusive(-duration/4, duration/4) * .1;
    durationTimes[t] = durationTimes[t - 1] - factor ;
  }


}
