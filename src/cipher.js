// LOGICA
const cipher = {   encode: function (offset, texto) {
        let longitud = texto.length
        let letrasFinales = ""

        for (let i = 0; i < longitud; i++) {
            let numUni = texto.charCodeAt(i)
            let final = (numUni - 32 + (parseInt(offset))) % 95 + 32
            let letras = String.fromCharCode(final)
            letrasFinales = letrasFinales + letras
            console.log("letras cifrada", letrasFinales)
             
        } return letrasFinales;
    },
    
    decode: function (offset, texto) {
        let longitud = texto.length
        let letrasFinales = "" 

        for (let i = 0; i < longitud; i++) {
             let letraUni = texto.charCodeAt(i)
            console.log("letra con desfase", letraUni)
            let final2 = (letraUni - 126 + (parseInt(offset))) % 95 + 126
            console.log("num sin desfase", final2)
            let letras = String.fromCharCode(final2)
            console.log("letra sin desfase", letras)
            letrasFinales = letrasFinales + letras
        } return letrasFinales;
    }
    
     
};

export default cipher;