console.log("main.js linked");

function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
    document.getElementById("close-sidepanel").style.width = "1190px";

}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
    document.getElementById("close-sidepanel").style.width = "0";
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
