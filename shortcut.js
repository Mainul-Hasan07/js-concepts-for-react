/* Truthy */
// 'something', 23, true, {}, [];

/* Falsy */
// '', 0, false, null, undefined;

//ternary
let myVar = 120;
let money = 400;
let food1 = money > 100 ? 'biryani' : 'cha biscuit';
console.log(food1);


let drink = (money > 100 && myVar > 100) ? 'coke' : 'filter water';
console.log(drink)

//
const num1 = 52;
const numstr = num1 + '';
// console.log(num1);
console.log(numstr)

const input = '560';
const inputNum = +input;
console.log(inputNum);

// 
let isActive = false;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');
// isActive ? showUser() : hideUser();
// isActive && showUser();
isActive || showUser();

//toggle
isActive = !isActive;
