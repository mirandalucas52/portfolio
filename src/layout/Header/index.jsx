import "./Header.css";
import logo from "../../images/New Project.svg";

function Header() {
    return (
        <header>
            <nav className="navHeader">
                <img src={logo} alt="logo" />
                <ul>
                    <li>
                        <a href="none">
                            <span>01. </span>À propos
                        </a>
                    </li>
                    <li>
                        <a href="none">
                            <span>02. </span>Mes projets
                        </a>
                    </li>
                    <li>
                        <a href="none">
                            <span>03. </span>Me contacter
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
