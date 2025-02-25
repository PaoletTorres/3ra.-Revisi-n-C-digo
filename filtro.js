// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

//const li = document.getElementsByName("#lista-de-productos"); 
document.addEventListener("DOMContentLoaded", function(){ //Se agrega esta instrucción para que JavaScript espere hasta que todo el HTML se haya cargado
  const li = document.querySelector( ".lista-de-productos" ); //Se agrega . ya que está declarado en CSS como una clase
  //Se usa .querySelector ya que este llama a los elementos de CSS 
});


for (let i = 0; i < productos.length; i++) {
  let d = document.createElement("div")
  d.classList.add("producto")

  let ti = document.createElement("p") //Se cambia var por let 
  ti.classList.add("titulo")
  ti.textContent = productos[i].nombre
  
  let imagen = document.createElement("img");
  imagen.src = productos[i].img; //Borro setAtribute() para hacerlo más concreto  
  imagen.alt = productos[i].img; //Agregue .alt porque deacuerdo a la documentación si en dado caso que la imagen no llega a aparecer se puede buscar por el texto alternativo. 

  d.appendChild(ti);
  d.appendChild(imagen); //se agrega ; por buena práctica. 

 if(li){ //agrego la sntencia para evitar que si li no está en el DOM no siga con el ciclo
  li.appendChild(d);
 }else{ 
  console.log("No se encontro el producto"); 
 }  
}

displayProductos(productos);
const botonDeFiltro = document.querySelector("button");
const li = document.querySelector(".lista-de-productos"); 
const input = document.querySelector("miInput") 

botonDeFiltro.onclick = function() {
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  const texto = input.ariaValueMax.toLowerCase(); //Agrego esta instrucción para que convierta en minúsculas 
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  for (let i = 0; i < productosFiltrados.length; i++) {
    let d = document.createElement("div")
    d.classList.add("producto")
  
    let ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre
    
    let imagen = document.createElement("img");
    imagen.src = productosFiltrados[i].img; 
    imagen.alt = productosFiltrados[i].nombre; // Agregue esta instrucción como en la línea 26
  
    d.appendChild(ti);
    d.appendChild(imagen);
    li.appendChild(d);
  }

}; 

const filtrado = (productos, texto) => productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto)); 