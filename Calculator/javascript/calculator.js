function input_text(input_number) {
    document.getElementById('input').value += input_number;
}
function input_c() {
    document.getElementById('input').value = "";
}
var first=0;
var second=0;
var operator="";

function operators(oper) {
    if (Number(document.getElementById('input').value) != 0) {
        first = Number(document.getElementById('input').value);
    }
    /*first = Number(document.getElementById('input').value);*/
    operator=oper;
    document.getElementById('input').value = "";
}

function equal() {
    second = Number(document.getElementById('input').value);
    var result=0;
    if ((isNaN(first)) || (isNaN(second)))  {
        alert("Please input only number!");
        return;
    }
    switch(operator) {
        case '+':
            result = first + second;
            break;
        case '-':
            result = first - second;
            break;
        case '*':
            result = first * second;
            break;
        case '/':
            if (second !== 0) {
                result = first / second;
            } else {
                alert ("Divided by 0 !!!")
            }
            break;
        case "pow":
            result=first*first;
            break;
        case "sqrt":
            if (first < 0) {
                alert("Error.Negative number!")
                break;
            }
            result=Math.sqrt(first);
            break;
        case "modul":
            result=Math.abs(first);
            break;
        case "log":
            result=Math.log(first);
            break;
    }
    document.getElementById('input').value = result;
}
