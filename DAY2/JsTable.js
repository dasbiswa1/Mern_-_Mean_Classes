const button1 = document.getElementById("clickable1");
const button2 = document.getElementById("clickable2");
const table = document.querySelector("tbody");

button1.addEventListener("click", ()=>{
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.innerText="1";
    const td2 = document.createElement("td");
    td2.innerText="Biswa";
    const td3 = document.createElement("td");
    td3.innerText="Male"
    tr.append(td1,td2,td3);
    table.append(tr);
});


button2.addEventListener("click", ()=>{
    window.location.reload();
});