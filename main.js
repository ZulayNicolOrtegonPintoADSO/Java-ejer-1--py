addEventListener("DOMContentLoaded", ()=>{
    // 17. Dado el valor que un cliente paga por un producto, calcular qué valor corresponde al costo total del producto y cuánto es el valor del IVA. Considerando que el porcentaje del IVA puede variar en el tiempo y de un producto a otro, este dato se lee por teclado.

    let producto = Number(prompt("valor del producto:"))

    let iva = Number(prompt("valor iva:"))

    costo=((producto*iva)/100)+producto

    console.log(`valor total: ${costo}`);

})