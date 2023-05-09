import { GETUsers, POSTUsers } from "./back/peticiones.js";
let myFormUser = document.querySelector(`#myFormUser`);
let myFormSesion = document.querySelector(`#myFormSesion`);

myFormUser.addEventListener("submit", async (e) => {
  e.preventDefault();
  let accion = e.submitter.dataset.accion;

  if (accion === "enviar") {
    POSTUsers(e);
  } else {
    alert(`No se puede agregar Datos Vacios`);
  }
});

myFormSesion.addEventListener("submit", (e) => {
  e.preventDefault();
  let accion = e.submitter.dataset.accion;
  if (accion === "iniciar") {
    GETUsers(e);
  } else {
    alert(`No se puede agregar Datos Vacios`);
  }
});
