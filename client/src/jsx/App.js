import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import WidthContext from './context/widthContext'
import getWidth from './utils/orientation'
import ScrollToTop from './utils/ScrollToTop'
import '../styles/style.css'
import HomePage from './pages/HomePage'
import AboutMePage from './pages/AboutMePage'
import ServicesPage from './pages/ServicesPage'
import ContactPage from './pages/ContactPage'


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
          <ScrollToTop />
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/aboutme" exact component={AboutMePage} />
              <Route path="/services" exact component={ServicesPage} />
              <Route path="/contact" exact component={ContactPage} />
            </Switch>
        </BrowserRouter>
      </WidthContext.Provider>
    </>
  );
}

export default App;
