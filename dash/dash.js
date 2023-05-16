import { TableCategorias } from "../components/tables/tableCategorias.js";
import { TableCliente } from "../components/tables/tableCliente.js";
import { TableProductos } from "../components/tables/tableProductos.js";
import { TableUsuarios } from "../components/tables/tableUsuarios.js";
import { TableVentas } from "../components/tables/tableVentas.js";
import { TableFactura } from "../components/tables/tableFactura.js";
import { TableCompras } from "../components/tables/tableCompras.js";
import { ModalCategorias } from "../components/modals/modalCategorias.js";
import { ModalUser } from "../components/modals/modalUsuarios.js";
import { ModalProductos } from "../components/modals/modalProductos.js";
import { ModalClientes } from "../components/modals/modalClientes.js";
import { ModalVentas } from "../components/modals/modalVentas.js";
import { ModalCompras } from "../components/modals/modalCompras.js";
import { ModalFacturas } from "../components/modals/modalFactura.js";
import {
  GETUsuarios,
  GETCategorias,
  GETSelectCategorias,
  POSTCategorias,
  POSTUsers,
  DELETEUsers,
  DELETECategorias,
} from "../back/peticiones.js";

let containerTabla = document.querySelector("#container-table");
let categorias = document.querySelector(`#categorias`);
let productos = document.querySelector(`#productos`);
let clientes = document.querySelector(`#clientes`);
let usuarios = document.querySelector(`#usuarios`);
let ventas = document.querySelector(`#ventas`);
let facturas = document.querySelector(`#facturas`);
let compras = document.querySelector(`#compras`);

categorias.addEventListener("click", (e) => {
  e.preventDefault();
  containerTabla.innerHTML = "";
  TableCategorias();
  let modalCategorias = document.querySelector("#modalCategorias");
  if (modalCategorias == null) ModalCategorias();

  let myFormCategoria = document.querySelector(`#myFormCategoria`);
  myFormCategoria.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e);
    let accion = e.submitter.dataset.accion;
    if (accion === "enviar") {
      POSTCategorias(e);
    } else {
      alert(`No se puede agregar Datos Vacios`);
    }
  });

  GETCategorias();
  let myData = document.querySelector(`#myDataBody`);

  myData.addEventListener("click", (e) => {
    e.preventDefault();
    let accion = e.target.dataset.accion;
    let contenedor = e.target.closest(`.tr`);
    let id = contenedor.getAttribute(`id`);
    if (accion == "eliminar") {
      DELETECategorias(contenedor, id);
      alert(`Categoria Borrada`);
    }
  });
});

productos.addEventListener("click", (e) => {
  e.preventDefault();
  containerTabla.innerHTML = "";
  TableProductos();
  let modalProductos = document.querySelector("#modalProductos");
  if (modalProductos == null) ModalProductos();
  GETSelectCategorias();
});

clientes.addEventListener("click", (e) => {
  e.preventDefault();
  containerTabla.innerHTML = "";
  TableCliente();
  let modalClientes = document.querySelector("#modalClientes");
  if (modalClientes == null) ModalClientes();
});

usuarios.addEventListener("click", (e) => {
  e.preventDefault();
  containerTabla.innerHTML = "";
  TableUsuarios();
  let modalUsuarios = document.querySelector("#modalUsuarios");
  if (modalUsuarios == null) ModalUser();

  let myFormUser = document.querySelector(`#myFormUser`);
  myFormUser.addEventListener("submit", (e) => {
    e.preventDefault();
    let accion = e.submitter.dataset.accion;
    if (accion === "enviar") {
      POSTUsers(e);
    } else {
      alert(`No se puede agregar Datos Vacios`);
    }
  });

  GETUsuarios();
  let myData = document.querySelector(`#myDataBody`);

  myData.addEventListener("click", (e) => {
    e.preventDefault();
    let accion = e.target.dataset.accion;
    let contenedor = e.target.closest(`.tr`);
    let id = contenedor.getAttribute(`id`);
    if (accion == "eliminar") {
      DELETEUsers(contenedor, id);
      alert(`Usuario Borrada`);
    }
  });
});

ventas.addEventListener("click", (e) => {
  e.preventDefault();
  containerTabla.innerHTML = "";
  TableVentas();
  let modalVentas = document.querySelector("#modalVentas");
  if (modalVentas == null) ModalVentas();
});

facturas.addEventListener("click", (e) => {
  e.preventDefault();
  containerTabla.innerHTML = "";
  TableFactura();
  let modalFacturas = document.querySelector("#modalFacturas");
  if (modalFacturas == null) ModalFacturas();
});

compras.addEventListener("click", (e) => {
  e.preventDefault();
  containerTabla.innerHTML = "";
  TableCompras();
  let modalCompras = document.querySelector("#modalCompras");
  if (modalCompras == null) ModalCompras();
});
