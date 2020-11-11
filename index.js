function onLoad (){

    let x= Math.floor((Math.random()*3));
    let y= Math.floor((Math.random()*3));
    let z= Math.floor((Math.random()*4));

    let who= ['the dog','my granma','his turtle','my bird'];
    let what= ['eat','pissed','crushed','broked'];
    let when= ['before the class','right in time','when I finished','during my lunch','while I was praying'];

    let result= who[x]+' '+what[y]+' '+when[z];

    return result;

};
window.onload = () => {
    document.querySelector("#btn").addEventListener("click", () => {
     document.querySelector("#excuse").innerHTML = generateExcuse();
    });
 };