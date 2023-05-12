export function FilaCategorias(categori) {
  let tablaBody = document.querySelector("#myDataBody");
  let tr = document.createElement("tr");
  tr.setAttribute("id", `${categori.id}`);
  tr.setAttribute("class", `tr`);
  tr.innerHTML = `
          <td>${categori.id}</td>
          <td>${categori.name}</td>
          <td>${categori.descripcion}</td>
          <td>
            <button data-accion="eliminar" class="btn btn-outline-danger">
              <i class="bi bi-trash"></i>
            </button>
          </td>
      `;
  tablaBody.appendChild(tr);
}
