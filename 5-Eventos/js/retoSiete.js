


const change = document.querySelector('.movies');





function handlePlusOneButton(event) {
  // Recogemos el elemento sobre el que pusimos el listener
  // y lo asignamos a una constante
  const buttonElement = event.delegation;
  buttonElement.classList.toggle('movie--selected');

}

change.addEventListener('click', handlePlusOneButton);



