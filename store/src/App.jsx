import React, { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import SlideShow from "./Components/Slide/SlideShow";
import Provider from "./context/Provider";
import Section1 from "./Components/Sections/Section1";
import Section3 from "./Components/Sections/Section3";
import Footer from "./Components/Footer/Footer";
import CartMenu from "./Components/CartMenu/CartMenu";
import ScreenWarning from "./Components/ScreenWarning/ScreenWarning";

function App() {
  const [isScreenTooSmall, setIsScreenTooSmall] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenTooSmall(window.innerWidth <= 1220);
    };

    handleResize(); // verificar na montagem
    window.addEventListener("resize", handleResize); // escuta mudança

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isScreenTooSmall) return <ScreenWarning />;

  return (
    <Provider>
      <div className="Aplication">
        <div className="MenuCart_Suspended">
          <CartMenu />
        </div>
        <div className="Header">
          <Header />
        </div>
        <div className="Body">
          <SlideShow />
          <hr />
          <Section1 />
          <hr />
          <Section3 />
          <hr />
        </div>
        <div className="Footer">
          <Footer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
