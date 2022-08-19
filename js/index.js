
$(document).ready(function() {

    $('.btn-top').click(function(e) {
        (e).preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    })
});

function initSwiper() {
    const swiper = new Swiper("#comment-swiper", {
        slidesPerView: 1,
        /* 斷點設定 */
        breakpoints: {
            1440: {
                slidesPerView: 3
            },
            767: {
                slidesPerView: 2
            },
                /* 更小時都顯示 1 欄 */
            0: {
                slidesPerView: 1
            }
        },
        
            spaceBetween: 16,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
    });
}
initSwiper();
// var swiper = new Swiper(".mySwiper", {
//     
//     },
//         slidesPerView: 3,
//         spaceBetween: 30,
//         pagination: {
//             el: ".swiper-pagination",
//             clickable: true,
//         },
// });