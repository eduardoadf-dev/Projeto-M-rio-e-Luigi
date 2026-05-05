const formulario = document.querySelector(".formulario");
const mascara = document.querySelector(".mascara-formulario");

function mostrarForm() {
    formulario.style.left = "50%";
    formulario.style.transform = "translateX(-50%)";
    mascara.style.visibility = "visible";
}

function esconderForm() {
    formulario.style.left = "-340px";
    formulario.style.transform = "translateX(0)";
    mascara.style.visibility = "hidden";
}

// ✅ Fecha o formulário ao pressionar a tecla Escape
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") esconderForm();
});
