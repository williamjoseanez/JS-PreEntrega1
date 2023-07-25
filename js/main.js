alert( `
        Hola 😎! Bienvenido al curso de JavaScript®️.

        Mi nombre es William Añez. 🤓

        Entraste a mi Primer-proyecto básico de JS 👨🏻‍💻.

        Para avanzar debe contestar todas las preguntas 🔜.`);

let nombre = prompt( `Por favor, Introducir tu Nombre 📝:` ).toLowerCase();


        if (nombre != "") {
              alert( ` 
              Muy bien👌🏻${ nombre }.

              A continuación ingrese su Apellido 📝.`);
              }
        else {
              alert("El nombre se requiere 📝");
              nombre = prompt( `Introducir su Nombre 📝:` );
              }
 
let apellido = prompt( `Introducir su Apellido 📝:` ).toLowerCase();
    
        if (apellido != ""){
              alert( ` 
              Muy bien 👌🏻 ${nombre} ${ apellido }.
              
              En la proxima ventana ingrese su Edad.`);
              }
        else {
              alert(`El apellido se requiere`);
              apellido = prompt( `Introducir su Apellido 📝:` );
              }

  function pedirNumero(){
        let input = prompt("Ingrese su Edad 🙂:");
              
              while (isNaN(input) || input.trim() === "") {
              input = prompt("❌ Debe Ingresar una edad Valida");
              }
            }
              
 let edad = pedirNumero();
              
              if (edad != '' && edad >= 0 && edad < 18) {
                  alert(` ❌ Debe Ingresar una edad Valida`)
                  edad = parseInt(prompt(`Ingrese su Edad`));
            }
                else {
              alert(` ✅ Edad ingresada correctamente , puede continuar 🔜`);
              };
            
let pais = prompt(`✏  Ingrese su País de Nacimiento 🇦🇵🚩... 
                   ⚠️ Nuestra base de datos esta basada en países Sudamericanos`).toLowerCase();

              switch (pais) {
              case "argentina":
                  alert(`Su país de nacimiento es Argentina 🇷.`);
              break;

              case "chile":
                alert(`Su país de nacimiento es Chile 🏴󠁵󠁳󠁴󠁸󠁿.`);
              break;

              case "colombia":
                alert(`Su país de nacimiento es Colombia 🇨🇴.`);
              break;

              case "venezuela":
                alert(`Su país de nacimiento es Venezuela 🇻🇪.`);
              break;

              case "Peru":
                alert(`Su país de nacimiento es Peru 🇪.`);
              break;

              case "brasil":
                alert(`Su país de nacimiento es Brasil 🇧🇷.`);
              break;

              case "uruguay":
                alert(`Su país de nacimiento es Uruguay 🇾🇺🇾.`);
              break;
              
              case "ecuador":
                alert(`Su país de nacimiento es Ecuador.`);
              break;

              default:
                alert(`❌ Su país de nacimiento no esta en nuestra base de datos.`)
                pais = prompt(`Ingrese su País de Nacimiento 🇦🇵🚩`);  
             };

alert( `🥳 Genial 👏.

        ✅ Vamos avanzando muy bien 🥳...
        
        📝 Ahora te toca resolver las siguientes preguntas 📝:
                      
        🔜`);

let pregunta1 = prompt("La suma de dos numero Impares tiene como resultado un numero Par?, Responda Verdadero o Falso");

              if (pregunta1 === "verdadero" ){
                  alert(`Excelente 👏, vamos a la siguiente pregunta`);
              } 
              else {
                  alert(` ❌ Lo siento, vuelva a intentarlo ❌`);
                  pregunta1 = prompt(`La suma de dos numero Impares tiene como resultado un numero Par?, Responda Verdad o Falso`);
              };

alert( ` Felicitaciones 🥳🥳🥳.

         Vamos avanzando muy bien 👏👏, ahora comprobaremos si un numero es PRIMO o NO`);

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

const numeroIngresado = parseInt(prompt("Ingresa un número para verificar 📝:"));

        if (esPrimo(numeroIngresado)) {
          alert(numeroIngresado + " Es un número PRIMO.");
        } else {
          alert(numeroIngresado + "  ❌ No es un número PRIMO ❌.");
        };

alert( ` Excelente 👏👏, has llegado muy lejos.

         Ahora comprobaremos si un numero es PAR O IMPAR`);

function esPar(numeroPar) {
          return numeroPar % 2 === 0;
        }
        
        const numeroIngresado1 = parseInt(prompt("Ingresa un número 📝:"));
        
        if (esPar(numeroIngresado1)) {
          alert(`👏👏El numero ` + numeroIngresado1 + " es un número PAR.");
        } else {
          alert(`👏👏El numero ` + numeroIngresado1 + " es un número IMPAR.");
        };

alert( `👏Excelente👏, llegaste al final 🥇🥇🥇
             Te muestro tus datos ingresados:

             Nombre 👑: ${ nombre } ${ apellido }
             Edad: ${ edad }
             Nacionalidad: ${pais} 
             Pregunta Respondida: ${pregunta1}
             Numero primo consultado: ${numeroIngresado}
             El numero consultado Par o Impar fue: ${numeroIngresado1}`);






