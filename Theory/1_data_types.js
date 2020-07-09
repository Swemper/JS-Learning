//Просты типы данных (примитивные)
10, 20, Infinity, -Infinity, NaN   //числа
'hellow', "hellow"                 //строки
true, false                        //булевы
null                               //пустое значение
undefined                          //неопределенное значение



//Операторы
=                  //присвоение
==                 //равенство – сравнивает аргументы, допуская преобразование типов
===                //идентичность – определяет два аргумента на идентичность, руководствуясь строгим определением совпадения (не допускает преобразование типов)

**                 //возведение в степень
++                 //инкремент
--                 //декримент

&&                 //и
||                 //или
!                  //не




//Преобразование типов данных
1,2,3 Infinity -Infinity 'string'  =>  true
0, -0 null NaN undefined           =>  false

x = +x             // к числу
x = x + ''         // к строке
x = !!x            // к булеву типу

let a = 10;        //Преобразование чисел в логический тип данных
alert(!a)          //false
alert(!!a)         //true




//Вывод данных
console.log('12');          //служебный вывод
alert('hellow');            //модальный вывод
document.getElementById()   //вывод на страницу
document.querySelector()

document.getElementById('out').innerHTML = 'Hellow';
document.querySelector('h2.header').innerHTML = 5;