import  React from "react";
import Header from "./Components/Header/Header";
import SlideShow from "./Components/Slide/SlideShow";
import Provider from "./context/Provider";
import Menu from "./Components/Menu/Menu";
import Section1 from "./Components/Sections/Section1";
import Section2 from "./Components/Sections/Section2";
import Section3 from "./Components/Sections/Section3";
import Footer from "./Components/Footer/Footer";
import CartMenu from "./Components/CartMenu/CartMenu";



function App() {

  return (
    <Provider>
    <div className="Aplication">
      <div className="MenuCart_Suspended">
<CartMenu/>
      </div>
    <div className="Header">
    <Header/> 
    <Menu/>
    </div>
    <div className="Body">
      <hr/>
    <SlideShow/>
    <hr/>
    <Section1/>
    <hr/>
   <Section2/>
   <hr/>
   <Section3/>
   <hr/>
    </div>
    <div className="Footer">
<Footer/>
    </div>
  </div>
  </Provider>
  );
}

export default App;
