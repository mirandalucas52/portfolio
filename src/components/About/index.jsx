import "./About.css";
import Photo from "../../images/pfp.webp";
import { useInView } from "react-intersection-observer";

function About() {
    const [ref, inView] = useInView({
        triggerOnce: true, // Pour afficher le contenu une seule fois
        threshold: 0.1, // Définissez la proportion visible requise pour déclencher l'affichage
    });

    return (
        <section className="about" id="about">
            <article
                className={`aboutArticle ${inView ? "show" : ""}`}
                ref={ref}
            >
                <div className="flexAbout">
                    <h1>
                        <span>01. </span>À propos
                    </h1>
                    <div className="aboutFlex">
                        <p>
                            Bonjour, je m’appelle Lucas et j’adore créer des
                            sites internet.
                            <span>
                                {" "}
                                Mon intérêt pour ce domaine s’est développé{" "}
                            </span>
                            lors de mon stage à Comme un Arbre! au cours duquel
                            j’ai pu découvrir le métier de développeur web. J’ai
                            d’abord commencé par faire un DUT TC mais rapidement
                            je me suis rendu compte que ce n’était pas dans les
                            métiers du marketing que je me voyais m’épanouir.
                            J’ai alors décidé d’arrêter ce cursus scolaire et me
                            suis lancé dans
                            <span> l’apprentissage du développement web </span>
                            en autodidacte puis avec Openclassrooms pour
                            consolider mes compétences et découvrir de nouvelles
                            technos tels que
                            <span> React </span>ou encore
                            <span> MongoDB</span>.
                            <br />
                            <br />
                            Je suis actuellement à la recherche d'un emploi en
                            tant que{" "}
                            <span> développeur web frontend junior !</span>
                            <br />
                            <br />
                            Voici quelques langages et logiciels avec lesquels
                            j’ai récemment travaillés :
                        </p>
                        <ul>
                            <li>React</li>
                            <li>Javascript</li>
                            <li>MongoDB</li>
                            <li>Node.js</li>
                            <li>Figma</li>
                            <li>Notion</li>
                            <li>Express</li>
                            <li>Postman</li>
                        </ul>
                    </div>
                </div>
                <div className="imgWrap">
                    <img src={Photo} alt="Lucas" />
                </div>
            </article>
        </section>
    );
}

export default About;
