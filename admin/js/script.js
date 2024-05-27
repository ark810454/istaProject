/* navigation par urls */
const url = new URL(window.location.href);
const urlParams = new URLSearchParams(url.search);
var sectionS = document.querySelectorAll("#home,#revues, #espace,#actu, #message")
var linkUrl = ["revue_Sc", "Espace_Doc", "actu", "message"];
var btnUrl = document.querySelectorAll(".navlinks a")
if (urlParams.has("pg")) {
const page = urlParams.get('pg');


  for(let i = 0; i<sectionS.length; i++){
    if(page==='revues_Sc'){
      sectionS[0].style.display="none";
      sectionS[1].style.display="flex";
      btnUrl[1].classList.add("active")
      btnUrl[0].classList.remove("active")
      
    } if(page==='espace_Doc'){
      sectionS[0].style.display="none";
      sectionS[2].style.display="flex"
      btnUrl[2].classList.add("active")
      btnUrl[0].classList.remove("active")
      
    } if(page==='actu'){
      sectionS[0].style.display="none";
      sectionS[3].style.display="flex"
      btnUrl[3].classList.add("active")
      btnUrl[0].classList.remove("active")
      
    } if(page==='message'){
      sectionS[0].style.display="none";
      sectionS[4].style.display="flex"
      btnUrl[4].classList.add("active")
      btnUrl[0].classList.remove("active")
    }

}}




/* fin urls */


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

let btnOpenenu = document.querySelector(".btnOpenenu")
let btnOpenenu2 = document.querySelectorAll(".btnOpenenu2")
let menu = document.querySelector(".navigation")
let logo = document.querySelector(".logo img")
let logotext = document.querySelector(".logo a")
let links = document.querySelectorAll(".navigation span")
let linkss = document.querySelector(".links")
let linkssvg = document.querySelectorAll(".navlinks a")
let etatmenu = false;
btnOpenenu.addEventListener('click', ()=>{
  etatmenu = !etatmenu
  if(etatmenu===true){menu.style.width = "64px";
    function fff(){
      
    logo.style.width="40px";
    logo.style.height="40px";
    logotext.style.display="none"
    for (let i=0; i<links.length; i++){
    links[i].style.display="none";
    linkss.style.width="95%";
    }
    
    for (let i=0; i<linkssvg.length; i++){
      linkssvg[i].style.paddingLeft="12px";
      }
    }setTimeout(fff, 300) 
  }else{menu.style.width = "300px";
    function fff(){
       
    logo.style.width="auto";
    logo.style.height="auto";
    logotext.style.display="flex"
    for (let i=0; i<links.length; i++){
    links[i].style.display="flex";
    linkss.style.width="80%";
    }
    
    for (let i=0; i<linkssvg.length; i++){
      linkssvg[i].style.paddingLeft="10%";
      }
   
    }
    setTimeout(fff, 300) 
  }
  
})


let shg = false
btnOpenenu2[1].style.display="none";
btnOpenenu2[0].addEventListener('click', (e)=>{
  e.stopPropagation();
  shg = true
  btnOpenenu2[0].style.display="none";
  btnOpenenu2[1].style.display="flex";
  menu.classList.remove("closeMenu");
  menu.classList.add("openMenu");
})
window.addEventListener('click', ()=>{
  shg===false
  if(shg===true){
  btnOpenenu2[1].style.display="none";
  btnOpenenu2[0].style.display="flex";
  menu.classList.remove("openMenu");
  menu.classList.add("closeMenu"); }
  
})
btnOpenenu2[1].addEventListener('click', (e)=>{
  e.stopPropagation();
  shg=false
  btnOpenenu2[1].style.display="none";
  btnOpenenu2[0].style.display="flex";
  menu.classList.remove("openMenu");
  menu.classList.add("closeMenu");
})
menu.addEventListener('click', (e)=>{
  e.stopPropagation()
})


let viewToolTip = document.querySelectorAll("#viewToolTip")
let tooltipAcount = document.querySelectorAll("#items")
let closeTool = document.querySelectorAll(".close")
var rememberState = [false,false]
for (let i=0; i<viewToolTip.length; i++){
  tooltipAcount[i].classList.add("hide");
    tooltipAcount[i].classList.remove("show");
window.addEventListener('click', function(){

  rememberState[i] = false
  if(rememberState[i] === false){
    tooltipAcount[i].classList.add("hide");
    tooltipAcount[i].classList.remove("show");
  }
})


tooltipAcount[i].addEventListener('click', function(e){
  e.stopPropagation();
  rememberState[i] = true
  if(rememberState[i] === true){
    tooltipAcount[i].classList.add("show");
    tooltipAcount[i].classList.remove("hide");
  }
})
for(let j=0; j< closeTool.length; j++){
closeTool[j].addEventListener('click', function(e){
  e.stopPropagation();
  rememberState[i] = true
  if(rememberState[i] === true){
    tooltipAcount[i].classList.add("hide");
    tooltipAcount[i].classList.remove("show");
  }
})
}
viewToolTip[i].addEventListener('click', function(e){
  e.stopPropagation();
  document.getElementById("actueh1").textContent="Ajouter une nouvelle actualité"
  rememberState[i] = !rememberState[i]
  if(rememberState[i] === true){
    tooltipAcount[i].classList.add("show");
    tooltipAcount[i].classList.remove("hide");
  }
  else{
    tooltipAcount[i].classList.add("hide");
    tooltipAcount[i].classList.remove("show");
  }
  


})

let updateBtn = document.querySelectorAll(".svg3");
updateBtn.forEach(element => {
  element.addEventListener('click', (e)=>{
    e.stopPropagation();
    rememberState[i] = !rememberState[i]
    if(rememberState[i] === true){
    tooltipAcount[tooltipAcount.length -1].classList.add("show");
    tooltipAcount[tooltipAcount.length -1].classList.remove("hide");
    document.getElementById("actueh1").textContent="Modifier cette actualité ?"
    }
  })
});
} 
  
