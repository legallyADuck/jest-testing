export function analyzeArray(...array) {
  let min;
  let max;
  let average = 0;
  const length = array.length;

  for (let num of array) {
    num = Number(num);
    if (!num) throw Error("not a valid number");
    if (!max || num > max) max = num;
    if (!min || num < min) min = num;
    average += num;
  }

  average = average / length;

  return { average, min, max, length };
}
