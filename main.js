addEventListener("DOMContentLoaded", ()=>{
    // 10. Escribir un algoritmo que permita obtener las raíces reales de la ecuación de segundo grado: A * x2 +
    // b * x + c, siendo X un valor constante.

    let a = Number(prompt("Ingrese valor para a:"))
    let b = Number(prompt("Ingrese valor para b:"))
    let c = Number(prompt("Ingrese valor para c:"))
    let x = Number(prompt("x vale" , 9))
    

    console.log(`la raíz real es: ${a*x**2+b*x*c}`);


})