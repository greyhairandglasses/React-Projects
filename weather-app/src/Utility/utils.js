export function dayConversion(utcSeconds) {
  // Creates new date variable
  let day = new Date(0); // The 0 there is the key, which sets the date to the epoch
  // Sets the date
  day.setUTCSeconds(utcSeconds);
  // Converts full date into just a day, which is a number initially. Switch statement then converts to string
  switch (day.getDay()) {
    case 0:
      day = 'Sunday'
      break;
    case 1:
      day = 'Monday'
      break;
    case 2:
      day = 'Tuesday'
      break;
    case 3:
      day = 'Wednesday'
      break;
    case 4:
      day = 'Thursday'
      break;
    case 5:
      day = 'Friday'
      break;
    case 6:
      day = 'Saturday'
      break;
    default:
      break;
  }
  return day
}

export function timeConversion(utcSeconds) {
  let day = new Date(0)
  day.setUTCSeconds(utcSeconds)
  return day.toLocaleTimeString()
}

