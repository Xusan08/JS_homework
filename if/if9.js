//Sizga harorat selsiyda berilgan quyidagi harorat holatiga muvofiq habarni ko`rsating:
//Temp<0: "Freezing"
//Temp 1-10: "Very Cold"
//Temp 11-20: "Cold"
//Temp 21-30: "Normal"
//Temp 31-40: "Hot"
//Temp >40: "Very Hot"

let temp = 49;

if (temp < 0) {
  console.log("Freezing");
} else if (temp >= 1 && temp <= 10) {
  console.log("Very Cold");
} else if (temp >= 11 && temp <= 20) {
  console.log("Cold");
} else if (temp >= 21 && temp <= 30) {
  console.log("Normal");
} else if (temp >= 31 && temp <= 40) {
  console.log("Hot");
} else if (temp > 40) {
  console.log("Very Hot");
}