let selectbtn = document.querySelectorAll("#selectbtn")
let delbtn = document.querySelectorAll("#del")
let annulerbtn = document.querySelectorAll("#annuler")
let check = document.querySelectorAll("#selectCheck")
let del = document.querySelectorAll(".svg")
let popup = document.querySelectorAll(".popupDel")
let closePopup = document.querySelectorAll(".closes")
let nbrselect = 0
/* let tab = new Array(sup.length).fill(false); */
for(let i=0; i< popup.length; i++){
popup[i].classList.add("hide");
popup[i].classList.remove("show");}
 for(let j=0; j<closePopup.length; j++){
for(let i=0; i< del.length; i++){
  del[i].addEventListener('click', ()=>{
    popup[j].classList.add("show");
popup[j].classList.remove("hide");
    document.querySelectorAll("#nbr")[j].textContent= "Supprimer un élément ?";
  })}
 
    closePopup[j].addEventListener('click', ()=>{
      popup[j].classList.add("hide");
  popup[j].classList.remove("show");
    })
 

  document.querySelectorAll(".annuler")[j].addEventListener('click', ()=>{
    popup[j].classList.add("hide");
popup[j].classList.remove("show");
  })
 }
for(let k=0; k<selectbtn.length; k++){
selectbtn[k].addEventListener('click', ()=>{
  annulerbtn[k].style.display="flex"
for(let i=0; i< check.length; i++){
  del[k].addEventListener('click', ()=>{
    popup.classList.add("show");
popup.classList.remove("hide");
    document.getElementById("nbr").textContent= "Supprimer un élément ?";
  })
  check[i].style.display="flex";
  check[i].addEventListener('change', ()=>{
    
    if(check[i].checked){
      nbrselect = nbrselect+1
      selectbtn[k].textContent="Selectionné("+nbrselect+")";
      delbtn[k].style.display="flex"
       
     
    }else{
      nbrselect = nbrselect-1
      selectbtn[k].textContent="Selectionné("+nbrselect+")";
    }

    delbtn[k].addEventListener('click', ()=>{
      popup[k].classList.add("show");
popup[k].classList.remove("hide");
      document.querySelectorAll("#nbr")[k].textContent= "Supprimer "+nbrselect+" éléments ?";
    })
    closePopup[k].addEventListener('click', ()=>{
      popup[k].classList.add("hide");
popup[k].classList.remove("show");
    })

    document.querySelectorAll(".annuler")[k].addEventListener('click', ()=>{
      popup[k].classList.add("hide");
popup[k].classList.remove("show");
    })
    
  })
 
}
selectbtn[k].textContent="Selectionné("+nbrselect+")";
})
selectbtn[k].textContent="Selectionner";

annulerbtn[k].addEventListener('click', ()=>{

  nbrselect=0;
  for(let j=0; j< check.length; j++){
  
  selectbtn[k].textContent="Selectionner";
  delbtn[k].style.display="none"
  annulerbtn[k].style.display="none"
    check[j].style.display="none";
    check[j].checked=false;
  }

  /* const xhr = new XMLHttpRequest();
  xhr.open('GET', 'index.html', true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState ===4 && xhr.status ===200) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(xhr.responseText, 'text/html');
      const newContainer = doc.querySelector(".revueContent ul");selectbtn.innerHTML="Selectionner";
      if(newContainer){
          revue.innerHTML = newContainer.innerHTML;
          
      }else{
        console.error('Erreur de l actualisation')
      }
    
    
    }
  };
  xhr.onerror = function() {
    console.error('erreur réseau lors de l')
  };
  xhr.send(); */
})}

document.querySelector("#message #tout").textContent ="Tout("+ document.querySelectorAll("#message .svg").length +")";

document.querySelector(".back").addEventListener('click', ()=>{
  document.querySelector(".bgBlur").style.display="none"
})
let mess = document.querySelectorAll("#openMess");
for(let i =0; i<mess.length; i++){
  mess[i].addEventListener('click', ()=>{
    document.querySelector(".bgBlur").style.display="flex"
  })
}

let btnSearch = document.querySelector(".dismissBtnSearch");
let Search = document.querySelector(".champSearch2");
let section = document.querySelectorAll("section")
etatSearch = false
btnSearch.addEventListener('click', (e)=>{
  e.stopPropagation();
  etatSearch = !etatSearch
  if(etatSearch === true){
    Search.classList.add("ss")  
    section.forEach(element => {
      element.classList.add("ss")
    });
  }else{
    Search.classList.remove("ss")
    section.forEach(element => {
      element.classList.remove("ss")
    });
  }
  
})