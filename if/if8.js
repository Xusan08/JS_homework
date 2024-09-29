//a, b, c kesmalar berilgan. Uchburchak yasash mumkinligiga tekshiring.
//Agar mumkin bolsa “Yes” aks holda “No” javob qaytarsin.
//Uchburchak yasash sharti: Ixtiyoriy 2 ta tomonning yig`indisi 3-tomondan katta bo`lishi kerak.

let a = 3;
let b = 4;
let c = 5;

if ((a + b) > c && (b + c) > a && (c + a) > b) {
  console.log("Yes");
} else {
  console.log("No")
}