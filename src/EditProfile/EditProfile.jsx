import styles from './EditProfile.module.css'
import { useState, useEffect } from 'react'
import { FaLock, FaLockOpen } from "react-icons/fa";

function EditProfile({ onClose }){
    const[userData, setUserData] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        const fetchData = async () =>{
            try{
                const response = await fetch('./dane.json');
                if(!response.ok){
                    throw new Error('Bład wczytania danych');
                }
                const data = await response.json();
                setUserData(data);
            }catch(error){
                console.error('Błąd: ', error);
            }
        };
        fetchData();
    }, []);
    

    const handlePasswordChange = (event) => {
        setUserData({...userData, password: event.target.value});
    }

    
    const handleUpdate = async () => {
        
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            const isInsideForm = event.target.closest(`.${styles.formContainer}`);
            const isEditProfileItem = event.target.textContent === "Edit profile";
            const isLockIconClicked = event.target.classList.contains(styles.icon_lock);
            const isLockIconOpen = event.target.classList.contains('FaLockOpen');
            const isLockIconClosed = event.target.classList.contains('FaLock');
        
            if (!isInsideForm && !isEditProfileItem && !isLockIconClicked && !isLockIconOpen && !isLockIconClosed) {
                onClose(); 
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [onClose]);
    
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      }

    return(
        <div className={styles.formContainer}>
            <form className={styles.formularz}>
                <h1 className={styles.title}>Edit profile </h1>
                <div>
                    <label className={styles.label}>Edit password:</label>
                    <input className={styles.haslo} type={showPassword ? "text" : "password"} name="password"  value={userData.password || ''} onChange={handlePasswordChange}></input>
                    <p onClick={(event) => {event.stopPropagation();
                     togglePasswordVisibility()}} className={styles.icon_lock}>{showPassword ? <FaLockOpen/> : <FaLock/>}</p>
                </div>
                <div>
                    <button className={styles.btnN} type="button" onClick={handleUpdate}>Update</button>
                </div>
            </form>
        </div>
    );
}

export default EditProfile

 /*
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch('/user');
                const data = await response.json();
                setUserData(data); 
            } catch (error) {
                console.error('Błąd podczas pobierania danych użytkownika', error);
            }
        };
        fetchUserData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevUserData => ({
            ...prevUserData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await fetch('api/user/update', {
                method:'POST',
                headers:{
                    'Content-Type':'aplication/json'
                },
                body:JSON.stringify(userData)
    
            });
            if(!response.ok){
                throw new Error('Błąd mordo podczas aktalizacji danych ')
            }
            alert('Dane użytkownika zostały zaktualizowane pomyślnie');
        }catch (error) {
            console.error('Błąd podczas wysyłania danych użytkownika do backendu', error);
            alert('Wystąpił błąd podczas aktualizacji danych użytkownika');
    };



    try {
            const response = await fetch('/endpoint', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(userData),
            });
            
            if (!response.ok) {
              throw new Error('Błąd podczas wysyłania danych na serwer');
            }
            
            console.log('Dane zostały pomyślnie wysłane na serwer');
          } catch (error) {
            console.error('Błąd:', error);
          }
    */