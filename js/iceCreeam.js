class IceCream {
    constructor(paramContainer, paramSize, paramTopping, paramFlavour) {
        this.container = paramContainer;
        this.size = paramSize;
        this.topping = paramTopping;
        this.flavour = paramFlavour;
        this.name = this.size + " " + this.flavour + " " + this.topping + " " + this.container;
        this.price = function() {
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
            return tempPrice;
        };
    }

    // setName()
}

var iceCreamArray = [];

// var testcream = new IceCream("cup", "small", "sprinkles", "strawberry");
// console.log(testcream);
// console.log(testcream.price);
