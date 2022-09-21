addEventListener("DOMContentLoaded", ()=>{
    // 2. Pablo compro 5 productos los dos primeros con un 5% de descuento y los 2 últimos con un 2% de
    // descuento, realice un algoritmo que indique cuanto fue el valor a pagar por cada producto y el total
    // de la compra.
    
    let p1 =Number(prompt("Ingrese valor del producto 1:"))
    des =  p1 - (p1 * 0.05)

    let p2 =Number(prompt("Ingrese valor del producto 2:"))
    des2 =  p2 - (p2 * 0.05)

    let p3 =Number(prompt("Ingrese valor del producto 3:"))

    let p4 =Number(prompt("Ingrese valor del producto 4:"))
    des4 =  p1 - (p1 * 0.02)

    let p5 =Number(prompt("Ingrese valor del producto 5:"))
    des5 =  p1 - (p1 * 0.02)

    console.log (`El valor de los productos con descuento es: \n -producto 1 = ${des} \n -producto 2 = ${des2} \n -producto 3 = ${p3} \n -producto 4 = ${des4} \n -producto 5 = ${des5}`);
})