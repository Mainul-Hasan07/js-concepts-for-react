const myName = "Mainul Hasan";
let age = 22;
let season = 'Rainy Season';

//conditional
let myAge = 22;
let friendsAge = 24;
if (myAge > friendsAge) {
    console.log('Elder')
}
else {
    console.log('Younger');
}
if (myAge < friendsAge) {
    console.log('Younger')
}
else {
    console.log('Elder');
}
if (myAge >= friendsAge) {
    console.log('Elder')
}
else {
    console.log('Younger');
}
if (myAge <= friendsAge) {
    console.log('Younger')
}
else {
    console.log('Elder');
}
if (myAge == friendsAge) {
    console.log('Equal')
}
else {
    console.log('Nou equal');
}
if (myAge !== friendsAge) {
    console.log('Not equal')
}
else {
    console.log('Equal');
}


//multiple conditional
if (myAge > 20 && friendsAge > 20) {
    console.log('Friends');
}
const eggPrice = 50;
if (eggPrice < 30 || eggPrice > 50) {
    console.log("don't eat");
}

//array
const numbers = [12, 14, 25, 17, 28, 33, 24];
console.log(numbers.indexOf(33));
numbers[4] = 23;
console.log(numbers.length)
console.log(numbers[3]);
console.log(numbers);
numbers.push(32);
numbers.push(43);

numbers.pop();
numbers.shift();
numbers.unshift(122);
console.log(numbers);

//loop
const numbers2 = [];
for (let i = 0; i< numbers.length; i++) {
    const element = numbers[i];
    numbers2.push(element);

}
// console.log(numbers2);
let i = 0;
while (i < numbers.length) {
    const element = numbers[i];
    numbers2.push(element);
    i++;
}
// console.log(numbers2);

//function
function multiply(num1, num2) {
    return num1 * num2;
}
const result = multiply(2, 4);
// console.log(result);

// Object
const student = {
    name: 'sakib',
    age: 12,
    class: '6'
}
const myVariable = 'age';
console.log(student.name);
console.log(student['age']);
console.log(student[myVariable]);


