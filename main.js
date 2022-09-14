addEventListener("DOMContentLoaded", ()=>{
    // 19. Un estudiante realiza cuatro exámenes. Realizar el pseudocódigo que representen el algoritmo correspondiente para obtener el promedio de las calificaciones obtenidas. las calificaciones van 1 a 5 puntos.

    let examen1 = Number(prompt("Nota del examen 1:"))
    let examen2 = Number(prompt("Nota del examen 2:"))
    let examen3 = Number(prompt("Nota del examen 3:"))
    let examen4 = Number(prompt("Nota del examen 4:"))

    nota=(examen1+examen2+examen3+examen4)/4

    if (nota >= 0 && nota < 2.5 ){
        console.log(`NO APROBÓ`)
    }
    
    if (nota == 2.5 && nota <= 5){
        console.log(`APROBÓ`);
    }

    if (nota > 5 ){
        console.log(`ERROR:Las notas ingresadas no están en el rango de calificación de 1 a 5`);
    }

})