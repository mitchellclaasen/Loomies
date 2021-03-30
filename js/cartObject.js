console.log("cartObject.js linked");

class Cart {
    constructor(paramItemsArray) {
        this.itemsArray = paramItemsArray;
        this.price = 0;
        this.updatePrice();
        this.discountPrice = 0;
        this.applyDiscount("");
        console.log(this.itemsArray);
    }

    updatePrice(){
        var tempPrice = 0;
        for(var i = 0; i < this.itemsArray.length; i++){
            this.itemsArray[i].updatePrice();
            tempPrice += this.itemsArray[i].price;
        }
        this.price = tempPrice;
    }

    applyDiscount(discountCode){
        if(discountCode === "me123"){
            this.discountPrice = Math.round(this.price * 0.9);
        }
    }
}