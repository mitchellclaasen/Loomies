console.log("cart.js linked");

var cartArray = [];

class Cart {
    constructor(paramItemsArray) {
        this.itemsArray = paramItemsArray;
        this.price = function () { };
        this.discount = 0;
    }
}