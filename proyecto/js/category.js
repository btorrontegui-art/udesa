let listaCategorias = document.querySelector('.seccion ul');

fetch("https://dummyjson.com/products/category-list")
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);

    let categorias = '';

    for (let i = 0; i < data.length; i++) {
        categorias += `<li>
        <a href="category.html?category=${data[i]}" class="categorias">${data[i]}</a>
        </li>`;
    }
    listaCategorias.innerHTML = categorias;
})
.catch(function (error) {
    console.log("Error:", error);
});

let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let categoriaElegida = queryStringObj.get("category");

let tituloCategorias = document.querySelector("#titulo-categorias");
let seccionProductos = document.querySelector(".productos-destacados");

tituloCategorias.innerText = categoriaElegida;

    fetch(`https://dummyjson.com/products/category/${categoriaElegida}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        let productos = '';

        for (let i = 0; i < data.products.length; i++) {
            productos += `<article>
                <img src="${data.products[i].thumbnail}" class="tabla" alt="${data.products[i].title}">
                <h2>${data.products[i].title}</h2>
                <p>${data.products[i].description}</p>
                <p>$${data.products[i].price}</p>
                <a href="product.html?product=${data.products[i].id}" class="ver-mas">Ver más</a>
            </article>`;
        }
        seccionProductos.innerHTML += productos;
    })
    .catch(function (error) {
        console.log("Error:", error);
    });
let formularioBuscador = document.querySelector(".buscador");
let campoBusqueda = document.querySelector(".buscador input");
let mensajeBuscador = document.querySelector(".mensaje-buscador");
 
formularioBuscador.addEventListener("submit", function (event) {
    if (campoBusqueda.value == "") {
        event.preventDefault();
        mensajeBuscador.innerText = "El campo de busqueda no puede estar vacio";
    } else if (campoBusqueda.value.length < 3) {
        event.preventDefault();
        mensajeBuscador.innerText = "El campo de busqueda debe tener al menos 3 caracteres";
    } else {
        this.submit();
}
});

 

