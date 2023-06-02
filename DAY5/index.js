/*const tokan = JSON.parse(localStorage.getItem("token"));
const login_or_logout = document.getElementById("login_heading");

if(tokan){
    login_or_logout.innerText = "Logout";
    login_or_logout.addEventListener("click",() => {
        localStorage.removeItem("token");
        window.location.href = "./login.html";
    });
}*/


const show = document.getElementById("show");

fetch("http://localhost:5050/racipe",{
    method: "GET",
})
.then((res) => res.json())
.then((data) => getData(data));

function getData(data){
    //console.log(data);
    data.map((el)=>{
        const div = document.createElement("div");
        const img = document.createElement("img");
        img.src = el.image;
        const item = document.createElement("h1");
        item.innerText = el.item;
        const updatebutton = document.createElement("button");
        updatebutton.innerText="UPDATE";
        updatebutton.addEventListener("click",()=>{
            const updateTitle = prompt("");
            const newObj = {
                item: updateTitle,
                description: el.description,
                image : el.image,
                price : el.price,
            };
            fetch(`http://localhost:5050/racipe/${el.id}`,{
                method:"PUT",
                headers: {
                    "content-Type" : "application/json"
                },
                body: JSON.stringify(newObj),
            })
            .then((res) =>{
                alert("updated Title Successfully");
            })
            .catch((err)=>{
                alert("Error accured while updating"+err)
            });
        });
        const deletebutton = document.createElement("button");
        deletebutton.innerText ="Delete";
        deletebutton.addEventListener("click",()=>{
            fetch(`http://localhost:5050/racipe/${el.id}`,{
                method:"DELETE",
            })
            .then((res) => {
                alert("Deleted The Item");
            })
            .catch((err) => {
                alert("Error occured while deleting");
            })
        })
        const showDetails = document.createElement("button");
        showDetails.innerText = "Show Details";
        showDetails.addEventListener("click",() => {
            localStorage.setItem("id", JSON.stringify(el.id))
                window.location.href = "./details.html";
        });
        div.append(img, item,updatebutton, deletebutton, showDetails);
        show.append(div);
    });
}