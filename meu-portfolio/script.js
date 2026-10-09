
const botaoTema = document.querySelector("#tema");

botaoTema.addEventListener("click", function() {
    document.body.classList.toggle("escuro");

    if (document.body.classList.contains("escuro")) {
        botaoTema.textContent = "☀️ Tema";
    } else {
        botaoTema.textContent = "🌙 Tema";
    }
});