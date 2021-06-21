import { BrowserRouter, Switch, Route } from "react-router-dom";
import '../styles/style.css'
import HomePage from './pages/HomePage'
import AboutMe from './pages/AboutMePage'
import Services from './pages/ServicesPage'
import Contact from './pages/ContactPage'


function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/aboutme" exact component={AboutMe} />
          <Route path="/services" exact component={Services} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
