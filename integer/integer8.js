//Uchburchakning uchta uchining koordinatalari berilgan: x1 , y1 , x2 , y2 , x3 , y3. Tekislikda ikki nuqta orasidagi masofani hisoblash formulasidan foydalanib, uning perimetri ( P ) va yuzini ( S ) , 2 xona birlikda hisoblang

let x1 = -9.7;
let y1 = -9.9;
let x2 = 0;
let y2 = 2.9;
let x3 = -0.1;
let y3 = 5.2;

let a = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
let b = Math.sqrt((x1 - x3) ** 2 + (y1 - y3) ** 2);
let c = Math.sqrt((x3 - x2) ** 2 + (y3 - y2) ** 2);

let p = (a + b + c) / 2;
let S = Math.sqrt(p * (p - a) * (p - b) * (p - c));
console.log(p.toFixed(2) * 2, S.toFixed(2));