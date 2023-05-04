import getData from "../utils/getData";

const Home = async () => {
    const products = await getData("http://localhost/dogs_web/postProducto.php");

    const view = `
        <div class="products">
            ${products.map(product => 
                `<article class="product-item">
                    <a href="#/${product.ID}">
                        <img src="${product.ImageURL}" alt="${product.NombreP}">
                        <div class="product-info">
                            <h2>${product.NombreP}</h2>
                            <p>${product.Precio}</p>
                        </div>
                    </a>
                </article>`
            ).join('')}
        </div>
    `;

    return view;
}

export default Home;