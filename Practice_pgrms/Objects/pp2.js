//2. Count number of keys in an object.
let product = {
    id: 101,
    name: "Wireless Headphones",
    brand: "SoundMax",
    price: 2500,
    category: "Electronics",
    stock: 45,
    rating: 4.5,
    color: "Black",
    warranty: "1 Year",
    isAvailable: true
};

let keys = Object.keys(product);
console.log(keys);
