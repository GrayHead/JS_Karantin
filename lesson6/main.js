// let numbers = [123, 24, 7, 78, 23]; // 123 23 24 7 78
// console.log(numbers);
// //
// // function asdqew(n) {
// // 	console.log(n);
// // 	console.log(n + 1);
// //
// // 	//.......
// // 	//.......
// // 	//.......
// // 	//.......
// // 	//.......
// // }
// //
// // numbers.forEach(function (x/*, index, array*/) {
// // 	console.log(x, index, array);
// // });
//
// // let numbers = [123, 43, 7, 78, 23];
//
// // let sortedArray = numbers.sort(function (a, b) {
// // 	// let result = a - b; // +    -     0
// // 	// return result;
// // 	return a - b;
// //
// // });
// //
// // console.log(sortedArray);
// //
// // let sortedArrayReverse = numbers.sort((a, b) => b - a);
// // console.log(sortedArrayReverse);
// //
//
// // numbers.sort((a, b) => {
// // 	console.log(a, b);
// // 	return a - b;
// //
// // });
// // console.log(numbers);
//
// //
// // let users = [
// // 	{name: 'vasya', age: 31, status: false},
// // 	{name: 'petya', age: 30, status: true},
// // 	{name: 'kolya', age: 29, status: true},
// // 	{name: 'olya', age: 28, status: false},
// // 	{name: 'max', age: 30, status: true},
// // 	{name: 'anya', age: 31, status: false},
// // 	{name: 'oleg', age: 28, status: false},
// // 	{name: 'andrey', age: 29, status: true},
// // 	{name: 'masha', age: 30, status: true},
// // 	{name: 'olya', age: 31, status: false},
// // 	{name: 'max', age: 31, status: true}
// // ];
// //
// // users.sort((a, b) => a.age - b.age);
// // console.log(users);
//
//
// let usersWithAddress = [
// 	{id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
// 	{id: 2, name: 'petya', age: 30, status: true, address: {city: 'lviv', street: 'Shevchenko', number: 1}},
// 	{id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
// 	{id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}},
// 	{id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
// 	{id: 6, name: 'anya', age: 31, status: false, address: {city: 'NY', street: 'Shevchenko', number: 2}},
// 	{id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}},
// 	{id: 8, name: 'andrey', age: 29, status: true, address: {city: 'NY', street: 'Shevchenko', number: 43}},
// 	{id: 9, name: 'masha', age: 30, status: true, address: {city: 'lviv', street: 'Shevchenko', number: 12}},
// 	{id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
// 	{id: 11, name: 'max', age: 31, status: true, address: {city: 'LVIV', street: 'Shevchenko', number: 121}}
// ];
//
// usersWithAddress.sort((a, b) => a.address.number - b.address.number);
//
//
// numbers.sort();
// console.log(numbers);
//
// let strings = ['b', 'c', 'a', 'D', 'f', 'e'];
// strings.sort();
// console.log(strings);
//
// let words = ['hello', 'buy', 'sell', 'scream', 'cream', 'down'];
// words.sort();
// console.log(words);
//
// console.log('reww' > 'qwe');
//
// words.sort((a, b) => {
// 	if (a.length < b.length) {
// 		//......
// 		return -1;
// 	} else if (a.length > b.length) {
// 		return 1;
//
// 	}
// 	return 0;
// });
//
// console.log(words);
//
//
// let users = [
// 	{name: 'vasya', age: 31, status: false},
// 	{name: 'petya', age: 30, status: true},
// 	{name: 'kolya', age: 29, status: true},
// 	{name: 'olya', age: 28, status: false},
// 	{name: 'max', age: 30, status: true},
// 	{name: 'anya', age: 31, status: false},
// 	{name: 'oleg', age: 28, status: false},
// 	{name: 'andrey', age: 29, status: true},
// 	{name: 'masha', age: 30, status: true},
// 	{name: 'olya', age: 31, status: false},
// 	{name: 'max', age: 31, status: true, skills: ['js', 'html']}
// ];
//
// let filter = users.filter(user => !user.status);
// console.log(filter);
// console.log(users);
//
// let filter1 = users.filter(value => value.name.startsWith('o'));
// console.log(filter1);
//
//
// let filter2 = usersWithAddress.filter(user => user.address.city.toUpperCase() === 'Lviv'.toUpperCase());
// console.log(filter2);
// console.log(users, 'start');
// // debugger;
//
// // let map = users.map((user, index) => {
// // 	user.id = index + 1;
// // 	return user;
// // });
// //
// // console.log(map, 'map');
// //
// // console.log(users, 'end');
// // for (const mapElement of users) {
// // 	console.log(mapElement.id);
// // }
//
//
// // let newUsersArray = users.map((value, index) => {
// // 	let newUser = {};
// // 	newUser.name = value.name;
// // 	newUser.age = value.age;
// // 	newUser.status = value.status;
// // 	newUser.id = index + 1;
// // 	return newUser;
// //
// // });
// //
// // console.log(newUsersArray);
// // console.log(users);
// //
// // let vasya = {name: 'vasysa'};
// // let customer = vasya;
// //
// //
// // let ages = users.map(value => {
// // 	return {age: value.age};
// // });
// // console.log(ages);
// //
// // let strings1 = users.map(value => JSON.stringify(value));
// // console.log(strings1);
//
//
// // let b1 = users.some(value => value.age > 30); // b1 = false
// // let b2 = users.every(value => value.status);
// //
// //
// // let userxxx = {
// // 	name: 'kokos'
// // }
// //
// // console.log(!!userxxx['name']);
//
// console.log(users.some(value => value.skills));
//
//
// //  !!false  !!''  !!0   !!null !!undefiner !!NaN
// console.log(!!' ');
//
//
// let numbersMatrix = [1, 2, 3, [{name: 'koos'}, 5, 6, [7, 8, 9]]];
// let numbers1 = numbersMatrix.flat();
// console.log(numbers1);
// console.log(numbersMatrix);
//
// // let numbers = [123, 24, 7, 78, 23];
// // let numbers = [232, 23];
//
// let reduce = numbers.reduce((previousValue, currentValue) => {return previousValue + currentValue;});
// console.log(reduce);
//
//
//
//

