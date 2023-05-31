const button1 = document.getElementById("clickable1");
const button2 = document.getElementById("clickable2");
const textarea = document.getElementById("content");

button1.addEventListener("click", ()=>{
    textarea.innerText="This is my text";
})

button2.addEventListener("click", ()=>{
    textarea.innerText="";
})