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

let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let lupa = queryStringObj.get("search");
let buscador = document.querySelector('.mensaje-buscador');

if (lupa == "") {
     buscador.innerText = "El campo de busqueda no puede estar vacio";
} else if (lupa != null && lupa.length< 3) {
    buscador.innerText = "El campo de busqueda debe tener al menos 3 caracteres";
}
