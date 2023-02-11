let nameInput = document.getElementById("nameInput")
let emailInput = document.getElementById("emailInput")
let messageInput = document.getElementById("textArea")
let nameAlert = document.getElementById("nameAlert")
let emailAlert = document.getElementById("emailAlert")
let messageAlert = document.getElementById("messageAlert")
let sendBtn = document.getElementById("sendBtn")
let nameInputTouched = false;
let emailInputTouched = false;
let messageInputTouched = false;
let time = setInterval(()=>{
    let finishTime = new Date("Jan 1, 2024 00:00:00").getTime()
    let now = new Date().getTime()
    let spaceBetween = finishTime - now
    let days = Math.floor(spaceBetween / (1000*60*60*24))
    let hours = Math.floor((spaceBetween % (1000*60*60*24))/(1000*60*60))
    let minutes = Math.floor((spaceBetween % (1000*60*60))/(1000*60))
    let seconds = Math.floor((spaceBetween % (1000*60))/(1000))
    document.getElementById("days").innerHTML = `${days} D`
    document.getElementById("hours").innerHTML = `${hours} H`
    document.getElementById("minutes").innerHTML = `${minutes} M`
    document.getElementById("seconds").innerHTML = `${seconds} S`
    if(spaceBetween < 0){
        clearInterval(time)
        document.getElementById("deadTime").classList.add("d-none")
        document.getElementById("expired").classList.replace("d-none","d-block")
    } else{
        document.getElementById("deadTime").classList.replace("d-none","d-block")
        document.getElementById("expired").classList.replace("d-block","d-none")
    }
})
document.getElementById("textArea").addEventListener("keyup", _=>{
    validMessage()
    let length = messageInput.value.length
    let maxLength = 100
    let amountLeft = maxLength - length
    if(amountLeft <= 0){
        document.getElementById("reamining").classList.add("d-none")
        document.getElementById("length").innerHTML = "Your available character finished"
    } else{
        document.getElementById("reamining").classList.remove("d-none")
        document.getElementById("length").innerHTML = amountLeft
    }
})
function validName(){
    return /^[A-Z][a-z]{2,10}$/.test(nameInput.value)
}
function validEmail(){
    return /\@[a-z]{3,10}\.[a-z]{2,3}$/.test(emailInput.value)
}
function validMessage(){
    return /^[A-Za-z ]{3,100}$/.test(messageInput.value)
}
nameInput.addEventListener("focus", _=> nameInputTouched = true)
emailInput.addEventListener("focus", _=> emailInputTouched = true)
messageInput.addEventListener("focus", _=> messageInputTouched = true)
function validInputs(){
    if(nameInputTouched){
        if(validName()){
            nameInput.classList.add("is-valid")
            nameInput.classList.remove("is-invalid")
            nameAlert.classList.replace("d-block","d-none")
        } else{
            nameInput.classList.add("is-invalid")
            nameInput.classList.remove("is-valid")
            nameAlert.classList.replace("d-none","d-block")
        }
    }
    if(emailInputTouched){
        if(validEmail()){
            emailInput.classList.add("is-valid")
            emailInput.classList.remove("is-invalid")
            emailAlert.classList.replace("d-block","d-none")
        } else{
            emailInput.classList.add("is-invalid")
            emailInput.classList.remove("is-valid")
            emailAlert.classList.replace("d-none","d-block")
        }
    }
    if(messageInputTouched){
        if(validMessage()){
            messageInput.classList.add("is-valid")
            messageInput.classList.remove("is-invalid")
            messageAlert.classList.replace("d-block","d-none")
        } else{
            messageInput.classList.add("is-invalid")
            messageInput.classList.remove("is-valid")
            messageAlert.classList.replace("d-none","d-block")
        }
    }
    if(validName() && validEmail() && validMessage()){
        sendBtn.removeAttribute("disabled")
    } else{
        sendBtn.setAttribute("disabled", true)
    }
}
