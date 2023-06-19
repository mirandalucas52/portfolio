import "./Header.css";
import logo from "../../images/New Project.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

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
                <Link to="/portfolio/">
                    <img id="logo-image" src={logo} alt="logo" />
                </Link>
                <ul>
                    <li>
                        <HashLink to={"/portfolio/#about"}>
                            <span>01. </span>À propos
                        </HashLink>
                    </li>
                    <li>
                        <HashLink to={"/portfolio/#myProjects"}>
                            <span>02. </span>Mes projets
                        </HashLink>
                    </li>
                    <li>
                        <HashLink to={"/portfolio/#contact"}>
                            <span>03. </span>Me contacter
                        </HashLink>
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
                            <HashLink
                                to={"/portfolio/#about"}
                                onClick={closeMenu}
                            >
                                <span>01.</span>
                                <br />À propos
                            </HashLink>
                        </li>
                        <li>
                            <HashLink
                                to={"/portfolio/#myProjects"}
                                onClick={closeMenu}
                            >
                                <span>02.</span>
                                <br />
                                Mes projets
                            </HashLink>
                        </li>
                        <li>
                            <HashLink
                                to={"/portfolio/#contact"}
                                onClick={closeMenu}
                            >
                                <span>03.</span>
                                <br />
                                Me contacter
                            </HashLink>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
}

export default Header;
