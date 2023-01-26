function progressDays(days) {
  let miles = 0;
  let progress = 0;
  //loop through compare length to miles
  for (i = 0; i < days.length; i++) {
    if (days[i] > miles) {
      miles = days[i];
      progress++;
    }
  }
  console.log(progressDays([1, 2, 3, 4, 5, 4, 3, 2, 1]));
  return progress;
}
