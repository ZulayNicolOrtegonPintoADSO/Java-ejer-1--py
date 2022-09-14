addEventListener("DOMContentLoaded", ()=>{
    // 13. Realice un algoritmo que a partir de proporcionarle la velocidad de un automóvil expresada en kilómetros por hora, proporcione la velocidad en metros por segundos

    let velocidad = Number(prompt("Escribe aqui la velocidad en km/h"))
    convertir=velocidad/3.6

    console.log(`Tu velocidad de km/h convertida a m/seg es igual a: ${convertir}`);

})