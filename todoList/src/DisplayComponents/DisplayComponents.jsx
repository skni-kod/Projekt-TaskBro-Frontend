import Login from "../Login/Login";
import Header from "../Header/Header.jsx";
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from "use-local-storage";
import TaskList from "../TaskList.jsx";
import EditProfile from "../EditProfile/EditProfile.jsx";


function DisplayComponents() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [isTasksSelected, setIsTasksSelected] = useState(false);
    const navigate = useNavigate();
  
    const[isDark, setIsDark] = useLocalStorage("isDark", false);
  
  
    useEffect(() => {
      const token = localStorage.getItem('token');
      if(token){
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(true); 
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
        {isLoggedIn ? <Header isDark={isDark} setIsDark={setIsDark} onLogout={handleLogout} isTasksSelected={isTasksSelected} setIsTasksSelected={setIsTasksSelected}/> : <Login onLogin={() => setIsLoggedIn(true)} />}
        {isTasksSelected ? <TaskList></TaskList>:<></>}
        </div>
      </>
    );
  }
  
  export default DisplayComponents