/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

//Pasos para Encriptar el texto:

//Validamos: no permitimos que se escriba con caracteres especiales ni mayusculas
const btn = document.getElementById("encriptar")
btn.onclick = function () {    
    if(document.getElementById("input-text").value.match(/^[a-z ]*$/)){
       btn.addEventListener("click", crearTask);
    }
    else {
    alert("Solo letras minúsculas sin acentos y números.")
    }
};

const crearTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    let mensaje = document.getElementById("mensaje");

    const textEncriptado = value;
    obj={"e":"enter","i":"imes","a":"ai","o":"ober","u":"ufat"}
    reemplazar(textEncriptado, obj);
   
    function reemplazar(textEncriptado, obj) {
        Object.keys(obj).forEach(el => {
            const reg=new RegExp(el,"gi");  
            textEncriptado=textEncriptado.replace(reg, obj[el]);
            mensaje.innerHTML = textEncriptado;
            mensaje.style.backgroundImage = "none";          
        });
        return textEncriptado; 
    }     
}

//Desencriptando el texto:

desencriptar.addEventListener("click", () => {
    let input = document.getElementById("mensaje").value;
    const textDesencriptado = input;
    obj={"enter":"e","imes":"i","ai":"a","ober":"o","ufat":"u"}
    reemplazar(textDesencriptado, obj);
   
    function reemplazar(textDesencriptado, obj) {
        Object.keys(obj).forEach(el => {
            const reg=new RegExp(el,"gi");  
            textDesencriptado=textDesencriptado.replace(reg, obj[el]);
            mensaje.innerHTML = textDesencriptado;   
        });
        return textDesencriptado;
    } 
    
});

let copia = document.querySelector(".copiar")
copia.addEventListener("click", copiar);

function copiar(){
  mensaje.select();
  navigator.clipboard.writeText(mensaje.value);
  mensaje.value = "";
  mensaje.style.backgroundImage = "none";
}



    
