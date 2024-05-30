// contact control submission
let names=document.querySelectorAll(".formContatctContainer form input[type=text]")
let formComponent=document.querySelector(".formContatctContainer form")
let emailComponent=document.querySelector("#userEmail")
names.forEach(name=>{
    name.addEventListener('keydown',function(e){
        if(/\d/.test(e.key)){
            let errorCont=name.nextElementSibling
            if(this.id==="userName"){
                setTimeout(()=>{
                    errorCont.textContent=""
                },3000)
                errorCont.textContent="Votre nom ne dois pas contenir de chiffre"
            }
            if(this.id==="userLastname"){
                setTimeout(()=>{
                    errorCont.textContent=""
                },3000)
                errorCont.textContent="Votre prenom ne dois pas contenir de chiffre"
            }
            console.log(this.id)
        }
    })
})

formComponent.addEventListener('submit',function(e){
    names.forEach(name=>{
        if(/\d/.test(name.value)){
            e.preventDefault()
            let errorCont=name.nextElementSibling
            errorCont.textContent="Votre nom ne dois pas contenir de chiffre"
            createAlertMessage('div')
        }
        if(name.value==='' || name.value.trim()===''){
            e.preventDefault()
            let errorCont=name.nextElementSibling
            errorCont.textContent="Votre nom ne dois pas contenir de l'espace   "
            createAlertMessage('div')
        }
    })
    if(emailComponent.value===''|| emailComponent.value.trim()===''){
        e.preventDefault()
        let errorCont=emailComponent.nextElementSibling
        errorCont.textContent="Votre nom ne dois pas contenir de l'espace"
        createAlertMessage('div')
    }

})

function createAlertMessage(){
    let icon=`
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#8a0101f1" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
     <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
    </svg>
    `
    let el=document.createElement('div')
    el.setAttribute('class','errorMessage')
    el.innerHTML=`${icon} Vos cordonnées ont des erreurs`
    let styleAfter = window.getComputedStyle(el,'::after').getPropertyValue('width')
    setTimeout(()=>{
        el.style.display="none"
        document.querySelectorAll('.form-error').forEach(error=>{
            error.textContent=""
        })
        clearInterval(t)
    },10000)
    document.body.appendChild(el)
    console.log(styleAfter)
    let i=0
    let t=setInterval(()=>{
        i=i+10
        styleAfter=`${i}%`
    },1000)
}