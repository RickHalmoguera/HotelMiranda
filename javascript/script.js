
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

const swiperRoom = new Swiper(".swiperRoom", {
  containerModifierClass :"swiperRoom__",
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
})

const swiperCore = new Swiper(".swiperCore",{
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination:{
    el:".swiperCore__pagination",
  },
  breakpoints:{
    1000:{
      slidesPerView: 3,
      
      grid:{
        fill:"row",
        rows:2,
      }
    }
  }
})

const swiperFood = new Swiper(".swiperFood",{
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  grid:{
    fill:"row",
    rows:3,
  },
  navigation: {
    nextEl: '.swiperFood__button--next',
    prevEl: '.swiperFood__button--prev',
  },
  breakpoints:{
    1000:{
      slidesPerView: 2,
      grid:{
        fill:"row",
        rows:3,
      }
    }
  },
})

const swiperFoodPhotos = new Swiper (".swiperFoodPhotos",{
  slidesPerView:1,
  spaceBetween: 30,
  loop: true,
  pagination:{
    el:".swiperFoodPhotos__pagination"
  },
  breakpoints:{
    1000:{
      slidesPerView: 3,
      spaceBetween: 30,
    }
  },
})


menuBtn.addEventListener('click',handleMenu)