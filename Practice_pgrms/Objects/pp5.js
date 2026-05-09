//5. Create a shopping cart object and calculate total bill amount.
let cart = {
    items: [
        {
            name: "T-Shirt",
            price: 500,
            quantity: 2
        },
        {
            name: "Shoes",
            price: 1500,
            quantity: 1
        },
        {
            name: "Cap",
            price: 300,
            quantity: 3
        }
    ]
};

let totalBill = 0;

// Calculate total amount
for (let item of cart.items) {
    totalBill += item.price * item.quantity;
}

console.log("Total Bill Amount:", totalBill);