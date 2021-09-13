const numbers = [12, 14, 25, 17, 28, 33, 24];
const student = {
    name: 'sakib',
    age: 12,
    class: '6'
}
/*------  Template String   ------- */
const about = `MY Name is ${student.name}.I am ${student.age} years Old.I read in class ${student.class}`;
// console.log(about);
const song = `amar sonar bangla
ami tomai valobashi`;


/*--------   Arrow function   ------ */
const add = (num1, num2) => num1 * num2;
// console.log(add(12, 12));
const get9 = () => 9;
// console.log(get9());

const addSixtyFive = x => x + 65;
// console.log(addSixtyFive(10));
const isEven = x => x % 2 === 0;
// console.log(isEven(10));
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}

/* Spread Operator */
console.log(...numbers);
const newNumbers = [...numbers,13,98,76];
numbers.push(99);
console.log(newNumbers);
