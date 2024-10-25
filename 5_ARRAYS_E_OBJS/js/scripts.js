// // 1 - arrays
// const lista = [1, 2, 3, 4, 5]

// console.log(lista);

// console.log(typeof lista); // object

// const itens = ["Victor", true, 2, 4.12, []]

// console.log(itens);

// // 2 = mais sobre arrays
// const arr = ["a", "b", "c", "d"];

// console.log(arr[0]); // a
// console.log(arr[2]); // c

// // 3 - propriedades
// const numbers = [1, 2, 3];

// console.log(numbers.length);

// console.log(numbers["length"]);

// const myName = "Victor";

// console.log(myName.length);

// // 4 - métodos
// const otherNumbers = [1, 2, 3];

// const allNumbers = numbers.concat(otherNumbers);

// console.log(allNumbers);

// const text = "Algum texto";

// console.log(text.toUpperCase());

// console.log(typeof text.toUpperCase);

// console.log(text.indexOf("g")); // 2

// // 5 - objetos
// const person = {
//     name: "Victor",
//     age: 32,
//     job: "Programador",
// };

// console.log(person);
// console.log(person.name);
// console.log(person.name.length);

// console.log(typeof person);

// // 6 - criando e deletando propriedades
// const car = {
//     engine: "2.0",
//     brand: "VW",
//     model: "Tiguan",
//     km: 20000,
// };

// console.log(car)

// car.doors = 4;

// console.log(car);

// delete car.km;

// console.log(car);

// // 7- mais sobre objetos
// const obj = {
//     a: "teste",
//     b: true
// };

// console.log(obj instanceof Object);

// const obj2 = {
//     c: []
// }

// Object.assign(obj2, obj);

// console.log(obj2);

// // 8 - conhecendo melhor os objetos
// console.log(Object.keys(obj));
// console.log(Object.keys(obj2));
// console.log(Object.keys(car));

// console.log(Object.entries(car));

// // 9 - Mutação
// const a = {
//     name: "Victor"
// }

// const b = a;

// console.log(a);
// console.log(b);

// console.log(a === b) //true;

// a.age = 31;

// console.log(a);
// console.log(b);

// delete b.age
// console.log(a);
// console.log(b);

// // 10 - loop em array
// const users = ["Victor", "João", "Pedro"];

// for(let i = 0; i < users.length; i++) {
//     console.log(`Listando o usuário: ${users[i]}`);
// }

// // 11 - push e pop
// const array = ["a", "b", "c"];

// array.push("d");

// console.log(array);

// array.pop();

// console.log(array);

// const itemRemovido = array.pop();

// console.log(array);
// console.log(itemRemovido);

// array.push("z", "x", "y");

// console.log(array)

// // 12 - shift e unshift

// const letters = ["a", "b", "c"];

// // remove no início
// const letter = letters.shift();

// console.log(letter)
// console.log(letters)

// // adiciona no início!
// letters.unshift("p", "q", "r");

// letters.unshift("z");

// console.log(letters)

// // 13 - indexOf e lastIndexOf

// const myElements = ["Morango", "Banana", "Abacate", "Pêra", "Abacate"]

// console.log(myElements.indexOf("Banana"));

// console.log(myElements.indexOf("Abacate")); // 2

// console.log(myElements[2]);

// console.log(myElements[myElements.indexOf("Abacate")]);

// console.log(myElements.lastIndexOf("Abacate")); // 4

// // quando o resultado não é encontrado o resultado é -1

// 14 - slice
const testeSlice = ["a", "b", "c", "d", "e", "f"];

// Os parametros são os índices de início e fim respectivamente.
const subArray = testeSlice.slice(2, 4);

console.log(testeSlice);
console.log(subArray);

const subArray2 = testeSlice.slice(2, 4 + 1);

console.log(subArray2);

const subArray3 = testeSlice.slice(10, 20);

console.log(subArray3);

const subArray4 = testeSlice.slice(2);

console.log(subArray4);

// 15 - forEach
const nums = [1, 2, 3, 4, 5];

nums.forEach((numero) => {
    console.log(`O número é ${numero}`);
});

const posts = [
    { title: "Primeiro post", category: "PHP" },
    { title: "Segundo post", category: "JavaScript" },
    { title: "Terceiro post", category: "Python" },
];

posts.forEach((post) => {
    console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`);
});

// 16 - includes

const brands = ["BMW", "Fiat", "VW"];

console.log(brands.includes("Fiat")); //true
console.log(brands.includes("KIA")); //false

if (brands.includes("BMW")) {
    console.log("Existem carros da marca BMW!");
}

// 17 - reverse
const reverseTest = [1, 2, 3, 4, 5];

reverseTest.reverse();

// inverteu a ordem! 
console.log(reverseTest);


// 18 - trim
// O trim remove tudo que não é texto em uma string, como caracteres especiais e espaços em branco

const trimTest = "   testando \n";

console.log(trimTest)
console.log(trimTest.trim());

console.log(trimTest.length)
console.log(trimTest.trim().length);

// 19 - padstart

const testePadStart = "1";

const newNumber = testePadStart.padStart(4, "0");

console.log(testePadStart)
console.log(newNumber);

const testePadEnd = newNumber.padEnd(10, "0");

console.log(testePadEnd);

// 20 - split
const frase = "O rato roeu a roupa"

const arrayDaFrase = frase.split(" ");

console.log(arrayDaFrase);

// 21 - join
const fraseDeNovo = arrayDaFrase.join(" ");

console.log(fraseDeNovo);

const itensParaComprar = ["Mouse", "Teclado", "Monitor"];

const fraseDeCompra = `Precisamos comprar: ${itensParaComprar.join(", ")}`;

console.log(fraseDeCompra);