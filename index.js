window.onload = () => {
    console.log("Hola excusa");
    let who=["mi padre", "mi madre", "mi gato","mi perro"];
    let what=["vomitó", "se robó", "me quitó", "se comió"];
    let when= ['antes de la clase', 'justo a tiempo', 'cuando terminé', 'durante mi almuerzo', 'mientras oraba'];
    let excuse = "insertar excusa acá."

    let x= Math.trunc((Math.random()*who.length));
    let y= Math.trunc((Math.random()*who.length));
    let z= Math.trunc((Math.random()*who.length));

    excuse = who[x]+' '+what[y]+" mi tarea"+' '+when[z];

    document.querySelector("#excuse").innerHTML = excuse;
};
