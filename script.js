function display(val) {
    document.getElementById("operators").value+=val
}

function solve() {
    let x = document.getElementById("operators").value
    let y = eval(x)
    document.getElementById("operators").value = y
}
function clear1()
{
    document.getElementById("operators").value = ""
}

function backspace1() {
   var b = document.getElementById("operators").value;
    document.getElementById("operators").value = b.substring(0, b.length - 1);;
}



