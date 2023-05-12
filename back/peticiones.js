import { FilaCategorias } from "../components/trs/trCategorias.js";
import { FilaUsuarios } from "../components/trs//trUsuarios.js";
import { sectionIdCategorias } from "../components/section/sectionIdCategorias.js";

const URL = `http://localhost:3000`;
const headers = new Headers({ "Content-Type": "application/json" });

export async function GETUsers(event) {
  let data = Object.fromEntries(new FormData(event.target));
  let peticion = await fetch(`${URL}/users`);
  let datos = await peticion.json();

  if (datos == false) {
    alert(`No hay Datos`);
  } else {
    datos.forEach((ele) => {
      if (data.user === ele.user && data.password === ele.password) {
        return (window.location.href = "../dash/dash.html");
      }
    });
  }
}

export async function GETUsuarios(event) {
  let peticion = await fetch(`${URL}/users`);
  let datos = await peticion.json();
  if (datos == false) {
    alert(`No hay Datos`);
  } else {
    datos.forEach((ele) => {
      FilaUsuarios(ele);
    });
  }
}

export async function POSTUsers(event) {
  let data = Object.fromEntries(new FormData(event.target));
  let config = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data),
  };
  let peticion = await fetch(`${URL}/users`, config);
  datos = await peticion.json();
}

export async function DELETEUsers(event, id) {
  let data = Object.fromEntries(new FormData(event.target));
  let config = {
    method: "DELETE",
    headers: headers,
    body: JSON.stringify(data),
  };
  let peticion = await fetch(`${URL}/users/${id}`, config);
  datos = await peticion.json();
}

export async function GETSelectCategorias() {
  let peticion = await fetch(`${URL}/categorias`);
  let datos = await peticion.json();
  if (datos == false) {
    alert(`No hay Datos`);
  } else {
    datos.forEach((ele) => {
      sectionIdCategorias(ele);
    });
  }
}

export async function GETCategorias() {
  let peticion = await fetch(`${URL}/categorias`);
  let datos = await peticion.json();
  if (datos == false) {
    alert(`No hay Datos`);
  } else {
    datos.forEach((ele) => {
      FilaCategorias(ele);
    });
  }
}

export async function POSTCategorias(event) {
  let data = Object.fromEntries(new FormData(event.target));
  let config = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data),
  };
  let peticion = await fetch(`${URL}/categorias`, config);
  datos = await peticion.json();
}

export async function DELETECategorias(event, id) {
  let data = Object.fromEntries(new FormData(event.target));
  let config = {
    method: "DELETE",
    headers: headers,
    body: JSON.stringify(data),
  };
  let peticion = await fetch(`${URL}/categorias/${id}`, config);
  datos = await peticion.json();
}
