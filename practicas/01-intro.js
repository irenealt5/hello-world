// Constants
const FEMALE = 'FEMALE'
const MALE = 'MALE'
const OTHER = 'OTHER'

// Variables
let name = "Irene Altamirano"
let age = 35
let gender = OTHER
let greeting = `Hola soy ${name}, tengo ${age} años`

// Estructuras de Control
// if, else, switch, case

if (gender === FEMALE) {
   // MALE = '234' Type Error
  greeting = `${greeting} y soy mujer.`
} else if (gender === MALE ) {
  greeting = `${greeting} y soy hombre.`
} else {
  greeting = `${greeting} y soy binario.`
}

// Ciclos
// for, forEach, map, reduce, filter
let table = 7
for (let i = 1; i <= 10; i++) {
  let template = `${table} x ${i} = ${table*i}`
  console.log(template)
}

console.log(table)
// console.log(template) // Reference error

// Función declaración
// t. definición
function suma(a, b) {
  return a + b
}
// t. ejecución
let r = suma(10, 20)
console.log('r=', r)

// Función expresión
const sum = (a, b) => {
  return a + b
}

let x = sum(31, 69)
console.log('x=', x)


// Declarión de un Objeto Literal
const Person = {
  name: 'Irene Altamirano'
}

// callback: función anónima 
// () => {}
const data = [1,2,3,4,5,6,7,8,9,10]
const myTable = 3
let results = ''

// Iteración de un array: data
const renderTable = (value) => {
  let result = value * myTable
  let template = `${myTable} x ${value} = ${result}`
  
  results = results + template + '\n'
}

data.forEach(renderTable)

console.log(results)

// fn anónima
data.forEach((value) => {
  console.log(value)
})


console.log('===============Fn=================')

// forEach: ejecuta una fn por cada item del array 
const ages = [34, 35, 48]

// Sol. A
ages.forEach((a) => {
  console.log(a)
})

// Sol. B
const print = (b) => {
  console.log(b)
}
ages.forEach(print)


// Práctica 1
// Escribe una función que dado un número x cálcule su
// cuadrado 

// vars
//const num = 8

// declaración - x: parámetros
function cuadrado(x) {
  return x * x
}

// ejecución - num: argumentos
let resultado = cuadrado(3)

console.log('El cuadrado de 8 es ', resultado)






























