let emailGuardado = localStorage.getItem("email");

if (emailGuardado != null) {
    let itemSaludo = document.querySelector(".item-saludo");
    let itemLogout = document.querySelector(".item-logout");
    let itemLogin = document.querySelector(".item-login");
    let itemRegistro = document.querySelector(".item-registro");

    itemSaludo.innerText = `Bienvenido: ${emailGuardado}`;
    itemSaludo.style.display = "block";
    itemLogout.style.display = "block";
    itemLogin.style.display = "none";
    itemRegistro.style.display = "none";
}