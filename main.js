const form = document.querySelector("#number");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const inputa = document.querySelector("#campoa");
    const inputb = document.querySelector("#campob");
    if (inputb.value > inputa.value) {
        alert("Formulario válido");
    } else {
        alert("Formulario inválido")
    }
})

