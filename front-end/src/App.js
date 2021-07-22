import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Edit from './Pages/Edit';
import Coffees from './Pages/Coffees';
import New from './Pages/New';
import ShowSingle from "./Pages/ShowSingle";
import FourOFour from './Pages/FourOFour';
import About from './Pages/About';

import NavBar from "./Components/NavBar/NavBar";
import "./style.css"

function App() {
 return(
   <div className= "App">
     <Router>
      <NavBar/>

       <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path='/coffees/new'>
          <New />
        </Route>

        <Route path='/coffees/:id/edit'>
          <Edit />
        </Route>

        <Route path="/coffees/:id">
          <ShowSingle />
        </Route>

        <Route path="/coffees">
          <Coffees />
        </Route>

        <Route exact path='/about'>
          <About />
        </Route>

        <Route path='*'>
          <FourOFour />
        </Route>

       </Switch>

     </Router>
   </div>
 )
}

export default App;
