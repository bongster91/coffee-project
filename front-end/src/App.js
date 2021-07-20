import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Index from "./Pages/Index";

import NavBar from "./Components/NavBar/NavBar";

function App() {
 return(
   <div className= "App">
     <Router>
      <NavBar/>
       <h1>Coffee App</h1>
       <Switch>
         <Route exact path="/">
           <Home/>
         </Route >
         <Route path="/products">
           <Index/>
         </Route>
       </Switch>
     </Router>

   </div>
 )
}

export default App;
