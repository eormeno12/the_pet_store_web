const ClientForm = () => {
    const view = `
    <div class="container">
        <form  action="http://localhost/dogs_web/postCliente.php" method="post">
            <div class="form-group">
            <label for="DNI">DNI</label>
            <input type="text" class="form-control" id="DNI" name="DNI" placeholder="Ingrese el DNI del cliente">
            </div>
            <div class="form-group">
                <label for="Nombre">Nombre</label>
                <input type="text" class="form-control" id="Nombre" name="Nombre" placeholder="Ingrese el nombre del cliente">
            </div>
            <div class="form-group">
                <label for="Apellido">Apellido</label>
                <input type="text" class="form-control" id="Apellido" name="Apellido" placeholder="Ingrese el apellido del cliente">
            </div>
            <div class="form-group">
                <label for="Raza">Raza de Perro</label>
                <input type="text" class="form-control" id="Raza" name="Raza" placeholder="Ingrese la raza del perro del cliente">
            </div>
            <div class="form-group">
                <label for="Direccion">Dirección</label>
                <input type="text" class="form-control" id="Direccion" name="Direccion" placeholder="Ingrese la dirección del cliente">
            </div>
            <button type="submit" class="btn btn-primary">Insertar</button>
        </form>
    </div>  
    `;

    return view;
}

export default ClientForm;