alert( `
        Hola 😎‼️ Bienvenido al curso de JavaScript®️.

        Mi nombre es William Añez. 🤓

        Entraste a mi primer proyecto básico de JS 👨🏻‍💻.

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
              
        while (isNaN(input) || input.trim() === "" ) {
              input = prompt("❌ Debe Ingresar una edad Valida");
              }
              return parseFloat(input);
            }
              
 let edad = pedirNumero();
              
        if (edad >= 0 && edad < 18) {
              alert(` ❌ Para continuar debe ser mayor de edad ⚠️`);
              edad = parseInt(prompt(`Ingrese su Edad`));
                }
        else {
              alert(` ✅ Edad ingresada correctamente , puede continuar 🔜`);
              };
            
let país = prompt(`✏  Ingrese su País de Nacimiento 🇦🇵🚩... 
                   ⚠️ Nuestra base de datos esta basada en países Sudamericanos`).toLowerCase();

        switch (país) {
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

          case "peru":
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
                país = prompt(`Ingrese su País de Nacimiento 🇦🇵🚩`);  
             };

alert( `🥳 Genial 👏.

        ✅ Vamos avanzando muy bien 🥳...
        
        📝 Ahora te toca resolver las siguientes preguntas 📝:
                      
        🔜`);

let pregunta1 = prompt("La suma de dos numero Impares tiene como resultado un numero Par?, Responda Verdadero o Falso").toLowerCase();

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
             Edad: ${edad}
             Nacionalidad: ${país} 
             Pregunta Respondida: ${pregunta1}
             Numero consultado ("Primo o No primo"): ${numeroIngresado}
             El numero consultado Par o Impar fue: ${numeroIngresado1}
             
             Ahora avanzamos al proximo nivel `);
        alert (`En esta sección simularemos una tienda de compras, donde tu calcularías cuanto te quedaría el precio final`);
    
        alert (`ha entrado un producto único en su estilo, el Valor del producto es de $500 Ars ¿Está interesado?, de ser asi en la proxima ventana elija la cantidad de productos que desea agregar al carrito`);
        
        
        let cantidadArticulo = parseInt(prompt(`¿Cuántos artículos deseas agregar`));{
                  if (cantidadArticulo >= 1 && cantidadArticulo < 10);
                  alert(`Ha agregado correctamente  ` + cantidadArticulo + ` artículos al carrito `);
                } 

        const suma = (a, b) => a + b;
        const resta = (a, b) => a - b;
        const iva = (x) => x * 0.21;
        const multiplica = (a,b) => a * b;
        const porcentajeDescuento = (x) => (((x*a)/100)-x);
        
        
        let valorProducto = 500;
        let descuento = 50;
        
        //CÁLCULO DEL PRECIO FINAL
                  // valorProducto * iva = precioFinalProducto
                  // precioFinalProducto * cantidadArticulo = montoCompra
                  // montoCompra - porcentajeDescuento = totalApagar
    let totalApagar = multiplica(suma(valorProducto,iva(valorProducto)),cantidadArticulo);{
          alert("El Total Apagará $" + Math.round(totalApagar));
        };

          alert(`Hoy estamos recolectando un aporte especial para los niños de la calle, dime que porcentaje te gustaría donar en la siguiente ventana ingresa en números`);

    
    
    function pedirDonacion(){
      let donacion = prompt(`ingrese por favor el porcentaje a donar, el mismo se calcula en base a su total a pagar en la tienda`);
                                
              while (isNaN(donacion) || donacion.trim() === "" ) {
                    donación = prompt("❌ Debe Ingresar un porcentaje Valido");
                    }
                    return parseFloat(donacion);
                  };
                    
       let porcentaje = pedirDonacion();
                    
              if (porcentaje < 0) {
                    alert(` ❌ Para continuar debe ingresar un porcentaje ⚠️`);
                    porcentaje = parseInt(prompt(`❌ Debe Ingresar un porcentaje Valido`));
                      }
                    
        alert("✅ Gracias! ha decidido donar el"  + ${porcentaje} +"% sobre el monto total de su factura 🔜");
                


    
       

