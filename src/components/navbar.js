import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'

class Navbar extends Component {

    render() {
        return (
            <div>
                <nav className="navbar">
                    <div className="container">
                        <ul className="nav">
                            <li className="nav-item d-inline-block">
                                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item d-inline-block">
                                <NavLink className="nav-link" to="/tabledata">Table data</NavLink>
                            </li>
                        </ul>

                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;




