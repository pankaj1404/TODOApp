// import React from 'react';

import { useState } from "react";
import UserOutput from "./userOutput";

const UserInput = () => {
    const [userName, setUserName]=useState('pankaj');
    const onUserChange = (event) =>{
       const {name,value}=event.target
       console.log(name,value);
       setUserName({
        userName:value
        })
    }
    return(
            <>
              <input 
                type="text" 
                id="userInput" 
                name="userInput"
                value={userName}
                onChange={onUserChange} />
                <UserOutput username={userName} />
                
              
            </>
        )
    
}
export default UserInput;