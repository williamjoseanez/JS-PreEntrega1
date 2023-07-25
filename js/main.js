alert( `
Hola.

Para avanzar debe contestar todas las preguntas.`);

const nombre = prompt( 'Introducir su Nombre:' );
const apellido = prompt( 'Introducir su Apellido:' );

if (nombre != "" && apellido != "") 
{
alert( `
Muy bien ${ nombre } ${ apellido }.

Para avanzar ingrese su Edad.`);
}
else {
      alert("el nombre y el apellido se requieren");
      nombre = prompt( 'Introducir su Nombre:' );
      apellido = prompt( 'Introducir su Apellido:' );
    }


let edad =  parseInt(prompt("Ingrese su Edad"));

    while (edad > 1 && edad < 18) {
      alert("Edad no Permitida");
      edad = parseInt(prompt("Ingrese su Edad"));
    }

let pais = prompt("Ingrese su País de Nacimiento");

switch (pais) {
  case "argentina":
    alert("su país de nacimiento es Argentina.");
    break;

  case "chile":
    alert("su país de nacimiento es Chile.");
    break;

  case "colombia":
    alert("su país de nacimiento es Colombia.");
    break;

    case "venezuela":
        alert("su país de nacimiento es Venezuela.");
        break;

    case "Peru":
      alert("su país de nacimiento es Peru.");
        break;

        case "brasil":
            alert("su país de nacimiento es Brasil.");
              break;
  default:
    alert("su país de nacimiento no esta en nuestra base de datos.");
    break;
};

alert( `
Genial.

Vamos avanzando muy bien, ahora te toca resolver las siguientes ecuaciones:`);

let pregunta1 = prompt("La suma de dos numero Impares tiene como resultado un numero Par?, Responda Verdad o Falso");

if (pregunta1 === "verdad" ){
     alert("Excelente, vamos a la siguiente pregunta");
} else {
    alert("lo siento, vuelva a intentarlo");
};


alert( `
    Excelente, te muestro tus datos ingresados:

    Nombre: ${ nombre } ${ apellido }
    Edad: ${ edad }
    Nacionalidad: ${pais}
    Respuesta correcta: ${ pregunta1 }` );






