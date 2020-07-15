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


//Удаление свойств объекта
delete obj1.one


//Цыклический обход свойств объекта
for (v in obj) {                          //выполняет тело цикла для каждого свойства объекта,
    console.log(v + ' - ' +obj[v]);       //присваивая имя свойства пременной цикла, которая пишется перед in
}


//Проверка наличия свойства у объекта
if ('one' in obj) {
    console.log(obj.one);
}

if (obj.hasOwnProperty('one')) {
    alert(obj.one);
}


//Метод объекта – действие, которое может выполнить объект
let obj3 = {
    prop1: 30,
    prop2: 20,
    func: function() {
        console.log(this.prop1 + this.prop2);
    }
}

obj3.func();


//Методы чтения и записи свойств
let o = {
    prop1: 10,
    prop2 = 20,
    
    func: function() {
        console.log(this.prop1 + this.prop2);
    },

    get summ() {

    }
}