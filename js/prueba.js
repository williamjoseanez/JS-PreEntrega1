// let saludo = document.getElementById("saludo");
// let saludo = document.getElementById("saludo");



//nos traemos el formulario
let formularioId = document.getElementById("formulario");

//agregamos el evento submit que se reconoce cuando hago click en el boton enviar
formularioId.addEventListener("submit", (e) => {
  //código para que el formulario no se recargue
  e.preventDefault();

  //nos traemos los inputs del objeto e, su propiedad target y el children
  let inputs = e.target.children;
  // console.log(inputs[0].value);
  // console.log(inputs[1].value);

  //validamos si el primer input tiene el @ en caso de que no borramos el input
  if (!inputs[0].value.includes("@")) {
    inputs[0].value = inputs[0].value + "@gmail.com";
  }
});
let seccion = inputs
// let seccion = prompt(`Ingrese la seccion que desea entrar
// 1: fiambres  2: almacen`);

const productos = [
  { id: 1, nombre: "Mortadela", precio: 1000, presentacion: "Gramos" },
  { id: 2, nombre: "Salame", precio: 700, presentacion: "Gramos" },
  { id: 3, nombre: "Queso de Maquina", precio: 350, presentacion: "Gramos" },
  { id: 4, nombre: "Lomito Ahumado", precio: 100, presentacion: "Gramos" },
];

if (seccion === "1") {
  saludo.innerHTML = `<h3>Bienvenido a tu Fiambreria,
  estos son los productos que puedes agregar al carrito</h3>`;
  saludo.className = "rojo";


let precio = parseInt(prompt("Ingrese el monto a gastar"));
let filtrados = productos.filter((item) => item.precio < precio);

filtrados.forEach((producto) => {
  let div = document.createElement("div");
  div.innerHTML = `
    <h2>Id: ${producto.id}</h2>
    <p>Nombre: ${producto.nombre}</p>
    <b>$${producto.precio}</b>
    <p>${producto.presentacion}</p>
    
    <hr />
  `;

  document.body.append(div);
});}
 else if (seccion === "2") {
  saludo.innerHTML = `<h3>Bienvenido al almacen,
  estos son los productos que puedes agregar al carrito</h3>`;
  saludo.className = "azul";

  const productos = [
    { id: 1, nombre: "pantalon", precio: 1000 },
    { id: 2, nombre: "sueter", precio: 700 },
    { id: 3, nombre: "lentes", precio: 350 },
    { id: 4, nombre: "media", precio: 100 },
  ];
// let precio = parseInt(prompt("Ingrese el monto a gastar"));
let filtrados = productos.filter((item) => item.precio < precio);

filtrados.forEach((producto) => {
  let div = document.createElement("div");
  div.innerHTML = `
    <h2>Id: ${producto.id}</h2>
    <p>Nombre: ${producto.nombre}</p>
    <b>$${producto.precio}</b>
    <hr />
  `;

  document.body.append(div);
});
} else {
  saludo.innerHTML = "Gracias por visitar mi tienda";
  saludo.className = "verde";
}

Swal.fire(
  'Excelente!',
  'A continuacion te muestro los articulos disponibles!',
  'success'
)