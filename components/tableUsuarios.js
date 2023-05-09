export function TableUsuarios() {
  let containerTabla = document.querySelector("#container-table");
  let table = document.createElement("table");
  table.setAttribute("class", `table table-dark table-hover`);
  table.innerHTML = `
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">IMAGEN</th>
          <th scope="col">CLIENTE</th>
          <th scope="col">CELULAR</th>
          <th scope="col">DETALLES</th>
          <th scope="col">BORRAR</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>1</th>
          <td>USUARIOO</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td><button type="button" class="btn btn-warning">Detail</button></td>
          <td><button type="button" class="btn btn-danger">Borrar</button></td>
        </tr>
      </tbody>
        `;
  containerTabla.appendChild(table);
}
