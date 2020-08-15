let counterlike = 1;

function likeit(){
    let newElement = document.querySelector("#like1");
    newElement.innerHTML = "like" + counterlike;
    counterlike++;
}

function commentit() {
    let userElement = document.querySelector("#input1").value;

    let newElement =document.querySelector("#commentre").cloneNode(true);
    newElement.style.visibility = "visible";
    newElement.children[0].innerHTML = userElement;

    let newdiv = document.querySelector("#commentbox");

    newdiv.insertBefore(newElement,newdiv.firstChild);
   // newdiv.appendChild(x);

   document.querySelector("#input1").value = "";
}

function deletecom(del){
    del.parentElement.remove();
}