//n ikki xonali son berilgan uning raqamlar joyini almashtirganda hosil bo`lgan son n sonidan kichik yoki teng bo`lsa True aks holda False qaytaradigan dastur tuzing.

let n = 29;
let r1 = Math.floor((n % 100) / 10);
let r2 = n % 10;
let s = r2 * 10 + r1;
if (s <= n) {
  console.log(true);
} else {
  console.log(false);
}