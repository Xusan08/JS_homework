// Berilgan sonni quyidagi shartlarga tekshiring:
//"musbat toq son"
//"musbat juft son"
//"manfiy toq son"
//"manfiy juft son"
//"Son 0 ga teng"

let a = 10;
if (a > 0 && a % 2 === 1) {
  console.log("musbat toq son");
} else if (a > 0 && a % 2 === 0) {
  console.log("musbat juft son");
} else if (a < 0 && a % 2 === -1) {
  console.log("manfiy toq son");
} else if (a < 0 && a % 2 === 0) {
  console.log("manfiy juft son");
} else {
  console.log("son 0 ga teng");
}