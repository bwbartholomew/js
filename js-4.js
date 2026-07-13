// ---1---
// Перепишіть функцію, використовуючи '?' або '||'
// function checkAge(age) {
// if (age > 18) {
// return true;
// } else {
// return confirm('Батьки дозволили?');
// }
    
//     return age > 18 || confirm('Батьки дозволили?');
// }
// checkAge(13);
// ---2---
//     Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.

// function showLowNumber(a, b){
//     if (a < b) {
//         return a
//     } else {
//         return b
//     }
// }
//  console.log(showLowNumber(-1,2));


//     ---3---
// Перепишіть з використанням стрілкових функцій
// Замініть Функціональні Вирази на стрілкові функції у коді ниж
// 
const ask = (question, yes, no) => {
if (confirm(question)) yes();
else no();
}
ask(
"Ви згодні?"
,
() => { alert("Ви погодились."); },
() => { alert("Ви скасували виконання."); }
);