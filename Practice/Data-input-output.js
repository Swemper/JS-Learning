//При нажатии на кнопку вывести значение массива

let inputIn = document.querySelector('.input-in');
let button = document.querySelector('button');
let div = document.querySelector('.out');

button.onclick = function (){

    let a = [2,4,8];

    if (inputIn.value == 2) {
        div.innerHTML = a[1];
    } 
    else {
        div.innerHTML = '';
    }

}








