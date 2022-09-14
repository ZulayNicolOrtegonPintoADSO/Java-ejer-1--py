addEventListener("DOMContentLoaded", ()=>{
    // 8. Escribir un programa que evalúe la siguiente expresión:
    // (a+7*c)/(b+2-a)+2*b

    let a = Number(prompt("Ingrese valor para a:"))
    let b = Number(prompt("Ingrese valor para b:"))
    let c = Number(prompt("Ingrese valor para c:"))

    console.log(`La exresión es (a+7*c)/(b+2-a)+2*b y su resultado es el siguiente: ${(a+7*c)/(b+2-a)+2*b}`);

})