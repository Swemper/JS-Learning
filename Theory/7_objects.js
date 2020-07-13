//Свойство объекта имеет имя и значение
let obj = {
    one: 'hi',
    two: 12,
    'string': true,
};

let obj2 = new Object(); 

let obj3 = Object.create(obj1);


//Получение значения свойства объекта
obj.two
obj["string"]


//Изменение значения свойства объекта
obj.two = 'new string';

function addObj (o, i, v) {         //o - объект, i - имя свойства, v - значение свойства
return o[i] = v;
}

addObj(obj, one, 'hellow');


//Каждый объект имеет второй объект, ассоциированный сним – прототип
