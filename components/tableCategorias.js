/* import { ModalCategorias } from "./modalCategorias.js"; */
export function TableCategorias() {
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
  button.setAttribute("data-bs-target", "#modalCategorias");
  button.innerHTML = `
    <i class="bi bi-plus-circle m-auto fs-3"></i>
    `;
  let table = document.createElement("table");
  table.setAttribute("class", `table table-dark table-hover mt-3`);
  table.innerHTML = `
      <thead>
        <tr>
          <th>ID</th>
          <tH>CATEGORIA</th>
          <tH>DESCRIPCION</th>
          <tH>BORRAR</th>
        </tr>
      </thead>
      <tbody id="myDataBody">
      </tbody>
        `;
  containerTabla.appendChild(button);
  containerTabla.appendChild(table);
}
