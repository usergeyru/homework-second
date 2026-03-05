// Задание 1.
// Дан массив пользователей:
const users = [
	{ name: "Alex", age: 24, isAdmin: false },
	{ name: "Bob", age: 13, isAdmin: false },
	{ name: "John", age: 31, isAdmin: true },
	{ name: "Jane", age: 20, isAdmin: false },
];

// Добавьте в конец массива двух пользователей:
users.push(
	{ name: "Ann", age: 19, isAdmin: false },
	{ name: "Jack", age: 43, isAdmin: true },
);

console.log(users);

// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.

function getUserAverageAge(users) {
	let sumAge = 0;
	let averageAge = 0;

	users.forEach(users => {
		sumAge += users.age;
	});
	averageAge = sumAge / users.length;
	return averageAge;
}

console.log(getUserAverageAge(users));

// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users), которая возвращает массив всех администраторов.

let admins = [];

function getAllAdmins(users) {
	for (let i = 0; i < users.length; i++) {
		if (users[i].isAdmin === true) {
			admins.push(users[i]);
		}
	}
}

getAllAdmins(users);

console.log(admins);

// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function first(arr, n) {
	if (n > arr.length) {
		console.log(`${n} не может быть больше длинны массива`, arr.length);
		return;
	} else if (n == 0) {
		console.log((arr = []));
		return;
	} else if (n == undefined) {
		console.log(arr[0]);
		return;
	} else {
		for (let i = 0; i < n; i++) {
			console.log(arr[i]);
		}
	}
}

first(arr, 0);
