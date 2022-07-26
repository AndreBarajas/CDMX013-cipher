import cipher from './cipher.js';

// Eventos DOM

const botonIngresar = document.getElementById("btn1")
const botonCifrado = document.getElementById("btn2")
const botonDescifrado = document.getElementById("btn3")

const parrafoCuatro = document.createElement("p"); //crear nodo
const elementoPadre = document.getElementById("parrafoTres")//seleccionar elemento padre
elementoPadre.appendChild(parrafoCuatro);//agregar nodos 

botonIngresar.addEventListener("click", function () {
    const bienvenida = document.getElementById("bienvenida")
    const contrasenas = document.getElementById("contrasenas")
    bienvenida.style.display = "none"
    contrasenas.style.display = "block"
});

botonCifrado.addEventListener("click", function () {
    let offset = document.getElementById("desfase").value
    let texto = document.getElementById("cifrado").value

    const msj = cipher.encode(offset, texto)
    document.getElementById("descifrado").value = msj 

});

botonDescifrado.addEventListener("click", function() {
    let offset2 = document.getElementById("desfase").value
    let offset = offset2 * -1
    let texto = document.getElementById("cifrado").value

    console.log("desfase", offset)
    console.log("cadena usuario", texto)

    const msj2 = cipher.decode(offset, texto)
    document.getElementById("descifrado").value = msj2
});

console.log(cipher);