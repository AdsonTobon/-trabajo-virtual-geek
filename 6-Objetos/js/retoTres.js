const geekGirl1={
    name:"Susana",
    years:34,
    profession:"Periodista"
};


geekGirl1.run=(runs)=>`${runs}`;
geekGirl1.runAMarathon=(distance)=>`Estoy corriendo un maratón de ${distance} kilometros`;
geekGirl1.showBio=()=>alert(`Mi nombre es ${geekGirl1.name}, tengo  ${geekGirl1.years} años, y soy ${geekGirl1.profession}`);

console.log(geekGirl1.runAMarathon(50));

geekGirl1.showBio();
