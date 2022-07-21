import cipher from './cipher.js';


btn1.addEventListener("click", ingresar);
btn2.addEventListener("click", cifrar);
btn3.addEventListener("click", descifrar);

function ingresar() {
    const bienvenida = document.getElementById("bienvenida")
    const contrasenas = document.getElementById("contrasenas")
    bienvenida.style.display = "none"
    contrasenas.style.display = "block"}

function cifrar() {
    let offset = document.getElementById("desfase").value
    let cipher = document.getElementById("cifrado").value
    let longitud = cipher.length
    let letrasFinales = ""
    console.log("offset", offset)
    console.log("mensaje", cipher)
    console.log("long cadena", longitud)
        
    for (let i = 0; i < longitud; i++) {
        let numUni = cipher.charCodeAt(i)
        console.log("num ascii", numUni)
        let numOrd = (0 + parseInt(offset)) % 26
        console.log("num abecedario", numOrd)
        let final = (numUni - 33 + numOrd) % 94 + 33
        console.log("num con desplazamiento", final)
        let letras = String.fromCharCode(final)
        console.log("letra cifrada", letras)
        letrasFinales = letrasFinales + letras
        document.getElementById("descifrado").value = letrasFinales  }
}

function descifrar() {
    let offset2 = document.getElementById("desfase").value
    let offsetNeg = offset2 * -1
    let cipher2 = document.getElementById("cifrado").value
    let longitud2 = cipher2.length
    let msj = ""
    console.log("desfase", offset2)
    console.log("desfase negativo", offsetNeg)
    console.log("cadena usuario", cipher2)
    console.log("long cadena", longitud2)

    for (let i = 0; i < longitud2; i++) { 
        let letraUni = cipher2.charCodeAt(i)
        console.log("letra con desfase", letraUni)
        let numOrd2 = (parseInt(offsetNeg)) % 26 
        console.log("num abc cn desfase",numOrd2)
        let final2 = (letraUni - 126 + numOrd2) % 94 + 126
        console.log ("num sin desfase", final2)
        let letras2 = String.fromCharCode(final2)
        console.log("letra sin desfase", letras2)
        msj = msj + letras2 
        document.getElementById("descifrado").value = msj  } 
}
     
console.log(cipher);
