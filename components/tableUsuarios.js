export function TableUsuarios() {
  let containerTabla = document.querySelector("#container-table");
  let button = document.createElement("button");
  button.setAttribute("type", `button`);
  button.setAttribute("class", "btn btn-outline-light rounded-pill px-3 mt-1");
  button.setAttribute("data-bs-toggle", "modal");
  button.setAttribute("data-bs-target", "#modalUsuarios");
  button.innerHTML = `
    <i class="bi bi-plus-circle m-auto fs-3"></i>
    `;
  let table = document.createElement("table");
  table.setAttribute("class", `table table-dark table-hover`);
  table.innerHTML = `
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">NOMBRE</th>
          <th scope="col">USER</th>
          <th scope="col">PASSWORD</th>
          <th scope="col">EMAIL</th>
          <th scope="col">BORRAR</th>
        </tr>
      </thead>
      <tbody id="myDataBody">
      </tbody>
        `;
  containerTabla.appendChild(button);
  containerTabla.appendChild(table);
}
