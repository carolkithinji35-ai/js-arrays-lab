const products = ["Laptop", "Phone", "Headphones", "Monitor"];
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
  logFirstProduct:
    typeof logFirstProduct !== "undefined" ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== "undefined" ? addProduct : undefined,
  updateProductName:
    typeof updateProductName !== "undefined" ? updateProductName : undefined,
  removeLastProduct:
    typeof removeLastProduct !== "undefined" ? removeLastProduct : undefined,
  products,
};
