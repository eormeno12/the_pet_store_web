import getHash from "../utils/getHash";
import getData from "../utils/getData";

const Product = async () => {
    const id = await getHash()
    const product = await getData("http://localhost/dogs_web/postProducto.php", id)
    const view = `
        <section class="products-inner">
            <article class="product-card">
                <img src="${product.ImageURL}" alt="${product.NombreP}">
                <h2>${product.NombreP}</h2>
            </article>
            <article class="product-card">
                <h3>ID: <span>${product.ID}</span></h3>
                <h3>Nombre: <span>${product.NombreP}</span></h3>
                <h3>Descripción: <span>${product.Descripcion}</span></h3>
                <h3>Stock: <span>${product.Stock}</span></h3>
                <h3>Precio: <span>S/. ${product.Precio}</span></h3>
                <h3>Calificación: <span>${product.Calificacion}</span></h3>
            </article>
        </section>
    `;

    return view;
}

export default Product;