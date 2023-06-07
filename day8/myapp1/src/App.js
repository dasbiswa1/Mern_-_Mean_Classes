import logo from './logo.svg';
import './App.css';
import Card from './component/card';
import { useState, useEffect } from 'react';

function App() {

  const [arr, setArr] = useState([]);

  const getData = async() => {
    await fetch("https://jsonplaceholder.typicode.com/photos",{
    method: "GET"
  }).then((res) =>res.json()).then((data)=>{
    const newData = data.slice(0,11);
    setArr(newData);
    console.log(newData);
  })
};

useEffect(() =>{
  getData();
},[])

return(
    arr.map((el) => {
      return(
        <Card image={el.url} title={el.title}/>
      )
    })
)
// return (
// <div  className="App">
//   <Card/>
// </div>
// );
}

export default App;
