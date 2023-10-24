const productosCard = JSON.parse(localStorage.getItem("productosCargados")) || [];
const cardContainer = document.getElementById("card-container");

productosCard.forEach((prod) => {
    cardContainer.innerHTML += `
        <article id="card-producto" class="card">
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
            </div>
        </article>
    `;
});

const idProductoPrincipal = (idAPintar) => {
    const productoPrincipal = productosCard.find((producto) => producto.id === idAPintar);
    
    // Almacena el producto principal en localStorage
    localStorage.setItem("productoPrincipal", JSON.stringify(productoPrincipal));

};


