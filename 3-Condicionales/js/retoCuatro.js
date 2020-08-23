

var edadPerro=5;
var estandar=3;

if(edadPerro>=1 && edadPerro<2){
    console.log("La edad del perro es de: 15 años humanos");
}else if(edadPerro>=2 && edadPerro<3){
    console.log("La edad del perro es de: 24 años humanos");
}else if(edadPerro>=3){
    console.log("La edad del perro es de: "+((((edadPerro-estandar)+1)*5)+24)+" años humanos");
}