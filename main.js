addEventListener("DOMContentLoaded", ()=>{
    // 12. Programa que muestre el pago de una llamada telefónica sabiendo que cada minuto cuesta $355 pesos y un IVA de 20%

    let min = Number(prompt("Cantidad de minutos:"))
    precio=min*355
    iva=(20/100)*precio 
    precioconiva=precio+iva
    console.log(`El valor sin iva es: ${precio}`);
    console.log(`El valor con iva es: ${precioconiva}`);

})