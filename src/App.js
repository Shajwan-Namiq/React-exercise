import "./App.css";
 import Main from "./Filter/Main";
  import Main2 from "./conditional/Main2";
import { useState } from "react";
 

function App() {
   const [isShown, setIsShown] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
 

    const handleClick = (event) => {
       setIsShown((current) => !current);
   };

    const handleClick2 = (event) => {
      setIsShown2((current) => !current);
    };


  return (
    <>
      <button onClick={handleClick}>Props</button>
      <button onClick={handleClick2}>Conditional</button>

      {isShown && <Main />}
      {isShown2 && <Main2 />}
    </>
  );
}

export default App;
