import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import WidthContext from './context/widthContext'
import getWidth from './utils/orientation'
import '../styles/style.css'
import HomePage from './pages/HomePage'
import AboutMe from './pages/AboutMePage'
import Services from './pages/ServicesPage'
import Contact from './pages/ContactPage'


function App() {
  const [width, setWidth] = useState(getWidth());

  const handleWidth = () => {
      setWidth(getWidth());
  };

  useEffect(() => {
      window.addEventListener('resize', handleWidth);
      return () => window.removeEventListener('resize', handleWidth);
  }, []);

  return (
    <>
      <WidthContext.Provider value={{width}}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/aboutme" exact component={AboutMe} />
            <Route path="/services" exact component={Services} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
        </BrowserRouter>
      </WidthContext.Provider>
    </>
  );
}

export default App;
