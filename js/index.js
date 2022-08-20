
$(document).ready(function() {

    $('.btn-top').click(function(e) {
        (e).preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    })
});

// function feebackSwiper() {
//     const swiper = new Swiper("#comment-swiper", {
        
//         breakpoints: {
//             1440: {
//                 slidesPerView: 3
//             },
//             767: {
//                 slidesPerView: 2
//             },
//                 /* 更小時都顯示 1 欄 */
//             0: {
//                 slidesPerView: 1
//             }
//         },

//             spaceBetween: 16,
//             pagination: {
//                 el: ".swiper-pagination",
//                 clickable: true,
//             },
//     });
// }
// feebackSwiper();



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    breakpoints: {
        /* 螢幕寬度大於等於 992px 時切換為 3 欄 */
        992: {
            slidesPerView: 3
        },
        /* 螢幕寬度大於等於 768px 時切換為 2 欄 */
        767: {
            slidesPerView: 1
        },
        /* 更小時都顯示 1 欄 */
        0: {
            slidesPerView: 1
        }
    },
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});




