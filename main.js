addEventListener("DOMContentLoaded", ()=>{

    // 3. Calcular la edad de una madre en el momento de dio a luz a alguno de sus hijos.
    // • Generar el algoritmo que dé como resultado el tiempo estimado para el llenado de un
    // depósito.
    // • Q=V/t, siendo Q (caudal), V (volumen) y t (tiempo).
    // • Volumen = PI *(radio^2)* H (altura del depósito)
    // • El tiempo se encuentra en minutos.
    // • Normalmente se mide el volumen en litros y el tiempo en segundos
    
    let h =Number(prompt("Altura del depósito:"))

    let r =Number(prompt("Radio del pepósito:"))

    v=((Math.PI) * (r**2) * h)

    let tm = Number(prompt("Tiempo:"))

    ts= tm * 60
    q= v/ts
    
    console.log (`El resultado de tiempo estimado para el llenado de un depósito cuyo volumen es de ${v} litros es ${q} segundos`);
})