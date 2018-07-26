import React from "react";

const Header = () => {
    return(
        <nav style={{display: 'flex', justifyContent: 'flex-end', width: '100%', height: '50px', backgroundColor: 'rgb(0,46,59)', color: 'white'}}>
            <p className="dim" style={{padding: '0px 15px 0px 15px'}}>Search</p>
            <p className="dim" style={{padding: '0px 15px 0px 15px'}}>Upload</p>
            <p className="dim" style={{padding: '0px 15px 0px 15px'}}>Sign out</p>
        </nav>  
    );

}

export default Header;