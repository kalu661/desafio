
//Asignacion de variables y como guardarla

var dato = 21;
dato = 21;

// Tipos de datos / Bolean / Number / String / Undefinided /

// number
numint = 12;
numfloat = 1.32;

// boolean

si = true;
no = false;

// string

dato = "Hello i'm string";
dato2 = "i'm other string";

// Undefinidad

dato // su valor es undefinined
dato = undefined;


// Operadores 

Suma_de_números = 5 + 2
Resta = 5 - 2
Operaciones_con_paréntesis = (3 + 2) - 5
Divisiones ? 3 / 3
Multiplicaciones =  6 * 3

// Suma de string 

h = "hola"
m = "mundo"

console.log('h', + 'n');

// Typrof

// Conocer el tipo que tiene la variables 

typeof 5;           // number
typeof false;       // boolean
typeof "carlitos";  // string
typeof undefinided; // undefined


// Operadores booleanos 

// Negacion

!true = false
!false = true
!!true = true

// identidad o igualada

true === true // true
true === false // false
true !== false // true
true !== true // false

// Comparacion

5 > 3 // true
5 < 3 // false
3 >= 3 // true
2 <= 1 // false
"a" < "b" // true

// Operadores logicos

// Operador AND

true && true // true
true && false // false
false && true // false
false && false // false

0 && true
// 0, porque el número 0 se considera
// un valor "false"
1 && "Hola"
// "Hola", porque el número 1 (o distinto de 0)
// se considera un valor "true"

// Operador OR

true || true // true
true || false // true
false || true // true
false || false // false

var port = process.env.PORT || 5000;

// Asignacion condicional

(true) 5 : 2; // Devuelve 5
(false) 5 : 2; // Devuelve 2

// Sentencia IF

// if simple

if (condicion) {
bloque_de_codigo
}

// if ,  else

if (condicion) {
    bloque_de_codigo_1
    }
    else {
    bloque_de_codigo_2
    }

// if / else    if

if (condicion_1) {
    bloque_1
    }
    else if (condicion_2) {
    bloque_2
    }
    else if (condicion_3) {
    bloque_3
    }
    else {
    bloque_4
    }

// Sentencia Switch

switch(condicion) {
    case condicion_1:
    bloque_1
    break;
    case condicion_2:
    bloque_2
    break;
    case condicion_3:
    bloque_3
    break;
    default:
    bloque_4
    }

// Clases Core y Modulos de JavaScript

Object, Number, Array, String

// Object

var libroAngular = {
    titulo: 'Desarrollo web ágil con AngularJS',
    autor: 'Carlos Azaustre',
    paginas: 64,
    formatos: ["PDF", "ePub", "Mobi"],
    precio: 2.79,
    publicado: false
    };

//    Como podemos ver, las propiedades son pares clave-valor, separados por comas, y
//    podemos acceder a ellas de forma independiente de varias formas, con la notación
//    punto o con la notación array:

    libroAngular.titulo; // Desarrollo web ágil con AngularJS
    libroAngular['paginas']; // 64
    
// También podemos modificarlas de la misma manera:
    
    libroAngular.precio = 1.95;
    libroAngular['publicado'] = true;
   
// Con la notación array, podemos acceder a las propiedades con variables. Ejemplo:
   
    var propiedad = "autor";
    libroAngular[propiedad]; // "Carlos Azaustre"
   
 //   Clases Core y Módulos de JavaScript 22
 //   Pero no funciona con la notación punto:
 
    var propiedad = "autor";
    libroAngular.propiedad; // undefined
 
    // Como hemos dicho antes, si el objeto contiene funciones se les llama métodos. En el
   // siguiente capítulo veremos como se inicializan e invocan funciones más en detalle. Si
   // queremos crearlas dentro de un objeto e invocarlas, sería así:
   
    var libroAngular = {
        paginas: 64,
        leer: function () {
             console.log("He leído el libro de AngularJS");
    }
    };

    libroAngular.leer(); // Devuelve: "He leído el libro de AngularJS" 

    Para crear un objeto podemos hacerlo con la notación de llaves {...} o creando una
    nueva instancia de clase:

    var miObjeto = { propiedad: "valor" };
    var miObjeto = new Object({ propiedad: "valor" });

// Anidacion

