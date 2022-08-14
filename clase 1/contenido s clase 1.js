
// convenciones de naming o nombrado / escritura

// let variable con espacios =  // ESTO NO SE HACE

//camelCase
let camelCase = estoyEscribiendoEnCamelCase
//snakeCase
let snake_case = estoy_escribiendo_en_snake_case

//TIPOS DE DATOS 

//string -> cadena de texto -> '' o ""
let string = 'soy un string'
//number -> numero
let number = 0
// boolean -> true o false (verdadero o falso)
let booleanTrue = true
let bolleanFalse = false
//undefined -> no definido
let variableUndefined = undefined
// NaN -> not a number (no es un número)
let Nan = NaN
//null -> nulo
let nulo = null


//OPERADORES 

//Asignación -> =, + , += , %= 

let firstNumber = 5
firstNumber = firstNumber + 5

//ESTO ES LO MISMO QUE LO PRIMERO
let firstNumberr = 5
firstNumberr += 5

//---------------------------------------------

let someNumber = 5
let otherNumber = 5

let resto = 5 % 5 // DIVIDE Y TE DEVUELVE EL RESTO

// Link para ver todos los operadores de asignación : 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators


//Aritmétricos

// Operadores Aritmétricos -> ++, --, /, *

let numero = 1
numero++ // SUMA 1 AL NUMERO DECLARADO
numero-- // RESTA 1 AL NUMERO DECLARADO

let otroNumero = 5
let resultadoDivision = otroNumero / 1 // LA BARRA DIVIDE
let resultadoMultiplicacion = otroNumero * 1 // EL * MULTIPLICA


//LINK PARA VER OPERADORES ARITMÉTRICOS = https://tech-wiki.online/es/javascript-math-operators.html . 

//------------------------------------------------------------------------------------


//OPERADORES LOGICOS -> === , ==,  !=, !== ,>, <, >=, <= , && (AND), || (OR)
// >, <, >=, <= -> ESTOS FUNCIONAN SOLO PARA VALORES NUMERICOS

// == -> compara solo el valor de la variable
let number1 = 5
let number2 = '5'

if (number1 == number2) {
    console.log('son valores iguales pero no tipos de datos iguales')
}

//ESTO NOS DEVUELVE VERDADERO PORQUE COMPARA VALORES DE LA VARIABLE PERO NO LOS TIPOS DE DATOS

//-----------------------------------------------------------------


// === -> compara el valor de una variable y el tipo dato

let numberr1 = '5'
let numberr2 = 5

if (numberr1 === numberr2) {
    console.log('son valores iguales y tipos de datos iguales') // TRUE
} else {
    console.log('no man, no es lo mismo. Estas comparando un string con un numero')
}

//ESTO NOS DEVUELVE  'no man, no es lo mismo. Estas comparando un string con un numero'


//----------------------------------------------------------------------------------------

if (numberr1 != numberr2) { //ESTO ESTA PREGUNTANDO SI LOS VALORES SON DISTINTOS
    return true
}

//----------------------------------------------------------------------------------------

// && -> ESTO HACE UNA DOBLE COMPARACION, PRIMERO COMPARA IZQUIERDA LUEGO COMPARA DERECHA

let paraComparar1 = 5
let paraComparar2 = 5
let paraComparar3 = 0

if (paraComparar1 === paraComparar2 && paraComparar2 === paraComparar3) {
    console.log('LAS COMPARACIONES SON VERDADERAS')
    return true
} else {
    console.log('LAS COMPARACIONES NO SON VERDADERAS')
    return false
}

// ESTO NOS DEVUELVE FALSE.

//-----------------------------------------------------------------------------------

// || -> OR, ESTO COMPARADA PRIMERO LA IZQUIERDA Y LUEGO LA DERECHA

let paraCompararr1 = 5
let paraCompararr2 = 5
let paraCompararr3 = 0

if (paraCompararr1 === paraCompararr2 || paraComparar2 === paraCompararr3) {
    console.log('LAS COMPARACIONES SON VERDADERAS')
    return true
} else {
    console.log('LAS COMPARACIONES NO SON VERDADERAS')
    return false
}

//ESTO NOS DEVUELVE TRUE


// LINK PARA VER LOS OPERADORES LÓGICOS : https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators
//---------------------------------------------------------------------------------------

//TERNARIOS -> SON BASICAMENTE LO MISMO QUE EL IF, ELSE IF, ELSE PERO RESUMIDO, POR EJEMPLO, SI QUEREMOS HACER LO MISMO
// QUE ESTAMOS HACIENDO ARRIBA (EL IF), PODEMOS HACER ESTO 

paraCompararr1 === paraCompararr2 ? true : false
//ESTO NOS DEVUELVE TRUE

