import './App.css';
import Navbar from "./Componenets/Navbar.js"
import Home from "./Componenets/Home.js"
import Login from "./Componenets/Login.js"
import Register from "./Componenets/Register.js"
import ChangePassword from "./Componenets/ChangePassword.js"
import UserProfile from "./Componenets/UserProfile.js"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react';
import { loadUser } from './Actions/userActions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  
  const { isAuthenticated } = useSelector((state) => state.user);
  // console.log(isAuthenticated);

  return (
    <>
      <BrowserRouter>
        {isAuthenticated && <Navbar />}
        <Routes>

          <Route path="/" element={isAuthenticated ? <Home /> : <Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/resetpassword" element={<ChangePassword />} />
          <Route path="/user/:id" element={<UserProfile />} />

        </Routes>






      </BrowserRouter>

    </>
  );
}

export default App;
