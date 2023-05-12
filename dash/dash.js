import { TableCategorias } from "../components/tables/tableCategorias.js";
import { TableCliente } from "../components/tables/tableCliente.js";
import { TableProductos } from "../components/tables/tableProductos.js";
import { TableUsuarios } from "../components/tables/tableUsuarios.js";
import { TableVentas } from "../components/tables/tableVentas.js";
import { TableCompras } from "../components/tables/tableCompras.js";
import { TableReporte } from "../components/tables/tableReportes.js";
import { ModalCategorias } from "../components/modals/modalCategorias.js";
import { ModalUser } from "../components/modals/modalUsuarios.js";
import { ModalProductos } from "../components/modals/modalProductos.js";
import { ModalClientes } from "../components/modals/modalClientes.js";
import {
  GETUsuarios,
  GETCategorias,
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
let compras = document.querySelector(`#compras`);
let reportes = document.querySelector(`#reportes`);

categorias.addEventListener("click", (e) => {
  e.preventDefault();
  containerTabla.innerHTML = "";
  TableCategorias();
  ModalCategorias();

  let myFormCategoria = document.querySelector(`#myFormCategoria`);
  myFormCategoria.addEventListener("submit", (e) => {
    e.preventDefault();
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
  ModalProductos();
});

clientes.addEventListener("click", (e) => {
  e.preventDefault();
  containerTabla.innerHTML = "";
  TableCliente();
  ModalClientes();
});

usuarios.addEventListener("click", (e) => {
  e.preventDefault();
  containerTabla.innerHTML = "";
  TableUsuarios();
  ModalUser();

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
});

compras.addEventListener("click", (e) => {
  e.preventDefault();
  containerTabla.innerHTML = "";
  TableCompras();
});

reportes.addEventListener("click", (e) => {
  e.preventDefault();
  containerTabla.innerHTML = "";
  TableReporte();
});
