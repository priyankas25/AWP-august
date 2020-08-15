let counter = 1;

function commentit() {
    let userElement = document.querySelector("#input1").value;

    let newElement =document.querySelector("#commentre");
    newElement.style.visibility = "visible";
    newElement.children[0].children[1].innerHTML += counter + ") " + userElement +"<br>";
        counter++;
    let newdiv = document.querySelector("#commentbox");

    newdiv.insertBefore(newElement,newdiv.firstChild);
   // newdiv.appendChild(x);

   document.querySelector("#input1").value = "";
}

function clearit(cls) {
    cls.parentElement.children[1].remove();
}