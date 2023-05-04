const ProductForm = () => {
    const view = `
    <div class="container">
        <form  action="http://localhost/dogs_web/postProducto.php" method="post">
            <div class="form-group">
            <label for="ID">ID</label>
            <input type="text" class="form-control" id="ID" name="ID" placeholder="Ingrese el ID del producto">
            </div>
            <div class="form-group">
                <label for="NombreP">Nombre</label>
                <input type="text" class="form-control" id="NombreP" name="NombreP" placeholder="Ingrese el nombre del producto">
            </div>
            <div class="form-group">
                <label for="Descripcion">Descripción</label>
                <textarea class="form-control" id="Descripcion" name="Descripcion" rows="3" placeholder="Ingrese la descripción del producto"></textarea>
            </div>
            <div class="form-group">
                <label for="Stock">Stock</label>
                <input type="text" class="form-control" id="Stock" name="Stock" placeholder="Ingrese el stock disponible">
            </div>
            <div class="form-group">
                <label for="Precio">Precio</label>
                <input type="text" class="form-control" id="Precio" name="Precio" placeholder="Ingrese el precio del producto">
            </div>
            <div class="form-group">
                <label for="Calificacion">Calificación</label>
                <input type="text" class="form-control" id="Calificacion" name="Calificacion" placeholder="Ingrese la calificación del producto">
            </div>
            <div class="form-group">
                <label for="ImageURL">URL de la imagen</label>
                <input type="text" class="form-control" id="ImageURL" name="ImageURL" placeholder="Ingrese la URL de la imagen">
            </div>
            <button type="submit" class="btn btn-primary">Insertar</button>
        </form>
    </div>  
    `;

    return view;
}

export default ProductForm;