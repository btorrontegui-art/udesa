let email = localStorage.getItem("email");
let menu = document.querySelector(".registro");

if (email != null) {
    menu.innerHTML = `<li><a href="./index.html" class="pos">Home</a></li>
    <li class="pos">Bienvenido: ${email}</li>
    <li><a href="./index.html" class="pos logout">logout</a></li>`;
}