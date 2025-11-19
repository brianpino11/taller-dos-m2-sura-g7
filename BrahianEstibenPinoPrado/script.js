//Ejercicio 1: Duplicar Números (map)
let puntos = [10, 20, 30, 40];
let puntosDoble = puntos.map(num => num * 2);

console.log(puntos);
console.log(puntosDoble);  

//Ejercicio 2: Lista de Nombres (map con objetos)
let usuarios = [
  { id: 1, nombre: "Ana" },
  { id: 2, nombre: "Luis" },
  { id: 3, nombre: "Carlos" }
];

let nombres = usuarios.map(u => u.nombre);
console.log(nombres);

//Ejercicio 3: Notas Aprobadas (filter)
let notas = [8, 5, 10, 3, 7];

let aprobadas = notas.filter(n => n >= 6);
console.log(aprobadas);