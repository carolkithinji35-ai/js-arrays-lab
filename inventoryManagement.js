let products = ["Laptop", "Phone", "Headphones", "Monitor"];
function logFirstProduct() {
  console.log(products[0]);
}
function addProduct(product) {
  return products.push(product);
}
function updateProductName(index, newName) {
  return products[index] = newName;
}
function removeLastProduct() {
  return products.pop();
}

// Export the necessary parts for testing
module.exports = {
  products,
  logFirstProduct,
  addProduct,
  updateProductName,
  removeLastProduct,
};
logFirstProduct();
addProduct("Tablet");
console.log(products[products.length - 1]);
updateProductName(1, "Smartphone");
console.log(products[1]); 
removeLastProduct();
console.log(products[products.length - 1]);
