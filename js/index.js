
$(document).ready(function() {

    $('.btn-top').click(function(e) {
        (e).preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    })
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});




