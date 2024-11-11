document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector("#nav");
    const abrir = document.querySelector("#abrir");
    const cerrar = document.querySelector("#cerrar");

    abrir.addEventListener("click", () => {
        nav.classList.add("visible");
        abrir.style.display = "none";
        cerrar.style.display = "block";
    });

    cerrar.addEventListener("click", () => {
        nav.classList.remove("visible");
        abrir.style.display = "block";
        cerrar.style.display = "none";
    });
});

const toggleModeButton = document.getElementById("toggleMode");
const body = document.body;

toggleModeButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
});






