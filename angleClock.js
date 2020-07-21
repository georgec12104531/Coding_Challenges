// Plan:
// Find angle of minutes 
// Find angle of hour
// Subtract hour angle by minute angle 

// get the positive angle between hour and minute 
// Math.max(pos angle, 360 - pos angle)

const angleClock = (hour, minute) => {
  let minutePercentage = minute / 60 
  let minuteAngle = Math.ceil(minutePercentage * 360)

  let hourInBetweenPercentage = minuteAngle / 360
  let hourInBetweenAngle = hourInBetweenPercentage * 30

  let newHour = hour % 12;
  let existAngle = newHour * 30;

  totalHourAngle = hourInBetweenAngle + existAngle;

  let min = Math.min(minuteAngle, totalHourAngle);
  let max = Math.max(minuteAngle, totalHourAngle);

  let angle = Math.abs(max - min);
  let roundAngle = Math.ceil(angle * 10) / 10

  return Math.min(roundAngle, 360 - roundAngle);
}

angleClock(5, 33)



