document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-login");   // id do seu <form>
    const emailInput = document.getElementById("email");  // ajuste para o id correto
    const senhaInput = document.getElementById("senha");  // ajuste para o id correto

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // impede envio automático

        const email = emailInput.value.trim();
        const senha = senhaInput.value.trim();

        if (!email || !senha) {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        // se chegou aqui, está tudo preenchido
        // futuramente você coloca a lógica de login
        window.location.href = "gps.html";
    });
});
