import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Pages/Home";


function App() {
 return(
   <div className= "App">
     <Router>
       {/* Nav Bar */}
       <h1>Coffee App</h1>
       <Switch>
         <Route exact path="/">
           <Home/>
         </Route>
       </Switch>
     </Router>

   </div>
 )
}

export default App;
