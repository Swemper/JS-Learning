
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
