import cipher from './cipher.js';

// Eventos DOM

const botonIngresar = document.getElementById("btn1")
const botonCifrado = document.getElementById("btn2")
const botonDescifrado = document.getElementById("btn3")

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
    let offset = document.getElementById("desfase").value
    let texto = document.getElementById("cifrado").value

    console.log("desfase", offset)
    console.log("cadena usuario", texto)

    const msj2 = cipher.decode(offset, texto)
    document.getElementById("descifrado").value = msj2
});

console.log(cipher);