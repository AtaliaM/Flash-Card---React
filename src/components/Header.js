import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


class Header extends React.Component {



    render() {
        return (
            <div className="header-container" style={{width:"100%"}}>
                <button><Link to= "/">Home</Link></button>
                <button><Link to="/card-manager/">Manage your cards</Link></button>
                <button><Link to="/flashcards/">Start Practicing</Link></button>
            </div>
        )
    }
}

export default Header;