export function ModalCompras() {
  let body = document.querySelector("body");

  let div = document.createElement("div");
  div.setAttribute("class", `modal fade`);
  div.setAttribute("id", "modalCompras");
  div.setAttribute("data-bs-backdrop", "static");
  div.setAttribute("data-bs-keyboard", "false");
  div.setAttribute("tabindex", "-1");
  div.setAttribute("aria-labelledby", "modalComprasLabel");
  div.setAttribute("aria-hidden", "true");

  div.innerHTML = `
  <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header bg-title fw-bold">
          <h5 class="modal-title" id="modalComprasLabel">
            Registro de Compras
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form id="myFormCompras">
          <div class="modal-body">
            <div class="row g-3">
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
              <div class="col-12">
                <label for="inputProductoID" class="form-label">
                  Producto ID
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="inputProductoID"
                  placeholder="Ingresa el ID del Producto"
                  name="productoID"
                  required
                />
              </div>
              <div class="col-12">
                <label for="inputCantidad" class="form-label">
                  Cantidad
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="inputCantidad"
                  placeholder="Ingresa la Cantidad"
                  name="cantidad"
                  required
                />
              </div>
              <div class="col-12">
                <label for="inputProveedor" class="form-label">
                  Proveedor
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputProveedor"
                  placeholder="Ingresa el Proveedor"
                  name="proveedor"
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
