alert( `
        Hola.

        Para avanzar debe contestar todas las preguntas.`);

let nombre = prompt( 'Introducir su Nombre:' );


if ( nombre != "" ) 
{
  alert( ` Muy bien ${ nombre }.

        Para avanzar ingrese su apellido.`);
}
else
{
  alert( "el nombre se requieren" );
  nombre = prompt( 'Introducir su Nombre:' );
}

let apellido = prompt( 'Introducir su Apellido:' );

if ( apellido != "" ) 
{
  //Aca despues de agregar el apellido seria bueno mostrar al usuario ya el nombre con el apellido ingresado y no solo el apellido
  alert( ` Muy bien ${ nombre } ${ apellido }.
              
              Para avanzar ingrese su Edad.`);
}
else
{
  alert( "El apellido se requieren" );
  apellido = prompt( 'Introducir su Apellido:' );
}


let edad = parseInt( prompt( "Ingrese su Edad" ) );
if ( edad === '' ) //Aca cambie la condicion de != '' por === '' porque estas validando el error primero, es decir, si edad es igual a '' string vacio, el usuario debe ingresar una edad 
{
  alert( "Debe Ingresar una edad" );
  edad = parseInt( prompt( "Ingrese su Edad" ) );
}
while ( edad > 1 && edad < 18 )//Esta condicion esta bien porque estas validando que la edad este entre un rango de 1 y hasta 17 porque 18 no es menor a 18 si quieres evaluar 18 puedes poner >= 18 
{
  alert( "Edad no Permitida" );
  edad = parseInt( prompt( "Ingrese su Edad" ) );

}
//Y este es el cambio que hice para que pudieses incluir una funcion en tu codigo y validar si el pais esta entre las opciones de paises que ofreces,
//Sin embargo como una recomendacion para una buena experiencia de usuario es siempre indicarle el paso a paso si tienes una lista determinada de paises, 
//en el prompt indicales cuales paises ofrece y ahi si evaluas, si el quiere incluir un pais que no existe le pones el mensaje de que no esta disponible
let pais; // se declara la variable fuera de la funcion por el tema del scope y poder acceder al valor de pais abajo en la informacion que imprimes al usuario
setPais(); // se manda a llamar la funcion para que se ejecute y capture el valor de pais
function setPais ()
{
  pais = prompt( `
  Ingrese su País de Nacimiento 
    - Argentina
    - Chile
    - Colombia
    - Venezuela
    - Peru
    - Brasil
  `).toLocaleLowerCase();//se le pide al usuario el valor del pais

  switch ( pais )
  {
    case "argentina":
      alert( "su país de nacimiento es Argentina." );
      break;

    case "chile":
      alert( "su país de nacimiento es Chile." );
      break;

    case "colombia":
      alert( "su país de nacimiento es Colombia." );
      break;

    case "venezuela":
      alert( "su país de nacimiento es Venezuela." );
      break;

    case "Peru":
      alert( "su país de nacimiento es Peru." );
      break;

    case "brasil":
      alert( "su país de nacimiento es Brasil." );
      break;

    default:
      alert( "su país de nacimiento no esta en nuestra base de datos." );
      setPais(); // este es el cambio, en vez de ponerle un prompt como default si no encuentra la opcion o el case que evaluas entonces vuelves a llamar la misma funcion y esto hace que se devuelva al inicio a pedir de nuevo el pais 
  };
}

alert( ` Genial.

        Vamos avanzando muy bien, ahora te toca resolver las siguientes ecuaciones:`);

let pregunta1 = prompt( "La suma de dos numero Impares tiene como resultado un numero Par?, Responda Verdad o Falso" ).toLocaleLowerCase();

if ( pregunta1 === "verdad" )
{
  alert( "Excelente, vamos a la siguiente pregunta" );
}
else
{
  alert( "lo siento, vuelva a intentarlo" );
  pregunta1 = prompt( "La suma de dos numero Impares tiene como resultado un numero Par?, Responda Verdad o Falso" );
};


alert( `Excelente, te muestro tus datos ingresados:

        Nombre: ${ nombre } ${ apellido }
        Edad: ${ edad }
        Nacionalidad: ${ pais }
        Respuesta 1: ${ pregunta1 }` );