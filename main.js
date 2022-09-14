addEventListener("DOMContentLoaded", ()=>{
    // 20. Un vendedor recibe un sueldo base más el 10% de comisión sobre sus ventas. Si en un mes cualquiera hace tres ventas por valores: v1, v2 y v3, ¿cuánto recibirá por comisión? y ¿cuánto en total sueldo del vendedor?.

    let v1 = Number(prompt("Ingrese el valor de la venta 1"))
    let v2 = Number(prompt("Ingrese el valor de la venta 2"))
    let v3 = Number(prompt("Ingrese el valor de la venta 3"))
    
    ventas=v1+v2+v3
    comision=ventas*0.10


    console.log (`valor de las ventas ${ventas}`);

    console.log (`valor de las comision ${comision}`);

    console.log (`Valor total: ${ventas+comision}`);

})