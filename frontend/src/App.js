import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Reg from './compo/Reg';
import Login from "./compo/Login";
function App() {

  
  return (
    <div className="App">
     <Router>
      <Routes>
      <Route path="/" exact Component={Login}></Route>
      <Route path="/reg" exact Component={Reg}></Route>
    </Routes>
    </Router>
 
       
       
    </div>
  );
}

export default App;
