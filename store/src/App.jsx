import React from "react";
import Header from "./Components/Header/Header";
import SlideShow from "./Components/Slide/SlideShow";
import Products from "./Components/Products/Products";
import Provider from "./context/Provider";
import Menu from "./Components/Menu/Menu";

function App() {
  return (
    <Provider>
    <div className="Aplication">
    <div className="Header">
    <Header/> 
    <Menu/>
    <hr/>
    </div>
    <div className="Body">
      <hr/>
    <SlideShow/>
    <hr/>
    <Products/>
    </div>
  </div>
  </Provider>
  );
}

export default App;
