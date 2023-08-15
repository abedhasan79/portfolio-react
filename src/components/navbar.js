import React, { useState, useEffect } from "react";
import './navbar.css';
import { useTransition, animated } from '@react-spring/web';

function Navbar() {


    const [menuOpen, setMenuOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            // console.log(currentScrollPos)
            if (currentScrollPos === 0) {
                setVisible(true); // Always show the navbar when at the top of the page
            } else if (prevScrollPos > currentScrollPos) {
                setVisible(true); // Show the navbar when scrolling up
            } else {
                setVisible(false); // Hide the navbar when scrolling down
            }

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const transitions = useTransition(menuOpen, {
        from: { opacity: 0, transform: 'translate3d(0,100%,0)' },
        enter: { opacity: 0.99, transform: 'translate3d(0,0%,0)' },
        leave: { opacity: 0, transform: 'translate3d(0,-50%,0)' },
    });



    return (
        <nav className={`navbar ${menuOpen ? "active" : ""}`} style={{ position:"sticky",top: visible ? "0" : "-100px" }}>
            <div className="navbar-logo"><span className="logo-A">A</span>B<span className="logo-A">E</span>D</div>
            <div className={`navbar-menu-toggle ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            {menuOpen
                ?
                <>
                    {transitions(
                        (styles, item) =>
                            item && (
                                <animated.ul className={`navbar-links`} style={styles}>
                                    <li className="navbar-item"><a href="#">Home</a></li>
                                    <li className="navbar-item"><a href="#">About</a></li>
                                    <li className="navbar-item"><a href="#">Projects</a></li>
                                    <li className="navbar-item"><a href="#">Contact</a></li>
                                </animated.ul>
                            )
                    )}
                </>
                :
                <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>

                    <li className="navbar-item"><a href="#">Home</a></li>
                    <li className="navbar-item"><a href="#">About</a></li>
                    <li className="navbar-item"><a href="#">Projects</a></li>
                    <li className="navbar-item"><a href="#">Contact</a></li>


                </ul>
            }


        </nav>
    );
}

export default Navbar;