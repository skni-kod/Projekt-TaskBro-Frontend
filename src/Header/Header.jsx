import styles from './Header.module.css'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Header({onLogout}){
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        onLogout();
        navigate('/login');
    }

    return(
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
            <div className={styles.loginregistration}>
                <button className={styles.controlButtonLogout} onClick={handleLogout}>logout</button>
            </div>
        </div>
    );
}
export default Header;