import getData from "../utils/getData";

const Clients = async () => {
    const clients = await getData("http://localhost/dogs_web/postCliente.php");

    const view = `
        <table class="table shadow table-striped rounded" style="margin: 1rem; font-size: 2rem; color: #000;">
        <thead>
            <tr style="color: var(--main-color);">
            <th class="p-3">DNI</th>
            <th class="p-3">Nombre</th>
            <th class="p-3">Apellido</th>
            <th class="p-3">Raza de Perro</th>
            <th class="p-3">Dirección</th>
            </tr>
        </thead>
        <tbody>
            ${clients.map(client => 
            `<tr>
            <td class="p-3">${client.DNI}</td>
            <td class="p-3">${client.Nombre}</td>
            <td class="p-3">${client.Apellido}</td>
            <td class="p-3">${client.Raza}</td>
            <td class="p-3">${client.Direccion}</td>
            </tr>`).join('')}
        </tbody>
        </table>`;

    return view;
}

export default Clients;