//
// function calculator(a, b, action) {
// 	if (action === '+') {
// 		return a + b;
// 	} else if (action === '-') {
//
// 		return a - b;
// 	}
// }

// calculator(10, 20, 'super pow');


function calculator(a, b, callback) {
	return callback(a, b);
}

calculator(10, 20, function (a, b) {
	return a + b;

});


let calculator1 = calculator(100, 200, function (a, b) {
	return (a - b) / 2 + 100;
});
console.log(calculator1);


function User(name) {
	this.name = name;

}

User.prototype.greeting = function () {
	console.log('hello');
};

let user1 = new User('kokos');
let user2 = new User('abrikokos');

console.log(user1);
console.log(user2);


Array.prototype.print = function () {
	console.log(this);
};

[1, 2, 3, 4].print();
Array.prototype.customForEach = function (callback) {
	for (const element of this) {
		callback(element);
	}
};


[1, 2, 3, 4].forEach(value => console.log(value));

[1, 2, 3, 4].customForEach(value => console.log(value));


let users = [
	{name: 'vasya', age: 31, status: false},
	{name: 'petya', age: 30, status: true},
	{name: 'kolya', age: 29, status: true},
	{name: 'olya', age: 28, status: false},
	{name: 'max', age: 30, status: true},
	{name: 'anya', age: 31, status: false},
	{name: 'oleg', age: 28, status: false},
	{name: 'andrey', age: 29, status: true},
	{name: 'masha', age: 30, status: true},
	{name: 'olya', age: 31, status: false},
	{name: 'max', age: 31, status: true}
];

users
	.filter(value => value.status)
	.filter(value => value.age > 30)
	.map(value => {return {imaya: value.name};})
	.sort((a, b) => a.imaya > b.imya ? 1 : -1);

