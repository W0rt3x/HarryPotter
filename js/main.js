//select element function
const selectElement = function (element){
    return document.querySelector(element);
}; // jakykoliv element, class se spusti tak se vrati ke me*/


let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function(){
    body.classList.toggle('open');
}); //vsechny classy jsou momentalne pouzitelne

/*scroll reveal*/
window.sr = ScrollReveal();

sr.reveal('.animate-left',{
    origin:'left',
    duration: 1000,
    distance: '25rem',
    delay: 300

});

sr.reveal('.animate-right',{
    origin:'right',
    duration: 1000,
    distance: '25rem',
    delay: 600

});

sr.reveal('.animate-top',{
    origin:'top',
    duration: 1000,
    distance: '25rem',
    delay: 500

});


sr.reveal('.animate-bottom',{
    origin:'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 500

});
function myFunction() {
    var dots = document.getElementById("dots"); //////for read more 
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  const scroll = new SmoothScroll('.navbar a[href*="#"]', {
      speed : 800
  });
  