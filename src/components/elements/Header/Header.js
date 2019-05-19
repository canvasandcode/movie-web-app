import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="tmdb-header">
            <div className ="tmdb-header-content">
                <img className="tmdb-tmdb-logo" src="./images/tmdb_logo_wide.svg" alt="tmdb logo"/>
            </div>
        </div>
    )
}

export default Header;