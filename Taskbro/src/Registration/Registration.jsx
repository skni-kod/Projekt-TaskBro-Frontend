import styles from "./Registration.module.css";
import React, { useState } from "react";

function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    repeatpassword: ""
  });
  const [error, setError] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const responseData = await response.json();

      if (response.ok) {
        setRegistrationSuccess(true);
        console.log("Rejestracja udana!", responseData);
      } else {
        setError(responseData.error || "Wystąpił nieznany błąd");
      }
    } catch (error) {
      console.error("Wystąpił problem z rejestracją:", error.message);
      setError("Wystąpił problem z rejestracją. Spróbuj ponownie później.");
    }
  };

  return (
    <div className={styles.parent}>
      {registrationSuccess ? (
        <div className={styles.successMessage}>Rejestracja udana! Możesz teraz zalogować się na swoje konto.</div>
      ) : (
        <form className={styles.registration} onSubmit={handleSubmit}>
          <h1 className={styles.title}>Rejestracja</h1>
          <div className={styles.inputbox}>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="imie" />
          </div>
          <div className={styles.inputbox}>
            <input type="text" name="surname" value={formData.surname} onChange={handleChange} placeholder="nazwisko" />
          </div>
          <div className={styles.inputbox}>
            <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="email" />
          </div>
          <div className={styles.inputbox}>
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="haslo" />
          </div>
          <div className={styles.inputbox}>
            <input type="password" name="repeatpassword" value={formData.repeatpassword} onChange={handleChange} placeholder="powtórz haslo" />
          </div>
          
          <button type="submit">Zarejestruj</button>
          <div className={styles.error}>{error}</div>
        </form>
        
      )}
    </div>
  );
}

export default Registration;