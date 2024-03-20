//LIMPIAR LAS CAJAS
function limpiarInput(){
    document.querySelector(".caja-input").value="";
}

function limpiarOutput(){
    document.querySelector(".texto-procesado").innerText="";
}

//CREAR FUNCION PARA ENCRIPTAR
//SELECCIONAR EL TEXTO A ENCRIPTAR
function encriptar(){
    let texto= document.querySelector(".caja-input").value;
    
    //VERIFICAR QUE EL TEXTO NO TENGA ACENTOS Y QUE SEAN MINÚSCULAS
    if(!texto.match(/^[a-z/s ]+$/)){
        //SI NO CUMPLE, RESETEAR LA CAJA-OUTPUT
        limpiarOutput();
        document.querySelector(".monito").style.display="block";
        document.querySelector(".caja-output").style.display="block";
        return alert("ERROR: Ingresa unicamente letras minusculas y sin acentos");
    }

    //CODIFICAR LAS VOCALES
    let textoCodificado= texto.replace(/e/gi,'enter').replace(/i/gi,'imes').replace(/a/gi,'ai').replace(/o/gi,'ober').replace(/u/gi,'ufat');
    document.querySelector(".texto-procesado").innerText=textoCodificado;
    document.querySelector(".caja-procesada").style.display= "block";
    document.querySelector(".monito").style.display="none";
    document.querySelector(".caja-output").style.display="none";
    //LIMPIAR EL INPUT YA TRANSFORMADO A OUTPUT
    limpiarInput();

}

//DECODIFICAR LAS VOCALES
function desencriptar(){  
    let texto= document.querySelector(".caja-input").value;
    let textoCodificado= texto.replace(/enter/gi,'e').replace(/imes/gi,'i').replace(/ai/gi,'a').replace(/ober/gi,'o').replace(/ufat/gi,'u');
    document.querySelector(".texto-procesado").innerText= textoCodificado;
    //NUEVAMENTE LIMPIAR EL INPUT YA TRANSFORMADO A OUTPUT
    limpiarInput();
 
}

//COPIAR EL RESULTADO
function copiador(){
    let copiar= document.querySelector(".texto-procesado").innerText;
    navigator.clipboard.writeText(copiar)
}

//IDEA: AGREGAR BOTÓN PARA PEGAR EN INPUT?




   
    