var libro = {
    titulo: "Desarrollo Web ágil con AngularJS",
    autor: {
    nombre: "Carlos Azaustre",
    nacionalidad: "Española",
    edad: 30,
    contacto: {
    email: "carlosazaustre@gmail.com",
    twitter: "@carlosazaustre"
    }
    },
    editorial: {
    nombre: "carlosazaustre.es Books",
    web: "https://carlosazaustre.es"
    }
    };
    // Podemos acceder con notación punto, array, o mixto.
    libro.autor.nombre; // "Carlos Azaustre"
    libro['autor']['edad']; // 30
    libro['editorial'].web; // "https://carlosazaustre.es"
    libro.autor['contacto'].twitter; // "@carlosazaustre

// Igualdad entre objetos

var coche1 = { marca: "Ford", modelo: "Focus" };
var coche2 = { marca: "Ford", modelo: "Focus"};
coche1 === coche2; // Devuelve false, no comparten referencia
coche1.modelo === coche2.modelo; // Devuelve true porque el valor es el mismo.
var coche3 = coche1;
coche1 === coche3; // Devuelve true, comparten referencia


// Number

// Número entero, 25
25
// Número entero, 25.5. Los decimales se separan de la parte entera con punto `.`
25.5
// Número hexadecimal, se representa con 0x seguido del número hexadecimal
0x1F // 31 decimal
0xFF // 255 decimal
0x7DE // 2014
// Coma flotante, separamos la mantisa del exponente con la letra `e`
5.4e2 // Representa 5.4 * 10 elevado a 2 = 540

// Infinito

// La clase Number incluye los números Infinity y -Infinity para representar
// números muy grandes:

1/0 = Infinty
-1/0 = -Infinity
1e1000 = Infinity
-1e1000 = -Infinity

// El rango real de números sobre el que podemos operar es ~1,797x10^308 ---
// 5x10^-324`.

// Valor NaN

"a"/5 = NaN

// Creacion de un numero con clar Number

var numero = 6
var numero = new Number(6);

// Funciones de Number

parseInt()

// Devuelve el valor en base 10 por defecto

parseInt("1111"); // Devuelve 1111
parseInt("1111", 2); // Devuelve 15
parseInt("1111", 16); // Devuelve 4369

// Devuelves numero con coma flotante y la representacion decimal

parseFloat()

// Analiza la coma flotante y devuelve en decimal

parseFloat("5e3"); // Devuelve 5000

// Devuelve string con valor del numero number redondeando al alza, con tanto decimales como se indique 
// en el parametro x

number.toFixed (x)

var n = 2.5674;
n.toFixed("0"); // Devuelve "3"
n.toFixed("2"); // Devuelve "2.57"


// Devuelve un string redondeando la base o mantisa a x decimales. Es la función
// complementaria a parseFloat

number.toExponential(x)

var n = 2.5674
blur.toExponential(2); // Devuelve "2.56e+0"


// Devuelve un string con el número equivalente number en la base que se pasa por
// parámetro. Es la función complementaria a parseInt

number.toString(base)

(1111).toString(10); // Devuelve "1111"
(15).toString(2); // Devuelve "1111"
(4369).toString(16) // Devuelve "1111"


// Modulo Math

Math.PI // Número Pi = 3.14159265...
Math.E // Número e = 2.7182818...
Math.random() // Número aleatorio entre 0 y 1, ej: 0.45673858
Math.pow(2,6) // Potencia de 2 elevado a 6 = 64;
Math.sqrt(4) // raiz cuadrada de 4 = 2
Math.min(4,3,1) // Devuelve el mínimo del conjunto de números = 1
Math.max(4,3,1) // Devuelve el máximo del conjunto de números = 4
Math.floor(6.4) // Devuelve la parte entera más próxima por debajo, en este caso 6
Math.ceil(6.4) // Devuelve la parte entera más próxima por encima, en este caso 7
Math.round(6.4) // Redondea a la parte entera más próxima, en este caso 6
Math.abs(x); // Devuelve el valor absoluto de un número

// Funciones trigonométricas
Math.sin(x); // Función seno de un valor
Math.cos(x); // Función coseno de un valor
Math.tan(x); // Función tangente de un valor
Math.log(x); // Función logaritmo


// Array

// Es una colección de datos que pueden ser números, strings, objetos, otros arrays, etc...
// Se puede crear de dos formas con el literal [...] o creando una nueva instancia de la
// clase Array

