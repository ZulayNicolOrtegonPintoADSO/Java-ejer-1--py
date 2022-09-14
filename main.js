addEventListener("DOMContentLoaded", ()=>{
    // 5. Escribir un programa que calcule la longitud y el área de una circunferencia: Radio = 4
    // Longitud de la circunferencia = 2 * PI * radio
    // Área de la circunferencia = PI * radio˄2

    let radio = Number(prompt("El valor del radio es:" , 4))

    console.log(`La longitud de la circunferencia es: ${2*(Math.PI)*(radio**2)}`);

})