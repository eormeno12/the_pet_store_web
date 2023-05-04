import getData from "../utils/getData";

const Orders = async () => {
    const orders = await getData("http://localhost/dogs_web/postCompra.php");

    const view = `
        <table class="table shadow table-striped rounded" style="margin: 1rem; font-size: 2rem; color: #000;">
        <thead>
            <tr style="color: var(--main-color);">
            <th class="p-3">Fecha</th>
            <th class="p-3">DNI</th>
            <th class="p-3">Método de Pago</th>
            <th class="p-3">ID Productos</th>
            <th class="p-3">Total</th>
            </tr>
        </thead>
        <tbody>
            ${orders.map(order => 
            `<tr>
            <td class="p-3">${order.Fecha}</td>
            <td class="p-3">${order.DNI}</td>
            <td class="p-3">${order.Metodo}</td>
            <td class="p-3">${order.Productos}</td>
            <td class="p-3">S/. ${order.Total}</td>
            </tr>`).join('')}
        </tbody>
        </table>`;

    return view;
}

export default Orders;