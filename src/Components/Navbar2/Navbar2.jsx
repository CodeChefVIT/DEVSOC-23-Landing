import React from 'react'
import './Navbar2.css'
import { NavLink } from "react-router-dom"
import 'font-awesome/css/font-awesome.min.css';


export default function NavBar() {
    const [click, setClick] = React.useState(false);

    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);

    return (
        <div>
            <div className={click ? "main-container" : ""} onClick={() => Close()} />
            <nav className="navbar" onClick={e => e.stopPropagation()}>
                <div className="nav-container">
                    <NavLink exact to="/" className="nav-logo">
                        {/* <h1 className="h1" style={{ color: 'white' }}>
                            DEVSOC <span style={{ color: "#37ABBC" }}>‘22</span>
                        </h1> */}
                    </NavLink>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <a href="#about" className="nav-links"
                                // onClick={click ? handleClick : null}
                                activeClassName="active">
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#timeline" className="nav-links"
                                // onClick={click ? handleClick : null}
                                activeClassName="active">
                                Timeline
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#sponsors" className="nav-links"
                                // onClick={click ? handleClick : null}
                                activeClassName="active">
                                Sponsors
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="#faq" className="nav-links"
                                // onClick={click ? handleClick : null}
                                activeClassName="active">
                                FAQ's
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-links"
                                // onClick={click ? handleClick : null}
                                activeClassName="active">
                                Contact
                            </a>
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
                    </div>
                </div>
            </nav>
        </ div>
    );
}