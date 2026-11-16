let formulario = document.querySelector(".formulario-login");
let campoEmail = document.querySelector("#email");
let campoPassword = document.querySelector("#password");
let mensajeError = document.querySelector(".mensaje-error");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    if (campoEmail.value == "") {
        mensajeError.innerText = "El campo email es obligatorio";
    } else if (campoPassword.value == "") {
        mensajeError.innerText = "El campo contraseña es obligatorio";
    } else if (campoPassword.value.length < 6) {
        mensajeError.innerText = "La contraseña debe tener al menos 6 caracteres";
    } else {
        localStorage.setItem("email", campoEmail.value);
        this.submit();
    }
});
let formularioBuscador = document.querySelector(".buscador");
let campoBusqueda = document.querySelector(".buscador input");
let mensajeBuscador = document.querySelector(".mensaje-buscador");
 
formularioBuscador.addEventListener("submit", function (event) {

    if (campoBusqueda.value == "") {
        event.preventDefault();
        mensajeBuscador.innerText = "El campo de busqueda no puede estar vacio";
    } else if (campoBusqueda.value.length < 3) {
        event.preventDefault();
        mensajeBuscador.innerText = "El campo de busqueda debe tener al menos 3 caracteres";
    } else {
        this.submit();
}
});
