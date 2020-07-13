
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

function addObj (o, i, v) {       
    return o[i] = v;
    }
    
    addObj(obj, 'one', 'hellow');

    console.log(obj.one);
