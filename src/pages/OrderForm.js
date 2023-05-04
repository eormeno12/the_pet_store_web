const OrderForm = () => {
    const view = `
    <div class="container">
    <form  action="http://localhost/dogs_web/postCompra.php" method="post">
            <div class="form-group">
                <label for="Fecha">Fecha</label>
                <input type="date" class="form-control" id="Fecha" name="Fecha">
            </div>
            <div class="form-group">
                <label for="DNI">DNI</label>
                <input type="text" class="form-control" id="DNI" name="DNI" placeholder="Ingrese el DNI del cliente">
            </div>
            <div class="form-group">
                <label for="Metodo">Método de Pago</label>
                <input type="text" class="form-control" id="Metodo" name="Metodo" placeholder="Ingrese el método de pago">
            </div>
            <div class="form-group">
                <label for="Productos">Productos</label>
                <input type="text" class="form-control" id="Productos" name="Productos" placeholder="Ingrese los ID de los productos">
            </div>
            <div class="form-group">
                <label for="Total">Total</label>
                <input type="text" class="form-control" id="Total" name="Total" placeholder="Ingrese los precio total de los productos">
            </div>
            <button type="submit" class="btn btn-primary">Insertar</button>
        </form>
    </div>  
    `;

    return view;
}

export default OrderForm;