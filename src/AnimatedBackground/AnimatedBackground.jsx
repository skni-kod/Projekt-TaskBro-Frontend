import styles from './AnimatedBackground.module.css'
import React, { useState, useEffect } from 'react'


function AnimatedBackground() {

    const [randomNumbers, setRandomNumbers] = useState([]);

    useEffect(() => {
        const generateRandomNumber = () => {
            return Math.floor((Math.random() * (40 - 10 + 1)) + 10);
        };
        const newRandomNumbers = Array.from({ length: 47 }, () => generateRandomNumber());
        setRandomNumbers(newRandomNumbers);
    }, []);
    

    
    return(
    <div className={styles.background}>
        <div className={styles.container}>
            <div className={styles.circle}>
            {randomNumbers.map((randomNumber, index) => (
                        <span key={index} style={{ '--i': randomNumber }}></span>
                    ))}
            </div>
        </div>
    </div>    
    );
}

export default AnimatedBackground