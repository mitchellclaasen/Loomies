console.log("cart.js linked");

var ic1 = new IceCream("cup", "small", "flake", "vanilla");
var ic2 = new IceCream("cup", "medium", "flake", "vanilla");
var ic3 = new IceCream("cup", "smlargeall", "flake", "vanilla");

ic1.addToCart();
ic2.addToCart();
ic3.addToCart();

function updateCartPage() {
    $(".cart-items-continer").empty();
    for (var i = 0; i < shoppingCart.itemsArray.length; i++) {
        $(".cart-items-continer").append("<divclass='cart-item'><p class= 'item-name' > " + shoppingCart.itemsArray[i].name + "</p ><p class='item-price'>R " + shoppingCart.itemsArray[i].price + "</p><img src='../assets/close-icon.svg' class='item-remove'></div>");
    }
    $("#total-price").text("R " + shoppingCart.price);
    console.log("cart updated");
}

updateCartPage();

$("#promo-code-input").on("change", function () {
    var promoCode = $("#promo-code-input").val();
    console.log(promoCode);
    shoppingCart.applyDiscount(promoCode);
    updateCartPage();
    $("#total-price").text("R " + shoppingCart.discountPrice);
    console.log("promo code added");
});