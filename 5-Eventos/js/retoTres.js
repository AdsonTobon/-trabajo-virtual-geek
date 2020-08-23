// EJERCICIO 3
// Dame ipsum
// Crear una página HTML con un párrafo con lorem ipsum. Al poner el ratón sobre el párrafo, vamos a añadir un nuevo párrafo a la página con lorem ipsum.

document.querySelector("#parrafo1").addEventListener("mouseover",agregarTexto);
function agregarTexto(){
    var nuevoParrafo=document.querySelector("#parrafo2");
    nuevoParrafo.innerHTML=`<p>
    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                            </p>`
}
