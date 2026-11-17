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
let terminoBuscado = queryStringObj.get("search");

let tituloResultados = document.querySelector("#titulo-resultados");
let seccionResultados = document.querySelector(".productos-destacados");
let mensajeSinResultados = document.querySelector(".sin-resultados");

tituloResultados.innerText = `Resultados de búsqueda para: ${terminoBuscado}`;

fetch (`https://dummyjson.com/products/search?q=${terminoBuscado}`)
.then (function (response) {
    return response.json();
})
.then (function (data) {
    if (data.products.length > 0) {
        mostrarProductos(data.products);
    } else {
       
        fetch (`https://dummyjson.com/products/category/${terminoBuscado.toLowerCase()}`)
        .then (function (response) {
            return response.json();
        })
        .then (function (data) {
            if (data.products.length > 0) {
                mostrarProductos(data.products);
            } else {
                mensajeSinResultados.innerText = `No hay resultados para el término: ${terminoBuscado}`;
            }
        });
    }
})
.catch (function (error) {
    console.log("Error:", error);
});


function mostrarProductos(lista) {
    let productos = '';

    for (let i = 0; i < lista.length; i++) {
        productos += `<article>
            <img src="${lista[i].thumbnail}" class="tabla" alt="${lista[i].title}">
            <h2>${lista[i].title}</h2>
            <p>${lista[i].description}</p>
            <p>$${lista[i].price}</p>
            <a href="product.html?product=${lista[i].id}" class="ver-mas">Ver más</a>
        </article>`;
    }
    seccionResultados.innerHTML += productos;
}

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
