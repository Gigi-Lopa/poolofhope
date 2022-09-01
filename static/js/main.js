const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

const on = (type, el, listener, all = false) => {
    if (all) {
        select(el, all).forEach(e => e.addEventListener(type, listener))
    } else {
        select(el, all).addEventListener(type, listener)
    }
}

const onscroll = (el, listener) => {
el.addEventListener('scroll', listener)
}

/**
 * Mobile nav toggle
 */
on('click', '.mobile-nav-toggle', function(e) {
select('#navbar').classList.toggle('navbar-mobile')
this.classList.toggle('bi-list')
this.classList.toggle('bi-list')
})

/**
 * Mobile nav dropdowns activate
 */
on('click', '.navbar .dropdown > a', function(e) {
if (select('#navbar').classList.contains('navbar-mobile')) {
    e.preventDefault()
    this.nextElementSibling.classList.toggle('dropdown-active')
}
}, true)
document.querySelector("#navbar ul").addEventListener("click",(e)=>{
  if (document.querySelector("#navbar").classList.contains("navbar-mobile")){
    let navBar = document.querySelector(".navbar-mobile ul");
    navBar.querySelectorAll("li a").forEach(a=>{
   
      document.querySelector(".active").style.color = "#295023"
    })
    document.querySelector("#navbar").classList.remove("navbar-mobile")
  }
})
let headerScrolled = () =>{
  let navHeader = document.querySelector(".nav")
  if(window.scrollY >=  100){
    if(navHeader){
      navHeader.style.backgroundColor = "#fff"
    }
  }
  else{
    if(navHeader){
      navHeader.style.backgroundColor = "transparent"
    }
  }

}
document.addEventListener("scroll",()=>{
  headerScrolled()
})
const galleryLightbox = GLightbox({
  selector: '.gallery-lightbox'
});
/*
*  AOS INIT
*/
function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
      disable :'mobile'
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

/*
* OWL CAROUSEL
*/
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:30,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:2,
          nav:false
      },
      900:{
        items:3,
        nav:true,
        loop:false
      },
      1000:{
          items:4,
          nav:true,
          loop:false
      }
      ,
      2000:{
        items:5,
        nav:true,
        loop:false
    }
  }
})
