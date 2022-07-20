import cipher from './cipher.js';

btn1.addEventListener("click", ingresar);
btn2.addEventListener("click", cifrar);
btn3.addEventListener("click", descifrar2);

function ingresar() {
    const bienvenida = document.getElementById("bienvenida")
    const contrasenas = document.getElementById("contrasenas")
    bienvenida.style.display = "none"
    contrasenas.style.display = "block"
}

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
        let final = (numUni - 65 + numOrd) % 26 + 65
        console.log("num con desplazamiento", final)
        let letras = String.fromCharCode(final)
        console.log("letra cifrada", letras)
        letrasFinales = letrasFinales + letras
        document.getElementById("descifrado").value = letrasFinales
    }
}

function descifrar2() {
    let offsetNeg = offset * -1 
    
    for (let i = 0; i < longitud; i++) { 
        

    }
        
        
    }




console.log(cipher);
