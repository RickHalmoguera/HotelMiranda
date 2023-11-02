
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

menuBtn.addEventListener('click',handleMenu)