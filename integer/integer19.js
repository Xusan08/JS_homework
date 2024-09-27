//Uch xonali a butun son berilgan. Uning raqamlari yig'indisi va raqamlari ko'paytmasini toping.

let n = 241;
let a = ((n % 1000) - (n % 100)) / 100;
let b = ((n % 100) - (n % 10)) / 10;
let c = n % 10;

let y = a + b + c;
let k = a * b * c;
console.log(y, k);

