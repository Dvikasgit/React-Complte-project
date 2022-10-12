import { Routes ,Route } from 'react-router-dom';
import './App.css';
import Calculator from './Component/Calculator';
import Fetch from './Component/Fetch';
import Home from './Component/Home';
import Login from './Component/Login';
import Nav from './Component/Nav';
import Register from './Component/Register';
import ToDo from './Component/ToDo';

function App() {
  return (
   <>
   

<Nav/>
<Routes>

  <Route path="/home" element={<Home/>} ></Route>
  <Route path="/todo" element={<ToDo/>} ></Route>
  <Route path="/register" element={<Register/>} ></Route>
  <Route path="/login" element={<Login/>} ></Route>
  <Route path="register/login" element={<Login/>} ></Route>
  <Route path="/calculator" element={<Calculator/>} ></Route>
  <Route path="/fetch" element={<Fetch/>} ></Route>

</Routes>

{/* <Axios/> */}
   </>
  );
}

export default App;
