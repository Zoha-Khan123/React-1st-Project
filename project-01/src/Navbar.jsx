import React from "react";
import { useState } from "react";

//First Export Navbar
const Navbar = ({changetheactive}) => {
  return (
    <div className="navbar">
      <p>
        <img src="image-06.png" alt="" className="image" />
      </p>
      <p onClick={() => changetheactive("comp1")}>Home</p>
      <p onClick={() => changetheactive("comp2")}>About</p>
      <p onClick={() => changetheactive("comp3")}>Projects</p>
    </div>
  );
};
export default Navbar;

//Second Export Home Page
export const Home = () => {
  const [theme, settheme] = useState("main-grey"); //color change karnay ka liya

  return (
    //color change karnay ka liya
    <div className={theme}>
      {settheme}
      <div className="homePage">
        <h1>I 🤍 Color</h1>
        <p className="para1">
          Color really isn't that difficult to get right,If you know where to
          start.
        </p>
        <p className="para2">
          Learn by doing and you will be a master in no time
        </p>

        <div className="buttons">
          <button className="button1" onClick={() => settheme("main-dark")}>
            Dark
          </button>
          <button className="button2" onClick={() => settheme("main-grey")}>
            Grey
          </button>
        </div>
      </div>
      <div className="image-01">
        <img className="image-setting-01" src="image-03.png" alt="" />
      </div>
    </div>
  );
};
