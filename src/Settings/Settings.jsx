import styles from './Settings.module.css'
import { useState } from 'react';
import { MdOutlinePowerSettingsNew } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoMenu } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

function Settings({onLogout}) {

  const [openMenu, setOpenMenu] = useState(false);

  const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        onLogout();
        navigate('/login');
    }

  function DropdownItem(props){
    return(
      <li className={styles.dropdownItem}>
        <a className={styles.icon2}>{props.icon2}</a>
        <a className={styles.text}>{props.text}</a>
      </li>
    );
  }
  return(
    <div className={styles.menuContainer}>
      <div className={styles.menu}>
        <span className={styles.paski} onClick={ () => setOpenMenu(!openMenu)}><IoMenu /></span>
      </div>
        
        <div className={`${styles.dropdownMenu} ${openMenu ? styles.active : styles.inactive}`}>
          <h3>User<br/><span>TaskBro</span></h3>
          <ul>
            <DropdownItem icon2={<CgProfile/>} text={"Edit profile"}/>
            <DropdownItem icon2={<MdOutlinePowerSettingsNew />} text = {"Log out"} onClick={handleLogout}/>
          </ul>
        </div>
      
    </div>
  );
}

export default Settings