addEventListener("DOMContentLoaded", ()=>{
    // 16. Elaborar un algoritmo para calcular el promedio final de la materia de algoritmos. Dicha calificación se compone de los siguientes porcentajes:
    // • 55% del promedio final de sus calificaciones de los tres(3) parciales.
    // • 30% de la calificación examen final y
    // • 15% de la calificación trabajo final.

    let nota1 = Number(prompt("Ingresa el valor de tu nota 1 :"))
    let nota2 = Number(prompt("Ingresa el valor de tu nota 2 :"))
    let nota3 = Number(prompt("Ingresa el valor de tu nota 3 :"))
    
    totalparcial=(nota1+nota2+nota3)/3
    porcen1=totalparcial*0.55

    let nota4 = Number(prompt("Ingresa el valor de tu nota 4 :"))

    porcen2=nota4*0.30
  
    let nota5 = Number(prompt("Ingresa el valor de tu nota 5 :"))

    porcen3=nota5*0.15
    porfin=porcen1+porcen2+porcen3

    console.log(`El porcentaje final es: ${porfin}`);

})