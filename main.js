addEventListener("DOMContentLoaded", ()=>{

  // 10. Ingrese una frase que lo identifique como programador de Software y luego mostar esta frase
  // invertida.
  
  let frase = prompt("Ingrese la frase de su preferencia:")

  console.log(`La frase es: ${frase}`)

  let fraseinvertida =frase.split("").reverse().join("")
  console.log(`La frase invertida es: ${fraseinvertida}`)


})