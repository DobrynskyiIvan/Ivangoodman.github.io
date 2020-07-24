function ShopProduct(title, price) {
  this.title = title;
  this.price = price;
}
ShopProduct.prototype.getTittle = function () {
  return this.title;
};
ShopProduct.prototype.setTitle = function (title) {
  this.title = title;
};
ShopProduct.prototype.setPrice = function (price) {
  this.price = price;
};
ShopProduct.prototype.getPrice = function () {
  return this.price;
};
ShopProduct.prototype.getInfo = function () {
  return `${this.title}  has price:${this.price}`;
};
export default ShopProduct;
