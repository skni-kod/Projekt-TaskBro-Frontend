import styles from './Toggle.module.css'

export const Toggle = ({handleChange, isChecked}) => {
    return(
        <div className={styles.toggleContainer}>
            <input 
            type="checkbox"
            id="check"
            className={styles.toggle}
            onChange={handleChange}
            checked={isChecked}>
            </input>
            <label htmlFor="check">Dark Mode</label>
        </div>
    );
}