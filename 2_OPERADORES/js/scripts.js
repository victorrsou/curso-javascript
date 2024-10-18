// // 1 - Number
// console.log(typeof 2);
// console.log(typeof 5.14);
// console.log(typeof -127);

// // 2 - Operações Aritméticas
// console.log(2 + 4);
// console.log(10 - 5);

// console.log(5 + (4 *2));

// // 3 - Special Numbers
// console.log(typeof Infinity); // <- Number, I maiúsculo
// console.log(typeof infinity);

// console.log(12 * "asd") // <-- NaN

// console.log(typeof NaN); // <-- number

// // 4 - Strings
// console.log("Um texto");
// console.log('Mais um texto');

// console.log(typeof "Texto");

// 5 - Símbolos especiais em String
// console.log("Testando a \n quebra de linha");

// console.log("Espaçamento \t de tab");

// // 6 - Contatenação
// console.log("Oi," + " tudo" + " bem?");

// console.log(`Testando` + ` com` + ` a crase`);

// // 7 - Template Strings - Interpolação
// console.log(`A soma de 2 + 2 é: ${2 + 2}`);

// console.log(`Podemos executar qualquer coisa aqui ${console.log("teste")}`);
// // Podemos executar qualquer coisa aqui undefined

// // 8 - Boolean
// console.log(true);
// console.log(5 > 20);
// console.log(30 > 10);

// console.log(typeof false);

// // // 9 - Comparações
// console.log(5 <= 5);
// console.log(10 == 10);
// console.log(10 == 9);
// console.log(10 != 9);

// //  10 - Idêntico
// console.log(9 == "9"); // <- true
// console.log(9 + "9"); // <- 99
// console.log(9 === "9"); // false

// console.log(9 !== "9"); // true

// 11 - Operadores Lógicos
console.log(true && true); // true
console.log(true && false); // false

console.log(5 > 2 && 2 < 10); // true

console.log(5 > 2 && "Victor" === 1); // false
console.log(5 > 2 || "Victor" === 1); // true

console.log(5 < 2 || 5 > 100); // false
console.log(!true); // false

// 12 - Empty values
console.log(typeof null, typeof undefined); // object undefined

console.log(null === undefined); // false
console.log(null == undefined); // true

console.log(null == false); // false
console.log(undefined == false); // false

// 13 - mudança de tipos
console.log(5 * null); // 0
console.log("teste" * "opa"); // NaN
console.log("10" + 1); // 101
console.log("10" - 1); // 9

