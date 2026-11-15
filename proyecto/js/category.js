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

if (categoriaElegida == null || categoriaElegida == "") {
    tituloCategorias.innerText = "Categoría no seleccionada";
    seccionProductos.innerHTML += "<p>Elegí una categoría del menú para ver sus productos.</p>";
} else {
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

        if (data.products.length == 0) {
            productos = "<p>No hay productos en esta categoría.</p>";
        }

        seccionProductos.innerHTML += productos;
    })
    .catch(function (error) {
        console.log("Error:", error);
    });
}

 

