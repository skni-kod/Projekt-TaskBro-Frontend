import Login from "./Login/Login.jsx";
import Settings from "./Settings/Settings.jsx";
import Header from "./Header/Header.jsx";
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token){
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(true); // pamiętaj że tutaj ma być false true ustawiłem bo się login pojawaił jak settingsy robiłem
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('login');
  };

  return(
    <>
    
    {isLoggedIn ? <Header onLogout={handleLogout}/> : <Login onLogin={() => setIsLoggedIn(true)} />}

    </>
  );
}

export default App

