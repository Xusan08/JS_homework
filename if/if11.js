// Berilgan sonni quyidagi shartlarga tekshiring:
//"Ikki xonali toq son"
//"Ikki xonali juft son"
//"Uch xonali toq son"
//"Uch xonali juft son"

let a = 30;
if (a > 9 && a <= 99 & a % 2 === 1) {
  console.log("Ikki xonali toq son");
} else if (a > 9 && a <= 99 & a % 2 === 0) {
  console.log("Ikki xonali juft son");
} else if (a > 99 && a <= 999 & a % 2 === 1) {
  console.log("Uch xonali toq son");
} else if (a > 99 && a <= 999 & a % 2 === 0) {
  console.log("Uch xonali juft son")
}