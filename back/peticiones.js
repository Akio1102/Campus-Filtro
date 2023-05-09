const URL = `http://localhost:3000`;
const headers = new Headers({ "Content-Type": "application/json" });

export async function GETUsers(event) {
  let data = Object.fromEntries(new FormData(event.target));
    let peticion = await fetch(`${URL}/user`);
    let datos = await peticion.json();
    if (datos == false) {
      alert(`No hay Datos`);
    } else {
      datos.forEach((ele) => {
        if (data.user === ele.user && data.password === ele.password) {
          return window.location.href ="../dash/dash.html"
        }
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
    let peticion = await fetch(`${URL}/user`, config);
    datos = await peticion.json();
  }