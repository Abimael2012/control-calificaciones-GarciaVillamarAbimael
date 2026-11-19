// Primero agarro todos los elementos que voy a ocupar
const campoNombre = document.querySelector("#campo-nombre");
const campoParcial1 = document.querySelector("#campo-parcial1");
const campoParcial2 = document.querySelector("#campo-parcial2");

const botonRegistrar = document.querySelector("#boton-registrar");
const botonReiniciar = document.querySelector("#boton-reiniciar");

const listaTarjetas = document.querySelector("#lista-tarjetas");


botonRegistrar.addEventListener("click", () => {

    const nombre = campoNombre.value;

    // Lo que escribe el usuario llega como texto, por eso el Number()
    const parcial1 = Number(campoParcial1.value);
    const parcial2 = Number(campoParcial2.value);

    const promedio = ((parcial1 + parcial2) / 2).toFixed(1);

    if (promedio >= 6.0) {
        listaTarjetas.innerHTML += `
        <div class="tarjeta estado-positivo">
            <h3>${nombre}</h3>
            <p>Promedio: ${promedio}</p>
            <p>Estado: Aprobado</p>
        </div>
        `;
    } else {
        listaTarjetas.innerHTML += `
        <div class="tarjeta estado-alerta">
            <h3>${nombre}</h3>
            <p>Promedio: ${promedio}</p>
            <p>Estado: Reprobado</p>
        </div>
        `;
    }

    // Dejo los campos limpios y el cursor listo para el siguiente alumno
    campoNombre.value = "";
    campoParcial1.value = "";
    campoParcial2.value = "";
    campoNombre.focus();
});


botonReiniciar.addEventListener("click", () => {
    listaTarjetas.innerHTML = "";
});
