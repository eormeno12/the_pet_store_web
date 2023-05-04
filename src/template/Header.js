const Header = () => {
    const view = `
        <div class="header-main">
            <div class="header-logo">
                <a href="/">
                    <img src="https://cdn.shopify.com/s/files/1/0615/0579/8392/files/The-Pet-Store-2-Colors.png?v=1656138057" alt="Store logo">
                </a>
            </div>
            <nav class="header-nav">
                <a href="#/clients">
                    Ver Clientes
                </a>
                <a href="#/orders">
                    Ver Compras
                </a>
                <a href="#/add-product">
                    Agregar Producto
                </a>
                <a href="#/add-client">
                    Agregar Cliente
                </a>
                <a href="#/add-order">
                    Hacer Pedido
                </a>
            </nav>
        </div>
    `;

    return view;
}

export default Header;