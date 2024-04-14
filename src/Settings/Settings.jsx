import styles from './Settings.module.css'
import { useState, useEffect } from 'react';
import { MdOutlinePowerSettingsNew } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoMenu } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { Toggle } from '../Toggle/Toggle';
import EditProfile from '../EditProfile/EditProfile';

function Settings({onLogout, isDark, setIsDark}) {

  const [openMenu, setOpenMenu] = useState(false);
  const [showEditProfile, setShowEditProfile] = useState(false);

  const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        onLogout();
        navigate('/login');
    }

  function DropdownItem(props){
    return(
      <li className={styles.dropdownItem} onClick={props.onClick}>
        <a className={styles.icon2}>{props.icon2}</a>
        <a className={styles.text}>{props.text}</a>
      </li>
    );
  }

  const handleEditProfileClick = () => {
    console.log(showEditProfile);
    setShowEditProfile(true);
    
  };

  return(
    <>
    <div className={styles.menuContainer}>
      <div className={styles.menu}>
        <span className={styles.paski} onClick={ () => setOpenMenu(!openMenu)}><IoMenu /></span>
      </div>
        
        <div className={`${styles.dropdownMenu} ${openMenu ? styles.active : styles.inactive}`}>
          <span className={styles.company}>TaskBro</span>
          <ul>
            <DropdownItem icon2={<CgProfile/>} text={"Edit profile"} onClick={handleEditProfileClick}/>
            <DropdownItem icon2={<MdOutlinePowerSettingsNew />} text = {"Log out"} onClick={handleLogout}/>
          </ul>
          <Toggle isChecked={isDark}
                  handleChange={() => setIsDark(!isDark)}/>
        </div>
        
    </div>
    {showEditProfile && <EditProfile/>}
    </>
  );
}

export default Settings