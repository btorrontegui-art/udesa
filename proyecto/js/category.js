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

let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let categoriaElegida = queryStringObj.get("category");

let tituloCategorias = document.querySelector(".productos-destacados h1");
tituloCategorias.innerText = categoriaElegida;

})
.catch (function (error) {
    console.log("Error:", error);
});


 

