
const menuBtn = document.getElementById("menuBtn")
const navUl = document.getElementById("navUlColumn")

const xSrc = "./icons/close.svg"
const menuSrc ="./icons/Menu.svg"

let isOpen = false
let isClosed = false

const handleMenu = () =>{
  if(isOpen){
      menuBtn.src = menuSrc
      isOpen = false
      navUl.style.display ="none"
  }else{
      menuBtn.src = xSrc
      isOpen = true
      navUl.style.display ="flex"
  }
}

let swiper = new Swiper(".swiper", {
  containerModifierClass:'swiperRoom__',
  slidesPerView: 1,
  spaceBetween: 30,
  loop:true,
  navigation: {
    nextEl: '.swiperRoom__button--next',
    prevEl: '.swiperRoom__button--prev',
  },
  breakpoints:{
    1000:{
      slidesPerView: 3
    }
  }
});


menuBtn.addEventListener('click',handleMenu)