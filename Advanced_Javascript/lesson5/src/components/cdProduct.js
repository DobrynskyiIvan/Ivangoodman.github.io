import ShopProduct from "./shopProduct";

function CDProduct(title, price, playLength) {
  this.playLength = playLength;
  ShopProduct.call(this, title, price);
}

CDProduct.prototype = Object.create(ShopProduct.prototype);
CDProduct.prototype.constructor = CDProduct;
CDProduct.prototype.getplayLength = function () {
  return this.playLength;
};

export default CDProduct;
