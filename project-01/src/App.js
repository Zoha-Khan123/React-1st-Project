import About from "./About";
import "./App.css";
import Navbar, { Home } from "./Navbar";
import Protfolio from "./Protfolio";
import { useState } from "react";

function App() {
  
  let [active , ChangeTheActive] = useState("comp1")
  
  return (
    <div className="App">
      <Navbar changetheactive={ChangeTheActive}></Navbar >


      {active === "comp1" && <Home></Home>}
      {active === "comp2" &&  <About></About>}
      {active === "comp3" &&   <Protfolio></Protfolio>}


      
     
     
      
    </div>
  );
}

export default App;
