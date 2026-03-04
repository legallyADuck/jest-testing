const abc = "abcdefghijklmnopqrstuvwxyz";
const abcMayus = abc.toUpperCase();

export function ceasarCipher(string, shift) {
  let result = [];
  const array = string.split("");

  for (const letter of array) {
    if (letter === " ") result.push(" ");
    else if (abcMayus.includes(letter)) {
      const shiftedLetter = abcMayus.at(-26 + shift + abcMayus.indexOf(letter));
      result.push(shiftedLetter);
    } else if (abc.includes(letter)) {
      const shiftedLetter = abc.at(-26 + shift + abc.indexOf(letter));
      result.push(shiftedLetter);
    }
  }

  return result.join("");
}
