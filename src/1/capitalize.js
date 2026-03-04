export function capitalize(word) {
    const array = word.split("");
    const letterMayus = array.shift().toUpperCase();
    array.unshift(letterMayus);
    return array.join("");
}