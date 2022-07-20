//Ejercicio 1 usando el if 
/*Mi ejercicio tratará sobre algunas acciones que deberá tomar el usuario según la hora 
y la temperatura en la que se encuentre*/
/*
let hora = prompt("Ingrese la hora en la que se encuentre");
let temperatura = prompt("Ingrese la temperatura en la que se encuentre");


if(hora>=8 && hora<=11 && temperatura<=16 ){
document.write("Debes de comprar un café");

}

else if(hora>=12 && hora<=13 && temperatura>=20 && temperatura<=25){
    document.write("Debes de almorzar");
}

else if (hora>=14 && hora<=17 && temperatura>=16 && temperatura<=20){
    document.write("Te recomiendo comer un sandwich triple ")
}

else if (hora>=18 && hora<=20 && temperatura<=15 ){
    document.write("Debes de cenar, de preferencia una sopa caliente");
}

else {
alert("Debes de ir a descansar")
}
*/

/**
 
 */
 // Determinar si un número es primo en JavaScript utilizando el ciclo for
 
const esPrimo = numero => {
	// Casos especiales
	if (numero == 0 || numero == 1 || numero == 4) return false;
	for (let x = 2; x < numero / 2; x++) {
		if (numero % x == 0) return false;
	}
	// Si no se pudo dividir por ninguno de los de arriba, sí es primo
	return true;
}

const numerosParaProbar = [1, 2, 50, 51, 3, 500, 7, 1311];

numerosParaProbar.forEach(numero => {
	console.log("¿%d es primo? %s", numero, esPrimo(numero));
});
/*
Salida:
¿1 es primo? false
¿2 es primo? true
¿50 es primo? false
¿51 es primo? false
¿3 es primo? true
¿500 es primo? false
¿7 es primo? true
¿1311 es primo? false
*/