import React from "react";
import { useState } from "react"; //if u want to use hucks use this

// function Card(){
//     const [change, setChange] = useState(false);
//     //function handleclick() //You can also use the function like this
//     const handleclick = () => {
//         //setChange(true);
//         //setChange("Biswa");
//         setChange(!change); //if you want multiple times change
//     }
//     console.log(change);
//     return(
//         <div>
//             {change === false ? <h1>Card</h1> : <h1>Card Changed</h1>}
//             <button onClick={handleclick}>click me</button>
//         </div>
//     )
// }



function Card({image,title}){
    // const [obj, setChange] = useState([]);
    // //function handleclick() //You can also use the function like this
    // const handleclick = () => {
    //     //setChange(true);
    //     //setChange("Biswa");
    //     setObj([1,2,3,4]); //if you want multiple times change
    // }
    // console.log(obj);
    return(
        <div>
            <img src={image} alt="error" style={{width:"100px",height:"100px"}}></img>
            <div className="title">{title}</div>
        </div>
        )
}

export default Card;