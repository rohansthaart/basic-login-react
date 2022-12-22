import AddUser from "./components/AddUser";
import DashboradPage from "./pages/DashboradPage";
import { Route,BrowserRouter ,Routes} from "react-router-dom";

import LoginPage from "./pages/LoginPage";

function App() {
   
  return (
    <BrowserRouter>
      <Routes>

        <Route exact path='/' element={<LoginPage/>}/>
        <Route exact path='/main' element={<DashboradPage/>}/>

        
      </Routes>
    
    </BrowserRouter>
   
  );
}

export default App;
