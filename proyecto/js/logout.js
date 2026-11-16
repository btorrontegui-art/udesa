let linkLogout = document.querySelector(".logout");

if (linkLogout != null) {
    linkLogout.addEventListener("click", function (event) {
        event.preventDefault();

        localStorage.removeItem("email");

        let menu = document.querySelector(".registro");
        menu.innerHTML = `<li><a href="./index.html" class="pos">Home</a></li>
        <li class="item-login"><a href="./login.html" class="pos">Login</a></li>
        <li class="item-registro"><a href="./register.html" class="pos">Registro</a></li>`;
    });
}