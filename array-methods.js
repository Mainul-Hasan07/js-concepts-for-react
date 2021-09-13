const products = [
    { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' },
    { name: 'Phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'black' },
    { name: 'sunglass', price: 300, brand: 'ribon', color: 'yellow' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];

const brand = products.map(product => product.brand);
console.log(brand);
const prices = products.map(product => product.price)
console.log(prices);

products.forEach(product => console.log(product.name))


//filter
const cheap = products.filter(product => product.price <= 5000);
console.log(cheap);
const specificName = products.filter(product => product.name.includes('n'));
console.log(specificName)


//find
const special = products.find(product => product.name.includes('n'));
console.log(special);


//object shortcut
const x = 40;
const y = 34;
const obj = {
    x: x,
    y: y
}

const obj1 = { x, y };
console.log(obj);
console.log(obj1)

const name = 'Salimullah';
const area = 'Dhaka';
const nobab = {
    name: name,
    area:area
}
const nobab2 = { name, area };
console.log(nobab);
console.log(nobab2);