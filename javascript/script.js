
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

const handleMenuOpen = ()=>{

}
menuBtn.addEventListener('click',handleMenu)