//
let n = 11122;

let digit1 = Math.floor(n / 10000);
let digit2 = Math.floor((n / 1000) % 10);
let digit3 = Math.floor((n / 100) % 10);
let digit4 = Math.floor((n / 10) % 10);
let digit5 = n % 10;

let maxDigit = digit1;

if (digit2 > maxDigit) {
  maxDigit = digit2;

}
if (digit3 > maxDigit) {
  maxDigit = digit3;
}
if (digit4 > maxDigit) {
  maxDigit = digit4;
}
if (digit5 > maxDigit) {
  maxDigit = digit5;
}
console.log(maxDigit);