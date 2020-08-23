
// EJERCICIO 5
// Arrow functions everywhere
// Vamos a rehacer alguno de los ejercicios anteriores con funciones flecha. ¡A lo loco!


CalcularModelo=(dimensionesElemento,width,padding,borde)=>{

    if(dimensionesElemento=="border-box"){
        var boxSizing=`${dimensionesElemento} ${width}px ${padding}% ${borde}px`;
    }else{
        var boxSizing=`${dimensionesElemento} ${width}px`;
    }


    console.log(boxSizing);
}

CalcularModelo("content-box",45,3,5);

