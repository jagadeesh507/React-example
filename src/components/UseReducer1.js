import { useReducer } from "react";
const reducer = (state, action) =>{
    switch(action.type){
        case "Increment":
        return {count:state.count+1, showcase:state.showcase};
        case "toggle":
            return {count:state.count,showcase:!state.showcase};
        default:
            return state;
    }
};
const UseReducer1=() => {
    const [state, dispatch]=useReducer(reducer, {count:0,showcase:true});
    return (
       <div>
       <h1>{state.count}</h1>
       <button onClick={()=>{
       dispatch({type:"Increment"});
       dispatch({type:"toggle"});
    }}
    >
        click me</button>
        <h1>{state.showcase && <p>hello count</p>}</h1>
       </div>
    )
};
export default UseReducer1;