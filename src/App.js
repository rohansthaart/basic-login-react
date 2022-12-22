
import DashboradPage from "./pages/DashboradPage";
import { Route,BrowserRouter ,Routes} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import Register from "./pages/RegisterPage";

function App() {
   
  return (
    <BrowserRouter>
      <Routes>

        <Route exact path='/' element={<LoginPage/>}/>
        <Route exact path='/dashboard' element={<DashboradPage/>}/>
        <Route exact path='/register' element={<Register/>}/>
        
      </Routes>
    
    </BrowserRouter>
   
  );
}

export default App;
