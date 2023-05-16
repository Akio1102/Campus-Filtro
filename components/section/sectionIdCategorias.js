export function sectionIdCategorias(categorias) {
  let selectCategorias = document.querySelector("#selectCategorias");

  let option = document.createElement("option");
  option.setAttribute("id", `${categorias.id}`);
  option.setAttribute("name", `categoriaId`);
  option.innerHTML = `
        ${categorias.name}
    `;
  selectCategorias.appendChild(option);
}
