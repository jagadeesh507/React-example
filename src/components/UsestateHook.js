
import{useState} from "react";
function UsestateHook() {
    const [count,setCount]=useState(0);
    const increment =()=>{
        setCount(count+1);
    };
   return (
<>
{count}
<button onClick={increment}>Add</button>
</>
   );
};
export default UsestateHook;