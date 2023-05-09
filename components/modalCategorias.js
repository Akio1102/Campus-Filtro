export function ModalCategorias() {
    /* let body = document.querySelector("body");
    let  */
    let containerTabla = document.querySelector("#container-table");
    let button = document.createElement("button");
    button.setAttribute("type", `button`);
    button.setAttribute(
      "class",
      "btn btn-outline-light rounded-pill px-3 mt-1"
    );
    button.setAttribute("data-bs-toggle", "modal");
    button.setAttribute("data-bs-target", "#sirva");
    button.innerHTML = `
      <i class="bi bi-plus-circle m-auto fs-3"></i>
      `;
    let table = document.createElement("table");
    table.setAttribute("class", `table table-dark table-hover mt-3`);
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
            <td>Mark</td>
            <td>Otto</td>
            <td>SIUUU</td>
            <td><button type="button" class="btn btn-warning">Detail</button></td>
            <td><button type="button" class="btn btn-danger">Borrar</button></td>
          </tr>
        </tbody>
          `;
    containerTabla.appendChild(button);
    containerTabla.appendChild(table);
  }
  