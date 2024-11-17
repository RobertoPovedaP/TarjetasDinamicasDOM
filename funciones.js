document.getElementById("btn-agregar").addEventListener("click", () => {
    const contenedor = document.getElementById("container-components");

    // Crear un nuevo componente
    const nuevoComponente = document.createElement("div");
    nuevoComponente.classList.add("componente");

    // Título del componente
    const titulo = document.createElement("h3");
    titulo.textContent = "Nuevo Componente";

    // Contenido del componente
    const contenido = document.createElement("p");
    contenido.textContent = "Este es un nuevo componente añadido dinámicamente.";

    // Agregar elementos al nuevo componente
    nuevoComponente.appendChild(titulo);
    nuevoComponente.appendChild(contenido);

    // Añadir el componente al contenedor
    contenedor.appendChild(nuevoComponente);
});
