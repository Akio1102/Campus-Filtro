export function FilaUsuarios(usuario) {
    let tablaBody = document.querySelector("#myDataBody");
    let tr = document.createElement("tr");
    tr.setAttribute("id", `${usuario.id}`);
    tr.setAttribute("class", `tr`);
    tr.innerHTML = `
            <td>${usuario.id}</td>
            <td>${usuario.name}</td>
            <td>${usuario.user}</td>
            <td>${usuario.password}</td>
            <td>${usuario.email}</td>
            <td>
              <button data-accion="editar"  class="btn btn-outline-warning">
                <i class="bi bi-pencil-square"></i>
              </button> 
              <button data-accion="eliminar" class="btn btn-outline-danger">
                <i class="bi bi-trash"></i>
              </button>
            </td>
        `;
    tablaBody.appendChild(tr);
  }
  