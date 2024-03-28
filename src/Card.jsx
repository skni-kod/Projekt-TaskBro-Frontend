
function Card(){

    const styles = {
       
            fontCamily: "Arial, Helvetica, sansSerif",
            fontWeight: "bold",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            backgroundColor: "aqua",
        }

        const handleClick = () => console.log("OUCH!");

        
    return(
        <div className="card">
            <img className="card-image" src="https://prosettings.net/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=pad%2Cheight=675%2Cq=85%2Csharpen=2%2Cwidth=1200/wp-content/uploads/s1mple.png"alt="profile pic"></img>
            
            <h2 className="name">Przemysław Kubas</h2>

            <p className="tekst">Pofesional CS player</p>

            <button onClick={handleClick} style={styles} type="submit">Submit</button>
            {/*<img></img>
            <h1>Przemek Kubas</h1>
            <input></input>
            <h1>Fucik</h1>
            <input></input>
            <p>Zapomniałeś hasła?<a href="#">kliknij tutaj</a>  </p>
    */}
        </div>
    );
}

export default Card