
/* animer une section au moment du scroll */
var stop=false;
function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    return (rect.top <= 0 && rect.bottom >= 0) || (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight)
     && rect.top <= (window.innerHeight || document.documentElement.clientHeight)) || (rect.top >= 0 
      && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight));
  }
  var nav = document.querySelector(".navbar");
  var navScroll = document.querySelector(".navScroll");
  nav.classList.add("navBg2");
  document.addEventListener("scroll", function () {
  
        if (isScrolledIntoView(navScroll)) {
          nav.classList.add("navBg");
          nav.classList.remove("navBg2");
        }else{
          nav.classList.remove("navBg");
          nav.classList.add("navBg2");
        }
    
    })

let btnOpenenu = document.querySelectorAll(".btnOpenenu")
let menu = document.querySelector(".links")
btnOpenenu[1].style.display="none";
btnOpenenu[0].addEventListener('click', ()=>{
  btnOpenenu[0].style.display="none";
  btnOpenenu[1].style.display="flex";
  menu.classList.remove("closeMenu");
  menu.classList.add("openMenu");
})
btnOpenenu[1].addEventListener('click', ()=>{
  btnOpenenu[1].style.display="none";
  btnOpenenu[0].style.display="flex";
  menu.classList.remove("openMenu");
  menu.classList.add("closeMenu");
})


let viewToolTip = document.querySelectorAll("#viewToolTip")
let tooltipAcount = document.getElementById("items")
let caret= document.querySelectorAll("#caretbtn");
var rememberState = false
for (let i=0; i<viewToolTip.length; i++){
window.addEventListener('click', function(){

  rememberState = false
  if(rememberState === false){
    tooltipAcount.style.display = "none";
caret[i].style.transform = "rotate(0deg)"
caret[i].style.transition = "0.2s transform ease-in-out" 
  }
})


tooltipAcount.addEventListener('click', function(e){
  e.stopPropagation();
  rememberState = true
  if(rememberState === true){
    tooltipAcount.style.display="flex";

caret[i].style.transform = "rotate(180deg)"
caret[i].style.transition = "0.2s transform ease-in-out" 
  }
})
viewToolTip[i].addEventListener('click', function(e){
  e.stopPropagation();
  rememberState = !rememberState
  if(rememberState === true){
    tooltipAcount.style.display="flex";
caret[i].style.transform = "rotate(180deg)"
caret[i].style.transition = "0.2s transform ease-in-out" 
  }
  else{
    tooltipAcount.style.display = "none";
caret[i].style.transform = "rotate(0deg)";
caret[i].style.transition = "0.2s transform ease-in-out" ;
  }
  


})
}

const link1 = document.querySelectorAll('#link1');
const items1 = document.querySelectorAll('#items1');
const caretbottom = document.querySelectorAll('.caret_bottom');
for(let i =0; i<link1.length; i++){
link1[i].addEventListener('mouseover', function() {
    items1[i].style.display = 'flex';
    caretbottom[i].style.transform = "rotate(180deg)"
caretbottom[i].style.transition = "0.2s transform ease-in-out" 
console.log(i)
});

link1[i].addEventListener('mouseleave', function() {
  if (!items1[i].matches(':hover')) {
    items1[i].style.display = 'none';
    caretbottom[i].style.transform = "rotate(0deg)"
caretbottom[i].style.transition = "0.2s transform ease-in-out" 
  }
});}




let allftMenu = document.querySelectorAll("#ftmenu");
let allBtnftMenu = document.querySelectorAll("#btnftmenu");
let allftMenuSize = document.querySelectorAll(".menuList");
let svgftMenu = document.querySelectorAll("#btnftmenu svg");
var etatftMenu=[false, false, false, false]
for(let i=0; i<allBtnftMenu.length; i++){
  allftMenu[i].style.transition= "0.9s display ease-in-out";
  allBtnftMenu[i].addEventListener('click', function(){
    etatftMenu[i]= !etatftMenu[i];
    if(etatftMenu[i]===true){
      allftMenu[i].style.display="flex";
      allftMenuSize[i].style.height="max-content";
    
      svgftMenu[i].style.transform = "rotate(180deg)"
      svgftMenu[i].style.transition = "0.2s transform ease-in-out" 
    }
    else{
      allftMenu[i].style.display="none";
      allftMenuSize[i].style.height="30px";
      svgftMenu[i].style.transform = "rotate(0deg)"
      svgftMenu[i].style.transition = "0.2s transform ease-in-out" 
    }
  })
}
