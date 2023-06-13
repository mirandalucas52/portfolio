import "./Header.css";
import logo from "../../images/New Project.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        window.onscroll = function () {
            scrollRotate();
        };
    }, []);

    function scrollRotate() {
        const image = document.getElementById("logo-image");
        image.style.transform = "rotate(" + window.scrollY / 1.7 + "deg)";
    }

    return (
        <header>
            <nav className="navHeader">
                <Link to="/">
                    <img id="logo-image" src={logo} alt="logo" />
                </Link>
                <ul>
                    <li>
                        <a href="#about">
                            <span>01. </span>À propos
                        </a>
                    </li>
                    <li>
                        <a href="#myProjects">
                            <span>02. </span>Mes projets
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            <span>03. </span>Me contacter
                        </a>
                    </li>
                </ul>
                <div
                    className={`burgerMenu ${isOpen ? "cross" : ""}`}
                    onClick={handleToggle}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
            {isOpen && (
                <nav className="menuMobile">
                    <ul>
                        <li>
                            <a href="#about" onClick={closeMenu}>
                                <span>01.</span>
                                <br />À propos
                            </a>
                        </li>
                        <li>
                            <a href="#myProjects" onClick={closeMenu}>
                                <span>02.</span>
                                <br />
                                Mes projets
                            </a>
                        </li>
                        <li>
                            <a href="#contact" onClick={closeMenu}>
                                <span>03.</span>
                                <br />
                                Me contacter
                            </a>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
}

export default Header;
