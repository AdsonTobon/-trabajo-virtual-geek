console.log("----------------------------- Ejercicio 3-------------------------------");
var TotalKiwi=5;
var TotalPeras=2;
var TotalUvas=4;

var totalMercado=TotalKiwi+TotalPeras+TotalUvas;

console.log("El total del mercado de frutas es de: "+totalMercado+"€");

console.log("----------------------------- Ejercicio 4-------------------------------");

var CenaNavideña=128;
var TotalPersonas=9;
var PagoDeMas=2;

var PagoCadaUno=CenaNavideña/TotalPersonas;

console.log("El total a pagar cada uno es de: "+ PagoCadaUno+"€"+" y Ana por consumir de Mas pagaria: " +(PagoCadaUno+PagoDeMas)+"€");


console.log("----------------------------- Ejercicio 5-------------------------------");

var años=60;
var meses=12;
var dias=365;
var horas=24;

var cantidadHoras=((años*dias)*horas);

console.log("Una persona de: "+años+" años, ha vivido "+cantidadHoras+" horas");

console.log("----------------------------- Ejercicio 6-------------------------------");

var name="Lola";

console.log("Hola "+name+", Encantado de conocerte");

console.log("----------------------------- Ejercicio 7-------------------------------");

console.log(`Hola! ${name}, Encantado de conocerte de nuevo.`);

console.log("----------------------------- Ejercicio 8-------------------------------");

const firstDogImage = 'https://images.dog.ceo/breeds/chihuahua/n02085620_1205.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/malamute/n02110063_642.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/chihuahua/n02085620_3409.jpg';
const thirdDogName = 'Lana';

const perretas=document.querySelector(".Perretas");
perretas.innerHTML=`<img src="${firstDogImage}"> ${firstDogName}
                    <img src="${secondDogImage}"> ${secondDogName}
                    <img src="${thirdDogImage}"> ${thirdDogName}`;

console.log("----------------------------- Ejercicio 9-------------------------------");

var name9="Leticia Fernández Sánchez";

var numeroCaracteres=name9.length;

const CambioNombre=document.querySelector(".span9");
CambioNombre.innerHTML=name9;


const Cambiolongitud=document.querySelector(".caracteres");
Cambiolongitud.innerHTML=numeroCaracteres;


console.log("----------------------------- Ejercicio 10-------------------------------");

const CambioEdad=document.querySelector(".span10");
CambioEdad.innerHTML=` ${años} años`;


console.log("----------------------------- Ejercicio 11-------------------------------");

