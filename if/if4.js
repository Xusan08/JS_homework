// X va Y dekart koordinata o`qlarida yotmaydigan (x; y) nuqta berilgan. Shu nuqta joylashgan koordinata choragini aniqlang.

let x = 7;
let y = 3;

if (x > 0 && y > 0) {
  console.log("1-chorak");
} else if (x < 0 && y > 0) {
  console.log("2-chorak");
} else if (x < 0 && y < 0) {
  console.log("3-chorak");
} else {
  console.log("4-chorak");
}