//Uch xonali a butun son berilgan, undan o’nlik xona birligidagi raqam bilan yuzlik xona birligida turgan raqamlarni joyini o’zgartirib xosil bo’lgan sonni chiqaring.

let n = 456;
let a = ((n % 1000) - (n % 100)) / 100;
let b = ((n % 100) - (n % 10)) / 10;
let c = n % 10;

let s = (b * 100) + (a * 10) + c;
console.log(s);
