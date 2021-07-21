import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Home from "./Pages/Home";
import Index from "./Pages/Index";

import NavBar from "./Components/NavBar/NavBar";
import Coffees from "./Components/CoffeesComponent";

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

       <Route path="/coffees">
          <Coffees />
       </Route>

       {/* <Route path="/" />
         <Route path="/">
           <Home/>
         </Route >
         <Route path="/products">
           <Index/>
         </Route> */}
       </Switch>
     </Router>

   </div>
 )
}

export default App;
