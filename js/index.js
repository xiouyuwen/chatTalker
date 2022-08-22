
$(document).ready(function() {

    $('.btn-top').click(function(e) {
        
        $('html, body').scrollTop(0);
    })

    $(window).scroll(function () {
        
        if ($(window).scrollTop() > 200) {
            // 當元素有hide時，會回傳true，沒有則false
          //if ($('.btn-top').hasClass("show")) {
            // 當有此className時刪除，沒有則新增
            // $('.btn-top').toggleClass("hide");
            // 當捲軸高度大餘200時，會刪除className(hide)
            $('.btn-top').addClass('show');
          //}
        } else {
            // 當捲軸高度小餘200時，會加入className＝hide
            $('.btn-top').removeClass("show");
        }
    });

});



var swiper = new Swiper(".mySwiper", {
    /*  預設要顯示幾個卡片 */
    slidesPerView: 3,
     /* 斷點設定 */
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
    /* 卡片元素的間隔 */
    spaceBetween: 10,
    pagination: {
         /* 我想將分頁圓點綁在哪個 class */
        el: ".swiper-pagination",
        /* 將輪播設定為可以點擊分頁圓點來切換圖片 */
        clickable: true,
    },
});




