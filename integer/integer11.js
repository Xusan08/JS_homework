//Ikki xonali butun son berilgan. Uning raqamlari yig'indisi va raqamlari ko'paytmasini toping

let a = 23;
let r1 = Math.floor((a % 100) / 10);
let r2 = a % 10;

let y = r1 + r2;
let k = r1 * r2;
console.log(y, k);
