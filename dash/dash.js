import { TableCategorias } from "../components/tableCategorias.js";
import { TableCliente } from "../components/tableCliente.js";
import { TableProductos } from "../components/tableProductos.js";
import { TableUsuarios } from "../components/tableUsuarios.js";
import { TableVentas } from "../components/tableVentas.js";
import { TableCompras } from "../components/tableCompras.js";
import { TableReporte } from "../components/tableReportes.js";
import {
  GETCategorias,
  POSTCategorias,
  DELETECategorias,
} from "../back/peticiones.js";
let myFormCategoria = document.querySelector(`#myFormCategoria`);
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

myFormCategoria.addEventListener("submit", (e) => {
  e.preventDefault();
  let accion = e.submitter.dataset.accion;
  if (accion === "enviar") {
    POSTCategorias(e);
  } else {
    alert(`No se puede agregar Datos Vacios`);
  }
});

productos.addEventListener("click", (e) => {
  e.preventDefault();
  containerTabla.innerHTML = "";
  TableProductos();
});

clientes.addEventListener("click", (e) => {
  e.preventDefault();
  containerTabla.innerHTML = "";
  TableCliente();
});

usuarios.addEventListener("click", (e) => {
  e.preventDefault();
  containerTabla.innerHTML = "";
  TableUsuarios();
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
