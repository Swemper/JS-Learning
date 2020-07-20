//Выбор элементо документа
document.getElementById("head")          //по значению атрибута ID
document.getElementsByName("email")      //по значению атрибута Name
document.getElementsByTagName("h2")      //по типу (имени тега)
document.getElementsByClassName("text")  //По имени класса
            //По совпадению с селектором css


//Выбор нескольких эл-ов с разными ID
function grtElements() {
    let elem = {};

    for (let i = 0; i < arguments.length; i++) {
        let id = arguments[i];
        let el = document.getElementById(id);
        if(el == null) {
            continue
        } else {
            elem[id] = el;
        }
    }

    return elem;
}

let rsult = grtElements("head", "head2");
console.log(result);


//Выбор стиля формы с помощью атрибута Name
let elname = document.getElementsByName('email')[0].style.border = "1px solid red";
console.log(elname);

//Выбор тега
let eltag = document.getElementsByTagName("h2");
console.log(eltag);

let el_id = document.getElementById("head");
let eltag = el_id.getElementsByTagName("h2");
console.log(eltag);


//Выбор элемента с классом через id
let el_id = document.getElementById("test").className;
console.log(el_id)





            
//Вывод данных
console.log('12');          //служебный вывод
alert('hellow');            //модальный вывод
document.getElementById()   //вывод на страницу
document.querySelector()

document.getElementById('out').innerHTML = 'Hellow';
document.querySelector('h2.header').innerHTML = 5;