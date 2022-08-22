
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


var acc = document.getElementsByClassName("accordion-question");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
            var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}