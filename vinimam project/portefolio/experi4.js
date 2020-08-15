// let is used to declare variable. :: let || const || var
let counter = 1;

function increment() {
  let counterEle = document.querySelector("#ima");
  counter = counter + 1;

  counterEle.innerHTML = counter;
}

function decrement() {
  let counterEle = document.querySelector("#ima");

  document.getElementById("ima2").src = "pri2.jpeg";

  counter = counter - 1;

  counterEle.innerHTML = counter;
}
