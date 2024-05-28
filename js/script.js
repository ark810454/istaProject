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
  var sectionS = document.querySelectorAll("#about,#mension, #actu,#revue, #DG,#rx")
  let mension = document.querySelectorAll(".section")
  let topBottom = document.querySelectorAll(".boxPlace")
  nav.classList.add("navBg2");
  document.addEventListener("scroll", function () {
  

    if (isScrolledIntoView(navScroll)) {
      nav.classList.add("navBg");
      nav.classList.remove("navBg2");
      console.log("active")
    }else{
      nav.classList.remove("navBg");
      nav.classList.add("navBg2");
      console.log("desactive")
    }
    
    })

       
       sectionS.forEach(element => {
        if(isScrolledIntoView(element)){
          element.classList.add("visible");
        }
       });
       
       if(isScrolledIntoView(topBottom[0])){
        topBottom[0].classList.add("topBottom");
      }
      if(isScrolledIntoView(topBottom[1])){
        topBottom[1].classList.add("topBottom2");
      }
      if(isScrolledIntoView(mension[0])){
        mension[0].classList.add("topBottom");
      }
      if(isScrolledIntoView(mension[1])){
        mension[1].classList.add("topBottom2");
      }
      if(isScrolledIntoView(mension[2])){
        mension[2].classList.add("topBottom3");
      }
      if(isScrolledIntoView(document.querySelector(".rightR"))){
        document.querySelector(".rightR").classList.add("visible")
      }
      
    

let btnOpenenu = document.querySelectorAll(".btnOpenenu")
let menu = document.querySelector(".links")
let shg = false
btnOpenenu[1].style.display="none";
btnOpenenu[0].addEventListener('click', (e)=>{
  e.stopPropagation();
  shg = true
  btnOpenenu[0].style.display="none";
  btnOpenenu[1].style.display="flex";
  menu.classList.remove("closeMenu");
  menu.classList.add("openMenu");
})
window.addEventListener('click', ()=>{
  shg===false
  if(shg===true){
  btnOpenenu[1].style.display="none";
  btnOpenenu[0].style.display="flex";
  menu.classList.remove("openMenu");
  menu.classList.add("closeMenu"); }
  
})
btnOpenenu[1].addEventListener('click', (e)=>{
  e.stopPropagation();
  shg=false
  btnOpenenu[1].style.display="none";
  btnOpenenu[0].style.display="flex";
  menu.classList.remove("openMenu");
  menu.classList.add("closeMenu");
})
menu.addEventListener('click', (e)=>{
  e.stopPropagation()
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
 var mediaQuery = window.matchMedia("(max-width: 991px)");
const link1 = document.querySelectorAll('#link1 a');
const link11 = document.querySelectorAll('#link1');
const items1 = document.querySelectorAll('#items1');
const caretbottom = document.querySelectorAll('.caret_bottom');



  
      function handleMediaQueryChange(mediaQuery) {
        
        if (mediaQuery.matches) {
         var etatmenu= new Array(link1.length).fill(false);
for(let i =0; i<link1.length; i++){
  items1[i].classList.remove("items1Show");
  items1[i].classList.add("items1Hide");
link1[i].addEventListener('click', ()=>{
etatmenu[i] = ! etatmenu[i]
if(etatmenu[i]===true){
  items1[i].classList.add("items1Show");
  items1[i].classList.remove("items1Hide");
  caretbottom[i].style.transform = "rotate(180deg)"
caretbottom[i].style.transition = "0.2s transform ease-in-out" 
}else{
  items1[i].classList.remove("items1Show");
  items1[i].classList.add("items1Hide");
  caretbottom[i].style.transform = "rotate(0deg)"
caretbottom[i].style.transition = "0.2s transform ease-in-out" 
}
})}
        }
        else {
          for(let i =0; i<link11.length; i++){
            items1[i].classList.remove("items1Show");
  items1[i].classList.add("items1Hide");
link11[i].addEventListener('mouseover', function() {
  items1[i].classList.add("items1Show");
  items1[i].classList.remove("items1Hide");
    caretbottom[i].style.transform = "rotate(180deg)"
caretbottom[i].style.transition = "0.2s transform ease-in-out" 
});

link11[i].addEventListener('mouseleave', function() {
  if (!items1[i].matches(':hover')) {
    items1[i].classList.remove("items1Show");
  items1[i].classList.add("items1Hide");
    caretbottom[i].style.transform = "rotate(0deg)"
caretbottom[i].style.transition = "0.2s transform ease-in-out" 
  }
});}
        }
      
      }
        handleMediaQueryChange(mediaQuery);

// Ajouter un écouteur d'événement pour gérer les changements d'état du media query
mediaQuery.addListener(handleMediaQueryChange);
    
 




let allftMenu = document.querySelectorAll("#ftmenu");
let allBtnftMenu = document.querySelectorAll("#btnftmenu");
let allftMenuSize = document.querySelectorAll(".menuList");
let svgftMenu = document.querySelectorAll("#btnftmenu svg");
var etatftMenu=[false, false, false, false]
for(let i=0; i<allBtnftMenu.length; i++){
  allftMenu[i].classList.remove("items1Show");
  allftMenu[i].classList.add("items1Hide");
  allBtnftMenu[i].addEventListener('click', function(){
    etatftMenu[i]= !etatftMenu[i];
    if(etatftMenu[i]===true){
      allftMenu[i].classList.add("items1Show");
      allftMenu[i].classList.remove("items1Hide");
      allftMenuSize[i].style.height="max-content";
    
      svgftMenu[i].style.transform = "rotate(180deg)"
      svgftMenu[i].style.transition = "0.2s transform ease-in-out" 
    }
    else{
      allftMenu[i].classList.remove("items1Show");
  allftMenu[i].classList.add("items1Hide");
      allftMenuSize[i].style.height="30px";
      svgftMenu[i].style.transform = "rotate(0deg)"
      svgftMenu[i].style.transition = "0.2s transform ease-in-out" 
    }
  })
}





