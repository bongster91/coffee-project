import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import cup from "../../images/Cup (1).png";
import JavaScriptLogo from "../../images/JavaScriptCoffeeTextLogo.png";
import "./NavBar.css";



export default function NavBar() {
    const  [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] =  useState(window.innerWidth)

        const toggleNav = () => {
            setToggleMenu(!toggleMenu)
        }

        useEffect(() => {
            const changeWidth = () => {
                setScreenWidth(window.innerWidth);
            }

            window.addEventListener('resize', changeWidth)

            // Cleaner Function
            return () => {
                window.removeEventListener('resize', changeWidth)
            }

        }, [])

        const styles = {
            width: "30px"
        }

        const imgStyle = {
            width: "100px",
            marginRight: "70px"
        }

    return (
        <nav>
            {(toggleMenu || screenWidth > 500) && (
                <ul className="navList">

                    <Link to="/">
                        <img className="nav-logo" style={imgStyle} src={JavaScriptLogo} alt='logo' />
                    </Link>

                    <li className="items">
                        <Link to='/coffees/new'>
                            DIY Coffee
                        </Link>
                    </li>

                    <li className="items">
                        <Link to="/coffees">
                            Collection
                        </Link>
                    </li>

                    <li className="items">
                        <Link to='/about'>
                            About
                        </Link>
                    </li>
            </ul>
            )}

                <button
                    className="btn"
                    onClick={toggleNav}>
                        <img style={styles} src={cup} alt='cup' />
                </button>
        </nav>
    )
}