let paraCompararrr1 = 5
let paraCompararrr2 = 6

paraCompararrr1 === paraCompararrr2 ? // ESTO ES VERDADERO?
    console.log('esto es verdadero') : // HACEME ESTO, SI NO 
    console.log('no son verderos') // HACEME ESTO

//----------------------------------------------------------------------------------------

//BUCLES


// WHILE -> MIENTRAS

let numerito1 = 5

while (numerito1 > 1) {
    console.log('ENTRE AL WHILE')
    numerito1--
}


//---------------------------------------------------------------------------------------------

//FOR

const soyUnString = 'soyUnString'

//soyUnString.length es 10
//ASIGNAMOS ; COMPARAMOS ; MANIPULAMOS EL VALOR QUE ASIGNAMOS
for (let i = 1; i < soyUnString.length; i++) {

    //HACEMOS ALGO HASTA QUE SE CUMPLA LA COMPARACION
    console.log('estoy preguntando y me estoy sumando')
}

//ESTO VA A HACER UN CONSOLE LOG 10 VECES


//-----------------------------------------------------------------------------------------

//ARRAYS 
let variable = 1

//LOS ARRAYS ALMACENAN MULTIPLES DATOS
let array = ['valor1', 'valor2', 3, true, false, 'valor3', variable]

console.log(array[0]) // ESTOY ACCEDIENDO AL STRING 'valor1'

for (let i = 1; i < array.length; i++) {
    //HACEMOS ALGO HASTA QUE SE CUMPLA LA COMPARACION
    console.log('estoy preguntando y me estoy sumando')
}

//EL FOR VA A ENTRAR SIEMPRE Y CUANDO LA CANTIDAD DE VALORES EN EL ARRAY SEA MAYOR A 1 (i)



// OTRO EJEMPLO DE COMO ACCEDER A LOS VALORES 
let array1 = ['valor1', 'valor2', 3, true, false, 'valor3', 1]

for (let i = 1; i < array1.length; i++) {
    //HACEMOS ALGO HASTA QUE SE CUMPLA LA COMPARACION
    console.log(array[i])
    // array[i] ESTO LA PRIMERA VEZ VA A SER 'valor1'
    // array[i] LA SEGUNDA VEZ VA A SER 'valor2', etc....
}



//------------------------------------------------------------------------------------

//METODOS DE ARRAY (SUPER IMPORTANTE SABER ESTO, SE USAN ¡¡¡SIEMPRE!!!!)
//INVESTIGAR EN INTERNET MAS METODOS DE ARRAY

const exampleArray = [1, 2, 3, 4, 5]

//.length
exampleArray.length // NOS DEVUELVE LA ¡CANTIDAD! DE ELEMENTOS QUE HAY EN UN ARRAY, OSEA : 5

//.pop
exampleArray.pop() // ESTO NOS SACA EL ULTIMO ELEMENTO DE UN ARRAY Y ¡NOS LO DEVUELVE!

//.shift 
exampleArray.shift() // ESTO ELIMINA EL PRIMER ELEMENTO DE UN ARRAY Y ¡NOS LO DEVUELVE!

//.push
exampleArray.push('hola') // ESTO AGREGA UN NUEVO ELEMENTO AL FINAL DEL ARRAY

//forEach
exampleArray.forEach(elemento => { //RECORRE EL ARRAY Y POR CADA ELEMNTO DEL MISMO HACES ALGO 
    elemento++
    console.log(elemento)
})

//map
// const exampleArray = [1, 2, 3, 4, 5]
const resultadoDelMap = exampleArray.map(elemento => { // RECORRE EL ARRAY Y POR CADA ELEMENTO HACE ALGO Y
    return elemento                          //RETORNA UN NUEVO ARRAY CON EL RESULTADO DE LA OPERACION
    // ALMACENADO EN LA VARAIBLE QUE CONTIENE EL MAP
})
console.log(resultadoDelMap)

//filter
const resultadoDelFilter = exampleArray.filter(elemento => { // ESTO RETORNA TODOS LOS ELEMENTOS QUE CUMPLAN CON LA CONDICION DADA
    return elemento === 1                                   // EN UN NUEVO ARRAY, ESE ARRAY EN ESTE CASO ES resultadoDelFilter
})



//---------------------------------------------------------------------------------------------------

//FUNCIONES EN JAVASCRIPT 

function saludar(hola) { // DECLARAMOS
    if (hola === 'hola') {
        return 'te estoy saludando de bienvenida'
    } else if (hola === 'chau') {
        return 'te estoy despidiendo'
    }

}

saludar('hola') // LLAMAMOS A LA FUNCION INYECTANDO PARAMETROS


