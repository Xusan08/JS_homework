// let x = Number(prompt("Tug'ilgan yilingizni kiriting"));
// x = 2024 - x;
// console.log(x);

// let n = 94753;
// n = Math.floor(n % 10);
// console.log(n);

// n sonining bo'luvchilarini va ularning yig'indisini chiqaradigan dastur tuzing

// let a = Number(prompt("a = "))
// let s = 0;
// for (let i = 0; i <= a; i++) {
//   if (a % i == 0) {
//     console.log(i);
//     s += i;
//   }
// }
// console.log("s =", s);


// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     continue
//   }
//   console.log(i);
// } 

// let a = Number(prompt("birinchi son"));
// let b = Number(prompt("ikkinchi son"));
// console.log(a ** b);

//funksiyada min va max ga array orqali tekshiramiz

// const max = function (...agrs) {
//   let max = agrs[0];
//   for (let value of agrs) {
//     if (value > max) {
//       max = value;
//     }
//   }
//   return max;
// }
// console.log(max(17, 100, 299, 302, 302.01, 87));


//shartli operator ternary

// let a = 29;
// let b = 42;
// let x = a <= b ? "to'g'ri" : "Xato"
// console.log(x);

//hafta kunlariga tekshiramiz

// let a = Number(prompt("yoshingiz"));
// let son;
// switch (a) {
//   case 1: son = "Dushanba"; break;
//   case 2: son = "Seshanba"; break;
//   case 3: son = "Chorshanba"; break;
//   case 4: son = "Payshanba"; break;
//   case 5: son = "Juma"; break;
//   case 6: son = "Shanba"; break;
//   case 7: son = "Yakshanba"; break;
//   default: son = "Faqat hafta kunlarini kiriting";
// }
// console.log(son);


//qanday son kiritilsa ham o'zidan bitta keyingi songa qo'shib chiqarib bersin

// let a = Number(prompt("kiriting"));
// let s = a + 1;
// let x;
// if (a > 0) {
//   x = a + s;
// }
// console.log(`${a} + ${s} = ${x}`)
