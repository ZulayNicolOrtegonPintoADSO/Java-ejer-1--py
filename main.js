addEventListener("DOMContentLoaded", ()=>{
    // 15. Hacer un diagrama para convertir de grados centígrados a grados Fahrenheit.

    let c = Number(prompt("Ingrese el valor de grados centigrados:"))
    
    farenheit=(c*(9/5))+ 32

    console.log(`Tus grados c convertidos a farenheit: ${farenheit}`);

})