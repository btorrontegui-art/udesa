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
let idProducto = queryStringObj.get("product");

let enlaceCategoria = document.querySelector(".ruta");
let imagenProducto = document.querySelector(".tup");
let nombreProducto = document.querySelector(".info-producto h1");
let marcaProducto = document.querySelector(".marca-producto");
let precioProducto = document.querySelector(".precios");
let stockProducto = document.querySelector(".unidades");
let descripcionProducto = document.querySelector(".descripcion");
let listaTags = document.querySelector(".tags");
let listaReviews = document.querySelector(".lista-reviews");

fetch (`https://dummyjson.com/products/${idProducto}`)

.then(function (response) {
        return response.json();
    })
    .then(function (data) {

        let marca = data.brand

        nombreProducto.innerText = data.title;
        imagenProducto.src = data.thumbnail;
        imagenProducto.alt = data.title;
        marcaProducto.innerText = `Marca: ${marca}`;
        precioProducto.innerText = `$${data.price}`;
        stockProducto.innerText = `Stock: ${data.stock} unidades`;
        descripcionProducto.innerText = data.description;
        enlaceCategoria.innerText = `Categoría: ${data.category}`;
        enlaceCategoria.href = `category.html?category=${data.category}`;

        let tags = "";

        for (let i = 0; i< 3; i++) {
            tags += `<li>
            #${data.tags[i]} 
                </li>`;
        }

        listaTags.innerHTML = tags;
        
        let reviews = "";

        for (let i = 0; i < data.reviews.length; i++) {
            reviews += `<article>
                    <p class = "rating"> Rating: ${data.reviews[i].rating} </p>
                    <p>${data.reviews[i].comment}</p>
                    <p>${data.reviews[i].date}</p>
                    <p>${data.reviews[i].reviewerName}</p>
                </article>`;
        }

        listaReviews.innerHTML = reviews;
    })

    .catch(function (error) {
        console.log("Error:", error);
    });