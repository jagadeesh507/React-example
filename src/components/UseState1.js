//import { useState } from "react"
const UseState1=() => {
    let arr=[1,2,3,4,5];
    let k=arr.reduce(addArray);
    function addArray(acc,curr) {
        return acc+curr;
}
return (
    <>
    <p style={{textAlign:"center",color:"green"}}>addition of all array elements::{k}</p>
    </>
)}
export default UseState1;