var miArray = [];
var miArray = new Array();
var miArray = [1, 2, 3, 4]; // Array de números
var miArray = ["Hola", "que", "tal"]; // Array de Strings
var miArray = [ {propiedad: "valor1" }, { propiedad: "valor2" }]; // Array de objetos
var miArray = [[2, 4], [3, 6]]; // Array de arrays, (Matriz);
var miArray = [1, true, [3,2], "Hola", {clave: "valor"}]; // Array mixto

// Se puede acceder a los elementos del array a través de su índice y con length
// conocer su longitud.

var miArray = ["uno", "dos", "tres"];
miArray[1]; // Devuelve: "dos"
miArray.length; // Devuelve 3

// Si accedemos a una posición que no existe en el array, nos devuelve undefined .

miArray[8]; // undefined

// Métodos

// Array es una clase de JavaScript, por tanto los objetos creados a partir de esta clase
// heredan todos los métodos de la clase padre. Los más utilizados son:

var miArray = [3, 6, 1, 4];
miArray.sort(); // Devuelve un nuevo array con los valores ordenados: [1, 3, 4, 6]
miArray.pop(); // Devuelve el último elemento del array y lo saca. Devuelve 6 y miArray queda [1,
miArray.push(2); // Inserta un nuevo elemento en el array, devuelve la nueva longitud del array y
miArray.reverse(); // Invierte el array, [2,4,3,1]


// Join

// Sirve para crear un string con los elementos del array 

var valor = 3;
var template = [
"<li>",
valor
"</li>"
].join("");
console.log(template); // Devuelve: "<li>3</li>"

// Si queremos aplicar una misma función a todos los elementos de un array podemos
// utilizar el método map . Imaginemos el siguiente array de números [2, 4, 6, 8] y
// queremos conocer la raíz cuadrada de cada uno de los elementos podríamos hacerlo
// así:

var miArray = [2, 4, 6 ,8];
var raices = miArray.map(Math.sqrt);
});

// raices: [ 1.4142135623730951, 2, 2.449489742783178, 2.8284271247461903 ]

O algo más específico:
var miArray = [2, 4, 6, 8];
var resultados = miArray.map(function(elemento) {
return elemento *= 2;
});

// resultados: [ 4, 8, 12, 16 ]


// Filter 


// Nospermite fitrar los elementos de un array dada 
// una condicion sin necesidad de crear un bcle

var miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var resultado = miArray.filter(function(elemento) {
return elemento % 3 === 0;
});

// resultados: [ 3, 6, 9, 12, 15 ]


// El método devuelve un nuevo array sin transformar sobre el que se está invocando la
// función

var miArray = [4, 8, 15, 16, 23, 42];
miArray.slice(2); // [15, 16, 23, 42]
miArray.slice(2, 4); // [15, 16] (la posición de fin no es inclusiva)
miArray.slice(2, -1); // [15, 16, 23]
miArray.slice(2, -2); // [15, 16]


// String

// Supongamos el string con el texto "javascript"

"javascript"[2] // Acceso como array, devuelve el tercer carácter "v", ya que la primera posición
"javascript".length() // Devuelve 10
"javascript".charCodeAt(2) // Devuelve el caracter en formato UNICODE de "v", el 118
"javascript".indexOf("script"); // Devuelve el índice donde comienza el string "script", el 4
"javascript".substring(4,10); // Devuelve la parte del string comprendida entre los ind

// Creacion de string 

var texto = "Hola Mundo";
var texto = new String("Hola Mundo");


// Tansformar string a array con split()

var fecha = new Date();
fecha = fecha.toString(); // "Wed May 20 2015 20:16:25 GMT+0200 (CEST)"
fecha = fecha.split(" "); // ["Wed", "May", "20", "2015", "20:16:25", "GMT+0200", "(CEST)"]
fecha[4]; // "20:16:25"


// Funciones

// Las funciones normalmente, al acabar su ejecución devuelven un valor, que
// conseguimos con el parámetro return . Se declaran con la palabra reservada
// function y a continuación suelen llevar un nombre, para poder invocarlas más
// adelante. Si no llevan nombre se les llama funciones anónimas


function saludar (nombre) {
    return ("Hola " + nombre + "!");
    } s
    aludar("Carlos"); // Devuelve "Hola Carlos!"


// Si no pasásemos ningún valor por parámetro, obtendriamos el valor undefined .
  
function saludar (nombre) {
    return ("Hola " + nombre + "!");
    } s
    aludar(); // Devuelve "Hola undefined!"

    // Parametros por defecto

