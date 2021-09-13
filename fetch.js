/*-------   JSON  ------ */
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
const employeeJson = JSON.stringify(employee);
const employeeParse = JSON.parse(employeeJson)
// console.log(employeeParse)


/* Fetch */
/* fetch('url')
.then(res => res.json())
.then(data => console.log(data))
 */

/* Keys */
const keys = Object.keys(employee)
const values = Object.values(employee)


/* For */
const products = [
    { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' },
    { name: 'Phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'black' },
    { name: 'sunglass', price: 300, brand: 'ribon', color: 'yellow' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];
const newProduct = { name: 'webcam', price: 700, brand: 'lal' };

//add
const newProducts = [...products, newProduct];
console.log(newProducts);


//create a new array one specific item
const remaining = products.filter(product => product.name !== 'Phone');
console.log(remaining)