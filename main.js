addEventListener("DOMContentLoaded", ()=>{

  // 8. Pinturas “La brocha gorda” requiere determinar cuánto cobrar por trabajos de pintura. Considere que
  // se cobra por m2 y realice el código que representen el algoritmo que le permita ir generando
  // presupuestos para cada cliente.
  
  
  let precio = Number(prompt("Ingrese el valor por m2:"))
  let metroc = Number(prompt("Ingrese la cantidad de m2:"))

  console.log(`El valor total por ${metroc} metro cuadrado es ${precio*metroc}`)

})