import styles from './EditProfile.module.css'

function EditProfile(){

    return(
        <div className={styles.formContainer}>
            <form>
                <h1>Edit profile data</h1>
                <div>
                    <input  type="text" placeholder='email'></input>
                    
                    <input  type="password" placeholder='password'></input>
                </div>
                <div>
                    <button type='submit'>Update</button>
                </div>
            </form>
        </div>
    );
}

export default EditProfile