export function ModalProductos() {
  let body = document.querySelector("body");

  let div = document.createElement("div");
  div.setAttribute("class", `modal fade`);
  div.setAttribute("id", "modalProductos");
  div.setAttribute("data-bs-backdrop", "static");
  div.setAttribute("data-bs-keyboard", "false");
  div.setAttribute("tabindex", "-1");
  div.setAttribute("aria-labelledby", "modalProductosLabel");
  div.setAttribute("aria-hidden", "true");

  div.innerHTML = `
  <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header bg-title fw-bold">
            <h5 class="modal-title" id="modalProductosLabel">
              Registro de Productos
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form id="myFormProductos">
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
                    placeholder="Ingrese el Nombre"
                    name="name"
                    required
                  />
                </div>
                <div class="col-12">
                  <label for="inputPrecio" class="form-label">
                    Precio
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPrecio"
                    placeholder="Ingresa el Precio"
                    name="precio"
                    required
                  />
                </div>
                <div class="col-12">
                  <label for="inputStock" class="form-label">
                    Stocks
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="inputStock"
                    placeholder="Ingresa el Stock"
                    name="stock"
                    required
                  />
                </div>
                <div class="col-12">
                  <label for="inputCategoria" class="form-label">
                    Categoria
                    <select class="form-select" aria-label="Default select example" id="selectCategorias">
                      <option selected>Seleccione el ID de la Categoria</option>
                    </select>
                  </label>
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
