var counter = 1;
var likecounter = 1;

function comment() {
    let newele = document.createElement("div");
    newele.innerHTML =  "date()"+ counter;
    counter++;
    newele.style.background = "pink";
    newele.style.margin = "0.4em"

    let commbox = document.querySelector("#commbox");
    commbox.appendChild(newele);

    console.log(5 ** 2);

}

function like() {
    let newlike = document.querySelector("#l1");
    newlike.textContent = "like" + likecounter;
    likecounter++;
}



