function display(val) {
    document.getElementById("edu").value+=val;
}

function solve() {
        let x =document.getElementById("edu").value;
        let y =eval(x);
        document.getElementById("edu").value = y;
}

function clr() {
    document.querySelector("edu").value = "";
}