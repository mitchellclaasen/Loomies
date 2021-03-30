console.log("cart.js linked");

var ic1 = new IceCream("cup", "small", "flake", "vanilla");
var ic2 = new IceCream("cup", "medium", "flake", "vanilla");
var ic3 = new IceCream("cup", "smlargeall", "flake", "vanilla");

var cartArray = [ic1, ic2, ic3];
var shoppingCart = new Cart(cartArray);
updateCartPage();

function updateCartPage() {
    for (var i = 0; i < shoppingCart.itemsArray.length; i++) {
        $(".cart-items-continer").append("<divclass='cart-item'><p class= 'item-name' > " + shoppingCart.itemsArray[i].name + "</p ><p class='item-price'>R " + shoppingCart.itemsArray[i].price + "</p><img src='../assets/close-icon.svg' class='item-remove'></div>");
    }
    $("#total-price").text("R " + shoppingCart.price);
}