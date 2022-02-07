import About from "./Component/About";
import Adminlogin from './Component/Adminlogin';
import Braches from "./Component/Braches";
import Contact from './Component/Contact';
import DashBoard from "./Component/DashBoard";
import Studentlogin from './Component/Studentlogin';
import {
  BrowserRouter,
  Route,
  
  Routes

} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<DashBoard/>}></Route>
      <Route path="/AdminLogin" element={<Adminlogin/>}></Route>
      <Route path="/StudentLogin" element={<Studentlogin/>}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/Braches" element={<Braches/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
