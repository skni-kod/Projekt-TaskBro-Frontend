import Login from "../Login/Login";
import Header from "../Header/Header.jsx";
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from "use-local-storage";
import EditProfile from "../EditProfile/EditProfile.jsx";


function DisplayComponents() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const navigate = useNavigate();
  
    const[isDark, setIsDark] = useLocalStorage("isDark", false);
  
  
    useEffect(() => {
      const token = localStorage.getItem('token');
      if(token){
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false); 
        navigate('/login');
      }
    }, [navigate]);
  
    const handleLogout = () => {
      localStorage.removeItem('token');
      setIsLoggedIn(false);
      navigate('/login');
    };
  
    return(
      <>
        
        <div data-theme={isDark ? "dark" : "light"}>
        {isLoggedIn ? <Header isDark={isDark} setIsDark={setIsDark} onLogout={handleLogout}/> : <Login onLogin={() => setIsLoggedIn(true)} />}
        
        </div>
      </>
    );
  }
  
  export default DisplayComponents