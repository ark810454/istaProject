
let viewToolTip = document.getElementById("viewToolTip")
let tooltipAcount = document.getElementById("items")
var rememberState = false

window.addEventListener('click', function(){

  rememberState = false
  if(rememberState === false){
    tooltipAcount.style.display = "none";
document.getElementById("caretbtn").style.transform = "rotate(0deg)"
document.getElementById("caretbtn").style.transition = "0.2s transform ease-in-out" 
  }
})

tooltipAcount.addEventListener('click', function(e){
  e.stopPropagation();
  rememberState = true
  if(rememberState === true){
    tooltipAcount.style.display="flex";

document.getElementById("caretbtn").style.transform = "rotate(180deg)"
document.getElementById("caretbtn").style.transition = "0.2s transform ease-in-out" 
  }
})
viewToolTip.addEventListener('click', function(e){
  e.stopPropagation();
  rememberState = !rememberState
  if(rememberState === true){
    tooltipAcount.style.display="flex";
document.getElementById("caretbtn").style.transform = "rotate(180deg)"
document.getElementById("caretbtn").style.transition = "0.2s transform ease-in-out" 
  }
  else{
    tooltipAcount.style.display = "none";
document.getElementById("caretbtn").style.transform = "rotate(0deg)"
document.getElementById("caretbtn").style.transition = "0.2s transform ease-in-out" 
  }
  


})

const link1 = document.getElementById('link1');
const items1 = document.getElementById('items1');
const caretbottom = document.querySelector('.caret_bottom')
link1.addEventListener('mouseover', function() {
    items1.style.display = 'flex';
    caretbottom.style.transform = "rotate(180deg)"
caretbottom.style.transition = "0.2s transform ease-in-out" 
});

link1.addEventListener('mouseleave', function() {
  if (!items1.matches(':hover')) {
    items1.style.display = 'none';
    caretbottom.style.transform = "rotate(0deg)"
caretbottom.style.transition = "0.2s transform ease-in-out" 
  }
});


const link2 = document.getElementById('link2');
const items2 = document.getElementById('items2');
const caretbottom2 = document.querySelector('.caret_bottom2')
link2.addEventListener('mouseover', function() {
    items2.style.display = 'flex';
    caretbottom2.style.transform = "rotate(180deg)"
caretbottom2.style.transition = "0.2s transform ease-in-out" 
});

link2.addEventListener('mouseleave', function() {
  if (!items2.matches(':hover')) {
    items2.style.display = 'none';
    caretbottom2.style.transform = "rotate(0deg)"
caretbottom2.style.transition = "0.2s transform ease-in-out" 
  }
});

const link3 = document.getElementById('link3');
const items3 = document.getElementById('items3');
const caretbottom3 = document.querySelector('.caret_bottom3')
link3.addEventListener('mouseover', function() {
    items3.style.display = 'flex';
    caretbottom3.style.transform = "rotate(180deg)"
caretbottom3.style.transition = "0.2s transform ease-in-out" 
});

link3.addEventListener('mouseleave', function() {
  if (!items3.matches(':hover')) {
    items3.style.display = 'none';
    caretbottom3.style.transform = "rotate(0deg)"
caretbottom3.style.transition = "0.2s transform ease-in-out" 
  }
});


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