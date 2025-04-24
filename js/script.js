/* console.log("probando consola");
console.log("Nuevamente un comentario");



/* Esta se usa para cuando tendras comentarios de varias lineas (Slash, asterisco y cierro con asterisco, slash)*/

//Este es para solo una lines (Slash, slash)

/* Variables*/

//Automaticas

// debo colocar el nombre de la variable

            /*nombre= "Carlucci"*/

/* la palabra nombre es la variable, el igual es para decir que el contenido del nombre es Carlucci, luego invocamos el CONSOLE para mostrar el contenido del nombre en la pantalla de la consola.*/

            /*console.log(nombre)*/

//vemos que sale en la consola, CARLUCCI.

/*Esto funciona, pero no es la manera correcta de hacerlo*/

//Otra forma incorrecta "VAR"

            /*var nombre = "usando var"
            console.log(nombre);*/

//La forma recomendada es: "LET" 

/* Se usa para cuando se que se puedan reasignar valores, es decir, que si durante el código cambian el contenido de la variable no importa*/

            /*let nombreUsado = "Variable 'correcta usando let'";
            console.log(nombreUsado)*/

//Variable tipo constante CONST

/*No se puede modificar. es decir, si en lineas de codigo mas arriba yo le puse un valor y luego se lo cambio, me saldrá error. No se modifica. - Esta se usa para cuando NO SE PUEDA CAMBIAR EL VALOR DE NINGUNA VARIABLE */

         /*const nombreVariable4 = 'usando "const"';
         console.log(nombreVariable4)*/


/* Operadores */

//Asignación

//El signo igual= es un valor de asignación//

/*tipos de dato primitivos*/

//String que es una cadena de texto (lo que hemos escrito hasta ahorita)//

//Ahora haganmos ejemplos con una variable que se puede modificar//

   //  let   miVariable 

/*Si  a  esto le quiero asignar un valor, es decir, escribir con un string, le pongo signo igual, pero no es el caso*/

//String cadena de texto

            /*let miVariable = 'texto';
            console.log('miVariable:',miVariable)*/

//Undefined -> revisar el video 9:00 pm


/* const nombre = "Victor";
const apellido = "Carlucci";
const edad = "31";

console.log("Soy", nombre, apellido, "y tengo", edad, "años");
console.log(`Soy ${nombre} ${apellido} y tengo ${edad} años.`); //Interpolación, es la que se recomienda


/* Operadores 
// Asignacion

let miVariable1= 'Victor'
let miVariable2= 'Carlucci'

//Concatenación

const nombreCompleto = miVariable1 + miVariable2;
console.log('nombreCompleto', nombreCompleto);

miVariable2= 5;
let resultado = miVariable1 + miVariable2;

Aritmeticos
miVariable1= 20;
resultado = miVariable1 + miVariable2;
console.log(resultado); */

// Así lo hice yo, pero el profesor mostró una mejor forma

/* const valor1 = 20
   const valor2 = 3

const resultado1 = valor1 + valor2;
const resultado2 = valor1 - valor2;
const resultado3 = valor1 * valor2;
const resultado4 = valor1 / valor2;

console.log('20 + 3 ' , '=' ,  resultado1);
console.log('20 - 3 ' , '=' , resultado2);
console.log('20 * 3 ' , '=' , resultado3);
console.log('20 / 3 ' , '=' , resultado4);*/

//forma del profesor:

/* const num1 = 23;
   const num2 = 3;

const sumResult = num1 + num2;
const subResult = num1 - num2;
const mulResult = num1 * num2;
const divResult = num1 / num2;

const result = `

${num1} + ${num2} = ${sumResult}
${num1} - ${num2} = ${subResult}
${num1} * ${num2} = ${mulResult}
${num1} / ${num2} = ${divResult}

` 
console.log(result) */

/* Comparación - El operador de comparación son 2 signos de igual == juntos  y el resultado siempre será un buleano,es decir "true o false"*/

/* Existe IDÉNTICO QUE este se representa con tres signos de igual seguidos === y de igual forma el resultado es FALSE o TRUE 

Este es el recomendado siempre que tengamos que hacer comparaciones, esto nos da mayo exactitud, pero si solo queremos saber si son iguales*/

/* miVariable1 = 10;
miVariable2 = 10;
console.log('miVariable1:' , miVariable1);
console.log('miVariable2:' , miVariable2);
resultado = miVariable1 == miVariable2;
console.log('resultado:' , resultado) */

/*¿Que sucede si cambia los valores de las variables, voy a poner una de NUMERO y la otra String*/

/* miVariable1 = 10;
miVariable2 = '10';
console.log('miVariable1:' , miVariable1);
console.log('miVariable2:' , miVariable2);
resultado = miVariable1 === miVariable2;
console.log('resultado:' , resultado) */

/*Saldría FALSE porque aunque son dos 10, uno es numero y el otro es texto, entonces no son idénticos, son iguales.*/

//Tambien existe la figura de DIFERENTE !=//

/* resultado = miVariable1 != miVariable2;
console.log('resultado:' , resultado) */

/*Está tambien DIFERENTE DE MANERA ESTRICTA que se representa !== , aqui estoy preguntando ¿lo que hay en mi variable 1 es totalmente diferente a mi variable 2? y saldrá TRUE*/

/* resultado = miVariable1 !== miVariable2;
console.log('resultado:' , resultado) */

// Existe mayor que > y esta menor que < //

// Mayor que

/* resultado = miVariable1 > miVariable2;
console.log('resultado:' , resultado) */

// Menor que

/* resultado = miVariable1 > miVariable2;
console.log('resultado:' , resultado) */

/* Tambien tenemos los mayor o igual y los menor o igual, es decir: Mayor o igual >= 
Menor o igual <= */

/* resultado = miVariable1 >= miVariable2;
console.log('resultado:' , resultado) */

/* resultado = miVariable1 <= miVariable2;
console.log('resultado:' , resultado) */













