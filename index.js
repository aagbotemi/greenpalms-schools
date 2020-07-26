var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

/*Counter Animation */
// let nCount = function(selector) {
//     $(selector).each(function(){
        
//         $(this).animate({
//             Counter: $(this).text()
//         }, {
//             duration: 4000,
//             easing: "swing",
//             step: function(value){
//                 $(this).text(Math.ceil(value));
//             }
//         });

//     });
// };

// let a = 0;
// $(window).scroll(function(){
//     let oTop = $(".numbers").offset().top - window.innerHeight;
//     if (a == 0 && $(window).scrollTop() >= oTop) {
//         a++;
//         nCount(".col-md-3 > h1");
//     }
// }  )