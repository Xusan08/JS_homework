//n butun sonining raqamlari yig`indisini toping.

let n = 5135;
let r1 = Math.floor((n % 10000) / 1000);
let r2 = Math.floor((n % 1000) / 100);
let r3 = Math.floor((n % 100) / 10);
let r4 = n % 10;

if (n > 9 && n <= 99) {
  console.log(r3 + r4);
} else if (n > 99 && n <= 999) {
  console.log(r2 + r3 + r4);
} else if (n > 999 && n <= 9999) {
  console.log(r1 + r2 + r3 + r4);
}