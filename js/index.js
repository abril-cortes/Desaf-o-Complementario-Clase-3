
//Desafío con Ciclo For


/*let numero = parseInt(prompt("Ingrese un nro:"));
for (i = 0; i < numero; i++) {
  console.warn("Gracias por el numero!");
}*/

//otro ejercicio con for

/*let numeroIngresado = parseInt(prompt("Ingrese un numero del 1 al 10"));
for(i = 0; i < numeroIngresado; i+=2) {
    console.log(i);
} if (numeroIngresado > 10) {
  alert("ERROR: El número debe estar entre 1 - 10!");
}*/

//Desafío con Ciclo While

let password = prompt("Ingrese su contraseña:");
while (password != "Micontraseña") {
    console.error(password + "<-- Esta contraseña es incorrecta!");
    password = prompt("Ingrese otra palabra:");
}
alert("Contraseña correcta!");