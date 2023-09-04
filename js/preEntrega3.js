  const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

// submit
const formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

//  Validar el Formulario...

    const { nombre, email, mensaje } = datos;

    if(nombre === '' || email === '' || mensaje === '' ) {
        console.log('Al menos un campo esta vacio');
        mostrarError('Todos los campos son obligatorios');
        return; // Detiene la ejecución de esta función
    }

    console.log('Todo bien...')

    mostrarMensaje('Mensaje enviado correctamente');
});


function mostrarError(mensaje) {
    const alerta = document.createElement('p');
    alerta.textContent = mensaje;
    alerta.classList.add('error');

    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 3000);
}

function mostrarMensaje(mensaje) {
    const alerta = document.createElement('p');
    alerta.textContent = mensaje;
    alerta.classList.add('correcto');
    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 3000);
}


// Eventos de los Inputs...
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');


nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

function leerTexto(e) {
    
    datos[e.target.id] = e.target.value;

   }

Swal.fire(
        'Bienvenido!',
        'A continuacion envianos tus datos!',
        'success'
      )

    //   if(Notification.permission == 'granted') {
    //     new Notification('Notificación', {
    //         icon: '../img/instagram.png',
    //         body: 'Avanzando con la 3ra Pre-entrega JS'
    //     })
    // }