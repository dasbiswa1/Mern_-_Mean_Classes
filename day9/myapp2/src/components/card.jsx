// import React from 'react';
import './card.css'
// function Card({image,username,address,onclick,buttonText}){
//     return(
//         <div>
//             <img src="{image}" alt="error" />
//             <h3>{username}</h3>
//             <p>{address}</p>
//             <button onClick={onclick}>{buttonText}</button>
//         </div>
//     )
// }
// export default Card;







// PATCH OPERATION
// import React from "react";

// function Card1({ title, body, onClick }) {
//   return (
//     <div>
//       <h3>{title}</h3>
//       <p>{body}</p>
//       <button onClick={onClick}>Update</button>
//     </div>
//   );
// }

// export default Card1;



// PUT OPERATION
// import React from 'react';

// function Card1({ user, onClick }) {
//     return (
//       <div>
//         <h3>{user.title}</h3>
//         <p>{user.body}</p>
//         <button onClick={onClick}>Update</button>
//       </div>
//     );
//   }

// export default Card1;



// DELETE OPERATION
import React from 'react';

function Card({ image, title, getData, id }) {
    const handleDelete = async () => {
        await fetch(`http://localhost:8000/posts/${id}`, {
            method: "DELETE",
        }).then((res) => {
            if (res.ok) {
                alert("Deleted");
                getData();
            }
        });
    };
    return (
        <div className='cont' >
            <div className="back">
                <img style={{ width: "200px", height: "200px" }} src={image} alt="err" />
                <h3>{title}</h3><br></br>
            {/* <button onClick={onUpdate}>Update</button> */}
            <div><button onClick={handleDelete}>Delete</button></div>
            </div>
        </div>
    );
}

// import React from "react";
// function Card ({ image,title }) {
//   return(
//     <div>
//       <img style={{width:"200px",height:"200px"}} src={image} alt="err"/>
//       <h3>{title}</h3>
//     </div>
//   );
// }

export default Card;