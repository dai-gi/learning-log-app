export function calcTotalTime (records) {
  const totalTime = records
    .map((record) => record.time)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  return totalTime;
}