// Una buena práctica para evitar errores o que se tome el valor undefined sin que
// podamos controlarlo, es utilizar algunos de los operadores booleanos que vimos en
// capítulos anteriores. Si tomamos el operador OR || podemos asignar un valor por
// defecto si no está definido.

function saludar (tipo, nombre) {
    var tipo = tipo || "Hola";
    var nombre = nombre || "Carlos";
    return (tipo + ", " + nombre + "!");
} 

saludar(); // "Hola, Carlos!"
saludar("Adios"); // "Adios, Carlos!"
saludar("Hasta luego", "Pepe"); // "Hasta luego, Pepe!"


// Ambito de una funcion 


// En la versión 6 de ECMAScript tenemos los tipos de variable let y const en lugar de
// var y definen unos ámbitos específicos. const crea una constante cuyo valor no
// cambia durante el tiempo y let define el ámbito de la variable al ámbito donde ha sido
// definida (por ejemplo en una función).

var valor = "global";
function funcionlocal () {
var valor = "local";
return valor;
} 

console.log(valor); // "global"
console.log(funcionLocal()); // "local"
console.log(valor); // "global"

// Cñpsures

// Funciones como objetos 

// Las funciones en JavaScript son objetos, ya que todo en JavaScript es un objeto,
// heredan sus propiedades de la clase Object . Entonces pueden ser tratadas como tal.
// Podemos guardar una función en una variable y posteriormente invocarla con el
// operador paréntesis ()

var saludar = function (nombre) {
    return "Hola " + nombre;
    };
    saludar("Carlos"); // "Hola Carlos"

    saludar; // Devuelve 'function(nombre) { return "Hola " + nombre };'

// Funciones anidadas

// Las funciones pueden tener otras funciones dentro de ellas, produciendo nuevos
// ámbitos para las variables definidas dentro de cada una. Y para acceder desde el
// exterior a las funciones internas, tenemos que invocarlas con el operador doble
// paréntesis ()() .

    var a = "OLA";

    function global () {
        var b = "K";
    function local () {
        var c = "ASE";
        return a + b + c;
    }  
    
    return local;
} 

global(); // Devuelve la función local: "function local() { var c ="ASE"...""
global()(); // Devuelve la ejecución de la función local: "OLAKASE"

var closure = global();
closure(); // Devuelve lo mismo que global()(): "OLAKASE"

// Funcion cierre o closure

var miContador = (function () {
    var _contador = 0; // Por convención, a las variables "privadas" se las llama con un `_` delant
    function incrementar () {
    return _contador++;
    } f
    unction decrementar () {
    return _contador--;
    } f
    unction valor () {
    return _contador;
    } r
    eturn {
    incrementar: incrementar,
    decrementar: decrementar,
    valor: valor
    }
    })();
    miContador.valor(); // 0
    miContador.incrementar();
    miContador.incrementar();
    miContador.valor(); // 2
    miContador.decrementar();
    miContador.valor(); // 1


// Funciones como clases 

function inventario (nombre) {
    var _nombre = nombre;
    var _articulos = {};
    function add (nombre, cantidad) {
    _
    articulos[nombre] = cantidad;
    } f
    unction borrar (nombre) {
    delete _articulos[nombre];
    } f
    unction cantidad (nombre) {
    return _articulos[nombre];
    } f
    unction nombre () {
    return _nombre;
    } r
    eturn {
    add: add,
    borrar: borrar,
    cantidad: cantidad,
    nombre: nombre
    }
    }

//    Una vez construido la closure, podemos usar sus métodos

    var libros = inventario("libros");
    libros.add("AngularJS", 3);
    libros.add("JavaScript", 10);
    libros.add("NodeJS", 5);
    libros.cantidad("AngularJS"); // 3
    libros.cantidad("JavaScript"); // 10
    libros.borrar("JavaScript");
    libros.cantidad("JavaScript"); // undefine

// Codificacion con CASE

