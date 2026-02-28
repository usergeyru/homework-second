// Задача 1.
// Напишите функцию calculateFinalPrice, которая принимает базовую цену товара, процент скидки и налоговую ставку. Функция должна вычислять скидку, затем прибавлять налог и возвращать итоговую цену.

// const calculateFinalPrice = (basePrice, discount, tax) => {
//   const priceWithDiscount = basePrice - (basePrice * (discount / 100));
//   return finalPrice = priceWithDiscount + (priceWithDiscount * (tax / 100));
// }

// // Пример работы:
// console.log(calculateFinalPrice(100, 10, 20)); // 108
// console.log(calculateFinalPrice(100, 10, 0)); // 90

// Задача 2.
// Напишите функцию checkAccess, которая принимает имя пользователя и пароль. Если имя пользователя равно "admin" и пароль равен "123456", функция должна возвращать строку "Доступ разрешен", иначе — "Доступ запрещен".

// const checkAccess = (userName, password) => {
// 	return userName === "admin" && password === "123456"
// 		? "Доступ разрешен"
// 		: "Доступ запрещен";
// };

// console.log(checkAccess("admin", "123456"));

// Задача 3.
// Напишите функцию getTimeOfDay, которая принимает текущее время (число от 0 до 23) и возвращает строку:
// "Ночь" (с 0 до 5 часов),
// "Утро" (с 6 до 11 часов),
// "День" (с 12 до 17 часов),
// "Вечер" (с 18 до 23 часов).
// Если введённое значение не попадает в этот диапазон, возвращайте `"Некорректное время"`.

// const getTimeOfDay = currentHour => {
// 	switch (true) {
// 		case currentHour >= 0 && currentHour <= 5:
//       return "Ночь";
// 		case currentHour >= 6 && currentHour <= 11:
//       return "Утро";
// 		case currentHour >= 12 && currentHour <= 17:
//       return "День";
// 		case currentHour >= 18 && currentHour <= 23:
//       return "Вечер";
//     default:
//       return "Некорректное время";
// 	}
// };

// Задача 4.
// Напишите функцию findFirstEven, которая принимает два числа start и end и находит первое чётное число в указанном диапазоне.
// Если чётного числа в этом диапазоне нет, функция должна вернуть "Чётных чисел нет".

// Пример работы:
// console.log(findFirstEven(1, 10)); // 2
// console.log(findFirstEven(9, 9)); // "Чётных чисел нет"

// const findFirstEven = (start, end) => {
//   if (start > end) return "Некорректный диапазон";
//   const firstEven = start % 2 === 0 ? start : start + 1;
//   return firstEven <= end ? firstEven : "Четных чисел нет";
// };

// const findEven = (start, end) => {
//   if (start > end) return "Некорректный диапазон";
//   let numbers = "";

//   for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) numbers += i;
//   }

//   return numbers || "Четных чисел нет";
// };

// console.log(findEven(1, 1));
