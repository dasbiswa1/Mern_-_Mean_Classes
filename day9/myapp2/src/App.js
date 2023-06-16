import"./App.css";
import Card from "./components/card";
import { useEffect,useState } from "react";

function App(){
  const[arr,setArr] = useState([]);
  const[searchStr,setSearchStr]=useState("");
  const[newarr,setNewArr]=useState([]);
  
  const handleChange = (e) =>{
    setSearchStr(e.target.value);
  };
  console.log(searchStr);
//////////////////////////////////////////////////////////////////////////////////////////////GET
  const getData = async() => {
    await fetch(" http://localhost:8000/posts",{
      method:"GET",
    })
      .then((res) => res.json())
      .then((data)=>{
        console.log(data)
        setArr(data);
        console.log(arr);
      });
  };
  //////////////////////////////////////////////////////////////////////////////////////////POST
  // const handlePost=async()=>{
  //   const obj = {
      
  //     profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTalTnxL604AYAhRBLY8ALueAe3Z5yiauJxHA&usqp=CAU",
  //     name: "sri",
  //     email: "sri@gmail.com",
  //     address: "Silicon",
  //   };
  //   await fetch("http://localhost:8000/posts",{
  //     method:"POST",
  //     headers:{
  //       "Content-Type":"application/json",
  //     },
  //     body:JSON.stringify(obj),
  //   }).then((res)=>{
  //     if(res.ok){
  //       alert("Posted!");
  //     }
  //   });
  // };
  ///////////////////////////////////////////////////////////////////////////////////PUT
  const handlePut = async (id) => {
    await fetch(`http://localhost:8000/posts/${id}`,{
      method:"PUT",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({
        profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTalTnxL604AYAhRBLY8ALueAe3Z5yiauJxHA&usqp=CAU",
          name: "sri",
          email: "sri@gmail.com",
          address: "Silicon",
      }),
    }).then((res)=>{
      if(res.ok){
        alert("Updated!");
        getData();
      }
    });
  };
  /////////////////////////////////////////////////////////////////////////PATCH
  const handlePatch = async (id) => {
    const updatedName = prompt("");
    await fetch(`http://localhost:8000/posts/${id}`,{
      method:"PATCH",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({
        name: updatedName,
      }),
    }).then((res)=>{
      if(res.ok){
        alert("Updated Name!");
        getData();
      }
    });
  };
  ///////////////////////////////////////////////////////////////////////DELETE
  const handleDelete = async(id) => {
    await fetch(`http://localhost:8000/posts/${id}`,{
      method:"DELETE",
    }).then((res)=> {
      if(res.ok){
        alert("Deleted");
        getData();
      }
    });
  };

///////////////////////////////////////////////////////////////////////////////////////////////SEARCH
 const handleSearch=async () => {
   await fetch(`http://www.omdbapi.com/?s=${searchStr}&apikey=dd6472fc`,{
     method:"GET",
   })
   .then((res)=>res.json())
   .then((data)=>{
     setArr(data.Search);
   });
 };
 const getSearchedData = () =>{
  const newData = arr.filter((item)=> item.name.includes(searchStr));
  console.log(newData);
  setNewArr(newData);
 };
 useEffect(()=>{
  getData();
 },[]);

 useEffect(()=>{
   getSearchedData();
 },[searchStr]);
 console.log(newarr);
 ////////////////////////////////////////////////////////////////////////////////
 return(
  <div className="App">
    {/*<button onClick={handlePost}>Post</button>*/}
    <input
    type="text"
    placeholder="Search"
    value={searchStr}
    onChange={(e)=>handleChange(e)}/>
    {/*<button onClick{getSearchData}>Search</button>*/}
    {newarr.length>0?(
      <div>
          {newarr.map((el)=>{
            return <Card image ={el.profile} title = {el.image} id={el.id} getData={getData}/>;
          })}
        </div>
    ) : searchStr.length===0?<div style={{
      display:"grid",
      gridTemplateColumns:"repeat(4,1fr)",
      marginTop:"5%",
    }}>{arr.map((el)=>{
      return <Card image ={el.profile} title = {el.name} id={el.id} getData={getData}/>;
    })}</div>  : <h1>No data found</h1>  
    }
    </div>
 );
}
export default App;