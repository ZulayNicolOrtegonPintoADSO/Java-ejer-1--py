addEventListener("DOMContentLoaded", ()=>{
    // 11. Escribir un programa que calcule el volumen de un elipsoide
    // V = (4/3) * PI * a * b *c

    let a = Number(prompt("Ingrese valor para a:"))
    let b = Number(prompt("Ingrese valor para b:"))
    let c = Number(prompt("Ingrese valor para c:"))
    
    console.log(`El volumen de un elipsoide es: ${(4/3)*(Math.PI)*a*b*c}`);


})