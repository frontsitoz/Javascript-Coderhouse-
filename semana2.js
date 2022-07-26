/*Aquí hay un ejemplo de un simulador que da el promedio de la cantidad de prendas + descuento.

function calcularPrecio (precioPrenda, cantidadPrenda, porcentajeDescuento, costoEnvio) {
    //calculo los descuentos
    let descuento = (precioPrenda * porcentajeDescuento) / 100;
    //se lo aplico al precio
    let precioConDescuento = precioPrenda - descuento;
    //retorno el precio final con descuento y costo de envio, multiplicado por la cantidad de prendas
    return (precioConDescuento * cantidadPrenda) + costoEnvio;
}

const envio = 800; //valor aproximado del costo de envio promedio dentro de CABA

//le pedimos al usuario el precio de la prenda, la cantidad y el porcentaje del descuento
let prenda = parseFloat(prompt("Ingrese el precio de la prenda que desea comprar:"));
let cantidad = parseInt(prompt("Ingrese la cantidad de unidades que desea comprar de esta prenda:"));
let descuento = parseInt(prompt("Ingresa tu cupón de descuento:")) //los cupones en este caso serian los porcentajes de descuento, lo pongo asi para que quede mas visual

//llamamos a la funcion y luego mostramos el precio final por alert
let precioFinal = calcularPrecio(prenda, cantidad, descuento, envio);
alert("El precio total de tu compra es $" + precioFinal);
alert("¡Que lo disfrutes!");


*/
//Este me gustó más
var usuario = prompt("Cual es tu peso?");
var planeta = prompt("Elige tu planeta. 1 es Marte, 2 es Jupiter")
var peso = parseFloat(usuario);
var g_tierra = 9.8;
var g_marte = 3.7;
var g_jupiter = 24.8;
var peso_final;
var nombre;

function adivinaTuPlaneta(){


if(planeta == 1)
{
  peso_final = peso * g_marte / g_tierra;
  nombre = "Marte";
}
else if(planeta == 2)
{
peso_final = peso * g_jupiter / g_tierra;
nombre = "Jupiter";
}
else
  {
   alert("Error.\nRecarga y escribe una opción válida");
  }
peso_final = parseInt(peso_final);
alert (" Tu peso en " + nombre + " es " + peso_final + " kilos");
}

console.log(adivinaTuPlaneta())
