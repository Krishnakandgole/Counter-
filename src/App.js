import { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  let [count, setcounter] = useState(0);

  const addvalue = () => {
    if (count === 20) {
      setcounter(20);
    } else {
      setcounter(count + 1);
    }
  };
  const remove = () => {
    if (count === 0) {
      setcounter(0);
    } else {
      setcounter(count - 1);
    }
  };

  // When the counter is came to the 20 and counter stoped
  // When the counter is came to the 0 and counter stoped


  return (
    <div className="text-center text-white w-full h-screen bg-gray-800 flex flex-col shadow-gray-900 shadow-lg">
        <div className="border h-80 w-80 m-auto p-6 flex flex-col items-center">
              <h2 className="text-white text-2xl font-bold gap-2">-: Counter :-</h2>
              <p className=" m-2 text-2xl">Counting Value :- {count}</p>
              <div className="flex gap-2 flex-col">
                <button className="p-2 border border-gray-900 w-60 font-bold rounded hover:bg-green-700 " onClick={addvalue}>Add</button>
                <button className="p-2 border border-gray-900 w-60 font-bold rounded hover:bg-red-700" onClick={remove}>Remove</button>
              </div>
        </div>
    </div>
  );
}

export default App;
