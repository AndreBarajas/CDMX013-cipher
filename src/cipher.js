// LOGICA
const cipher = {
    encode: function (offset, texto) {
        let longitud = texto.length
        let letrasFinales = ""

        if (offset > 0 && texto != "" && typeof texto === "string") {
                              
            for (let i = 0; i < longitud; i++) {
                let numUni = texto.charCodeAt(i)
                let final = (numUni - 65 + (parseInt(offset))) % 26 + 65
                let letras = String.fromCharCode(final)
                letrasFinales = letrasFinales + letras
                console.log("letras cifrada", letrasFinales)
            } return letrasFinales;
        }
        else {
            throw new TypeError ("Caracteres invalidos")
         }

        },
    
    decode: function (offset, texto) {
        let longitud = texto.length
        let letrasFinales = "" 

        if (offset > 0 && texto != "" && typeof texto === "string") {

            for (let i = 0; i < longitud; i++) {
                let letraUni = texto.charCodeAt(i)
                console.log("letra con desfase", letraUni)
                let final2 = (letraUni + 65 + (parseInt(offset) * -1)) % 26 + 65
                console.log("num con desfase", final2)
                let letras = String.fromCharCode(final2)
                console.log("letra sin desfase", letras)
                letrasFinales = letrasFinales + letras
            } return letrasFinales;
        }
        else {
            throw new TypeError("Caracteres invalidos")
        }
        
    }
    
     
};

export default cipher;