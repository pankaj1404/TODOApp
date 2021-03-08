// import React from 'react';

import { useState } from "react";
// import UserOutput from "./userOutput";

const UserInput = (props) => {
    // const [userName, setUserName]=useState('pankaj');
    // const onUserChange = (event) =>{
    //    const {name,value}=event.target
    //    console.log(name,value);
    //    setUserName({
    //     userName:value
    //     })
    // }
    const inlineStyle={
      border:'2px solid red'
    }
    return(
            <>
              <input 
                type="text" 
                id="userInput" 
                name="userInput"
                value={props.currentName}
                style={inlineStyle}
                onChange={props.onUserchanged} />
                {/* <UserOutput username={props.userName} />              */}
            </>
        )
    
}
export default UserInput;