export function ModalVentas() {
  let body = document.querySelector("body");

  let div = document.createElement("div");
  div.setAttribute("class", `modal fade`);
  div.setAttribute("id", "modalVentas");
  div.setAttribute("data-bs-backdrop", "static");
  div.setAttribute("data-bs-keyboard", "false");
  div.setAttribute("tabindex", "-1");
  div.setAttribute("aria-labelledby", "modalVentasLabel");
  div.setAttribute("aria-hidden", "true");

  div.innerHTML = `
  <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header bg-title fw-bold">
            <h5 class="modal-title" id="modalVentasLabel">
              Registro de Ventas
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form id="myFormVentas">
            <div class="modal-body">
              <div class="row g-3">
                <div class="col-12">
                  <label for="inputClienteID" class="form-label"> Cliente ID </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputClienteID"
                    placeholder="Ingrese su Cliente ID"
                    name="clienteID"
                    required
                  />
                </div>
                <div class="col-12">
                  <label for="inputEmpleadoID" class="form-label">
                    Empleado ID
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputEmpleadoID"
                    placeholder="Ingresa el Empleado ID"
                    name="empleadoID"
                    required
                  />
                </div>
                <div class="col-12">
                  <label for="inputFecha" class="form-label">
                    Fecha
                  </label>
                  <input
                    type="date"
                    class="form-control"
                    id="inputFecha"
                    placeholder="Ingresa el Fecha"
                    name="fecha"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <input
                type="reset"
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
