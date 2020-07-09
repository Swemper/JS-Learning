// Arrays №3

function stringWork() {

    let str = document.getElementById('head').innerHTML;

    
    //let result = String(str);
    let result = str.match();

    document.getElementById('result').innerHTML = result;
}

window.onload = function () {
    stringWork();
}

