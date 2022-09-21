addEventListener("DOMContentLoaded", ()=>{
    // 1. Se requiere calcular la distancia entre dos puntos, realizar el código que permita hallar la solución,
   // por favor utilizar funciones matemáticas de Python para ello
   // d = rc((x2-x1)^2 + (y2-y1)^2
    
    let x1=Number(prompt("Ingrese valor para x1:"))
    let x2=Number(prompt("Ingrese valor para x2:"))
    let y1=Number(prompt("Ingrese valor para y1:"))
    let y2=Number(prompt("Ingrese valor para y2"))

    console.log (`${(x2-x1)^2 + (y2-y1)^2}`);

})