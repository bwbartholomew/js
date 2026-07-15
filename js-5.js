// --1--
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind


// function showStudentInfo() {
//     console.log(
//         `Студент ${this.name}, спеціальність ${this.specialty}, середній бал ${this.score}, пропущено ${this.missedLessons} занять`
//     );
// }


// const student1 = {
//     name: "Іван",
//     specialty: "Туризм",
//     score: 10,
//     missedLessons: 5
// };


// const student2 = {
//     name: "Марія",
//     specialty: "Фінанси",
//     score: 9,
//     missedLessons: 2
// };


// const student3 = {
//     name: "Олег",
//     specialty: "IT",
//     score: 8,
//     missedLessons: 7
// };


// showStudentInfo.call(student1);

// showStudentInfo.apply(student2);

// const studentInfo = showStudentInfo.bind(student3);
// studentInfo();



// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке

// const cart = {
//     showvalue() {
//         console.log("Визначення:", this.value);
//     }
// }
// const html = { value: "HTML- це скелет сторінки" }
// const css = { value: "CSS - це оформлення сторінки" }

// document.querySelector('#html').addEventListener('click', cart.showvalue.bind(html));
// document.querySelector('#css').addEventListener('click', cart.showvalue.bind(css));

// --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) jrange 89. 3,4

// function shop( name, price, amount) {
//     let total = price * amount;

//     return `${name} коштує ${total} грн`;
// };

// console.log(shop("banana", 30, 4.5));
// console.log(shop("cherry", 58, 1.3));
//  console.log(shop("orange", 89, 3.4));













// const message = function (name, stars) {
//     console.log(`${name} , Welcome to ${this.hotel}, stars ${stars}`);
// };

// const Bukovel = { hotel: "Bukovel" };
// const Leon = { hotel: "Leon" };

// // message.call(Bukovel, "Ivan", "5");

// // message.apply(Bukovel, ["Ivan", "5"]);

// message.bind(Bukovel, "Ivan", "5")();

// const cart = {
//     showItems() {
//         console.log("В корзині:", this.items);
//     }
// };
// const woman = {
//     items: ["Сукня", "Спідниця", "Сорочка"]
// }
// const man = {
//     items: ["Брюки", "Плавки", "Боксери"]
// }
// const kids = {
//     items: ["Бодік", "Шапка", "Сандалі"]
// }
// cart.showItems.bind(man)();

// document.querySelector('#won').addEventListener('click', cart.showItems.bind(woman));
// document.querySelector('#men').addEventListener('click', cart.showItems.bind(man));
// document.querySelector('#kids').addEventListener('click', cart.showItems.bind(kids));


// const infoCar = {
//     name: "BMW",
//     modal: "M7",
//     color: "white",
//     showInfo: function () {
//         console.log("Car " + this.name + " modal " + this.modal + " color " + this.color);
//     },
    
// };

// car2 = {
//     name: "Nissan",
//     modal: "Juke",
//     color: "Black"
// }

// infoCar.showInfo.bind(car2)();

// infoCar.showInfo.call(car2);
// infoCar.showInfo.apply(car2);