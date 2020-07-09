//Функции нужны для многократного использования участка кода, с разными параметрами

function имяФункции(параметр) {         //имяФункции обычно задается глаголом
    Код функции - набор инструкций
}


//Функция без параметров
function func() {
    alert('hellow');
}

func();         //Обращение к идентификатору функции


//Функция с параметрами
function punk(param1, param2) {         //в виде параметров мы указываем идентификаторы переменных
    
    let result = param1 * param2;
    alert(result);

}

punk(10,30);    //передаем значения параметров в функцию


//Функция с условием
function bunk(param1, param2) {

if (param1 == 40) {
    return param1;                       //завершает работу функции и возвращает результат, который мы передаем данной инструкции
}
    let result = param2 * param1;        //result является локальной переменной
    alert(result)

}

let result = bunk(40,1);                 //result является глобальной переменной
console.log(result);


//область видимости преременной
function runk(param1, param2) {          //param1, param2 – локальные пременный, доступные только в теле функции. 
                                         //Для вложенных function они глобальные
    let result = param1 * param2;

    function runk2(a) {
        return result * param2 * a;
    }
    
    result = runk2(2);
    return result;

}

document.write(runk(10,30));


//объявление функции через создание выражения
let sunk = function suu(param1, param2) {
    console.log(param1);
};

sunk(10,20);                               //функция доступна для вызова только из анной переменной


//сразу вызываем на исполнение функцию
let sunk = (function suu(param1, param2) {
    console.log(param1);
}   (10,20));                             

(function (param1, param2) {               //ананимная функция
    console.log(param1);
}   (10,20)); 


//рекурсивный вызов функции – вызов функции на исполнение внутри собственного кода (вызов функции самой себя)
function lunk(x) { 
    if(x <= 1 ) {
        return 1;
    }
    return x * lunk(x-1);
}
console.log(lunk(3));

let f = function fact(x) {
    if(x <= 1 ) {
        return 1;
    }
    return x * fact(x-1);
}
document.write(f(4));


//вызов функции без параметров через массив
function nunc () {
    let result = arguments[0] * arguments[1];
    return result;
}
alert(nunc(10,20,65,42,3,926,215));