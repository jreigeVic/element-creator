function gg() {
    const elemento = document.createElement("div");
    const texto_elemento = document.createTextNode("BOBONA!");
    elemento.classList.add("novodiv");
    elemento.appendChild(texto_elemento);
    document.getElementById("container-center").appendChild(elemento);
}