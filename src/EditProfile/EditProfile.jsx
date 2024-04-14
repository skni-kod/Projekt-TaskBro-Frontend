import styles from './EditProfile.module.css'
import { useState, useEffect } from 'react'

function EditProfile({ onClose }){
    const[userData, setUserData] = useState({});
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
            const isOutside = !event.target.closest(`.${styles.formContainer}`);
            const isEditProfileItem = event.target.textContent === "Edit profile";
            if (isOutside && !isEditProfileItem) {
                onClose(); 
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [onClose]);
    
    return(
        <div className={styles.formContainer}>
            <form>
                <h1>Edit profile </h1>
                <div>
                    <label className={styles.label}>Edit password:</label>
                    <input  type="password" name="password"  value={userData.password || ''} onChange={handlePasswordChange}></input>
                </div>
                <div>
                    <button type="button" onClick={handleUpdate}>Update</button>
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