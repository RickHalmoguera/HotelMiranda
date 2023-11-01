
const menuBtn = document.getElementById("menuBtn")
const headerUl = document.getElementById("headerUl")

const xSrc = "./icons/close.svg"
const menuSrc ="./icons/Menu.svg"

let isOpen = false
let isClosed = false

const handleMenu = () =>{
  if(isOpen){
      menuBtn.src = menuSrc
      isOpen = false
      headerUl.style.display ="none"
  }else{
      menuBtn.src = xSrc
      isOpen = true
      headerUl.style.display ="flex"
  }
}

let swiperRooms = new Swiper(".rooms__swiper", {
 autoplay:{
  delay:3000
 },
 loop: true,   
  slidesPerView: 1,
  spaceBetween: 20,                   
  pagination: {
      el: '.swiper-pagination',
  },                  
  navigation: {                       
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },    
  breakpoints: {
    1000: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }                     
});

let swiperFacilities = new Swiper(".facilities__swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints:{
    1000:{
      slidesPerView: 3,
      grid: {
        rows: 2,
      },
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    }
  }
});

menuBtn.addEventListener('click',handleMenu)