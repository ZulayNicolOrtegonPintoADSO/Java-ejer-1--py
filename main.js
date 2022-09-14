addEventListener("DOMContentLoaded", ()=>{
    // 18. Calcular el sueldo de un empleado dados comodatos de entrada: el nombre, hrs. De trabajo y el pago en hora. Pagohora=15300

    let nombre =prompt("Nombre:")

    let horas = Number(prompt("Cantidad horas:"))

    totalapagar=horas*15300

    console.log(`sr/sra ${nombre}, el  total de pago por sus horas de trabajo es: ${totalapagar}`);

})