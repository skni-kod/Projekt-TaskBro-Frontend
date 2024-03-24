


function Header(){
    
    
    
    
    
    
    return(
        <div className="header">
            <img src="images/Logo_XD.png" alt="LOGO" id='logo'/>
            <p>template</p>
            <div className="controlButtonsContainer">
                <button className="controlButton">
                    Tasks
                </button>
                <button className="controlButton">
                    Schedule
                </button>
            </div>
            <div className="login-registration">
                <button className="controlButton">logout</button>
            </div>
        </div>
    );
}
export default Header;