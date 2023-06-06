import React from "react";
import {AiOutlineHeart} from "react-icons/ai"
import {FaRegComment} from 'react-icons/fa'
import {FiSend}  from 'react-icons/fi'
import './card.css'


function Card({username,image,button}){
    //const{username,image} = props; you can use the const props in the main fuction
  return (
    <div>
        <div>
            <h1>{username}</h1>
            <img style={{width:"200px",height:"200px"}}
            src={image} alt = "error"></img>
        </div>
        <AiOutlineHeart size={60}/>
        <FaRegComment size={60}/>
        <FiSend size={60}/>
        <button>Add</button>
    </div>
  )
}

export default Card;