import { useState } from "react"

const UsestateHook2=() => {
    const [name, setName]=useState('Jagadeesh');
    const onchange=(event)=>{
       setName(event.target.value);
    }

return (
    <>
    <p></p>
     <input type="text" placeholder="enter name" onChange={onchange} style={{color:"blue",fontWeight:"bold"}}></input>
    <p style={{color:"red",textAlign:"center",fontFamily:"sans-serif",fontWeight:"bold"}}> name updated :: {name}</p>
   
    </>
);
};
export default UsestateHook2;