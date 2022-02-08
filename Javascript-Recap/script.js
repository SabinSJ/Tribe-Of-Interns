//1. metode de ES6 - sa stiti care sunt si ce presupune fiecare 

//exemplu de functie clasica
var multiply = function(a, b){
    return a * b;
}

console.log(multiply(2,3))

//functia de mai sus poate fi scrisa mai simplificat, utilizand metoda "Arrow Function"
var multiply = (a, b) => a * b;

console.log(multiply(2,3), '\n')

//Metoda For/of Loop

const fruits = ['banana', 'apple', 'grapes', 'watermelon'];
let fruitString = '';

for(let fruit of fruits)
{
    fruitString += fruit + ', ';
}

console.log(fruitString)

//Obiecte Map - reprezinta o colectie ce poate contine perechi de chei-valori

const colors = new Map([['1','red'],['2','green'],['3','orange']])

var itr = colors.values()

console.log(itr.next())
console.log(itr.next())
console.log(itr.next())
console.log(itr.next())

//Obiecte Set
const electronics = new Set();
electronics.add('laptop');
electronics.add('smartphone');
electronics.add('smartTv');
electronics.add('wireless headphones')

console.log(electronics)

//2. diferenta dintre var, let, const 

var value = 5; // orice tip de variabila, var, let, const, declarat global va putea fi accesat si in interiorul functii, si in exteriorul acesteia.

function sayHello(){
    let greet = 'hello'; // o variabila de tip let declarata in interiorul unei functii va putea fi accesat doar in acea functie.
    greet = 'sal' // unei variabile de tip let i se poate modifica valoarea, dar nu poate fi redeclarat

    var a = 2; // daca un var este declarat in interiorul unei functii, acesta nu poate fi accesat in afara acesteia

    const abc = 'abc'; // o variabila const in interiorul unei functii se comporta la fel ca un let sau var, numai ca nu poate fi modificata valoarea.
    console.log(`${greet}, ${value}, ${a}, ${abc}`)
}

sayHello();

//console.log(`${greet}, ${a}, ${abc}`) // variabilele de tip let, var si const fiind folosite in exteriorul functiei unde acesta a fost declarat, nu va pot fi recunoscute.
console.log(value) // variabila de tip var fiind declarata global, poate fi accesat si in exteriorul functiilor

//3. spread operator

// operatorul spread are ca sintaxa 3 puncte urmat de numele array-ului. Acesta permite extinderea, concatenarea array-urilor intr-o forma mult mai simplificata.

let arr1 = [1,2,3];
let arr2 = [4,5,6];

//concatenare
let arr3 = [...arr1, ...arr2];

//extinderea array-ului cu elementele unor alte array-uri
let arr = [...arr3, 7,8,9]
console.log(arr)

arr = (arr1,arr2) => {console.log(arr1 + "," + arr2)}

arr(arr1,arr2)

//4. obiecte - cum iterezi un obiect, deep copy

const person = [
    {
    'name':'Sabin',
    'gender':'male',
    'address':'B-dul Culturii',
    'dob':'12.04.1998'
    },
    {
    'name':'Mihai',
    'gender':'male',
    'address':'Strada Unirii',
    'dob':'12.08.1998'
    },
]

for(let [key, value] of Object.entries(person)) // iterarea obiectului folosind for. Object.entries() returneaza un array al unui obiect ce contine perechi de chei si valori
{
    console.log(key, value)
}

const personCopy = {...person} //deep copy utilizant spread operator

console.log(personCopy)

//5. arrays - accesor, iteration, mutator methods (care sunt, cum se folosesc)

//accesor

let fish1 = ['carp', 'shrimp', 'perch', 'lobster']
let fish2 = ['crab', 'squid', 'salmon', 'herring', 'crab']

let fish = fish1.concat(fish2)

console.log('Array-ul concatenat: ', fish)

let chooseFishes = fish1.slice(0,3) // se elimina valorile din exteriorul intervalului ales, adica de la indexul 0 pana la 3

console.log('Cateva valori din primul array: ', chooseFishes)

let fishString = fish.join(); // se converteste array-ul in string

console.log(fishString)

console.log(fish.indexOf('salmon'))

//iteration
// iterarea se realizeaza utilizand forEach

fish.forEach(item => console.log(item)); // item reprezinta valoarea curenta ce este procesata din array

//mutator methods

let unsortedArray = [15, 2, 10, 30, 70, 1, 25]

unsortedArray.unshift(80) //adauga un element pe prima pozitie din array

unsortedArray.sort((a, b) => a - b) //sorteaza array-ul

unsortedArray.shift() //sterge elementul de pe prima pozitie din array

unsortedArray.pop() //sterge elementul de pe ultima pozitie din array

unsortedArray.push(82) // se adauga un element la finalul array-ului

console.log(unsortedArray)

//6. promise, callback 

//promise
//un promise este un obiect ce reprezinta starea unei operatii asincrone.
function getUsername(username)
{
    return new Promise((resolve, reject) => {
        if(username === '')
            reject(new Error('username is empty'))
        else
            resolve(username)
    })
}

getUsername('sabin07').then((username) => {
    console.log(username)
})

//callback
//o functie callback reprezinta o functie ce este pasata in alta ca un argument, aceasta fiind invocata in alta functie din exterior.

function greeting(name) {
  console.log('Hello ' + name);
}

function getName(callback) {
  var name = "Sabin"
  callback(name);
}

getName(greeting);


//7. async, await

function getUsername()
{
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('sabinsj')
        },2000)
    })
}

async function printUsername()  //async este o metoda ce are ca scop de a astepta ca raspunsul unui request sa soseasca. Timpul de asteptare al raspunsului poate fi necunoscut, astfel threadul nu va astepta raspunsul si va putea executa alte functii.
{
    const username = await getUsername(); //await este metoda ce va astepta sa soseasca promisiunea, aparand doar in interiorul unei functii async.
    console.log(`username:${username}`)
}

printUsername()

//8. closures

function init() {
    var number = 17; // number este o variabila locala
    function getSquareRoot() { // getSquareRoot este o functie closure
      number *= number; // se foloseste variabila declarata in functia parinte
      console.log(number)
    }
    getSquareRoot();
}
init()

//9. ES6 Classes

//crearea unei clase parinte
class Bird {
    _name   //variabila privata
    constructor(name) {
        this._name = name
    }
    get speak(){
        console.log(`${this._name} whistles...`)
    }
}

//extinderea clasei parinte la una copil
class Pigeon extends Bird{
    _childName
    constructor(childName)
    {
        super() //super este utilizat pentru a face referire la clasa parinte
        this._childName = childName
    }

    get speak(){
        console.log('Cooing, cooing...')
    }
}

const bird = new Bird('Jackie')
const pigeon = new Pigeon('Orlando')

console.log(`Hi. My name is ${pigeon._childName}.`) //acceseaza variabila privata
pigeon.speak
bird.speak