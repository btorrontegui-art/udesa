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


let primeraCategoria = "smartphones";
let segundaCategoria = "groceries";

let primerTitulo = document.querySelector(".productos-destacados h1");
let segundoTitulo = document.querySelector(".productos-vendidos h1");

primerTitulo.innerText = primeraCategoria;
segundoTitulo.innerText = segundaCategoria;


let primeraSeccion = document.querySelector(".productos-destacados");
let segundaSeccion = document.querySelector(".productos-vendidos");


fetch ("https://dummyjson.com/products/category/smartphones")
.then (function (response) {
    return response.json();
})

.then (function(data) {
    console.log(data);

let productos = " ";

for (let i=0; i< 10; i++) {
    productos += `<article>
    <img src="${data.products[i].thumbnail}" class="tabla">
    <h2>${data.products[i].title}</h2>
    <p>${data.products[i].description}</p>
    <p>$${data.products[i].price}</p>
    <a href="product.html?product=${data.products[i].id}" class="ver-mas">Ver mas</a>
    </article>`;
}
    primeraSeccion.innerHTML += productos;

})

.catch (function (error) {
    console.log("Error:", error);
});

fetch ("https://dummyjson.com/products/category/groceries")
.then (function (response) {
    return response.json();
})

.then (function(data) {
    console.log(data);

let productos = " ";

for (let i=0; i< 10; i++) {
    productos += `<article>
    <img src="${data.products[i].thumbnail}" class="tabla">
    <h2>${data.products[i].title}</h2>
    <p>${data.products[i].description}</p>
    <p>$${data.products[i].price}</p>
    <a href="product.html?product=${data.products[i].id}" class="ver-mas">Ver mas</a>
    </article>`;
}
    segundaSeccion.innerHTML += productos;

})

.catch (function (error) {
    console.log("Error:", error);
});