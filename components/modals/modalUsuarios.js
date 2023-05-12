export function ModalUser() {
    let body = document.querySelector("body");
  
    let div = document.createElement("div");
    div.setAttribute("class", `modal fade`);
    div.setAttribute("id", "modalUsuarios");
    div.setAttribute("data-bs-backdrop", "static");
    div.setAttribute("data-bs-keyboard", "false");
    div.setAttribute("tabindex", "-1");
    div.setAttribute("aria-labelledby", "modalUsuariosLabel");
    div.setAttribute("aria-hidden", "true");
  
    div.innerHTML = `
    <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header bg-title fw-bold">
        <h5 class="modal-title" id="modalUSerLabel">Registro de Usuario</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <form id="myFormUser">
        <div class="modal-body">
          <div class="row g-3">
            <div class="col-12">
              <label for="inputName" class="form-label">Nombre</label>
              <input
                type="text"
                class="form-control"
                id="inputName"
                placeholder="Ingrese su Nombre"
                name="name"
                required
              />
            </div>
            <div class="col-6">
              <label for="inputUser" class="form-label">User</label>
              <input
                type="text"
                class="form-control"
                id="inputUser"
                placeholder="Ingrese su User"
                name="user"
                required
              />
            </div>
            <div class="col-6">
              <label for="inputPassword" class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                id="inputPassword"
                placeholder="Ingrese su Contraseña"
                name="password"
                required
              />
            </div>
            <div class="col-12">
              <label for="inputEmail" class="form-label">Email</label>
              <input
                type="email"
                class="form-control"
                id="inputEmail"
                placeholder="Ingresa Tu Email"
                name="email"
                required
              />
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <input
            type="button"
            class="btn btn-danger text-dark"
            data-bs-dismiss="modal"
            value="Cerrar"
          />
          <input
            type="submit"
            class="btn btn-warning"
            data-accion="enviar"
            value="Enviar Registro"
          />
        </div>
      </form>
    </div>
  </div>
  `;
    body.appendChild(div);
  }
  
     