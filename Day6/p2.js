const cart = [
  { name: "Smartphone", price: 800, category: "Electronics" },
  { name: "Toaster", price: 50, category: "Home" },
  { name: "Headphones", price: 250, category: "Electronics" },
  { name: "Monitor", price: 150, category: "Electronics" }
];
onst isEligible = (product) => {
  return (product?.category === "Electronics" &&Number(product?.price) > 200);};
function applyPromo(cart, promoCallback) {
  let discountedCount = 0;
  let totalSavings = 0;
const updatedCart = (cart || []).map((item) => {
    const eligible = promoCallback(item);
if (eligible) {
    const discount = item.price * 0.1;
    discountedCount++;
      totalSavings += discount;
      return {item,price: Number((item.price - discount).toFixed(2)),isDiscounted: true};
    }
return {item,isDiscounted: false};
  });
console.log(`Promotion applied! ${discountedCount} items were discounted for a total saving of $${totalSavings.toFixed(2)}.`);
setTimeout(() => {console.log(updatedCart)}, 1000);
}
applyPromo(cart, isEligible);