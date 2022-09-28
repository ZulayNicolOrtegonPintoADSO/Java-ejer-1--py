addEventListener("DOMContentLoaded", ()=>{

  // 9. Una empresa que contrata personal requiere determinar la edad de las personas que solicitan trabajo,
  // pero cuando se les realiza la entrevista sólo se les pregunta el año en que nacieron. Realice el código
  // que representen el algoritmo para solucionar este problema.
  
  
  let nombre = prompt("Ingrese el nombre:")
  let año = Number(prompt("Ingrese el año de nacimiento:"))
  let añoac = Number(prompt("Ingrese el año actual"))

  console.log(`La edad que tiene ${nombre} es ${añoac-año}`)

})