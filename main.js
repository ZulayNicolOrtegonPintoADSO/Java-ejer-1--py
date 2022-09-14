addEventListener("DOMContentLoaded", ()=>{
    // 14. Una farmacia aplica al precio de los remedios el 10% de descuento, hacer un programa que ingresando el costo de los medicamentos calcules el descuento y el precio final.


    let precio = Number(prompt("Ingresa el precio:"))
    
    descuento=(precio*10)/100
    preciocondescuento=precio-descuento

    console.log(`El precio con descuento es: ${preciocondescuento}`);

})