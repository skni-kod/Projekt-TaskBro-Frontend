import styles from './Login.module.css'
import { FaUser, FaLock, FaLockOpen } from "react-icons/fa";
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedBackground from '../AnimatedBackground/AnimatedBackground';

function Login({ onLogin }){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
      e.preventDefault();

      try {
          const response = await fetch('http://localhost:5000/login', {
              method: 'POST',
              headers: {
                'Content-Type' : 'application/json',
              },
              body: JSON.stringify({
                email: email,
                password: password  
              }),
          });

          if(!response.ok){
            throw new Error('NIEPOPRAWNY EMAIL LUB HASŁO')
          }
          
          const data = await response.json();

          localStorage.setItem('token', data.token);

          onLogin();

          navigate('/home');

      } catch (error) {
          setError(error.message);
      }

      
  };
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }
    return(
      
      <>
      <AnimatedBackground />
        <div className={styles.parent}>
            
            <form className={styles.login} onSubmit={handleSubmit} >
                <h1 className={styles.title}>Welcome</h1>

                <div className={styles.inputbox}>
                    <input className={styles.inputy}
                    type="text" 
                    placeholder="email" 
                    required value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    maxLength={50}></input>
                    <FaUser className={styles.icon}/>
                </div>

                <div className={styles.inputbox}>
                    <input className={styles.inputy}
                    type={showPassword ? "text" : "password"} 
                    placeholder="password" 
                    required
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    maxLength={50}></input>

                    <p onClick={togglePasswordVisibility} className={styles.icon_lock}>
                      {showPassword ? <FaLockOpen/> : <FaLock/>}
                    
                    </p>
                </div>
                <div className={styles.error}>{error}</div>
                <div className={styles.forgot}>
                    <a href="/forgotPassword">Forgot password?</a>
                </div>

                <button className={styles.btNsubm} type="submit">Login</button>
                
                <p className={styles.signUpIn}>Sign up in <a href="/register">here</a></p>

            </form>

        </div>
      </>
    );
} 

export default Login