import ShopProduct from "./shopProduct";
function BookProduct(title, price, numPages) {
  this.numPages = numPages;
  ShopProduct.call(this, title, price);
}
BookProduct.prototype = Object.create(ShopProduct.prototype);
BookProduct.prototype.constructor = BookProduct;

BookProduct.prototype.getNumPages = function () {
  return this.numPages;
};

export default BookProduct;
