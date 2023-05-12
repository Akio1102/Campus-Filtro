export function ModalClientes() {
  let body = document.querySelector("body");

  let div = document.createElement("div");
  div.setAttribute("class", `modal fade`);
  div.setAttribute("id", "modalClientes");
  div.setAttribute("data-bs-backdrop", "static");
  div.setAttribute("data-bs-keyboard", "false");
  div.setAttribute("tabindex", "-1");
  div.setAttribute("aria-labelledby", "modalClientesLabel");
  div.setAttribute("aria-hidden", "true");

  div.innerHTML = `
  <div class="modal-dialog modal-dialog-centered">
  <div class="modal-content">
    <div class="modal-header bg-title fw-bold">
      <h5 class="modal-title" id="modalClientesLabel">
        Registro de Categoria
      </h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"
      ></button>
    </div>
    <form id="myFormCliente">
      <div class="modal-body">
        <div class="row g-3">
          <div class="col-12">
            <label for="inputName" class="form-label">
              Nombre
            </label>
            <input
              type="text"
              class="form-control"
              id="inputName"
              placeholder="Ingrese su Nombre"
              name="name"
              required
            />
          </div>
          <div class="col-12">
            <label for="inputDescripcion" class="form-label">
              Descripcion
            </label>
            <input
              type="text"
              class="form-control"
              id="inputDescripcion"
              placeholder="Ingresa Tu Email"
              name="descripcion"
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