function Inventario (nombre) {
    this.nombre = nombre;
    this.articulos = [];
    this.add = function (nombre, cantidad) {
    this.articulos[nombre] = cantidad;
    } t
    his.borrar = function (nombre) {
    delete this.articulos[nombre];
    } t
    his.cantidad = function (nombre) {
    return this.articulos[nombre];
    } t
    his.getNombre = function () {
    return this.nombre;
    }
    }

   // Una vez definida la clase, crear objetos a partir de ella e invocar a sus métodos sería
   // así:

    var libros = new Inventario("Libros");
    libros.add("AngularJS", 3);
    libros.add("JavaScript", 10);
    libros.add("NodeJS", 5);
    libros.cantidad("AngularJS"); // 3
    libros.cantidad("JavaScript"); // 10
    libros.borrar("JavaScript");
    libros.cantidad("JavaScript"); // undefined


    // Uso de Prototype

    function Inventario (nombre) {
        this.nombre = nombre;
        this.articulos = [];
        };
        Inventario.prototype = {
        add: function (nombre, cantidad) {
        this.articulos[nombre] = cantidad;
        },
        borrar: function (nombre) {
        delete this.articulos[nombre];
        },
        cantidad: function (nombre) {
        return this.articulos[nombre];
        },
        getNombre: function () {
        return this.nombre;
        }
        };

        var libros = new Inventario('libros');
        libros.getNombre();
        libros.add("AngularJS", 3);
        ...
        var comics = new Inventario('comics');
        comics.add("The Walking Dead", 10);


 // Clases en ECMAScript 6
    
// El ejemplo anterior del Inventario , transformado a ES6 sería tal que así
 
 class Inventario {
 constructor(nombre) {
 this.nombre = nombre;
 this.articulos = [];
 } 
 add (nombre, cantidad) {
 this.articulos[nombre] = cantidad;
 } 
 borrar (nombre) {
 delete this.articulos[nombre]
 } 
 cantidad (nombre) {
 return this.articulos[nombre]
 } 
 getNombre () {
 return this.nombre;
 }
 }

 // El método especial constructor sería el que se definía en la función constructora
 // anterior. Después los métodos add , borrar , cantidad y getNombre estarían dentro
 // de la clase y sustituirían a las funciones prototipales de la versión ES5.

// Su utilización es igual que en la versión anterior

var libros = new Inventario("Libros");
libros.add("AngularJS", 3);
libros.add("JavaScript", 10);
libros.add("NodeJS", 5);
libros.cantidad("AngularJS"); // 3
libros.cantidad("JavaScript"); // 10
libros.borrar("JavaScript");
libros.cantidad("JavaScript"); // undefined


//Con esta nueva sintáxis podemos implementar herencia de una forma muy sencilla.
//Imagina que tienes una clase Vehículo de la siguiente manera:

class Vehiculo {
constructor (tipo, nombre, ruedas) {
this.tipo = tipo;
this.nombre = nombre;
this.ruedas = ruedas
} 
getRuedas () {
return this.ruedas
} 
arrancar () {
console.log(`Arrancando el ${this.nombre}`)
} 
aparcar () {
console.log(`Aparcando el ${this.nombre}`)
}
}

class Vehiculo {
    constructor (tipo, nombre, ruedas) {
    this.tipo = tipo;
    this.nombre = nombre;
    this.ruedas = ruedas
    } g
    etRuedas () {
    return this.ruedas
    } a
    rrancar () {
    console.log(`Arrancando el ${this.nombre}`)
    } a
    parcar () {
    console.log(`Aparcando el ${this.nombre}`)
    }
    }
    // Y quieres crear ahora una clase Coche que herede de vehículo para poder utilizar los
    // métodos que esta tiene. Esto lo podemos hacer con la clase reservada extends
    // y con super() llamamos al constructor de la clase que hereda
    
    class Coche extends Vehiculo {
    constructor (nombre) {
    super('coche', nombre, 4)
    }
    }

   //  Si ahora creamos un nuevo objeto Coche podemos utilizar los métodos de la clase
  // Vehiculo

    let fordFocus = new Coche('Ford Focus')
    fordFocus.getRuedas() // 4
    fordFocus.arrancar() // Arrancando el Ford Focus

// Bucles

// Bucles while

// La sintaxis de un bucle while es la siguiente, el bloque de código dentro del while se
// ejecutará mientras se cumpla la condición.

    var condicion; // Inicialización
    while (condicion) { // Condición de permanencia
    bloque_de_codigo // Código a ejecutar y actualización de la variable de control
    }

// Por ejemplo si queremos mostrar por consola los números del 1 al 10, con un bucle

    while sería así:
        var i = 1; // Inicialización
    while (i < 11) { // Condición de permanencia
    console.log(i); // Código a ejecutar
    i++; // Actualización de la variable de control
    } // Devuelve: 1 2 3 4 5 6 7 8 9 10

// Bucle Do/While



