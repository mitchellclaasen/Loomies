console.log("index.js linked");

var iceCream = new IceCream();

// var container = $("#container-input").val();
// var size = $("#size-input").val();
// var topping = $("#topping-input").val();
// var flavour = $("#flavour-input").val();

console.log(iceCream);

function openNav() {
    $("#mySidepanel").width("250px");
    $("#close-sidepanel").width("1190px");
}

function closeNav() {
    $("#mySidepanel").width("0");
    $("#close-sidepanel").width("0");
}

$(".header").hide();
$(".header-1").show();

$(".next").on("click", function () {
    console.log("next button clicked");

    if ($(this).hasClass("slide-1")) {
        $(this).removeClass("slide-1");
        $(this).addClass("slide-2");
        $(".previous").removeClass("slide-1");
        $(".previous").addClass("slide-2");
        $(".header").hide();
        $(".header-2").show();
    } else if ($(this).hasClass("slide-2")) {
        $(this).removeClass("slide-2");
        $(this).addClass("slide-3");
        $(".previous").removeClass("slide-2");
        $(".previous").addClass("slide-3");
        $(".header").hide();
        $(".header-3").show();
    } else if ($(this).hasClass("slide-3")) {
        $(this).removeClass("slide-3");
        $(this).addClass("slide-1");
        $(".previous").removeClass("slide-3");
        $(".previous").addClass("slide-1");
        $(".header").hide();
        $(".header-1").show();
    }
});

$(".previous").on("click", function () {
    if ($(this).hasClass("slide-1")) {
        $(this).removeClass("slide-1");
        $(this).addClass("slide-3");
        $(".next").removeClass("slide-1");
        $(".next").addClass("slide-3");
        $(".header").hide();
        $(".header-3").show();
    } else if ($(this).hasClass("slide-3")) {
        $(this).removeClass("slide-3");
        $(this).addClass("slide-2");
        $(".next").removeClass("slide-3");
        $(".next").addClass("slide-2");
        $(".header").hide();
        $(".header-2").show();
    } else if ($(this).hasClass("slide-2")) {
        $(this).removeClass("slide-2");
        $(this).addClass("slide-1");
        $(".next").removeClass("slide-2");
        $(".next").addClass("slide-1");
        $(".header").hide();
        $(".header-1").show();
    }
});

$("select").change(function () {
    iceCream.updateIceCream($("#container-input").val(), $("#size-input").val(), $("#topping-input").val(), $("#flavour-input").val());
    iceCream.updatePrice();
    $("#name-display-box").text(iceCream.name);
    $("#price-display-box").text("R " + iceCream.price);

});

$("#add-to-cart-btn").click(function () {
    iceCream.addToCart();
    iceCream = new IceCream();
});