import { useState } from "react";
const UseState5=() => {
    const [value, setValue]=useState('');
    const[id,setId]=useState(0);
   const onchange=e=>{
        setValue(e.target.value);
    };
   const sum=()=>{
    setId(id+parseInt(value));
   }
    return (
        <>
        <p>sum of Elements</p>
        {id}
        <input type="number"placeholder="0" onChange={onchange}></input>
        <button onClick={sum}>Add</button>
        </>
    )
};
export default UseState5;