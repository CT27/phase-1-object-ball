const letters = ["a", ["b", ["c", ["d", ["e"]], "f"]]];

console.log(letters);
console.log(letters[1]);
console.log(letters[1][1]);
console.log(letters[1][1][1][1][0]);
//each lookup (each set of square brackets) "drills down" into each successive nested array.
