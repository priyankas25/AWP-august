let counter = 1;

/*function likeit() {
    let newElement = document.querySelector("#like1");
    newElement.innerHTML = "like" + counter;
    counter++;
}*/

function postit(){
    let x = document.querySelector("#input1").value;

    //newstatus bar-----

    let newElement = document.querySelector("#referdiv").cloneNode(true);
    newElement.style.visibility = "visible";
    newElement.children[0].innerHTML = x;

    newElement.children[1].children[0].innerHTML = "like" + counter;
    counter++;

    //newElement.children[1].children[1].innerHTML =  ;


    let y = document.querySelector("#maindiv");
    y.insertBefore(newElement,y.firstChild);

    document.querySelector("#input1").value = "";
}

   