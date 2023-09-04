// const usuarios = [{ nombre: "andres", contrasena: "1234" }];

// let formularioId = document.getElementById("formularioId");

// formularioid.addEventListener("submit", (e) => {
//   e.preventDefault();

//   let inputs = e.target.children;
//   let nombre = inputs[0].value;
//   let contrasena = inputs[1].value;

//   let usuario = usuarios.find((item) => item.nombre === nombre);

//   if (usuario.contrasena === contrasena) {
//     let div = document.createElement("div");
//     div.innerHTML = "Bienvenido";
//     document.body.append(div);
//   }else{
//     let div = document.createElement("div");
//     div.innerHTML = "Usuario o contrasena incorrectas";
//     document.body.append(div);
//   }
// });
// const usuarios = [{ nombre: "andres", contrasena: "1234" }];

// let formulario = document.getElementById("formulario");

// formulario.addEventListener("submit", (e) => {
//   e.preventDefault();

//   let inputs = e.target.children;
//   let nombre = inputs[1].value;
//   let contrasena = inputs[3].value;

//   let usuario = usuarios.find((item) => item.nombre === nombre);

//   if (usuario.contrasena === contrasena) {
//     let div = document.createElement("div");
//     div.innerHTML = "Bienvenido";
//     document.body.append(div);
//   }else{
//     let div = document.createElement("div");
//     div.innerHTML = "Usuario o contrasena incorrectas";
//     document.body.append(div);
//   }

  //traer el localstorage
  //buscar el nombre del usuario en el storage
  //validar que la contrasena sea igual a la de la info recuperada del storage
// });



const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const nombre = 'jake';
const contrasena = '1234';

const form = document.querySelector('#form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nombreInput = document.querySelector('#nombre').value;
  const contrasenaInput = document.querySelector('#contrasena').value;

  const divElement = document.createElement('DIV');

  if (nombreInput === nombre && contrasenaInput === contrasena) {
    const pElement = document.createElement('P');
    pElement.textContent = 'Bienvenido';
    divElement.appendChild(pElement);
    appDiv.appendChild(divElement);
  } else {
    const pElement = document.createElement('P');
    pElement.textContent = 'Usuario o contraseña incorrectos';
    divElement.appendChild(pElement);
    appDiv.appendChild(divElement);
  }
});
