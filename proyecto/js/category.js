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

let parametrosCategoria = new URLSearchParams(location.search);
let categoriaElegida = parametrosCategoria.get("category");

let tituloCategorias = document.querySelector(".productos-destacados h1");
tituloCategorias.innerText = categoriaElegida;
 

