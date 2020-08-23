const geekGirl1={};

geekGirl1.name="Susana";
geekGirl1.run=(runs)=>`${runs}`;
geekGirl1.runAMarathon=(distance)=>`Estoy corriendo un maratón de ${distance} kilometros`;

console.log(geekGirl1.runAMarathon(50));

console.log("-------------- Ejercicio Prueba ------------------")

var nombre=()=>9-4;//Sin las llaves las arrow funtion retornan un valor, si le ponemos las llaves es necesario agregar el metodo return


console.log(nombre());