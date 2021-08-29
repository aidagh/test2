"use strict";
//DEFINE A FUNCTION TO INSET A NEW ITEM TO THE LIST!
function myFunction() {
  //CREATE A NEW TAG FOR LIST
  let newItem = document.createElement("li");
  //GET INPUTS FROM THE USER
  let stuffs = document.querySelector("#stuffs").value;
  //PUSHING THE INPUT TO A NEW TEXTNODE WE HAVE CREATED!
  let textnode = document.createTextNode(`✔️ ${stuffs}`);
  newItem.appendChild(textnode);
  //GETTIG AN EXISTED LIST AND  INSERT A NEW ITEM IN IT
  let list = document.getElementById("myList");
  list.insertBefore(newItem, list.childNodes[null]);
  document.querySelector("#stuffs").value = "";
}
