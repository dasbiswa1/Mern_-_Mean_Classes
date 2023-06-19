import React from 'react';

function Signup(){
    return (
        <div>
            <input type="text" placeholder='Enter Name'/>
            <input type="number" placeholder='Enter mobile Number'/>
            <input type="text" placeholder='Enter Email'/>
            <input type="password" placeholder='Enter Pass'/>
            <button>Sign up</button>
        </div>
    );
}

export default Signup;