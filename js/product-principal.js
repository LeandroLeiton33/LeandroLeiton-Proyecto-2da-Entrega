const productoPrincipal = JSON.parse(localStorage.getItem("productoPrincipal"));
console.log("🚀 ~ file: product-principal.js:2 ~ productoPrincipal:", productoPrincipal)
const productosRelacionados = JSON.parse(localStorage.getItem("productosCargados"));
const paginaProducto = document.getElementById("pagina-producto");
const seccionRelacionados = document.getElementById("card-relacionados");



const pintarProductoPrincipal = (producto) => {
    if (producto) {
        const { imagen, titulo, precio, descripcion } = producto;
        paginaProducto.innerHTML = `
            <div class="col-md-6">
                <img id="imagen-producto" class="card-img-top mb-5 mb-md-0" src="${imagen}" alt="${titulo}" />
            </div>
            <div class="col-md-6">
                <h1 id="titulo-producto" class="display-5 fw-bolder">${titulo}</h1>
                <div class="fs-5 mb-5">
                    <p id="precio-producto">$${precio}</p>
                </div>
                <p id="descripcion-producto" class="lead">${descripcion}</p>
                <div class="d-flex">
                    <input class="form-control text-center me-3" id="inputQuantity" type="num" value="1" style="max-width: 3rem" />
                    <button class="btn btn-outline-light flex-shrink-0" type="button">
                        <i class="bi-cart-fill me-1"></i>
                        Agregar al carrito
                    </button>
                </div>
            </div>`;
    }
};

pintarProductoPrincipal(productoPrincipal);

const productosRelacionadosFiltrados = productosRelacionados.filter(prod => prod.id !== productoPrincipal.id);

productosRelacionadosFiltrados.forEach((prod) => {
    const article = document.createElement("article");
    article.id = "card-producto";
    article.classList.add("card");

    article.innerHTML = `
        <div class="card-header">
            <figure class="tortugas">
                <img src="${prod.imagen}">
            </figure>
        </div>

        <div class="card-main">
            <h2>${prod.titulo}</h2>
            <div class="card-description">
                <p>${prod.descripcion}</p>
            </div>

            <div class="card-prices">
                <div class="card-fecha">${prod.fecha}</div>
                <div class="card-price">$${prod.precio}</div>
            </div>
        </div>

        <div class="card-footer">
            <button class="button" onclick="idProductoPrincipal('${prod.id}')">
                <span class="button-content"><a href="/pages/pagina-producto.html">Ver detalles</a></span>
            </button>
            <button class="button">
                <span class="button-content">Comprar</span>
            </button>
        </div>`;

    seccionRelacionados.appendChild(article);
});



