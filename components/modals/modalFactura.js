export function ModalFacturas() {
  let body = document.querySelector("body");

  let div = document.createElement("div");
  div.setAttribute("class", `modal fade`);
  div.setAttribute("id", "modalFacturas");
  div.setAttribute("data-bs-backdrop", "static");
  div.setAttribute("data-bs-keyboard", "false");
  div.setAttribute("tabindex", "-1");
  div.setAttribute("aria-labelledby", "modalFacturasLabel");
  div.setAttribute("aria-hidden", "true");

  div.innerHTML = `
  <div class="modal-dialog modal-dialog-centered">
  <div class="modal-content">
    <div class="modal-header bg-title fw-bold">
      <h5 class="modal-title" id="modalFacturasLabel">
        Registro de Facturas
      </h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"
      ></button>
    </div>
    <form id="myFormFacturas">
      <div class="modal-body">
        <div class="row g-3">
          <div class="col-12">
            <label for="inputFacturaID" class="form-label">
              Factura ID
            </label>
            <input
              type="number"
              class="form-control"
              id="inputFacturaID"
              placeholder="Ingrese el Cliente"
              name="facturaID"
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
              placeholder="Ingresa el Producto ID"
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
              placeholder="Ingresa el Producto ID"
              name="cantidad"
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
