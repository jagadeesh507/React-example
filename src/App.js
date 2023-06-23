//import logo from './logo.svg';
import './App.css';
import Hello from "./components/Hello.js";
//import AddNum from "./components/AddNum.js";
import NavFile from "./components/NavFile.js";
//import UsestateHook from "./components/UsestateHook.js";
//import UsestateHook2 from "./components/UsestateHook2.js";
//import UseState1 from "./components/UseState1.js";
import UseState5 from './components/Usestate5';
import UseReducer1 from './components/UseReducer1';

function App() {
  return (
    <div className="App">
     
      <NavFile/>
     <h1>Hello react let start</h1>
     <Hello/>
    
     <UseState5 />
     <UseReducer1></UseReducer1>
    </div>
  );
}

export default App;
