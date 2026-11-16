let emailGuardado = localStorage.getItem("email");


if (emailGuardado != null) {
    let listaMenu = document.querySelector(".registro");

    listaMenu.innerHTML = `<li class="item-saludo"></li>
        ${listaMenu.innerHTML}
        <li class="item-logout"><a href="#" class="pos">logout</a></li>`;
        
let itemSaludo = document.querySelector(".item-saludo");
let itemLogin = document.querySelector(".item-login");
let itemRegistro = document.querySelector(".item-registro");

    itemSaludo.innerText = `Bienvenido: ${emailGuardado}`;
    itemLogin.style.display = "none";
    itemRegistro.style.display = "none";
}