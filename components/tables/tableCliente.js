export function TableCliente() {
  let containerTabla = document.querySelector("#container-table");
  let button = document.createElement("button");
  button.setAttribute("type", `button`);
  button.setAttribute("class", "btn btn-outline-light rounded-pill px-3 mt-1");
  button.setAttribute("data-bs-toggle", "modal");
  button.setAttribute("data-bs-target", "#modalClientes");
  button.innerHTML = `
    <i class="bi bi-plus-circle m-auto fs-3"></i>
    `;
  let table = document.createElement("table");
  table.setAttribute("class", `table table-dark table-hover`);
  table.innerHTML = `
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">IMAGEN</th>
        <th scope="col">NOMBRE</th>
        <th scope="col">DIRECCION</th>
        <th scope="col">TELEFONO</th>
        <th scope="col">ACCIONES</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td>xd</td>
        <td>
            <button data-accion="editar"  class="btn btn-outline-warning">
              <i class="bi bi-pencil-square"></i>
            </button>    
            <button data-accion="eliminar" class="btn btn-outline-danger">
              <i class="bi bi-trash"></i>
            </button>
          </td>
      </tr>
    </tbody>
      `;
  containerTabla.appendChild(button);
  containerTabla.appendChild(table);
}
