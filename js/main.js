alert( `
        Hola.

        Para avanzar debe contestar todas las preguntas.`);

let nombre = prompt( `Introducir su Nombre:` );


        if (nombre != "") 
        {
          alert( ` 
        Muy bien ${ nombre }.

        Para avanzar ingrese su Apellido.`);
        }
        else {
          alert("El nombre se requieren");
          nombre = prompt( `Introducir su Nombre:` );
        }
 
let apellido = prompt( `Introducir su Apellido:` );
    
              if (apellido != "") 
              {
              alert( ` 
              Muy bien ${nombre} ${ apellido }.
              
              Para avanzar ingrese su Edad.`);
              }
              else {
              alert(`El apellido se requieren`);
              apellido = prompt( `Introducir su Apellido:` );
              }


let edad =  parseInt(prompt(`Ingrese su Edad`));
              if (edad != '' && edad > 1 && edad < 18) {
                alert(`Debe Ingresar una edad Valida`)
                edad = parseInt(prompt(`Ingrese su Edad`));
              }
              else {
              alert(`Edad Permitida`);
              }

let pais = prompt("Ingrese su País de Nacimiento");

              switch (pais) {
              case "argentina":
                  alert(`Su país de nacimiento es Argentina.`);
              break;

              case "chile":
                alert(`Su país de nacimiento es Chile.`);
              break;

              case "colombia":
                alert(`Su país de nacimiento es Colombia.`);
              break;

              case "venezuela":
                alert(`Su país de nacimiento es Venezuela.`);
              break;

              case "Peru":
                alert(`Su país de nacimiento es Peru.`);
              break;

              case "brasil":
                alert(`Su país de nacimiento es Brasil.`);
              break;

              default:
                alert(`Su país de nacimiento no esta en nuestra base de datos.`)
                pais = prompt(`Ingrese su País de Nacimiento`);  
             };

alert( ` Genial.

        Vamos avanzando muy bien, ahora te toca resolver las siguientes ecuaciones:`);

let pregunta1 = prompt("La suma de dos numero Impares tiene como resultado un numero Par?, Responda Verdadero o Falso");

              if (pregunta1 === "verdadero" ){
                  alert(`Excelente, vamos a la siguiente pregunta`);
              } 
              else {
                  alert(`Lo siento, vuelva a intentarlo`);
                  pregunta1 = prompt(`La suma de dos numero Impares tiene como resultado un numero Par?, Responda Verdad o Falso`);
              };

alert( ` Felicitaciones.

         Vamos avanzando muy bien, ahora veremos si el numero ingresado es PRIMO o NO`);

function esPrimo(numeroPrimo) {
  if (numeroPrimo <= 1) {
    return false;
  }
  
  for (let i = 2; i <= Math.sqrt(numeroPrimo); i++) {
    if (numeroPrimo % i === 0) {
      return false;
    }
  }
  
  return true;
}

const numeroIngresado = parseInt(prompt("Ingresa un número a verificar:"));

if (esPrimo(numeroIngresado)) {
  alert(numeroIngresado + " Es un número primo.");
} else {
  alert(numeroIngresado + " No es un número primo.");
};

alert( ` Excelente, has llegado muy lejos.

         Ahora veremos si el numero ingresado es PAR O IMPAR`);


function parImpar (numeroPArImpar){
  if (numeroPArImpar % 2 === 0){
}
}
const numeroIngresado2 = parseInt(prompt("Ingresa un número a verificar:"));

if (parImpar(numeroIngresado2)) {
  alert(numeroIngresado2 + " Es un número PAR.");
} else {
  alert(numeroIngresado2 + " Es un número PAR.");
};


alert( `Excelente, te muestro tus datos ingresados:

        Nombre: ${ nombre } ${ apellido }
        Edad: ${ edad }
        Nacionalidad: ${pais}
        Respuesta 1: ${ pregunta1 } `);






