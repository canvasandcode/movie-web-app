import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="rmdb-header">
            <div className ="rmdb-header-content">
                <img className="rmdb-logo" src="./images/ticket.svg" alt="rmdb-logo"/>
                <img className="rmdb-tmdb-logo" src="./images/tmdb_logo_wide.svg" alt="tmdb logo"/>
            </div>
        </div>
    )
}

export default Header;