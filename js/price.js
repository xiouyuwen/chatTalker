$(document).ready(function() {

    $('.btn-top').click(function(e) {
        (e).preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 
        1000
        );
    })    
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