import "./About.css";
import Photo from "../../images/pfp.webp";

function About() {
    return (
        <section className="about">
            <h1>
                <span>01. </span>À propos
            </h1>
            <article className="aboutParagraph">
                <p>
                    Bonjour, je m’appelle Lucas et j’adore créer des sites
                    internet. Mon intérêt pour ce domaine s’est développé lors
                    de mon stage à Comme un Arbre! au cours duquel j’ai pu
                    découvrir le métier de développeur web. J’ai d’abord
                    commencé par faire un DUT TC mais rapidement je me suis
                    rendu compte que ce n’était pas dans les métiers du
                    marketing que je me voyais m’épanouir. J’ai alors décidé
                    d’arrêter ce cursus scolaire et me suis lancé dans
                    l’apprentissage du développement web en autodidacte puis
                    avec Openclassrooms pour consolider mes compétences et
                    découvrir de nouveaux langages.
                    <br />
                    <br />
                    Je suis actuellement à la recherche d'un emploi en tant que
                    développeur web frontend junior !
                    <br />
                    <br />
                    Voici quelques langages et logiciels avec lesquels j’ai
                    récemment travaillés :
                </p>
                <ul>
                    <li>JavaScript</li>
                    <li>Notion</li>
                    <li>MongoDB</li>
                    <li>React</li>
                    <li>Figma</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>Postman</li>
                </ul>

                <div>
                    <img src={Photo} alt="Lucas" />
                </div>
            </article>
        </section>
    );
}

export default About;