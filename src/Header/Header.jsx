import styles from './Header.module.css';
import { useEffect, useState } from 'react';
import Settings from '../Settings/Settings';
import { useNavigate } from 'react-router-dom';

function Header({onLogout, isDark, setIsDark}){

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        onLogout();
        navigate('/login');
    }

    return(
    <>
    <div className={styles.site} >
        <div className={styles.header}>
            <div>
                <img className={styles.logo} src="src/Header/images/Logo_XD.png" alt="LOGO" id='logo'/> 
            </div>
            
            <div className={styles.controlButtonsContainer}>
                <button className={styles.controlButton}>
                    Tasks
                </button>
                <button className={styles.controlButton}>
                    Schedule
                </button>
                <Settings isDark={isDark} setIsDark={setIsDark} onLogout={handleLogout}/>
            </div>
            
            
        </div>
    </div>
    </>
    );
}
export default Header;