//Uch xonali a butun son berilgan, undan boshida turgan raqam bn oxirida turgan raqamni joyini o'zgartirib xosil bo'lgan sonni chiqaring.

let n = 456;
let a = ((n % 1000) - (n % 100)) / 100;
let b = ((n % 100) - (n % 10)) / 10;
let c = n % 10;

let s = (c * 100) + (b * 10) + a;
console.log(s);
