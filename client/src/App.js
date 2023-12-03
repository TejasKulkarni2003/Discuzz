import './App.css';
import Navbar from "./Componenets/Navbar.js"
import Home from "./Componenets/Home.js"
import PostsByCategory from "./Componenets/PostsByCategory.js"
import Login from "./Componenets/Login.js"
import Search from "./Componenets/Search.js"
import Register from "./Componenets/Register.js"
import ChangePassword from "./Componenets/ChangePassword.js"
import CreatePost from "./Componenets/CreatePost.js"
import UserProfile from "./Componenets/UserProfile.js"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react';
import { getAllPosts, loadUser } from './Actions/userActions';
import Profile from './Componenets/Profile.js';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
    dispatch(getAllPosts())
  }, [dispatch]);

  
  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <>
      <BrowserRouter>
        {isAuthenticated && <Navbar />}
        <Routes>

          <Route path="/" element={isAuthenticated ? <Home /> : <Login />} />
          <Route path="/posts/:category" element={isAuthenticated ? <PostsByCategory /> : <Login />} />
          <Route path="/login" element={isAuthenticated ? <Home /> :<Login />} />
          <Route path="/register" element={isAuthenticated ? <Home /> : <Register />} />
          <Route path="/resetpassword" element={<ChangePassword />} />
          <Route path="/user/:id" element={isAuthenticated ? <UserProfile /> : <Login/>} />
          <Route path="/me" element={isAuthenticated ? <Profile /> : <Login/>} />
          <Route path="/search" element={isAuthenticated ? <Search /> : <Login/>} />
          <Route path="/create" element={isAuthenticated ? <CreatePost /> : <Login/>} />

        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
