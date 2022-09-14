addEventListener("DOMContentLoaded", ()=>{
    // 6. Escribir un programa que calcule la velocidad de un proyectil que recorre 2 Km en 5 minutos. Expresar
    // el resultado en metros/segundo. Velocidad = espacio/tiempo.

    let espacio = Number(prompt("Espacio:" , 2000))
    let tiempo = Number(prompt("Tiempo:" , 300))

    console.log(`La velocidad del proyectil es de: ${espacio/tiempo} m/seg`);

})