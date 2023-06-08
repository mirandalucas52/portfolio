import "./Home.css";
import Introduction from "../../components/Introduction/index";
import About from "../../components/About/index";
import MyProjects from "../../components/MyProjects/index";

function Home() {
    return (
        <main>
            <Introduction />
            <About />
            <MyProjects />
        </main>
    );
}

export default Home;
