let todoRegistro = document.querySelector(".tarjeta-login")
let campoEmail = document.querySelector("#email")
let campoPassword = document.querySelector("#password")
let campoPassword2 = document.querySelector("#password2")
let mensajeError = document.querySelector(".mensaje-error")
let mensajeError2 = document.querySelector(".mensaje-error2")
let mensajeError3 = document.querySelector(".mensaje-error3")

todoRegistro.addEventListener("submit", function (event) {
    event.preventDefault();

    mensajeError.innerText = "";
    mensajeError2.innerText = "";
    mensajeError3.innerText = "";
    let campoError = false;

    if (campoEmail.value == "") {
        mensajeError.innerText = "El campo de email es obligatorio";
        campoError= true;
    } 
    if (campoPassword.value == "") {
        mensajeError2.innerText = "El campo de contraseña es obligatorio";
        campoError= true;
    } else if (campoPassword.value.length < 6) {
        mensajeError2.innerText = "La contraseña debe tener al menos 6 caracteres";
        campoError= true;
    } 
    if (campoPassword.value != campoPassword2.value) {
        mensajeError3.innerText = "Las contraseñas no coinciden";
        campoError= true;
    }
    if  (campoError == false ) {
        this.submit();
    }
})