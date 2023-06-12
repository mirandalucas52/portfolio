import "./Header.css";
import logo from "../../images/New Project.svg";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
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
            </nav>
        </header>
    );
}

export default Header;
