import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div>
            <nav className="Nav">
                <h3>Logo</h3>
                <ul className="nav-links">
                    <Link to='/about'>
                        <li>About</li>
                    </Link>
                    <Link to='shop'>
                        <li>Shop</li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;
