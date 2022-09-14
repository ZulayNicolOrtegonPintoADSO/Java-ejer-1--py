addEventListener("DOMContentLoaded", ()=>{
    // 7. Escribir un programa que calcule el volumen de una esfera:
    // Radio = 3 volumen de la esfera = 4/3 * PI * radio˄3

    let radio = Number(prompt("El valor de radio es:" , 3))

    console.log(`El volumen de la esfera cuyo radio es 3 es: ${(4/3)*(Math.PI)*(radio**3)} m/seg`);

})