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

    // Validación del formulario
    function validateForm() {
        let valid = true;

        // Limpiar mensajes de error
        document.getElementById("nameError").textContent = "";
        document.getElementById("emailError").textContent = "";
        document.getElementById("messageError").textContent = "";

        // Validar nombre
        const name = document.getElementById("name").value;
        if (name.trim() === "") {
            document.getElementById("nameError").textContent = "El nombre es obligatorio.";
            valid = false;
        }

        // Validar correo electrónico
        const email = document.getElementById("email").value;
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (email.trim() === "") {
            document.getElementById("emailError").textContent = "El correo electrónico es obligatorio.";
            valid = false;
        } else if (!emailPattern.test(email)) {
            document.getElementById("emailError").textContent = "Por favor ingresa un correo electrónico válido.";
            valid = false;
        }

        // Validar mensaje
        const message = document.getElementById("message").value;
        if (message.trim() === "") {
            document.getElementById("messageError").textContent = "El mensaje es obligatorio.";
            valid = false;
        }

        return valid;
    }



