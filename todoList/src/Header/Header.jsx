import styles from './Header.module.css';
import { useEffect, useState } from 'react';
import Settings from '../Settings/Settings';
import { useNavigate } from 'react-router-dom';

function Header({onLogout, isDark, setIsDark,setIsTasksSelected, isTasksSelected}){

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        onLogout();
        navigate('/login');
    }

    return(
    <>
    
        <div className={styles.header}>
            <div>
                <img className={styles.logo} src="src/Header/images/Logo_XD.png" alt="LOGO" id='logo'/> 
            </div>
            
            <div className={styles.controlButtonsContainer}>
                <button className={styles.controlButton} onClick={()=>setIsTasksSelected(!isTasksSelected) }>
                    Tasks
                </button>
                <button className={styles.controlButton}>
                    Schedule
                </button>
                <Settings isDark={isDark} setIsDark={setIsDark} onLogout={handleLogout}/>
            </div>
            
            
        </div>

    </>
    );
}
export default Header;