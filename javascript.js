//munculin tanda menu (garis 3 kanan)-
var tombolMenu = $(".tombol-menu");
var menu = $("nav .menu ul");

function klikMenu() {
    tombolMenu.click(function (){
        menu.toggle();
    });
    menu.click(function () {
        menu.toggle();
    });
}

// -saat minimize
$(document).ready(function(){
    var width = $(window).width();
    if(width <990){
        klikMenu();
    }
})

// biar tanda menu (garis 3 kanan) engga ilang kalau di besarin
$(window).resize(function(){
    var width = $(window).width();
    if(width >989){
        menu.css("display","block");
    }else{
        menu.css("display","none");
    }
    klikMenu();
});

// efek scroll logo dan menu
$(document).ready(function () {
    var scroll_pos = 0;
    $(document).scroll(function(){
        scroll_pos =$(this).scrollTop();
        if(scroll_pos > 0){
            $("nav").addClass("putih");
            $("nav img.hitam").show();
            $("nav img.putih").hide();
        }else{
            $("nav").removeClass("putih");
            $("nav img.hitam").hide();
            $("nav img.putih").show();
        }
    })
});
