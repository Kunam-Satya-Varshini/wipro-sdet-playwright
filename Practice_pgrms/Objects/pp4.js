//4. Convert an object into an array of keys and values. 
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

const arr = Object.entries(product);
console.log(arr);