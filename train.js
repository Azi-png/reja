//task B
function countLetter(harf, jumla) {
  let count = 0;
  for (let i = 0; i < jumla.length; i++) {
    if (jumla[i] === harf) {
      count++;
    }
  }
  return count;
}

console.log(countLetter("e", "engineeeeeeeer")); // 3

/*Masalani izohi
A-TASK: 

Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
MASALAN countLetter("e", "engineer") 3ni return qiladi.

masalani yechimi:
Qilgan Yechimingiz…

*/
// function countLetter(harf, matn) {
//   if (
//     typeof harf !== "string" ||
//     typeof matn !== "string" ||
//     harf.length !== 1
//   ) {
//     return "Birinchi parametr bitta harf, ikkinchisi esa so'z bolsing!";
//   }

//   let sanash = 0;
//   for (let belgi of matn) {
//     if (belgi === harf) {
//       sanash++;
//     }
//   }
//   return sanash;
// }

// console.log(countLetter("e", "engineer")); // 3
// console.log(countLetter("n", "enginnnnneer")); // 2
// console.log(countLetter("r", "engineer")); // 1
// console.log(countLetter("p", "engineer")); // 0

// console.log("Jack Ma maslahatlari");
// const list = [
//   "yaxshi talaba bo'ling", // 0–20
//   "tog'ri boshliq tanlang va ko'proq hato qiling", // 20–30
//   "uzingizga ishlashingizni boshlang", // 30–40
//   "siz kuchli bolgan narsalarni qiling", // 40–50
//   "yoshlarga investitsiya qiling", // 50–60
//   "endi dam oling, foydasi yoq endi", // 60
// ];

// //CALLBACK function
// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setTimeout(function () {
//       callback(null, list[5]);
//     }, 5000);
//   }
// }
// console.log("passed here 0");

// maslahatBering(38, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("javob:", data);
//   }
// });
// console.log("passed here 1");

// ASYNC function
// async function maslahatBering(a) {
//     if (typeof a !== "number") throw new Error("insert a number");
//     else if (a <= 20) return list[0];
//     else if (a > 20 && a <= 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3];
//     else if (a > 50 && a <= 60) return list[4];
//     else {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(list[5]);
//             }, 5000);
//         });
//     }
// }

// call via then/catch
// console.log("passed here 0");
// maslahatBering(65)
//     .then((data) => {
//         console.log("javob:", data);
//     })
//     .catch((err) => {
//         console.log("ERROR:", err);
//     });
// console.log("passed here 1");

// call via asyn/await
// async function run() {
//     let javob = await maslahatBering(25);
//     console.log(javob);
//     javob = await maslahatBering(70);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
// }
// run();
