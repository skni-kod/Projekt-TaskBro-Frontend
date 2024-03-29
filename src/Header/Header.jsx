import styles from './Header.module.css'
import { useEffect, useState } from 'react';
import Settings from '../Settings/Settings';
import { useNavigate } from 'react-router-dom';

function Header({onLogout}){

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        onLogout();
        navigate('/login');
    }

    return(
        <>
        <div className={styles.header}>
            <img src="images/Logo_XD.png" alt="LOGO" id='logo'/>
            <p>template</p>
            <div className={styles.controlButtonsContainer}>
                <button className={styles.controlButton}>
                    Tasks
                </button>
                <button className={styles.controlButton}>
                    Schedule
                </button>
            </div>
            
             <Settings onLogout={handleLogout}/>
        </div>
    </>
    );
}
export default Header;