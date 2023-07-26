import { useParams, Link } from "react-router-dom";
import "./Work.css";
import { useEffect } from "react";

import datas from "../../works.json";

function Work() {
    const { id } = useParams();
    const work = datas.find((data) => data.id === id);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, []);

    return (
        <main className="workPage">
            <h1>{work.title}</h1>
            <img src={work.cover} alt={work.title} />
            <ul className="tags">
                {work.tags.map((tags, index) => (
                    <li key={index}>{tags}</li>
                ))}
            </ul>
            {work.site && (
                <a className="linkWork" href={work.site}>
                    Voir le site
                </a>
            )}
            <a className="linkWork" href={work.github}>
                Voir le Github
            </a>
            <h2>Contexte</h2>
            <p>{work.contexte}</p>
            <h3>Problématique/Résolution</h3>
            <p>{work.problématique}</p>
            <h4>En détails</h4>
            <p>{work.details}</p>
            <Link className="backToPortfolio" to={"/portfolio/"}>
                <button>Retour au portfolio</button>
            </Link>
        </main>
    );
}

export default Work;
