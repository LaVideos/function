// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function squareRect(a, b){
//     return a * b;
// }
// let a = squareRect(10, 30);
// console.log(a);

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function circleSquare(r){
//     return 3.14 * (r*r);
// }
// let a = circleSquare(30);
// console.log(a);


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function squareCylinder(h, r){
//     return 2 * 3.14 * r * (h+r) ;
// }
//
// let a = squareCylinder(3,4);
// console.log(a);


// - створити функцію яка приймає масив та виводить кожен його елемент

// function arrayOutput(array){
//     for (const arrayElement of array) {
//         console.log(arrayElement);
//     }
// }
//
// let a = [4,5,6,7,8,9,0,7,4];
// arrayOutput(a);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function paragraf(a){
//     document.write(`<p>${a}</p>`);
// }
//
// paragraf("Hello world!!!");

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function ul3Li(a){
//     document.write(`<ul>`)
//     document.write(`<li>${a}</li>`)
//     document.write(`<li>${a}</li>`)
//     document.write(`<li>${a}</li>`)
//     document.write(`</ul>`);
// }
// ul3Li("some text");


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function ulLiLoop(content, amount){
//     document.write(`<ul>`)
//     for (let i = 0; i < amount; i++) {
//         document.write(`<li>${content}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// ulLiLoop('heh', 7);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// function arrayPrimitive(array){
//     document.write(`<ul>`)
//     for (const arrayElement of array) {
//         document.write(`<li>${arrayElement}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// let a = [123,'hello',true];
// arrayPrimitive(a);



// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// function arrayListIdNameAge(arrayKeys){
//     for (const array in arrayKeys) {
//         let key = arrayKeys[array];
//         document.write(`<div>
// <div> Id - ${key.id}</div>
// <div>Age - ${key.age}</div>
// <div> Name - ${key.name}</div>
// </div>`)
//     }
// }
//
// let a = [
//     {id : 1,
//     name : 'john',
//     age: 20},
//     {id : 2,
//         name : 'Piter',
//         age: 30},
//     {id : 3,
//         name : 'BORISKA',
//         age: 200}
// ];
//
// arrayListIdNameAge(a);

// - створити функцію яка повертає найменьше число з масиву


// function littleOnes(array){
//     let min = a[0];
//     for (let i = 0; i < array.length; i++) {
//         if(array[i] < min){
//             min=array[i];
//         }
//     }
//     return min;
// }
// let a = [33,44524,22,-553,22,2,63,-4,123];
//
// let small = littleOnes(a);
//
// console.log(small);



// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// function summArray(array){
//     let summ = 0;
//     for (let i = 0; i < array.length; i++) {
//         summ += array[i];
//
//     }
//     return summ;
// }
//
// let a = [1,2,3];
//
// let res = summArray(a);
//
// console.log(res);