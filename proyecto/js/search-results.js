let listaCategorias = document.querySelector('.seccion ul');

fetch ("https://dummyjson.com/products/category-list")
.then (function (response) {
    return response.json();
})
.then (function(data) {
    console.log(data);

let categorias = ' ';

for (let i=0; i< data.length; i++) {
    categorias += `<li>
    <a href="category.html?category=${data[i]}" class="categorias">${data[i]}</a>
    </li>`;
}
listaCategorias.innerHTML = categorias;
})
.catch (function (error) {
    console.log("Error:", error);
});

let formularioBuscador = document.querySelector(".buscador");
let campoBusqueda = document.querySelector(".buscador input");
let mensajeBuscador = document.querySelector(".mensaje-buscador");

formularioBuscador.addEventListener("submit", function (event) {
    event.preventDefault();
    if (campoBusqueda.value == "") {    
        mensajeBuscador.innerText = "El campo de busqueda no puede estar vacio";
    } else if (campoBusqueda.value.length < 3) {   
        mensajeBuscador.innerText = "El campo de busqueda debe tener al menos 3 caracteres";
    } else {
        this.submit();
}
});
