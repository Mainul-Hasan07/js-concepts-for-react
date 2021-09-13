/* Array Destructuring */
const numbers = [42, 65];
const [x, y] = numbers;
// console.log(x, y);

function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums;
}
// console.log(boxify(23,34))

const student = {
    name: 'sakib',
    age: 12,
    class: '6',
    movies: ['king khan', 'Dhakar mastan']
};

const [firstMovie, secondMovie] = student.movies;
console.log(firstMovie);


/* Object destructuring */
const { name ,age} = { name: 'alu', age: 14 };
console.log(name,age)


const employee = {
    id: 'vs code',
    designation: 'developer',
    machine: 'mac',
    language: ['html', 'css', 'js', 'c++'],
    specification: {
        height: 66,
        weight: 67,
        address: 'kumarkhali',
        drink: 'water',
        watch: {
            color: 'black',
            price: 500,
            brand:'garmin'
        }
    }
}

const { machine, id } = employee;
const { address, height } = employee?.specification;
const [first, second, third] = employee?.language;
console.log(first, second,third);