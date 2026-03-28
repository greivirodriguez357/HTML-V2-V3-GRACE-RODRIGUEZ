const form = document.getElementById("miFormulario");

function soloNumeros(input) {
    input.addEventListener("input", function () {
        this.value = this.value.replace(/[^0-9]/g, "");
    });
}

function soloLetras(input) {
    input.addEventListener("input", function () {
        this.value = this.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ ]/g, "");
    });
}


soloNumeros(document.getElementById("documento"));
soloNumeros(document.getElementById("celular"));
soloNumeros(document.getElementById("telefono"));

soloLetras(document.getElementById("nombres"));
soloLetras(document.getElementById("apellidos"));


form.addEventListener("submit", function(e) {

    e.preventDefault();

    let valido = true;


    document.querySelectorAll(".error").forEach(e => e.textContent = "");
    document.querySelectorAll("input").forEach(i => {
        i.classList.remove("error-input","valid");
    });

    const documento = document.getElementById("documento");
    const nombres = document.getElementById("nombres");
    const apellidos = document.getElementById("apellidos");
    const direccion = document.getElementById("direccion");
    const correo = document.getElementById("correo");
    const celular = document.getElementById("celular");
    const telefono = document.getElementById("telefono");
    const usuario = document.getElementById("usuario");
    const password = document.getElementById("password");
    const fecha = document.getElementById("fecha");
    const hobbies = document.querySelectorAll("input[name='hobbies']:checked");


    if (documento.value.length < 10) {
        document.getElementById("error-documento").textContent = "Mínimo 10 números";
        documento.classList.add("error-input");
        valido = false;
    } else documento.classList.add("valid");


    if (nombres.value.length < 3) {
        document.getElementById("error-nombres").textContent = "Mínimo 3 letras";
        nombres.classList.add("error-input");
        valido = false;
    } else nombres.classList.add("valid");


    if (apellidos.value.length < 3) {
        document.getElementById("error-apellidos").textContent = "Mínimo 3 letras";
        apellidos.classList.add("error-input");
        valido = false;
    } else apellidos.classList.add("valid");

    if (direccion.value.length < 5) {
        document.getElementById("error-direccion").textContent = "Mínimo 5 caracteres";
        direccion.classList.add("error-input");
        valido = false;
    } else { direccion.classList.add("valid");

    }

    if (!correo.checkValidity()) {
        document.getElementById("error-correo").textContent = "Correo inválido";
        correo.classList.add("error-input");
        valido = false;
    } else correo.classList.add("valid");


    if (celular.value.length !== 10) {
        document.getElementById("error-celular").textContent = "Debe tener 10 dígitos";
        celular.classList.add("error-input");
        valido = false;
    } else celular.classList.add("valid");


    if (telefono.value !== "" && telefono.value.length < 7) {
        document.getElementById("error-telefono").textContent = "Mínimo 7 dígitos";
        telefono.classList.add("error-input");
        valido = false;
    } else telefono.classList.add("valid");


    if (usuario.value.length < 5) {
        document.getElementById("error-usuario").textContent = "Mínimo 5 caracteres";
        usuario.classList.add("error-input");
        valido = false;
    } else usuario.classList.add("valid");


    const regexPassword = /^(?=.*[A-Z])(?=.*[a-z]{2,})(?=.*[0-9]{2,}).{8,}$/;
    if (!regexPassword.test(password.value)) {
        document.getElementById("error-password").textContent =
        "Debe tener 8 caracteres, 1 mayúscula, 2 minúsculas y 2 números";
        password.classList.add("error-input");
        valido = false;
    } else password.classList.add("valid");


    if (hobbies.length === 0) {
        document.getElementById("error-hobbies").textContent = "Selecciona al menos uno";
        valido = false;
    }


    if (!fecha.value) {
        document.getElementById("error-fecha").textContent = "Seleccione una fecha";
        fecha.classList.add("error-input");
        valido = false;
    } else fecha.classList.add("valid");


    if (valido) {
        alert("Formulario registrado correctamente");
        form.reset();


        document.querySelectorAll("input").forEach(i => {
            i.classList.remove("valid");
        });
    }

});