
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import AdminDash from './pages/AdminDash';
import UserDash from './pages/UserDash';

import Booking from './pages/Booking';
import MyOrders from './pages/MyOrders';
import UserRoute from './PrivateRoutes/UserRoutes';
import Home from './pages/Home';



function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<Register/>}/>
          <Route path="/signin" element={<Login/>}/>
          
          <Route element={<UserRoute/>}>
        
          <Route path="/booking/:id" element={<Booking/>}/>
          <Route path="/orders" element={<MyOrders/>}/>
          <Route path="/user" element={<UserDash/>}/>
          </Route>
          
          <Route path="/admin" element={<AdminDash/>}/>
         

        </Routes>
    </div>
  );
}

export default App;
