
let n = Number(prompt("Sonni kiriting"));

// Har bir raqamni qo'lda ajratib olamiz
let digit1 = Math.floor(n / 10000); // Birinchi raqam: 5
let digit2 = Math.floor((n / 1000) % 10); // Ikkinchi raqam: 6
let digit3 = Math.floor((n / 100) % 10); // Uchinchi raqam: 9
let digit4 = Math.floor((n / 10) % 10); // To'rtinchi raqam: 8
let digit5 = n % 10; // Beshinchi raqam: 7
// Boshlang'ich eng katta raqamni va uning o'rnini belgilaymiz
let maxDigit = digit1;
let maxIndex = 1;
// Iflar orqali har bir raqamni tekshiramiz
if (digit2 > maxDigit) {
  maxDigit = digit2;
  maxIndex = 2;
}
if (digit3 > maxDigit) {
  maxDigit = digit3;
  maxIndex = 3;
}
if (digit4 > maxDigit) {
  maxDigit = digit4;
  maxIndex = 4;
}
if (digit5 > maxDigit) {
  maxDigit = digit5;
  maxIndex = 5;
}
console.log(maxDigit, maxIndex);