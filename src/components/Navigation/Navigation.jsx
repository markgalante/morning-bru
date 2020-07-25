import React from 'react';
import "./navigation.styles.css";
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <div className="nav-bar">
            <ul >
                <li className="nav-bar-title"><span>Morning Bru! </span><img alt="Coffee!" className="nav-bar-image" src="https://img.icons8.com/officel/30/000000/coffee-pot.png" /></li>
            </ul>

            <nav className="nav">
                <ul className="nav-items">
                    <li className="nav-item"><Link to="/">News</Link></li>
                    <li className="nav-item"><Link to="/jokes">Jokes</Link></li>
                    <li className="nav-item"><Link to="/covid">COVID-19</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation; 