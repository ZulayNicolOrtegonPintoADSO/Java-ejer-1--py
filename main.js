addEventListener("DOMContentLoaded", ()=>{
    // 9. Escribir un programa que calcule el área y el volumen de un cilindro:
    // A = (2 * (PI * r˄2)) + ((2 * PI * r) * h)
    // V = (PI * r2) * h

    let r = Number(prompt("Ingrese valor de radio:"))
    let h = Number(prompt("Ingrese valor de altura:"))

    console.log(`El área del cilidro es: ${(2 * ((Math.PI) * (r**2))) + ((2 * (Math.PI) * r) * h)}`);
    console.log(`El volumen del cilidro es: ${((Math.PI) * (r*2)) * h}`);

})