addEventListener("DOMContentLoaded", ()=>{
    // 3. Un programa que lea 4 números y calcule la media.
    // Media= (num1 + num2 + num3 + num4)/4 

    let num1 = Number(prompt("Digite el valor del número 1:"))
    let num2 = Number(prompt("Digite el valor del número 2:"))
    let num3 = Number(prompt("Digite el valor del número 3:"))
    let num4 = Number(prompt("Digite el valor del número 4:"))

    console.log(`El caclculo de la media es: ${(num1+num2+num3+num4)/4}`);

})