console.log("iceCream.js linked");

class IceCream {
    constructor() {
        this.container = "";
        this.size = "";
        this.topping = "";
        this.flavour = "";
        this.name = "";
        this.price = 0;
    }

    updateName() {
        this.name = this.size + " " + this.flavour + " " + this.topping + " " + this.container;
    }

    updatePrice() {
        var tempPrice = 0;
        switch (this.container) {
            case "cup":
                tempPrice = tempPrice + 3;
                break;
            case "cone":
                tempPrice += 5;
                break;
            case "waffle-cone":
                tempPrice += 7;
                break;
        }
        switch (this.size) {
            case "small":
                tempPrice = tempPrice + 5;
                break;
            case "medium":
                tempPrice += 10;
                break;
            case "large":
                tempPrice += 15;
                break;
        }
        switch (this.topping) {
            case "sprinkles":
                tempPrice = tempPrice + 1;
                break;
            case "almonds":
                tempPrice += 4;
                break;
            case "flake":
                tempPrice += 8;
                break;
        }
        switch (this.flavour) {
            case "strawberry":
                tempPrice = tempPrice + 0;
                break;
            case "vanilla":
                tempPrice += 0;
                break;
            case "chocolate":
                tempPrice += 2;
                break;
        }
        this.price = tempPrice;
    }

    updateIceCream(paramContainer, paramSize, paramTopping, paramFlavour) {
        this.container = paramContainer;
        this.size = paramSize;
        this.topping = paramTopping;
        this.flavour = paramFlavour;
        this.updateName();
        this.updatePrice();
    }

    addToCart() {
        cartArray.push(this);
    }
}

// var iceCream = new IceCream();
// iceCream.updateIceCream("cup", "small", "flake", "vanilla");
// console.log(iceCream);
// iceCream.addToCart();
