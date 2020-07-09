// Arrays №1
// Вычисляет сумму квадратных корней для всех чётных чисел целочисленного массива.

let arr = [1, 2, 5, 7, 8, 9, 10, 15];

function mult(x) {

    let arr2 = [];

    for (i = 0; i < x.length; i++) {
        if (x[i] % 2 == 0) {
            arr2.push(x[i] * x[i])
        }
    }

    console.log(arr2)
} 

mult(arr);


// Arrays №2
// Объединить все вложенные массивы в строку и вывести новый массив

let arr = [1, 2, [8, 9, 4], 4, 10];

function add(x) {

    let arr2 = [];

    for (i = 0; i < x.length; i++) {
        if (Array.isArray(x[i])) {
            let q = x[i].join('');
            arr2.push(+q);
        } else {
            arr2.push(x[i]);
        }
    }

    console.log(arr2);
}

add(arr);



//Напишите функцию stringToarray(str), которая преобразует строку в массив слов.

let str = 'Каждый охотник желает знать';

function stringToarray(str) {

    let locArr = [];

    for (let i = 0; i < str.length; i++) {
        
    }

};

let arr = stringToarray(str);

document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']


//Сортировка массива

let strings = ['мир','труд','май','наливай'];

let result = strings.sort(function(a,b) {
    return a.localeCompare(b)
});