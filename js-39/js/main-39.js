// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.

// const person = {
//   firstName: "Sergey",
//   lastName: "Ushenin",
//   age: 27,
//   isProgrammer: true,
// };

// for (const personKey in person) {
//   console.log(`${personKey}:`, person[personKey]);
// }

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.

// const object = {};

// function isEmpty(object) {
//   for (const key in object) {
//     return false;
//   }
//   return true;
// }

// console.log(isEmpty(object));

// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.

// const task = {
//   title: "title1",
//   description: "description1",
//   isCompleted: true,
// };

// for (key in task) {
//   console.log(`${key}:`, task[key]);
// }

// const modifications = {
//   title: "title2",
//   description: "description2",
//   isCompleted: false,
// };

// function cloneAndModify(object, modifications) {
//   const task = { ...object, ...modifications };
//   return task;
// }

// const task2 = cloneAndModify(task, modifications);

// for (key in task2) {
//   console.log(`${key}:`, task2[key]);
// }

// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

// Пример использования:
// const myObject = {
//   method1() {
//     console.log("Метод 1 вызван");
//   },
//   method2() {
//     console.log("Метод 2 вызван");
//   },
//   property: "Это не метод",
// };


// const callAllMethods = (object) => {
//   if ("method1" in object) {
//     console.log("Метод 1 вызван");
//   }
//   if ("method2" in object) {
//     console.log("Метод 2 вызван");
//   }
// };

// callAllMethods(myObject);
