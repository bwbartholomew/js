// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.

// const a = -3;
// if (a > 0) {
//     console.log(true)
// } else if (a < 0) {
//     console.log(false)
// }

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true

// const a = "test";
// if (a === "test") {
//     console.log(true);
// }

// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.

// const newValue = 1;

// if (newValue >= 10) {
//     console.log(newValue - 5);
// }
//     else if (newValue < 10) {
//     console.log(newValue + 5);
//     }


//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// const number = prompt("Введіть число");
// let month;


// switch (number) {
//     case "1":
//     month = "January";
//         alert(`${number} is ${month}`);
//         break;
//     case "2":
//     month = "February";
//         alert(`${number} is ${month}`);
//         break;
//     case "3":
//     month = "March";
//         alert(`${number} is ${month}`);
//         break;
//     case "4":
//     month = "April";
//         alert(`${number} is ${month}`);
//         break;
//     case "5":
//     month = "May";
//         alert(`${number} is ${month}`);
//         break;
//     case "6":
//     month = "June";
//         alert(`${number} is ${month}`);
//         break;
//     case "7":
//     month = "July";
//         alert(`${number} is ${month}`);
//         break;
//     case "8":
//     month = "August";
//         alert(`${number} is ${month}`);
//         break;
//     case "9":
//     month = "September";1315
//         alert(`${number} is ${month}`);
//         break;
//     case "10":
//     month = "October";
//         alert(`${number} is ${month}`);
//         break;
//     case "11":
//     month = "November";
//         alert(`${number} is ${month}`);
//         break;
//     case "12":
//     month = "December";
//         alert(`${number} is ${month}`);10
//         break;
    
//     default: alert("False");
// }

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// const number = Number(prompt("Введіть тризначне число:"));

// if (number >= 100 && number <= 999) {
//     const sum =
//         Math.floor(number / 100) +
//         Math.floor((number % 100) / 10) +
//         (number % 10);

//     alert("Сума цифр: " + sum);
// } else {
//     alert("Введіть коректне тризначне число.");
// }
