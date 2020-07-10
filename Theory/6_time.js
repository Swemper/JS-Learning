//Объект Date для текущей даты и времени
let date = new Date();      //позволяет передавать аргументы             
let date = Date();

new Date(35499874);         //кол-во милисикунд от начала 1970 года
new Date("Fri 04 27 1981");




//Методы работы с датой. get — возвращают параметры даты и времени, set — устанавливают параметры
getTime()                   //возвращает внутреннее представление времени, хранящиеся в объекте date
getDate();                  //возвращает текущее число
getDay();                   //возвращает день недели
getFullYear()
getMonth()
getHours()
getMinutes()
getSeconds()
getMilliseconds()

setDate()
...

//to – преобразование даты к определенному виду
toDateString()
toUTCString()
...