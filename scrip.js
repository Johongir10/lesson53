// const a = prompt("Ismingizni kiriting: ");

// const title = document.createElement("h1");
// title.textContent = a;
// const body = document.body; 
// body.appendChild(title);
// body.style="background-color:blue;";
// body.style="color:black;background-color:blue; diplay:flex; justify-content:center;align-items:center;height:100vh;";

// const body=document.getElementsByTagName("body")[0]
// const ism=document.createElement("h1")
// qor.classList.add("box")


// ism.textContent("Svetafor")
// body.appendChild(ism)
// body.appendChild(qor)

const body=document.getElementsByTagName("body")[0];
const text=document.getElementById("text");

let bodycolor=prompt("Body rangini kiriting");
let textcolor=prompt("Body text rangini kiriting");



body.style.backgroundColor=bodycolor;
text.style.color=textcolor;
