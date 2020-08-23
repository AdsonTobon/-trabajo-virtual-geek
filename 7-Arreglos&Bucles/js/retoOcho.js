const tasks = [
    {
        name: 'Recoger setas en el campo', 
        completed: true
    },
    {
        name: 'Comprar pilas', 
        completed: true
    },
    {
        name: 'Poner una lavadora de blancos', 
        completed: true
    },
    {
        name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript', 
        completed: false
    }
  ];

 
  document.querySelector("#validar").addEventListener("click",imprimirDatos);

  function imprimirDatos(){

        if(tasks[0].completed == true){
            var imprimir=document.querySelector("#actividad");

            imprimir.innerHTML=`<p><s>${tasks[0].name}</s></p>`
        }else{
            imprimir.innerHTML=`<p>La actividad aun no esta completa</p>`
        }
  
        
  }
