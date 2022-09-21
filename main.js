addEventListener("DOMContentLoaded", ()=>{

//4. Un jefe de obra con el dinero que tiene compra cinco juegos de llaves hexagonales cada  uno por
// $11500. Una bomba en $1168000 y tres cajas de pernos cada uno por $87000. Después de pagar  le
// sobran $91000. ¿cuánto dinero tenía?

llaves= 5*11500
bomba= 1168000
cajas= 3*87000
pagó= llaves + bomba + cajas
vuelto= 91000
tenía= pagó + vuelto
console.log(`El jefe de obra pagó un total de ${pagó}, sus vueltos fueron ${vuelto}, es decir que tenía un total de ${tenía}`)
})