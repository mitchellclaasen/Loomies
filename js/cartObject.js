console.log("cartObject.js linked");

class Cart {
    constructor() {
        this.itemsArray = [];
        this.price = 0;
        this.updatePrice();
        this.discountPrice = this.price;
    }

    updatePrice() {
        var tempPrice = 0;
        for (var i = 0; i < this.itemsArray.length; i++) {
            this.itemsArray[i].updatePrice();
            tempPrice += this.itemsArray[i].price;
        }
        this.price = tempPrice;
    }

    addItem(iceCreamParam) {
        this.itemsArray.push(iceCreamParam);
        this.updatePrice();
    }

    applyDiscount(discountCode) {
        if (discountCode === "me123") {
            this.discountPrice = Math.round(this.price * 0.9);
        }
    }

}