// EJERCICIO 2
// ¿Cómo te llamas?
// Crear una página HTML con un input de tipo texto para introducir tu nombre y un botón. Al pinchar sobre el botón, imprimir en la consola el mensaje 'Hola ', con el nombre que aparece en el input de texto.

document.querySelector("#Boton").addEventListener("click",imprimirNombre);


function imprimirNombre(){
    var nombre=document.querySelector("#name").value;

    console.log("El nombre ingresado en la caja de  texto es: "+nombre);
}