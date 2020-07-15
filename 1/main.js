
function stringWork() {

    let str = document.getElementById('head').innerHTML;

    //let result = String(str);
    let date = new Date();
    let result = date.toString();

    document.getElementById('result').innerHTML = result;
}

window.onload = function () {
    stringWork();
}

console.log(stringWork);

let obj = {
    one: 'hi',
    two: 12,
    'string': true,
};


let obj3 = {
    prop1: 30,
    prop2: 20,
    func: function () {
        console.log(this.prop1 + this.prop2);
    }
}

obj3.func();