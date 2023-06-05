import "./Home.css";
import Introduction from "../../components/Introduction/index";
import About from "../../components/About/index";
import MyProjects from "../../components/MyProjects/index";
import Contact from "../../components/Contact/index";

function Home() {
    return (
        <main>
            <Introduction />
            <About />
            <MyProjects />
            <Contact />
        </main>
    );
}

export default Home;
