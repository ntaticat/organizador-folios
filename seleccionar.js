const btnAcciones = document.getElementById("btnAcciones");
const contenedorAcciones = document.getElementById("contenedorAcciones");
const panelAcciones = document.getElementById("panelAcciones");

btnAcciones.addEventListener("click", () => {
    contenedorAcciones.style.display = "flex";
});

contenedorAcciones.addEventListener("click", (e) => {
    e.stopPropagation();
    contenedorAcciones.style.display = "none";
});

panelAcciones.addEventListener("click", (e) => {
    e.stopPropagation();
});